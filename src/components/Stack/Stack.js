import CssIcon from "../../assets/images/css.png";
import HtmlIcon from "../../assets/images/html.png";
import JavascriptIcon from "../../assets/images/javascript.png";
import ReactIcon from "../../assets/images/react.png";
import NodeIcon from "../../assets/images/node.png";
import GitIcon from "../../assets/images/git-icon.png";
import ExpressIcon from "../../assets/images/express.png";
import MysqlIcon from "../../assets/images/mysql.png";
import PostgresIcon from "../../assets/images/postgres.png";
import PythonIcon from "../../assets/images/python.png";
import RailsIcon from "../../assets/images/rails.png";
import RubyIcon from "../../assets/images/ruby-icon.png";
import ReduxIcon from "../../assets/images/redux.png";
import JiraIcon from "../../assets/images/jira.png";
import SlackIcon from "../../assets/images/slack.png";
import TypeScriptIcon from "../../assets/images/typescript.svg";
import "./Stack.scss";

function Stack() {
  return (
    <section className="stack">
      <h3 className="section-title__sub">My Technical</h3>
      <h2 className="section-title">Skills</h2>
      <div className="stack__wrapper">
        <h3 className="project-card__title">Programming Languages</h3>
        <div className="stack__container">
          <div className="stack__card">
            <img className="stack__icon" src={CssIcon} alt="CSS" />
            <p className="stack__overlay">CSS</p>
          </div>
          <div className="stack__card">
            <img className="stack__icon" src={HtmlIcon} alt="HTML" />
            <p className="stack__overlay">HTML</p>
          </div>
          <div className="stack__card">
            <img
              className="stack__icon"
              src={JavascriptIcon}
              alt="Javascript"
            />
            <p className="stack__overlay">Javascript</p>
          </div>
          <div className="stack__card">
            <img className="stack__icon" src={PythonIcon} alt="Python" />
            <p className="stack__overlay">Python</p>
          </div>
          <div className="stack__card">
            <img className="stack__icon" src={RubyIcon} alt="Ruby" />
            <p className="stack__overlay">Ruby</p>
          </div>
          <div className="stack__card">
            <img
              className="stack__icon"
              src={TypeScriptIcon}
              alt="TypeScript"
            />
            <p className="stack__overlay">TypeScript</p>
          </div>
        </div>

        <h3 className="project-card__title">Frameworks/Libraries</h3>
        <div className="stack__container">
          <div className="stack__card">
            <img className="stack__icon" src={ReactIcon} alt="React" />
            <p className="stack__overlay">React</p>
          </div>

          <div className="stack__card">
            <img className="stack__icon" src={NodeIcon} alt="Node" />
            <p className="stack__overlay">Node.js</p>
          </div>

          <div className="stack__card">
            <img className="stack__icon" src={RailsIcon} alt="Ruby on Rails" />
            <p className="stack__overlay">Ruby on Rails</p>
          </div>

          <div className="stack__card">
            <img className="stack__icon" src={ExpressIcon} alt="NodeExpress" />
            <p className="stack__overlay">Node Express</p>
          </div>

          <div className="stack__card">
            <img className="stack__icon" src={ReduxIcon} alt="Redux" />
            <p className="stack__overlay">Redux</p>
          </div>
        </div>

        <h3 className="project-card__title">Databases</h3>
        <div className="stack__container">
          <div className="stack__card">
            <img className="stack__icon" src={MysqlIcon} alt="MySQL" />
            <p className="stack__overlay">MySQL</p>
          </div>

          <div className="stack__card">
            <img className="stack__icon" src={PostgresIcon} alt="Postgres" />
            <p className="stack__overlay">Postgres</p>
          </div>
        </div>

        <h3 className="project-card__title">Collaboration</h3>
        <div className="stack__container">
          <div className="stack__card">
            <img className="stack__icon" src={JiraIcon} alt="Jira" />
            <p className="stack__overlay">Jira</p>
          </div>
          <div className="stack__card">
            <img className="stack__icon" src={GitIcon} alt="Got" />
            <p className="stack__overlay">Git</p>
          </div>
          <div className="stack__card">
            <img className="stack__icon" src={SlackIcon} alt="Slack" />
            <p className="stack__overlay">Slack</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Stack };
