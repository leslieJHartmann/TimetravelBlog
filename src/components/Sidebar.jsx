import Logo from "./src/assets/Logo.svg?react";

function Sidebar() {
  return (
    <div className="rightcolumn">
      <div className="sideCard">
        <h2>[ DATA NOT FOUND ]</h2>
        <p>Welcome, [ User Unknown ]</p>
        <div>
          <Logo></Logo>
        </div>
        <br />
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
      </div>
    </div>
  );
}

export default Sidebar;
