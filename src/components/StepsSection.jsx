import React from 'react';
import './StepsSection.css';

const steps = [
    {
        number: 1,
        text: "Start with the Speaker’s Vault — find your first 20 opportunities"
    },
    {
        number: 2,
        text: "Use the Speaker One-Sheet Guide to create your professional assets"
    },
    {
        number: 3,
        text: "Pick your top 5 opportunities and customize the Pitch Email Templates"
    },
    {
        number: 4,
        text: "Create your Lead Magnet using the worksheet so you're ready to capture leads"
    },
    {
        number: 5,
        text: "Set up your Welcome Sequence so new subscribers hear from you immediately"
    }
];

const StepsSection = () => {
    return (
        <section className="steps-section fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="section-title">How to Use This Kit</h3>
            <div className="steps-container">
                {steps.map((step) => (
                    <div key={step.number} className="step-item">
                        <div className="step-number">{step.number}</div>
                        <div className="step-content">
                            <p>{step.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StepsSection;
