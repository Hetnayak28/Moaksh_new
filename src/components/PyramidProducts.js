import React from 'react';
import pyramidImage1 from '../assets/images/pyramid 1.jpg';
import pyramidImage2 from '../assets/images/pyramid 2.jpg';

const PyramidProducts = ({ handleAddToCart }) => {
    const products = [
        { name: "Pyramid Product 1", price: "100.00", image: pyramidImage1, description: "This is the first pyramid product." },
        { name: "Pyramid Product 2", price: "150.00", image: pyramidImage2, description: "This is the second pyramid product." },
        // Add more pyramid products here with their respective images
    ];

    return (
        <section className="pyramid-products">
            <div className="container">
                <h2>Pyramid Products</h2>
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
                {products.length === 0 && <p>No pyramid products found.</p>}
            </div>
        </section>
    );
};

export default PyramidProducts;
