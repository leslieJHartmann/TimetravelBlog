// inserts data from BlogLayout into the card

import Glitch from "./Glitch";

function BlogEntry({ title, description, date, author }) {
  return (
    <div className="blogcard">
      <img
        src="/images/thumbnail1.png"
        alt="Hand on keyboard"
        className="thumbnailimg"
      />

      <div className="innerblogcard">
        <div className="entryHeader">
          <Glitch burstOnHover sound>
            <h2 className="blogEntryTitle">{title}</h2>
          </Glitch>

          <h5 className="blogEntrySub">
            {date}
            <br />
            {author}
          </h5>
        </div>

        <p className="blogEntryDesc">{description}</p>
      </div>
    </div>
  );
}

export default BlogEntry;
