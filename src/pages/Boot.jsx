import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/boot.css";

export default function Boot() {
  const navigate = useNavigate();

  const lines = useMemo(
    () => [
      "Anomaly v13.8.1",
      "Checking memory... OK",
      "Calibrating... Complete",
      "Decrypting fragments... OK",
      "Synchronizing timelines... Complete",
      "Boot sequence complete.",
      "Awaiting input...",
    ],
    [],
  );

  const [shown, setShown] = useState(0);
  const progress = Math.min(
    100,
    Math.round((shown / (lines.length + 2)) * 100),
  );

  useEffect(() => {
    const t = setInterval(() => setShown((s) => s + 1), 300);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (shown >= lines.length + 2) {
      const t = setTimeout(() => navigate("/blog", { replace: true }), 600);
      return () => clearTimeout(t);
    }
  }, [shown, lines.length, navigate]);

  return (
    <div className="boot">
      <div className="outerBootFrame">
        <div className="bootFrame">
          <div className="scanlines" />
          <div className="bootHeader">INITIALIZING</div>

          <div className="bootText">
            {lines.slice(0, Math.min(shown, lines.length)).map((l, i) => (
              <div key={i} className="bootLine">
                <span className="prompt">▶</span> {l}
              </div>
            ))}
            <div className="cursorRow">
              <span className="prompt">▶</span> <span className="cursor" />
            </div>
          </div>

          <div className="bootBar">
            <div className="bootBarFill" style={{ width: `${progress}%` }} />
          </div>
          <div className="bootFooter">{progress}%</div>
        </div>
      </div>
    </div>
  );
}
