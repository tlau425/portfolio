import './Hero.scss'
import ProfilePic from '../../assets/images/profile-pic.png'


function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__left">
                    <h1>Hello My name is Tommy Lau</h1>
                    <h2>I am a full stack developer</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="hero__right">
                    <img src={ProfilePic} className="hero__avatar" />
                </div>
            </div>
        </section>
    )
}

export { Hero }