
import restauranfood from "../photo/restauranfood.jpg"



function Hero(){
    return(
        <section className="hero">
            <div className="hero-text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p className="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="btn">Reserve a Table</button>
            </div>
            <div className="hero-image">
                <img
                    src={restauranfood}
                    alt="Little Lemon restaurant interior"
                    className="hero-img"
                />
            </div>
        </section>
    )
}

export default Hero;

