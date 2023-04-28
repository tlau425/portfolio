import FavIcon from '../../assets/images/favicon.ico';
import ReactIcon from '../../assets/images/react.png';
import './Projects.scss';

function Projects() {
    return (
        <section className="projects">
            <input type="radio" name="projects__slider" id="proj1" checked />
            <input type="radio" name="projects__slider" id="proj2" />
            <input type="radio" name="projects__slider" id="proj3" />
            <div className="projects__container">

                <label for="proj1" id="slide1">
                    <div className="project-card">
                        <div className="project-card__image">
                            <img src={FavIcon} className="project-card__picture"/>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="project-card__infos">
                            <span className="project-card__title">Meal Buddy</span>
                            <span className="project-card__description">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        </div>
                    </div>
                </label>

                <label for="proj2" id="slide2">
                    <div className="project-card">
                        <div className="project-card__image">
                            <img className="project-card__picture"src={ReactIcon} />
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="project-card__infos">
                            <span className="project-card__title">Hackathon</span>
                            <span className="project-card__description">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        </div>
                    </div>
                </label>

                <label for="proj3" id="slide3">
                    <div className="project-card">
                        <div className="project-card__image">
                            <img className="project-card__picture" src="" />
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="project-card__infos">
                            <span className="project-card__title">Which Way?</span>
                            <span className="project-card__description">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        </div>
                    </div>
                </label>
            </div>
        </section>
    )
}

export { Projects };