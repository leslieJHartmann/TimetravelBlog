function BlogEntry({ title, description, date }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h5>
        {description}, {date}
      </h5>
      <div className="fakeimg" style={{ height: "200px" }}>
        Image
      </div>
      <p>Some text..</p>
      <p>
        Sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>
    </div>
  );
}

export default BlogEntry;
