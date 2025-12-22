import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCategories from './components/ProductCategories';
import RecommendedProducts from './components/RecommendedProducts';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import PyramidProducts from './components/PyramidProducts';
import BraceletProducts from './components/BraceletProducts';
import PencilProducts from './components/PencilProducts';
import AboutUs from './components/AboutUs';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
    alert('Item added to cart!');
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    navigate('/products/all'); // Navigate to all products page on search
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} onSearchSubmit={handleSearchSubmit} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ProductCategories />
                <RecommendedProducts handleAddToCart={handleAddToCart} />
              </>
            } />
            <Route path="/products/all" element={<AllProducts handleAddToCart={handleAddToCart} searchQuery={searchQuery} />} />
            <Route path="/products/pyramid" element={<PyramidProducts handleAddToCart={handleAddToCart} />} />
            <Route path="/products/bracelet" element={<BraceletProducts handleAddToCart={handleAddToCart} />} />
            <Route path="/products/pencil" element={<PencilProducts handleAddToCart={handleAddToCart} />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
