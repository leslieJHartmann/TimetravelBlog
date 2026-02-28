import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/boot.css";
import Glitch from "../components/Glitch";

export default function Boot() {
  const navigate = useNavigate();

  // ACCESS PASSWORD
  const PASSWORD = "chronos";
  const [failCount, setFailCount] = useState(0); // for wrong password enter

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

  const playErrorSound = () => {
    const sfx = new Audio("/sfx/error.wav");
    sfx.volume = 0.7;
    sfx.play().catch(() => {});
  };

  const playAccessSound = () => {
    const sfx = new Audio("/sfx/unlockSound.wav");
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

  // password input
  const submit = () => {
    setError("");

    if (password.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      playAccessSound();
      navigate("/home", { replace: true }); // navigate to main page

      return;
    }

    // increase fail count
    setFailCount((prev) => {
      const next = prev + 1;
      setError(hintFor(next)); // show hint based on new count
      return next;
    });

    playErrorSound();
    setPassword("");
  };

  // password hints
  const hintFor = (n) => {
    if (n < 3) return "ACCESS DENIED";
    if (n === 3) return "LEAVE.";
    if (n === 4) return "LEAVE..";
    if (n === 5) return "LEAVE...";
    if (n < 8) return "No?";
    if (n < 10) return "[DATA CORRUPTED]";
    if (n < 11) return "Another curious one, are you?";
    if (n === 11) return "What's the key...?";
    if (n === 12) return "TIME.";
    if (n === 13) return "TIME..";
    if (n === 14) return "TIME...";
    if (n === 15) return "Ancient.";
    if (n === 16) return "Ancient. Forgotten.";
    if (n < 19) return "Ancient. Forgotten. [DATA NOT FOUND]";

    return "01100011011010000111001001101111011011100110111101110011";
  };

  return (
    <div className="boot">
      <Glitch auto soundEnabled soundSrc="/sfx/tinyFlicker.wav">
        <div className="outerBootFrame">
          <div className="bootFrame">
            <div className="scanlines" />
            <Glitch auto>
              <div className="bootHeader">INITIALIZING</div>

              <div className="bootText">
                {lines.slice(0, shown).map((l, i) => (
                  <div key={i} className="bootLine">
                    <span className="prompt">▶</span> {l}
                  </div>
                ))}

                {!done ? (
                  <div className="cursorRow">
                    <span className="prompt">▶</span>{" "}
                    <span className="cursor" />
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
                    {error}
                    <span className="attempts">
                      {" "}
                      ({failCount} failed attempt{failCount === 1 ? "" : "s"})
                    </span>
                  </div>
                )}
              </div>
            </Glitch>

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
