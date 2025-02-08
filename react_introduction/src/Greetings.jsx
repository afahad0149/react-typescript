export function Greetings(props) {
    return (
        <div>
            Hello {props.firstName} {props.lastName}!
            You are now {props.age} years old.
            {props.jsxProp}
            {props.children}
        </div>
    )
}