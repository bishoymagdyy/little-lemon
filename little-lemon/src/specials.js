
import greekSalad from "./photo/greekSalad.jpg"
import bruchetta from "./photo/bruchetta.jpg"
import lemonDessert from "./photo/lemonDessert.jpg"



function Specials(){
    return(
        <div className="specials-grid">
            <div className="card">
                <img
                    src={greekSalad}
                    alt="Greek salad"
                    className="card-image"
                />
                <div className="card-content">
                    <div className="card-header">
                        <h3>Greek salad</h3>
                        <p className="price">$12.00</p>
                    </div>
                    <p>The famous greek salad...</p>
                    <button className="order-btn">Order a delivery</button>
                </div>
            </div>
            <div className="card">
                <img
                    src={bruchetta}
                    alt="bruchetta"
                    className="card-image"
                />
                <div className="card-content">
                    <div className="card-header">
                        <h3>Bruchetta</h3>
                        <p className="price">$5.99</p>
                    </div>
                    <p>Our famous bruchetta...</p>
                    <button className="order-btn">Order a delivery</button>
                </div>
            </div>
            <div className="card">
                <img
                    src={lemonDessert}
                    alt="lemon dessert"
                    className="card-image"
                />
                <div className="card-content">
                    <div className="card-header">
                        <h3>Lemon dessert</h3>
                        <p className="price">$5.00</p>
                    </div>
                    <p>Our famous lemon dessert...</p>
                    <button className="order-btn">Order a delivery</button>
                </div>
            </div>
        </div>
    )
}


export default Specials;