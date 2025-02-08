import { useState } from "react";

export function UnexpectedStateBehavior(props) {
  const [movie, setMovie] = useState("Lord of the rings");

  function updateMovie() {
    setMovie("Fight Club"); // this is asynchronous
    console.log(movie); // this may be show unchanged state value
    // as it executes before setMovie()
  }

  // setMovie("Fifth Sense"); // triggers an infinite loop
  // as the component updates its state
  // and re-renders after updating state

  return (
    <div>
      <button onClick={updateMovie}>{movie}</button>
    </div>
  );
}
