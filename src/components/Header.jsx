export default function Header() {
  return (
    <div>
        <header>
            <div className="header__logo">
                <img src="/kasa_logo.svg"/>
            </div>
            <div className="header__nav">
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">A propos</a></li>
                </ul>
            </div>
        </header>
    </div>
  )
}
