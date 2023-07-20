import FavIcon from "../../assets/images/favicon.ico";
import WhichWayGif from "../../assets/images/whichway-gif.gif";
import HackathonVid from "../../assets/images/hackathon.mp4";
import "./Projects.scss";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-title__container">
      <h3 className="section-title__sub">My developed</h3>
      <h2 className="section-title">Projects.</h2>
      </div>
      <div className="projects__container">
        <label for="proj1" id="slide1">
          <div className="project-card">
            <div className="project-card__image">
              <img src={FavIcon} className="project-card__picture" alt="mealbuddy" />
            </div>

            <div className="project-card__infos">
              <h3 className="project-card__title">Meal Buddy</h3>

              <p className="project-card__description">
                A full stack networking platform for users to organize and
                seamlessly meet people at Yelp locations.
              </p>
              <ul>
                <li className="project-card__bullet">
                  Userbase secured with API Auth tokens and Bcrypt for encrypted
                  passwords.
                </li>
                <li className="project-card__bullet">
                  Real-time messaging feature for connected accounts using the
                  Socket.IO library. Users have separate chat rooms for each
                  connected user.
                </li>
                <li className="project-card__bullet">
                  Dynamic search query to the Yelp Fusion API for customized
                  requests based on input from anywhere worldwide.
                </li>
                <li className="project-card__bullet">
                  Google Maps Platform API used for visually displaying
                  restaurant and reservation locations with markers
                </li>
              </ul>
              <div className="project-card__links">
                <a
                  className="project-card__link"
                  href="https://github.com/tlau425/meal-buddy-client"
                >
                  GitHub
                </a>
                <a
                  className="project-card__link"
                  href="https://github.com/tlau425/meal-buddy-client"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </label>

        <label for="proj2" id="slide2">
          <div className="project-card">
            <div className="project-card__image">
              <video
                controls
                src={HackathonVid}
                type="video/mp4"
                width="600"
                height="700"
              ></video>
            </div>

            <div className="project-card__infos">
              <h3 className="project-card__title">Hackathon</h3>
              <p className="project-card__description">
                24-hour hackathon hosted by BrainStation with a problem space of
                finding the true cost of living in New York.
              </p>
              <ul>
                <li className="project-card__bullet">
                  Implemented an interactive heat map using Tableau for viewing
                  consumer satisfaction based on JSON data.
                </li>
                <li className="project-card__bullet">
                  Collaborated with UI/UX designers and data scientists to
                  develop a comprehensive presentation consisting of user
                  stories, Figma designs, data charts, and a web application.
                </li>
                <li className="project-card__bullet">
                  Dynamic rendering of data to easily show users if they’re
                  paying more or less than the total average cost based on their
                  zip code.
                </li>
              </ul>
              <div className="project-card__links">
                <a
                  className="project-card__link"
                  href="https://github.com/davonbl-bl/industry-project-client"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </label>

        <label for="proj3" id="slide3">
          <div className="project-card">
            <div className="project-card__image">
              <img className="project-card__picture" src={WhichWayGif} alt="which way gif"/>
            </div>

            <div className="project-card__infos">
              <h3 className="project-card__title">Which Way?</h3>
              <p className="project-card__description">
                A dynamic arrow key memory game where you have to use the arrow
                keys to repeat a sequence of movements that gets longer with
                each level.
              </p>
              <ul>
                <li className="project-card__bullet">
                  Multiple conditional difficulties to choose from, each
                  containing its own custom timer, amount of starting keys, and
                  duration of keys displayed.
                </li>
                <li className="project-card__bullet">
                  Persisting scoreboard for users with the highest scores
                </li>
                <li className="project-card__bullet">
                  Hardest difficulty will have a reverse feature that will
                  require you to input the opposite arrow key shown.
                </li>
              </ul>
              <div className="project-card__links">
                <a
                  className="project-card__link"
                  href="https://github.com/FillanL/Which_way-frontend"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </label>
      </div>
    </section>
  );
}

export { Projects };
