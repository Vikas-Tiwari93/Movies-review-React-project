export default function DetailsCard({
  time,
  rating,
  name,
  postersrc,
  overview,
  mainimg,
  genres,
  release,
}) {
  return (
    <div className="detailscardroot">
      <div
        className="detailscard"
        style={{
          backgroundImage: ` url(https://image.tmdb.org/t/p/w500${postersrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "250%",
        }}
      >
        <div className="textdetails">
          <div className="toptext">
            <div className="toptext-img">
              <img src={`https://image.tmdb.org/t/p/w500${mainimg}`} alt="" />
            </div>
            <div className="moviedetails">
              <div>{name}</div>
              <div>Rating:{rating}</div>
              <div>
                <div>{time} min</div>
                <span className="genres">
                  {genres.map((elm) => {
                    return <span key={elm.id}>{elm.name},</span>;
                  })}
                </span>
              </div>
              <div>Relase Date:{release}</div>
            </div>
          </div>
          <div className="bottomtext">
            <div className="overview">Overview</div>
            <div className="overviewtext">{overview}</div>
          </div>
        </div>
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w500${postersrc}`} alt="" />
        </div>
      </div>
    </div>
  );
}
