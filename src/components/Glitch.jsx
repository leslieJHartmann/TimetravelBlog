import { useEffect, useState } from "react";

function Glitch({ children, auto = false, burstOnHover = false }) {
  const [glitching, setGlitching] = useState(false);

  // Trigger glitch burst
  const triggerGlitch = () => {
    setGlitching(true);
  };

  // random timer
  useEffect(() => {
    if (!auto) return;

    let timeout;

    const min = 2000; // 2 seconds
    const max = 10000; // 10 seconds

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

  // Animation end handler
  const handleAnimationEnd = () => {
    setGlitching(false);
  };

  return (
    <div
      className={`glitch-container ${glitching ? "glitch-active" : ""}`}
      onMouseEnter={() => {
        if (!burstOnHover) return;
        setGlitching(true);
      }}
    >
      <div className="glitch-content">{children}</div>

      <div
        className="glitch-overlay slice slice-1"
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </div>

      <div
        className="glitch-overlay slice slice-2"
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </div>

      <div
        className="glitch-overlay slice slice-3"
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </div>
    </div>
  );
}

export default Glitch;
