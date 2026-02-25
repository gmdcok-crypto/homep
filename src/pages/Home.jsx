import React from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import SolutionSection from '../components/SolutionSection';
import SupportSection from '../components/SupportSection';

const Home = () => {
    return (
        <>
            <Hero />
            <div id="solutions"><SolutionSection /></div>
            <div id="products"><ProductSection /></div>
            <div id="support"><SupportSection /></div>
        </>
    );
};

export default Home;
