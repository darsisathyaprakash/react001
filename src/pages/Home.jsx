import React from 'react';
import Hero from '../components/Hero';
import InfoCards from '../components/InfoCards';

const Home = () => {
    return (
        <div className="animate-fade-in pb-20">
            <Hero />
            <InfoCards />
        </div>
    );
};

export default Home;
