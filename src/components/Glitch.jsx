import { useEffect, useState, useRef } from "react";

function Glitch({
  children,
  auto = false,
  burstOnHover = false,
  sound = false, // enable / disable sound
}) {
  const [glitching, setGlitching] = useState(false);
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  //sound
  const playSound = () => {
    if (!sound) return;

    const a = audioRef.current;
    if (!a) return;

    try {
      // If already playing, fully stop first
      a.pause();
      a.currentTime = 0;

      a.volume = 0.7;

      const playPromise = a.play();

      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Playback failed:", err);
        });
      }
    } catch (err) {
      console.log("Audio error:", err);
    }
  };

  const [audioUnlocked, setAudioUnlocked] = useState(false);

  useEffect(() => {
    const unlock = () => {
      if (!audioRef.current) return;

      audioRef.current.volume = 0;
      audioRef.current
        .play()
        .then(() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setAudioUnlocked(true);
        })
        .catch(() => {
          console.log("Audio unlock failed:", err);
        });

      window.removeEventListener("click", unlock);
    };

    window.addEventListener("click", unlock);

    return () => window.removeEventListener("click", unlock);
  }, []);

  // Trigger Glitch
  const triggerGlitch = () => {
    setGlitching(true);
    playSound();
  };

  const stopGlitch = () => {
    setGlitching(false);
  };

  // Random Auto Timer

  useEffect(() => {
    if (!auto) return;

    let timeout;

    const min = 2000;
    const max = 10000;

    const scheduleNext = () => {
      const delay = Math.random() * (max - min) + min;

      timeout = setTimeout(() => {
        triggerGlitch();
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => clearTimeout(timeout);
  }, [auto]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className={`glitch-container 
        ${glitching ? "glitch-active" : ""} 
        ${burstOnHover ? "hover-enabled" : ""}`}
      onMouseEnter={() => {
        if (!burstOnHover) return;
        triggerGlitch();
      }}
    >
      <div className="glitch-content">{children}</div>
      <div className="glitch-overlay slice-1" onAnimationEnd={stopGlitch}>
        {children}
      </div>
      <div className="glitch-overlay slice-2" onAnimationEnd={stopGlitch}>
        {children}
      </div>
      <div className="glitch-overlay slice-3" onAnimationEnd={stopGlitch}>
        {children}
      </div>
      {sound && <audio ref={audioRef} src="/sfx/glitch.mp3" preload="auto" />}
    </div>
  );
}

export default Glitch;
