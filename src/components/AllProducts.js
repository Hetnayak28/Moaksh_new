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
import image11 from '../assets/images/bracelet 1.jpg'; // Reusing bracelet 1
import image12 from '../assets/images/bracelet 2.jpg'; // Reusing bracelet 2
import pyramidImage1 from '../assets/images/pyramid 1.jpg';
import pyramidImage2 from '../assets/images/pyramid 2.jpg';
import braceletImage9 from '../assets/images/bracelet 9.jpg';
import braceletImage10 from '../assets/images/bracelet 10.jpg';
import braceletImage11 from '../assets/images/bracelet 11.jpg';
import braceletImage12_new from '../assets/images/bracelet 12.jpg';
import braceletImage13 from '../assets/images/bracelet 13.jpg';
import pencilImage from '../assets/images/pencile 1.jpg';

import image1 from '../assets/images/bracelet 1.jpg'

const AllProducts = ({ handleAddToCart, searchQuery }) => {
    const products = [

        { name: "Jet Crystal Combination Kit (SOCIAL MEDIA FAME)", price: "224.99", image: image1, description: "This kit helps in achieving social media fame." },
        { name: "Jet Crystal Combination Kit (DEFENSE SECTOR)", price: "224.99", image: image2, description: "Boosts defense capabilities and strategic thinking." },
        { name: "Jet Crystal Combination Kit (SERVICE CENTER)", price: " 224.99", image: image3, description: "Enhances service quality and customer satisfaction." },
        { name: "Jet Crystal Combination Kit (MARRIAGE BUERO)", price: " 224.99", image: image4, description: "Attracts harmonious relationships and marital bliss." },
        { name: "Jet Crystal Combination Kit (IMPORT/EXPORT)", price: "224.99", image: image5, description: "Facilitates smooth international trade and business growth." },
        { name: "Jet Crystal Combination Kit (GROCERY SHOP)", price: "224.99", image: image6, description: "Promotes prosperity and abundance in grocery business." },
        { name: "Jet Crystal Combination Kit (MEDICAL SHOP)", price: " 224.99", image: image7, description: "Supports healing and well-being in medical practices." },
        { name: "Jet Crystal Combination Kit (TEACHING INSTITUTE)", price: " 224.99", image: image8, description: "Aids in knowledge acquisition and effective teaching." },
        { name: "Jet Crystal Combination Kit (TOUR & TRAVELS)", price: " 224.99", image: image9, description: "Ensures safe travels and memorable journeys." },
        { name: "Jet Crystal Combination Kit (FOREIGN SETTLEMENT )", price: " 224.99", image: image10, description: "Helps in smooth transition and settlement in foreign lands." },
        { name: "Jet Crystal Combination Kit (FOREIGN SETTLEMENT )", price: " 224.99", image: image11, description: "Attracts opportunities for foreign residency and work." },
        { name: "Jet Crystal Combination Kit (FOREIGN SETTLEMENT )", price: " 224.99", image: image12, description: "Promotes success in international ventures." },
        { name: "Pyramid Product 1", price: "100.00", image: pyramidImage1, description: "A powerful pyramid for energy amplification." },
        { name: "Pyramid Product 2", price: "150.00", image: pyramidImage2, description: "Enhances spiritual growth and meditation." },
        { name: "Bracelet Product 9", price: "55.00", image: braceletImage9, description: "Modern design bracelet for a contemporary look." },
        { name: "Bracelet Product 10", price: "95.00", image: braceletImage10, description: "Exquisite bracelet with sparkling accents." },
        { name: "Bracelet Product 11", price: "65.00", image: braceletImage11, description: "Bohemian style bracelet, perfect for free spirits." },
        { name: "Bracelet Product 12", price: "85.00", image: braceletImage12_new, description: "Minimalist bracelet, ideal for stacking." },
        { name: "Bracelet Product 13", price: "110.00", image: braceletImage13, description: "Statement bracelet, sure to turn heads." },
        { name: "Pencil Product 3", price: "10.00", image: pencilImage, description: "A high-quality pencil for all your writing needs." },
    ];


    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="all-products">
            <div className="container">
                <h2>All Products</h2>
                <div className="product-grid">
                    {filteredProducts.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.image} alt={product.name} />
                            <h6>{product.name}</h6>
                            <p className="description">{product.description}</p>
                            <p className="price">{product.price}</p>
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    ))}
                </div>
                {filteredProducts.length === 0 && <p>No products found matching your search.</p>}
            </div>
        </section>
    );
};

export default AllProducts;
