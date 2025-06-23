import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
           <Link to="/" className="mainPageLink">Основные хуки практика</Link>
        </header>
    )
}