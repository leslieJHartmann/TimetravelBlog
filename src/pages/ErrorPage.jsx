import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/error.css";
import Glitch from "../components/Glitch";

function ErrorPage() {
  const ambientRef = useRef(null);

  const navigate = useNavigate();

  // low volume ambient sound
  useEffect(() => {
    const audio = new Audio("/sfx/ambientLoop.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(() => {});
    ambientRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="error">
      <Glitch auto soundEnabled>
        <div className="errorFrame">
          <img src="/src/assets/Logo.svg" className="symbol"></img>

          <h2 className="errorHeading">ERROR</h2>
          <h3 className="errorHeading">
            Content has been restricted. Go home.
          </h3>
        </div>
      </Glitch>
      <button className="errorButton" onClick={() => navigate("/home")}>
        RETURN HOME
      </button>
    </div>
  );
}

export default ErrorPage;
