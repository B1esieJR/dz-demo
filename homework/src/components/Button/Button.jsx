import './style.css'
export default function Button({text,onClick}) {
    return (
        <button onClick={onClick} className="button-find">{text}</button>
    )
}