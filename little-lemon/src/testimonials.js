
import alex from "./photo/alex.jpg"
import sarah from "./photo/sarah.jpeg"
import john from "./photo/john.jpg"



function Testimonials (){
    return(
        <section className="testimonials">
            <h2>testimonials</h2>
            <div className="testimonials-grid">
                <div className="testimonials-card">
                    <div className="rating">⭐⭐⭐⭐⭐</div>
                    <div className="reviewer">
                        <img
                            src={alex}
                            alt="Reviewer"
                            className="reviewer-photo"
                        />
                        <p>Alex</p>
                    </div>
                    <p className="review-text">"The best Mediterranean food in Chicago!"</p>
                </div>
                <div className="testimonials-card">
                    <div className="rating">⭐⭐⭐⭐</div>
                    <div className="reviewer">
                        <img
                            src={sarah}
                            alt="Reviewer"
                            className="reviewer-photo"
                        />
                        <p>Sarah</p>
                    </div>
                    <p className="review-text">"The lemon dessert changed my life!"</p>
                </div>
                <div className="testimonials-card">
                    <div className="rating">⭐⭐⭐⭐⭐</div>
                    <div className="reviewer">
                        <img
                            src={john}
                            alt="Reviewer"
                            className="reviewer-photo"
                        />
                        <p>John</p>
                    </div>
                    <p className="review-text">"The best service in the city!"</p>
                </div>
            </div>
        </section>
    )
}


export default Testimonials;