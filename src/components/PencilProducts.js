import React from 'react';
import pencilImage1 from '../assets/images/pencile 1.jpg';

const PencilProducts = ({ handleAddToCart }) => {
    const products = [
        { name: "Pencil Product 1", price: "5.00", image: pencilImage1, description: "This is the first pencil product." },
    ];

    return (
        <section className="pencil-products">
            <div className="container">
                <h2>Pencil Products</h2>
                <div className="product-grid">
                    {products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.image} alt={product.name} />
                            <h6>{product.name}</h6>
                            <p className="description">{product.description}</p>
                            <p className="price">{product.price}</p>
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    ))}
                </div>
                {products.length === 0 && <p>No pencil products found.</p>}
            </div>
        </section>
    );
};

export default PencilProducts;
