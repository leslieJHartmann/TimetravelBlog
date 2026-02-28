import Glitch from "./Glitch.jsx";

function Header() {
  return (
    <div className="header">
      {" "}
      <Glitch auto burstOnHover sound>
        <img
          className="headerLogo"
          src="Logo_noGlitch.svg"
          alt="Logo"
        ></img>{" "}
      </Glitch>
      <h2>
        <Glitch auto>TEA & TIME</Glitch>
      </h2>
    </div>
  );
}

export default Header;
