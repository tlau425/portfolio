import "./Hero.scss";
import githubIcon from "../../assets/images/github.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import resumeIcon from "../../assets/images/resume-icon.png";

function Hero({ handleResumeClick }) {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h1 className="hero__title">Hello, my name is Tommy.</h1>
          <h2 className="hero__sub-header">Full Stack Developer</h2>
          <div className="social__container">
            <a href="https://www.linkedin.com/in/tommyl425/" className="social">
              <img src={linkedinIcon} className="social__icon" alt="github" />
              <p className="social__name">LinkedIn</p>
            </a>

            <a href="https://github.com/tlau425" className="social">
              <img src={githubIcon} className="social__icon" alt="github" />
              <p className="social__name">Github</p>
            </a>

            <button className="social" onClick={handleResumeClick}>
              <img src={resumeIcon} className="social__icon" alt="github" />
              <p className="social__name">Resume</p>
            </button>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__avatar"></div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
