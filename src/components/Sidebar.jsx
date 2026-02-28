import Glitch from "./Glitch";
import Logo from "/src/assets/Logo.svg?react";

function Sidebar() {
  return (
    <div className="rightcolumn">
      <div className="sideCard">
        <h2>[ DATA NOT FOUND ]</h2>
        <div>
          <Glitch auto>
            <Logo className="sidebarImage"></Logo>
          </Glitch>
        </div>
        <p>Welcome, [ User Unknown ]</p>
      </div>
    </div>
  );
}

export default Sidebar;
