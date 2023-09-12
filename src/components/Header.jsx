import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <header>
            <div className="header__logo">
                <img src="/kasa_logo.svg"/>
            </div>
            <div className="header__nav">
                <ul>
                    <Link to="/">Accueil</Link>
                    <Link to="/a_propos">A propos</Link>
                </ul>
            </div>
        </header>
    </div>
  )
}
