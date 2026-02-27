import BlogEntry from "./BlogEntry";
import Sidebar from "./Sidebar";

function BlogLayout() {
  return (
    <div className="row">
      <div className="leftcolumn">
        <BlogEntry
          title="Goodbye World"
          date="14.08.2229"
          author="P4r4D0x"
          description={
            "Observations of a dying world. They used to tell stories about humanity’s end. Grand catastrophes, explosives, screams. Turns out real death creeps in more silently. There was no grand scheme, no villain for us to stop. By the time they realised, it was already too late. So here we are now..."
          }
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
