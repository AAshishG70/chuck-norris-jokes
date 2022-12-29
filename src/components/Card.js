import "./Card.css";

function Card({ value, nextButton }) {
  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      <p>{value}</p>
      <button onClick={nextButton}>Next</button>
    </div>
  );
}

export default Card;
