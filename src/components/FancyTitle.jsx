import React, { useRef, useEffect, useState } from 'react';

const FancyTitle = () => {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Handle mouse movement to update cursor position state
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const text = "The Get Booked Kit";

    // Split text into words to handle "Get" in italics separately if needed, 
    // but for the proximity effect, letter-by-letter is best.
    // We'll treat "Get" specially to keep the italic style.

    const renderLetter = (char, index, isItalic = false) => {
        const letterRef = useRef(null);
        const [weight, setWeight] = useState(400); // Default weight

        useEffect(() => {
            if (!letterRef.current) return;

            const updateWeight = () => {
                const rect = letterRef.current.getBoundingClientRect();
                const letterX = rect.left + rect.width / 2;
                const letterY = rect.top + rect.height / 2;

                // Calculate distance
                const dist = Math.sqrt(
                    Math.pow(mousePos.x - letterX, 2) +
                    Math.pow(mousePos.y - letterY, 2)
                );

                // Proximity configuration
                const maxDist = 200; // Interaction radius
                const minWeight = 400;
                const maxWeight = 900;

                if (dist < maxDist) {
                    // Calculate weight based on distance (closer = heavier)
                    // Cosine interpolation for smoother falloff
                    const normalizedDist = 1 - (dist / maxDist);
                    // Easing 
                    const curve = Math.pow(normalizedDist, 2);

                    const newWeight = minWeight + (maxWeight - minWeight) * curve;
                    setWeight(newWeight);
                } else {
                    setWeight(minWeight);
                }
            };

            // Use requestAnimationFrame for smooth updates
            let animationFrameId;
            const animate = () => {
                updateWeight();
                animationFrameId = requestAnimationFrame(animate);
            };

            animate();

            return () => cancelAnimationFrame(animationFrameId);
        }, [mousePos]);

        const style = {
            fontVariationSettings: `'wght' ${weight}`,
            fontWeight: weight, // Fallback
            display: 'inline-block',
            transition: 'font-variation-settings 0.1s ease', // Smooth transition
            fontStyle: isItalic ? 'italic' : 'normal',
            color: isItalic ? 'var(--color-accent-brown)' : 'var(--color-text-primary)'
        };

        return (
            <span key={index} ref={letterRef} style={style}>
                {char}
            </span>
        );
    };

    return (
        <h1 className="main-title" ref={containerRef} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.2em' }}>
            {/* "The" */}
            <span style={{ display: 'flex' }}>
                {['T', 'h', 'e'].map((char, i) => renderLetter(char, `the-${i}`))}
            </span>

            {/* "Get" (Italic) */}
            <span style={{ display: 'flex' }}>
                {['G', 'e', 't'].map((char, i) => renderLetter(char, `get-${i}`, true))}
            </span>

            {/* "Booked" */}
            <span style={{ display: 'flex' }}>
                {['B', 'o', 'o', 'k', 'e', 'd'].map((char, i) => renderLetter(char, `booked-${i}`))}
            </span>

            {/* "Kit" */}
            <span style={{ display: 'flex' }}>
                {['K', 'i', 't'].map((char, i) => renderLetter(char, `kit-${i}`))}
            </span>
        </h1>
    );
};

export default FancyTitle;
