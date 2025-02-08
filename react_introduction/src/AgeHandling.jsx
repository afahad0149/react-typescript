import { AgeDisplay } from "./AgeDisplay";
import { useState } from "react";

export function AgeHandling(props) {
  let [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age++);
  }

  console.log("AgeHandling component rendered!");

  return (
    <div>
      <button onClick={increaseAge}>Increase Age</button>
      <AgeDisplay age={age} />
    </div>
  );
}
