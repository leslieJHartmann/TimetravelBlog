import Glitch from "./Glitch.jsx";
import Logo from "/src/assets/Logo_noGlitch.svg?react";

function Header() {
  return (
    <div className="header">
      <Glitch auto burstOnHover sound>
        <Logo className="headerLogo" />
      </Glitch>
      <h2>
        <Glitch auto>TEA & TIME</Glitch>
      </h2>
    </div>
  );
}

export default Header;
