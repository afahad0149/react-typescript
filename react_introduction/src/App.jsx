import { Greetings } from "./Greetings";
import { AgeHandling } from "./AgeHandling";
import { UnexpectedStateBehavior } from "./UnxepectedStateBehavior";
import "./style.css";
import { MoreGreetings } from "./MoreGreeting/MoreGreetings";
import { useState } from "react";
import { CallBackExample } from "./CallBackExample/CallBackExample";

export function App() {
  const [state, setState] = useState("From App");

  function updateState(component) {
    setState(`From ${component}`);
  }

  return (
    <>
      <input type="checkbox" checked onChange={(e) => console.log(e)} />
      <Greetings
        firstName="Rachel"
        lastName={"Green"}
        age={30}
        jsxProp={<p> I am a JSX Prop!</p>}
      >
        <div>I am in the props children!</div>
      </Greetings>
      <AgeHandling />
      <UnexpectedStateBehavior />
      <MoreGreetings className="box" />
      <div>{state}</div>
      <CallBackExample callBack={updateState} />
    </>
  );
}
