// inserts data from BlogLayout into the card

import Glitch from "./Glitch";

function BlogEntry({ title, description, date, author }) {
  return (
    <div>
      <div className="blogcard">
        <img
          src="/images/thumbnail1.png"
          alt="Hand on keyboard"
          className="thumbnailimg"
        />
        <div className="innerblogcard">
          <Glitch auto>
            <h2 className="blogEntryTitle">{title}</h2>
          </Glitch>
          <h5 className="blogEntrySub">
            {date}
            <br></br>
            {author}
          </h5>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogEntry;
