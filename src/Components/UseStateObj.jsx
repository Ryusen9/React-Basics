import { useState } from "react";

const UseStateObj = () => {
  const [movie, setMovie] = useState({
    tittle: "Matrix",
    ratings: 9,
  });
  const handleRating = () => {
    // const copyMovie = {
    //     ...movie,
    //     ratings: movie.ratings + 1
    // }
    setMovie({ ...movie, ratings: movie.ratings + 1 });
  };
  return (
    <div>
      <h1>Tittle: {movie.tittle}</h1>
      <p>Ratings: {movie.ratings}</p>
      <button className="btn" onClick={handleRating}>
        Rating
      </button>
    </div>
  );
};

export default UseStateObj;
