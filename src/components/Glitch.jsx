import { useEffect, useState } from "react";

function Glitch({ children, auto = false, burstOnHover = false }) {
  const [glitching, setGlitching] = useState(false);

  // Random auto glitch bursts
  useEffect(() => {
    if (!auto) return;

    const trigger = () => {
      setGlitching(true);
    };

    const interval = setInterval(
      () => {
        trigger();
      },
      Math.random() * 60000 + 4000,
    );

    return () => clearInterval(interval);
  }, [auto]);

  // Animation end handler (important!)
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
