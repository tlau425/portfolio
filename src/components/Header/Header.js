import './Header.scss';

function Header() {
    return (
        <header>
            <nav className="nav">
                <a href="#">Tommy Lau</a>
                <ul className="nav__list">
                    <li><a href="#projects" className="nav__item">Projects</a></li>
                    <li><a href="#about" className="nav__item">About</a></li>
                    <li><a href="#contact" className="nav__item">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export { Header };