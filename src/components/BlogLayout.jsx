import BlogEntry from "./BlogEntry";
import Sidebar from "./Sidebar";

function BlogLayout() {
  return (
    <div className="row">
      <div className="leftcolumn">
        <BlogEntry
          title="TITLE HEADING"
          description="Title description"
          date="Dec 7, 2017"
        />

        <BlogEntry
          title="TITLE HEADING"
          description="Title description"
          date="Sep 2, 2017"
        />
      </div>

      <Sidebar />
    </div>
  );
}

export default BlogLayout;
