import CssIcon from '../../assets/images/css.png';
import HtmlIcon from '../../assets/images/html.png';
import JavascriptIcon from '../../assets/images/javascript.png';
import ReactIcon from '../../assets/images/react.png';
import NodeIcon from '../../assets/images/node.png';
import ExpressIcon from '../../assets/images/express.png';
import MysqlIcon from '../../assets/images/mysql.png';
import PostgresIcon from '../../assets/images/postgres.png';
import RailsIcon from '../../assets/images/rails.png';
import ReduxIcon from '../../assets/images/redux.png';
import TypescriptIcon from '../../assets/images/typescript.svg';
import './Stack.scss';

function Stack () {
    return (
        <section className="stack">
            <img className="stack__icon" src={CssIcon} alt="CSS"/>
            <img className="stack__icon" src={HtmlIcon} alt="HTML"/>
            <img className="stack__icon" src={JavascriptIcon} alt="Javascript"/>
            <img className="stack__icon" src={ReactIcon} alt="React"/>
            <img className="stack__icon" src={NodeIcon} alt="React"/>
            <img className="stack__icon" src={ExpressIcon} alt="NodeExpress"/>
            <img className="stack__icon" src={MysqlIcon} alt="MySQL"/>
            <img className="stack__icon" src={PostgresIcon} alt="Postgres"/>
            <img className="stack__icon" src={RailsIcon} alt="Rails"/>
            <img className="stack__icon" src={TypescriptIcon} alt="Typescript"/>
            <img className="stack__icon" src={ReduxIcon} alt="Redux"/>
        </section>
    )
}

export { Stack }