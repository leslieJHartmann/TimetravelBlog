import { Link } from "react-router-dom";
import Glitch from "./Glitch.jsx";
import Logo from "/src/assets/Logo_noGlitch.svg?react";

function Header() {
  return (
    <div className="header">
      <Glitch auto burstOnHover soundEnabled soundSrc="/sfx/tinyFlicker.wav">
        <Link to="/error" className="clickable">
          <Logo className="headerLogo" />
        </Link>
      </Glitch>
      <h2>
        <Glitch auto>TEA & TIME</Glitch>
      </h2>
    </div>
  );
}

export default Header;
