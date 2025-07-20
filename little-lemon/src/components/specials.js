
import greekSalad from "../photo/greekSalad.jpg"
import bruchetta from "../photo/bruchetta.jpg"
import lemonDessert from "../photo/lemonDessert.jpg"
import { FaMotorcycle } from 'react-icons/fa';



function Specials() {
    return (
        <section className="specials">
            <div className="section-header">
                <h1>This week's specials!</h1>
                <button className="online-btn">Online Menu</button>
            </div>
            <div className="specials-grid">
                <div className="card">
                    <img src={greekSalad} alt="Greek salad" className="card-image"/>
                    <div className="card-content">
                        <div className="card-header">
                            <h3>Greek salad</h3>
                            <p className="price">$12.99</p>
                        </div>
                        <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <button className="order-btn">Order a delivery    <span className="span"><FaMotorcycle className="icon"/></span></button>
                    </div>
                </div>
                <div className="card">
                    <img src={bruchetta} alt="Bruschetta" className="card-image"/>
                    <div className="card-content">
                        <div className="card-header">
                            <h3>Bruschetta</h3>
                            <p className="price">$5.99</p>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <button className="order-btn">Order a delivery   <span className="span"><FaMotorcycle className="icons"/></span></button>
                    </div>
                </div>
                <div className="card">
                    <img src={lemonDessert} alt="Lemon dessert" className="card-image"/>
                    <div className="card-content">
                        <div className="card-header">
                            <h3>Lemon dessert</h3>
                            <p className="price">$5.00</p>
                        </div>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <button className="order-btn">Order a delivery    <span className="span"><FaMotorcycle className="icons"/></span></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Specials;