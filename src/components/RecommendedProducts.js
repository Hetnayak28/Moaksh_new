import React from 'react';
import image2 from '../assets/images/bracelet 2.jpg';
import image3 from '../assets/images/bracelet 3.jpg';
import image4 from '../assets/images/bracelet 4.jpg';
import image5 from '../assets/images/bracelet 5.jpg';
import image6 from '../assets/images/bracelet 6.jpg';
import image7 from '../assets/images/bracelet 7.jpg';
import image8 from '../assets/images/bracelet 8.jpg';
import image9 from '../assets/images/pyramid 1.jpg'; 
import image10 from '../assets/images/pyramid 2.jpg'; 
import image11 from '../assets/images/bracelet 9.jpg'; 
import image13 from '../assets/images/bracelet 11.jpg';
import image14 from '../assets/images/bracelet 12.jpg';
import image15 from '../assets/images/bracelet 13.jpg';
import pencilImage from '../assets/images/pencile 1.jpg';

const RecommendedProducts = ({ handleAddToCart }) => {
    const products = [
       // { name: "Jet Crystal Combination Kit (SOCIAL MEDIA FAME)", price: "224.99", image: image1, description: "" },
        { name: "Money magnate ", price: "", image: image2, description: "Benefits: Financial stability, Money related decision strong, Money attract, Good luck attract, Business improvement" },
        { name: "Tiger eye", price: "", image: image3, description: "Benefits: To improve digestion systems Strong guts feeling Improve your decision power Protect negative energy Physics protection Balance seven chakras" },
        { name: "Golden money magnate", price: "", image: image4, description: "Benefits: Financial stability, Money related decision strong, Money attract, Good luck attract, Business improvement" },
        { name: "Tripal Protection", price: "", image: image5, description: "Facilitates smooth international trade and business growth." },
        { name: "Natural 7 chakra", price: "", image: image6, description: "Promotes prosperity and abundance in grocery business." },
        { name: "Natural citrine light color", price: "", image: image7, description: "Supports healing and well-being in medical practices." },
        { name: "Red jasper", price: "", image: image8, description: "Improve earth energy Physical strong Active five senses Grounded" },
        { name: "7 chakra pyramid", price: "", image: image9, description: "Ensures safe travels and memorable journeys." },
        { name: "Shree yantra", price: "", image: image10, description: "Helps in smooth transition and settlement in foreign lands." },
        { name: "Natural Howlite", price: "", image: image11, description: "Chakras balance Improve your creativity Improve your focusCalmness and protection Clean your aura" },
        //{ name: "", price: "", image: image12, description: "Minimalist bracelet, ideal for stacking." },
        { name: "Bracelet Product 13", price: "", image: image13, description: "Statement bracelet, sure to turn heads." },
        { name: "Bracelet Product 14", price: "", image: image14, description: "Business improvement Good luck attract" },
        { name: "Seven chakras+ lava stone", price: "", image: image15, description: "Balance seven chakras Balance your energy Protection aura" },
        { name: "Pencil Product new", price: "", image: pencilImage, description: "A brand new pencil for creative endeavors." }
    ];
    return (
        <section className="recommended-products">
            <div className="container">
                <h3>Recommended Products</h3>
                <div className="product-grid">
                    {products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.image} alt="Product Image" />
                            <h6>{product.name}</h6>
                            <p className="description">{product.description}</p>
                            <p className="price">{product.price}</p>
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecommendedProducts;
