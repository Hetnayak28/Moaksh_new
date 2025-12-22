import React from 'react';
import { Link } from 'react-router-dom';
import allProductsImage from '../assets/images/pyramid 1.jpg'; // Using pyramid 1 for all products for now
import pyramidImage from '../assets/images/pyramid 2.jpg';
import braceletImage from '../assets/images/bracelet 1.jpg';
import pencilImage from '../assets/images/pencile 1.jpg'; // Using bracelet 2 for pencil for now

const ProductCategories = () => {
    const productTypes = [
        { name: "All Products", path: "/products/all", image: allProductsImage },
        { name: "Pyramid", path: "/products/pyramid", image: pyramidImage },
        { name: "Bracelet", path: "/products/bracelet", image: braceletImage },
        { name: "Pencil", path: "/products/pencil", image: pencilImage }
    ];

    const renderCategoryGroup = (title, items) => (
        <div className="category-group">
            <h5>{title}</h5>
            <div className="category-grid">
                {items.map((item, index) => (
                    <Link to={item.path} key={index} className="category-card">
                        <img src={item.image} alt={item.name} />
                        <h6>{item.name}</h6>
                    </Link>
                ))}
            </div>
        </div>
    );

    return (
        <section className="product-categories">
            <div className="container">
                {renderCategoryGroup("Product Categories", productTypes)}
            </div>
        </section>
    );
};

export default ProductCategories;
