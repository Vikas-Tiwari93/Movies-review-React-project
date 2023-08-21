export default function Cardone({ imgId, name, ratings }) {
  return (
    <div className="cardcrew">
      {imgId === "null" ? (
        <img className="no-image" src="./images/no-image.png" alt="" />
      ) : (
        <img src={`https://image.tmdb.org/t/p/w500${imgId}`} alt="" />
      )}

      <div className="name">{name}</div>
      <div className="ratings">
        Ratings: <span>{ratings}</span>
      </div>
    </div>
  );
}
