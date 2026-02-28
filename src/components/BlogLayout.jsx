import BlogEntry from "./BlogEntry";
import Sidebar from "./Sidebar";

function BlogLayout() {
  return (
    <div className="row">
      <div className="leftcolumn">
        <BlogEntry
          title="Goodbye World."
          date="14.08.2229"
          author="P4r4D0x"
          description={
            "Observations of a dying world. They used to tell stories about humanity’s end. Grand catastrophes, explosives, screams. Turns out real death creeps in more silently. There was no grand scheme, no villain for us to stop. By the time they realised, it was already too late. So here we are now..."
          }
        />

        <BlogEntry
          title="Discovery."
          date="28.01.2230"
          author="P4r4D0x"
          description="Gotta admit... I thought it was beyond me to be surprised anymore.
                      Or maybe I’m hallucinating. It beats staring into space, so we’re investigating. This... Anomaly. Thought time weirdness was a sci-fi thing. People made it up.
                      Well, if you’re reading this, I guess that can’t be true."
        />

        <BlogEntry
          title="ERROR. Entry not found."
          date="Data not found"
          author="Data not found"
          description="01000110011100100110000101100111011011010110010101101110011101000010111000100000010011000110111101110011011101000010111000100000010001100110111101110101011011100110010000101110001000000101000001100001011100100110000101100100011011110111100000101110000010100000101001011011010000010100001101000011010001010101001101010011001000000100010001000101010011100100100101000101010001000101110100001010"
        />
      </div>

      <Sidebar />
    </div>
  );
}

export default BlogLayout;
