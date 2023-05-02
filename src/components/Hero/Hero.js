import './Hero.scss'

function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__left">
                    <h1 className="hero__title">Hello, my name is Tommy.</h1>
                    <h2 className="hero__sub-header">I am a full stack developer</h2>
                    <p className="hero__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="hero__right">
                    <div className="hero__avatar">
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Hero }