import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
           <Link to="/" className="toMainLink">Основные хуки практика</Link>
        </header>
    )
}