import s from "./myStyle.module.css";
// module.css provides unique name for the css
// to avoid naming conflict between class names

export function MoreGreetings() {
  return <p className={s.box}>Omae wa mou shindeiru!</p>;
}
