import React from 'react';
import './heroSection.scss';

const HeroSection = ({ children }) => {
    return (
        <div className="home__hero">
            <section className="home__hero-section1">
                <h1>Zero to one</h1>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable.
                </p>
            </section>
            <section className="home__hero-section2">{children}</section>
        </div>
    );
};
export default HeroSection;
