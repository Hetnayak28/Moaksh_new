import React from 'react';
import braceletImage1 from '../assets/images/bracelet 1.jpg';
import braceletImage2 from '../assets/images/bracelet 2.jpg';
import braceletImage3 from '../assets/images/bracelet 3.jpg';
import braceletImage4 from '../assets/images/bracelet 4.jpg';
import braceletImage5 from '../assets/images/bracelet 5.jpg';
import braceletImage6 from '../assets/images/bracelet 6.jpg';
import braceletImage7 from '../assets/images/bracelet 7.jpg';
import braceletImage8 from '../assets/images/bracelet 8.jpg';
import braceletImage9 from '../assets/images/bracelet 9.jpg';
import braceletImage10 from '../assets/images/bracelet 10.jpg';
import braceletImage11 from '../assets/images/bracelet 11.jpg';
import braceletImage12 from '../assets/images/bracelet 12.jpg';
import braceletImage13 from '../assets/images/bracelet 13.jpg';

const BraceletProducts = ({ handleAddToCart }) => {
    const products = [
        { name: "Bracelet Product 1", price: "50.00", image: braceletImage1, description: "This is a beautiful bracelet, perfect for any occasion." },
        { name: "Bracelet Product 2", price: "75.00", image: braceletImage2, description: "Elegant and stylish, this bracelet adds a touch of sophistication." },
        { name: "Bracelet Product 3", price: "60.00", image: braceletImage3, description: "Handcrafted with care, a unique piece for your collection." },
        { name: "Bracelet Product 4", price: "90.00", image: braceletImage4, description: "A timeless design that complements any outfit." },
        { name: "Bracelet Product 5", price: "45.00", image: braceletImage5, description: "Simple yet charming, ideal for everyday wear." },
        { name: "Bracelet Product 6", price: "80.00", image: braceletImage6, description: "Features intricate details and a comfortable fit." },
        { name: "Bracelet Product 7", price: "120.00", image: braceletImage7, description: "Luxurious bracelet made with premium materials." },
        { name: "Bracelet Product 8", price: "70.00", image: braceletImage8, description: "A versatile bracelet that can be dressed up or down." },
        { name: "Bracelet Product 9", price: "55.00", image: braceletImage9, description: "Modern design bracelet for a contemporary look." },
        { name: "Bracelet Product 10", price: "95.00", image: braceletImage10, description: "Exquisite bracelet with sparkling accents." },
        { name: "Bracelet Product 11", price: "65.00", image: braceletImage11, description: "Bohemian style bracelet, perfect for free spirits." },
        { name: "Bracelet Product 12", price: "85.00", image: braceletImage12, description: "Minimalist bracelet, ideal for stacking." },
        { name: "Bracelet Product 13", price: "110.00", image: braceletImage13, description: "Statement bracelet, sure to turn heads." }
    ];
    return (
        <section className="bracelet-products">
            <div className="container">
                <h2>Bracelet Products</h2>
                <div className="product-grid">
                    {products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.image} alt={product.name} />
                            <h6>{product.name}</h6>
                            <p className="description">{product.description}</p>
                            <p className="price">{product.price}</p>
                        </div>
                    ))}
                </div>
                {products.length === 0 && <p>No bracelet products found.</p>}
            </div>
        </section>
    );
};

export default BraceletProducts;
