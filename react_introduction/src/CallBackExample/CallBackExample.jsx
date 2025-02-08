export function CallBackExample(props) {
  function onHandleClick() {
    props.callBack("CallBackExample");
  }

  return <button onClick={onHandleClick}>Click Me!</button>;
}
