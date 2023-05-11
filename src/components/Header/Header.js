import { useEffect, useState } from 'react';
import './Header.scss';

function Header() {
    //Sticky header on scroll up function
    const useScrollDirection = () => {
        const [scrollDirection, setScrollDirection] = useState(null);
      
        useEffect(() => {
          let lastScrollY = window.pageYOffset;
      
          const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
              setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
          };
          window.addEventListener("scroll", updateScrollDirection); // add event listener
          return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
          }
        }, [scrollDirection]);
      
        return scrollDirection;
    };

    return (
        <header className={`header ${ useScrollDirection() === "down" ? "hide" : "show"}`}>
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