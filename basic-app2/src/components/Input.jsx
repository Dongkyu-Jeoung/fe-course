

export default function Input (props) {
    return (
    <li>
        <label htmlFor={props.name}>{props.title}</label>
        <input type={props.type} name={props.name} id={props.name} ref={props.ref}/>
    </li>
    )
}