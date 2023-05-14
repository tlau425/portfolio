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

function Stack() {
    return (
        <section className="stack">
            <div className="stack__container"><img className="stack__icon" src={CssIcon} alt="CSS" /></div>
            <div className="stack__container"><img className="stack__icon" src={HtmlIcon} alt="HTML" /></div>
            <div className="stack__container"><img className="stack__icon" src={JavascriptIcon} alt="Javascript" /></div>
            <div className="stack__container"><img className="stack__icon" src={ReactIcon} alt="React" /></div>
            <div className="stack__container"><img className="stack__icon" src={NodeIcon} alt="React" /></div>
            <div className="stack__container"><img className="stack__icon" src={ExpressIcon} alt="NodeExpress" /></div>
            <div className="stack__container"><img className="stack__icon" src={MysqlIcon} alt="MySQL" /></div>
            <div className="stack__container"><img className="stack__icon" src={PostgresIcon} alt="Postgres" /></div>
            <div className="stack__container"><img className="stack__icon" src={RailsIcon} alt="Rails" /></div>
            <div className="stack__container"><img className="stack__icon" src={TypescriptIcon} alt="Typescript" /></div>
            <div className="stack__container"><img className="stack__icon" src={ReduxIcon} alt="Redux" /></div>
        </section>
    )
}

export { Stack }