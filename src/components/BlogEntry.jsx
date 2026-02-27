function BlogEntry({ title, description, date }) {
  return (
    <div className="blogcard">
      <div className="innerblogcard">
        <img
          src="/images/thumbnail1.png"
          alt="Hand on keyboard"
          className="thumbnailimg"
        />
        <h2>{title}</h2>
        <h5>
          {description}, {date}
        </h5>

        <p>Observations of a dying world.</p>
        <p>
          They used to tell stories about humanity’s end. Grand catastrophes,
          explosives, screams. Turns out real death creeps in more silently.
          There was no grand scheme, no villain for us to stop. By the time they
          realised, it was already too late. So here we are now...
        </p>
      </div>
    </div>
  );
}

export default BlogEntry;
