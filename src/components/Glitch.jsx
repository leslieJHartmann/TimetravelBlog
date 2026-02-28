import { useEffect, useRef, useState } from "react";

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function Glitch({
  children,
  auto = false,
  burstOnHover = false,

  soundEnabled = false,
  soundSrc = "/sfx/glitch.mp3", // default sfx
  soundList = null, // ["/sfx/g1.mp3", "/sfx/g2.mp3"]
}) {
  const [glitching, setGlitching] = useState(false);

  const playSound = () => {
    if (!soundEnabled) return;

    const list =
      Array.isArray(soundList) && soundList.length ? soundList : null;
    const src = list ? pickRandom(list) : soundSrc;
    if (!src) return;

    const sfx = new Audio(src);

    sfx.play().catch(() => {});
  };

  const triggerGlitch = () => {
    setGlitching(true);
    playSound();
  };

  const stopGlitch = () => setGlitching(false);

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

  return (
    <div
      className={`glitch-container ${glitching ? "glitch-active" : ""} ${
        burstOnHover ? "hover-enabled" : ""
      }`}
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
    </div>
  );
}

export default Glitch;
