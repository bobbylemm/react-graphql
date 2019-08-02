import React from 'react';
import HeroSection from '../../components/heroSection/HeroSection';
import BasketCard from '../../components/basketCard';
import AccordionSection from '../../components/accordion';
import ProductCard from '../../components/productCards';

const Homepage = () => {
    return (
        <div className="home">
            <HeroSection>
                <BasketCard />
            </HeroSection>
            <AccordionSection />
            <ProductCard />
        </div>
    );
};
export default Homepage;
