export default function Cardcrew({ imgId, name, character }) {
  return (
    <div className="cardcrew">
      {imgId === "null" ? (
        <img className="no-image" src="./images/no-image.png" alt="" />
      ) : (
        <img src={`https://image.tmdb.org/t/p/w500${imgId}`} alt="" />
      )}
      <div className="name">{name}</div>
      <div className="ratings">
        Charecter: <span>{character}</span>
      </div>
    </div>
  );
}
