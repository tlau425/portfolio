import WhichWayGif from "../../assets/images/whichway-gif.gif";
import HackathonVid from "../../assets/images/hackathon.mp4";
import MealBuddyVid from "../../assets/images/mealbuddy-demo.mp4";
import MealBuddyLanding from "../../assets/images/mealbuddy-landing.jpg";
import ReactIcon from "../../assets/images/react.png";
import NodeIcon from "../../assets/images/node.png";
import MysqlIcon from "../../assets/images/mysql.png";
import ExpressIcon from "../../assets/images/express.png";
import JavascriptIcon from "../../assets/images/javascript.png";
import RubyIcon from "../../assets/images/ruby-icon.png";
import RailsIcon from "../../assets/images/rails.png";
import PostgresIcon from "../../assets/images/postgres.png";
import "./Projects.scss";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-title__container">
        <h3 className="section-title__sub">My developed</h3>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects__container">
        <label for="proj1" id="slide1">
          <div className="project-card">
            <div className="project-card__image">
              <video
                controls
                src={MealBuddyVid}
                type="video/mp4"
                width="600"
                height="700"
                maxHeight="700"
                poster={MealBuddyLanding}
              ></video>
            </div>

            <div className="project-card__infos">
              <h3 className="project-card__title">Meal Buddy</h3>

              <p className="project-card__description">
                A full stack networking platform for users to organize and
                seamlessly meet people at Yelp locations.
              </p>
              <ul>
                <li className="project-card__bullet">
                  Auth implementation using JWT and BCrypt ensures that user
                  login information is secure and encrypted.
                </li>
                <li className="project-card__bullet">
                  Real-time messaging for connected accounts using the Socket.IO
                  library. Users have separate chat rooms for each connected
                  user.
                </li>
                <li className="project-card__bullet">
                  Dynamic search query to the Yelp Fusion API for customized
                  requests based on input from anywhere worldwide.
                </li>
                <li className="project-card__bullet">
                  Google Maps Platform API utilized for visually displaying
                  restaurant and reservation locations with coordinate based
                  markers.
                </li>
              </ul>
              <div className="project-card__bottom">
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
                <div className="project-card__stack">
                  <div className="stack__card project-card__tech">
                    <img
                      className="stack__icon project-card__icon"
                      src={ReactIcon}
                      alt="React"
                    />
                    <p className="stack__overlay sb1">React</p>
                  </div>
                  <div className="stack__card project-card__tech">
                    <img
                      className="stack__icon project-card__icon"
                      src={NodeIcon}
                      alt="Node"
                    />
                    <p className="stack__overlay sb1">Node.js</p>
                  </div>
                  <div className="stack__card project-card__tech">
                    <img
                      className="stack__icon project-card__icon"
                      src={ExpressIcon}
                      alt="NodeExpress"
                    />
                    <p className="stack__overlay sb1">Node Express</p>
                  </div>
                  <div className="stack__card project-card__tech">
                    <img
                      className="stack__icon project-card__icon"
                      src={MysqlIcon}
                      alt="MySQL"
                    />
                    <p className="stack__overlay sb1">MySQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>

        <div className="project-card">
          <div className="project-card__image">
            <video
              controls
              src={HackathonVid}
              type="video/mp4"
              width="600"
              height="500"
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
                Collaborated with UI/UX designers and data scientists to develop
                a comprehensive presentation consisting of user stories, Figma
                designs, data charts, and a web application.
              </li>
              <li className="project-card__bullet">
                Dynamic rendering of data to easily show users if they’re paying
                more or less than the total average cost based on their zip
                code.
              </li>
            </ul>
            <div className="project-card__bottom">
              <div className="project-card__links">
                <a
                  className="project-card__link"
                  href="https://github.com/davonbl-bl/industry-project-client"
                >
                  GitHub
                </a>
              </div>
              <div className="project-card__stack">
                <div className="stack__card project-card__tech">
                  <img
                    className="stack__icon project-card__icon"
                    src={ReactIcon}
                    alt="React"
                  />
                  <p className="stack__overlay sb1">React</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card__image">
            <img
              className="project-card__picture"
              src={WhichWayGif}
              alt="which way gif"
            />
          </div>

          <div className="project-card__infos">
            <h3 className="project-card__title">Which Way?</h3>
            <p className="project-card__description">
              A dynamic vanilla Javascript memory game where you have to use the
              arrow keys to repeat a sequence of movements that gets longer with
              progression.
            </p>
            <ul>
              <li className="project-card__bullet">
                Multiple conditional difficulties to choose from, each
                containing its own custom timer, amount of starting keys, and
                duration of keys displayed.
              </li>
              <li className="project-card__bullet">
                Persisting scoreboard database for users with the highest scores
                using Rails and Postgres.
              </li>
              <li className="project-card__bullet">
                Hardest difficulty will have a reverse feature that will require
                you to input the opposite arrow key shown in green.
              </li>
            </ul>
            <div className="project-card__bottom">
              <div className="project-card__links">
                <a
                  className="project-card__link"
                  href="https://github.com/FillanL/Which_way-frontend"
                >
                  GitHub
                </a>
              </div>
              <div className="project-card__stack">
                <div className="stack__card project-card__tech">
                  <img
                    className="stack__icon project-card__icon"
                    src={JavascriptIcon}
                    alt="Javascript"
                    project-card__icon
                  />
                  <p className="stack__overlay sb1">Javascript</p>
                </div>
                <div className="stack__card project-card__tech">
                  <img
                    className="stack__icon project-card__icon"
                    src={RubyIcon}
                    alt="Ruby"
                  />
                  <p className="stack__overlay sb1">Ruby</p>
                </div>
                <div className="stack__card project-card__tech">
                  <img
                    className="stack__icon project-card__icon"
                    src={RailsIcon}
                    alt="Ruby on Rails"
                  />
                  <p className="stack__overlay sb1">Ruby on Rails</p>
                </div>
                <div className="stack__card project-card__tech">
                  <img
                    className="stack__icon project-card__icon"
                    src={PostgresIcon}
                    alt="Postgres"
                  />
                  <p className="stack__overlay sb1">Postgres</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Projects };
