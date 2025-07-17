
import restaurant from "../photo/restaurant.jpg"
import restaurant2 from "../photo/restaurant2.jpg"



function About(){
    return(
        <section className="about">
            <div className="about-text">
                <h2>Little lemon</h2>
                <h3>Chicago</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div className="about-images">
                <img
                    src={restaurant}
                    alt="Restaurant owners"
                    className="about-img-main"
                />
                <img
                    src={restaurant2}
                    alt="Restaurant interior"
                    className="about-img-secondary"
                />
            </div>
        </section>
    )
}



export default About;