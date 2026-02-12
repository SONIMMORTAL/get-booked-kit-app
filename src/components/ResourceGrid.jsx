import React from 'react';
import './ResourceGrid.css';
import LetterPullUp from './LetterPullUp';

const resources = [
    {
        title: "Speaking Opportunity Research Mega Prompt",
        description: "Use AI to find 50+ speaking opportunities in under 30 minutes",
        image: "/resource_mega_prompt_1770926532123.png",
        link: "https://docs.google.com/document/u/2/d/1Q4fuamCCQhQNHyoSrNh0P2KSNtScb-IZ/copy"
    },
    {
        title: "The Speaker’s Vault",
        description: "60+ speaking opportunities across industries; including conferences, panels, summits, and podcasts (updated monthly)",
        image: "/resource_speaker_vault_1770926546548.png",
        link: "https://docs.google.com/spreadsheets/d/1xhnDaJKMEVLjU6UIClVramVQSPtXaZMR/edit?usp=sharing&ouid=112033106492854075084&rtpof=true&sd=true"
    },
    {
        title: "Speaker One-Sheet Guide",
        description: "Know exactly what to include + grab editable templates",
        image: "/resource_one_sheet_v2_1770926568695.png",
        link: "https://drive.google.com/file/d/1h5Z2lC_OW71R6xRv1IARRJbliBYEzc7I/view?usp=share_link"
    },
    {
        title: "Pitch Email Template",
        description: "Ready-to-send emails for conferences, workshops, and podcasts",
        image: "/resource_pitch_email_final_1770926622838.png",
        link: "https://docs.google.com/document/u/2/d/1hZJHSkEr3EA_P86ChS_jJA8ZZpHhDmTe/copy"
    },
    {
        title: "Lead Management Formula Worksheet",
        description: "Create an irresistible resource to capture leads from stage",
        image: "/resource_lead_formula_1770926594771.png",
        link: "https://docs.google.com/document/u/2/d/1RKf3nYw__2BjyK7dhDb6nVxdqsSicuQh/copy"
    },
    {
        title: "Email Sequence Guide",
        description: "Nurture new subscribers from \"just met you\" to \"ready to buy”",
        image: "/resource_email_sequence_final_1770926635114.png",
        link: "https://docs.google.com/document/d/18XjTlFR4PDEnSSHvXGlMOawdr9xz3lRT/copy"
    }
];

const ResourceGrid = () => {
    return (
        <section className="resource-section fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="section-title">Your Resources</h3>
            <div className="resource-grid">
                {resources.map((resource) => (
                    <a key={resource.id} href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-card">
                        <div className="card-image-wrapper">
                            <img src={resource.image} alt={resource.title} className="card-image" />
                        </div>
                        <div className="card-content">
                            <h4>{resource.title}</h4>
                            <p>{resource.description}</p>
                            <span className="access-link">Access Resource →</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ResourceGrid;
