import React from 'react';
import './Header.css';
import FancyTitle from './FancyTitle';
import ScaleLetterText from './ScaleLetterText';
import LetterPullUp from './LetterPullUp';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const heroImages = [
    "/hero_slide_1.jpg",
    "/hero_slide_2.jpg",
    "/hero_slide_3.jpg"
];

const Header = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="header-container">
            <div className="banner-wrapper">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentImage}
                        src={heroImages[currentImage]}
                        alt="Get Booked Kit Banner"
                        className="banner-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
                <div className="banner-title-overlay">
                    <ScaleLetterText text="THE GET BOOKED KIT" className="banner-title-animated" />
                </div>
            </div>
            <div className="header-content fade-in">
                <div className="icon-wrapper">
                    <span className="header-icon">✨</span>
                </div>

                <h1 className="hook-title">
                    Your way to landing more speaking opportunities <span style={{ display: 'inline-block', verticalAlign: 'bottom' }}><LetterPullUp text="strategically" className="highlight-text" delay={0.5} /></span>.
                </h1>

                <div className="welcome-card">
                    <LetterPullUp
                        text="This kit gives you everything you need to find opportunities, pitch yourself professionally, and turn every stage into leads. No more guessing. No more Googling. Just a clear system you can use again and again."
                        words={true}
                        delay={0.2}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
