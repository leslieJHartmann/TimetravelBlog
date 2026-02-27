import BlogEntry from "./BlogEntry";
import Sidebar from "./Sidebar";

function BlogLayout() {
  return (
    <div className="row">
      <div className="leftcolumn">
        <BlogEntry
          title="GOODBYE WORLD."
          date="14.08.2229"
          author="P4r4D0x"
          description={
            "Observations of a dying world. They used to tell stories about humanity’s end. Grand catastrophes, explosives, screams. Turns out real death creeps in more silently. There was no grand scheme, no villain for us to stop. By the time they realised, it was already too late. So here we are now..."
          }
        />

        <BlogEntry
          title="TITLE HEADING"
          date="28.01.2230"
          author="P4r4D0x"
          description="Gotta admit... I thought it was beyond me to be surprised anymore.
Or maybe I’m hallucinating. It beats staring into space, so we’re investigating. This... Anomaly. Thought time weirdness was a sci-fi thing. People made it up.
Well, if you’re reading this, I guess that can’t be true."
        />
      </div>

      <Sidebar />
    </div>
  );
}

export default BlogLayout;
