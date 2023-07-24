import "./About.scss";
import Tuft from "../../assets/images/tuft-gif.gif";
import TuftPic from "../../assets/images/tufting-rugs.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-title__container">
        <h3 className="section-title__sub">Get to know</h3>
        <h2 className="section-title">About</h2>
      </div>
      <div className="about-description">
        <div className="about-description__left">
          <p className="about-description__text">
            I am a passionate and driven developer that strives for writing
            clean code and building Full Stack projects. Currently in search for
            a company where I can make significant contributions and advance my
            career.
            <br></br>
            <br></br>
            Studied Computer Science in Brooklyn College and acquired a Software
            Engineering Certificate from Flatiron School. In 2022, I received a
            scholarship for a Web Development bootcamp called BrainStation. Upon
            completion, I was offered a role as a Full Stack Developer where I
            had to pleasure of teaching and mentoring prospering developers.
            <br></br>
            <br></br>
          </p>
          <img
              className="about-description__gif"
              src={Tuft}
              alt="tuft animation"
            />
          <p className="about-description__text">
            When i'm not coding, I like to spend my time traveling. You can see a small glimpse in my profile picture of my favorite place to visit, Japan.
            A hobby I recently picked up and absolutely enjoy is Rug Tufting.
            Still quite new, but I find it therapeutic and the creative space is
            limitless. These are some of the pieces I created.
          </p>
        </div>
        <img
          className="about-description__pic"
          src={TuftPic}
          alt="three rugs"
        />
      </div>
    </section>
  );
}

export { About };
