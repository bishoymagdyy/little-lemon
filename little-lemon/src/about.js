
import restaurant from "./photo/restaurant.jpg"
import restaurant2 from "./photo/restaurant2.jpg"



function About(){
    return(
        <section className="about">
            <div className="about-text">
                <h2>Little lemon</h2>
                <h3>Chicago</h3>
                <p>Founded in 2015 by brothers Mario and Adrian...</p>
            </div>
            <div className="about-images">
                <img
                    src={restaurant2}
                    alt="Restaurant owners"
                    className="about-img-main"
                />
                <img
                    src={restaurant}
                    alt="Restaurant interior"
                    className="about-img-secondary"
                />
            </div>
        </section>
    )
}



export default About;