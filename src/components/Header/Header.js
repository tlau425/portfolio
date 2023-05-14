import { useEffect, useState } from "react";
import "./Header.scss";
import { ResumeModal } from "../ResumeModal/ResumeModal";

function Header() {
  const [toggleResume, setToggleResume] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const handleHamburgerClick = () => setToggleHamburger(!toggleHamburger);
  const handleResumeClick = () => setToggleResume(!toggleResume);

  //Sticky header on scroll up function
  const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  };

  return (
    <>
      {toggleResume && <ResumeModal handleResumeClick={handleResumeClick} />}

      <header
        className={`header ${
          useScrollDirection() === "down" ? "hide" : "show"
        }`}
      >
        <nav className="nav">
          <div className="nav__top-container">
            <a href="#" className="nav__logo">Tommy Lau</a>
            <div className="hamburger" onClick={handleHamburgerClick}>
              <div id={toggleHamburger ? "checked" : ""}></div>
            </div>
          </div>
            <ul className={toggleHamburger? "nav__list": "nav__list nav__list--toggled"}>
              <li className="nav__li">
                <a href="#projects" className="nav__item">
                  Projects
                </a>
              </li>
              <li className="nav__li">
                <a href="#about" className="nav__item">
                  About
                </a>
              </li>
              <li className="nav__li">
                <a href="#contact" className="nav__item">
                  Contact
                </a>
              </li>
              <li className="nav__li">
                <button
                  className="nav__item nav__button"
                  onClick={handleResumeClick}
                >
                  Resume
                </button>
              </li>
            </ul>
        </nav>
      </header>
    </>
  );
}

export { Header };
