import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/boot.css";
import Glitch from "../components/Glitch";

export default function Boot() {
  const navigate = useNavigate();

  // ACCESS PASSWORD
  const PASSWORD = "chronos";

  const lines = useMemo(
    () => [
      "Anomaly v13.8.1",
      "Checking memory... OK",
      "Calibrating... Complete",
      "Decrypting fragments... OK",
      "Synchronizing timelines... Complete",
      "Boot sequence complete.",
      "Verifying User...",
    ],
    [],
  );

  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const playDeniedSound = () => {
    const sfx = new Audio("/sfx/access-denied.mp3");
    sfx.volume = 0.7;
    sfx.play().catch(() => {});
  };

  // Boot line typing
  useEffect(() => {
    if (done) return;

    const t = setInterval(() => {
      setShown((s) => {
        const next = s + 1;
        if (next >= lines.length) {
          clearInterval(t);
          setDone(true);
        }
        return next;
      });
    }, 300);

    return () => clearInterval(t);
  }, [done, lines.length]);

  const progress = Math.min(100, Math.round((shown / lines.length) * 100));

  const submit = () => {
    setError("");

    if (password.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      sessionStorage.setItem("tt_unlocked", "1");
      navigate("/home", { replace: true });
      return;
    }
    {
      sound && <audio ref={audioRef} src="/sfx/glitch.mp3" preload="auto" />;
    }

    setError("ACCESS DENIED");
    setPassword("");
  };

  return (
    <div className="boot">
      <Glitch auto>
        <div className="outerBootFrame">
          <div className="bootFrame">
            <div className="scanlines" />
            <div className="bootHeader">INITIALIZING</div>

            <div className="bootText">
              {lines.slice(0, shown).map((l, i) => (
                <div key={i} className="bootLine">
                  <span className="prompt">▶</span> {l}
                </div>
              ))}

              {!done ? (
                <div className="cursorRow">
                  <span className="prompt">▶</span> <span className="cursor" />
                </div>
              ) : (
                <div className="loginRow">
                  <span className="prompt">▶</span>
                  <span className="label"> KEY: </span>
                  <input
                    className="bootInput"
                    type="password"
                    value={password}
                    autoFocus
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") submit();
                    }}
                  />
                </div>
              )}

              {error && (
                <div className="bootError">
                  <Glitch auto burstOnHover sound>
                    {error}
                  </Glitch>
                </div>
              )}
            </div>

            <div className="bootBar">
              <div className="bootBarFill" style={{ width: `${progress}%` }} />
            </div>
            <div className="bootFooter">{progress}%</div>
          </div>
        </div>
      </Glitch>
    </div>
  );
}
