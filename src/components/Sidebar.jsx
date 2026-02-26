function Sidebar() {
  return (
    <div className="rightcolumn">
      <div className="card">
        <h2>About Me</h2>
        <div className="fakeimg" style={{ height: "100px" }}>
          Image
        </div>
        <p>Some text about me...</p>
      </div>

      <div className="card">
        <h3>Popular Post</h3>
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
      </div>

      <div className="card">
        <h3>Follow Me</h3>
        <p>Some text..</p>
      </div>
    </div>
  );
}

export default Sidebar;
