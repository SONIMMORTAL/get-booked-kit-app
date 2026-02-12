import React from 'react';
import { Mail, ArrowRight, Star, Users } from 'lucide-react';
import './UpsellSection.css';

const UpsellSection = () => {
    return (
        <section className="upsell-section fade-in" style={{ animationDelay: '0.6s' }}>

            {/* Need Help? */}
            <div className="upsell-card help-card">
                <h3 className="upsell-title"><Mail className="icon-inline" /> Need Help?</h3>
                <p>Questions about the resources? Email us at <a href="mailto:hey@otovaagency.com" className="email-link">hey@otovaagency.com</a></p>
            </div>

            <div className="upsell-row">
                {/* Visibility Verdict Intensive */}
                <div className="upsell-card service-card">
                    <h3 className="upsell-title"><Star className="icon-inline" /> Ready for More Support?</h3>
                    <p>The Get Booked Kit gives you the tools. But if you want strategic guidance and a custom roadmap built for YOUR business, check out <strong>90-day Speaker Intensive</strong>.</p>
                    <div className="service-details">
                        <p>✓ A custom 90-day visibility roadmap that tells you exactly what to do, when to do it, and why it matters</p>
                        <p>✓ 30-50 personalized speaking opportunities delivered — researched and ready to pitch</p>
                    </div>
                    <a href="https://overwhelmedtoorganizedva.com/90-day-speaker-intensive" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                        Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Signature Visibility Support */}
                <div className="upsell-card service-card highlighted">
                    <h3 className="upsell-title"><Users className="icon-inline" /> Want a Team to Handle Everything?</h3>
                    <p>If you're ready to hand off your entire visibility pipeline — speaking opportunities, email marketing, social media, all of it — our team can take it from here.</p>
                    <p className="service-details"><strong>Signature Visibility Support</strong> is our done-for-you monthly partnership for established experts.</p>
                    <a href="https://www.overwhelmedtoorganizedva.com/brand-authority-building" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                        Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <footer className="footer">
                <p>© {new Date().getFullYear()} The Get Booked Kit. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default UpsellSection;
