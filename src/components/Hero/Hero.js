import './Hero.scss'

function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__left">
                    <h1 className="hero__title">Hello, my name is Tommy.</h1>
                    
                    <h2 className="hero__sub-header">Full Stack Developer</h2>
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