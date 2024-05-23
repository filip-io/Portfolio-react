import { useState } from 'react';
import educationData from '../assets/education.json';
import chasLogo from '../assets/chas.jpg';
import sihLogo from '../assets/sih.png';
import dalarnaLogo from '../assets/dalarna.jpg';
import suLogo from '../assets/su.jpg';
import ScrollToTopButton from '../components/ScrollToTopButton';
import EducationModal from '../components/EducationModal'

export default function Education() {
    const [openModal, setOpenModal] = useState(null);

    const openEducationModal = (id) => {
        setOpenModal(id);
    };

    const closeEducationModal = () => {
        setOpenModal(null);
    };

    return (
        <main>
            <article className="education-container">
                <header>
                    <div className="education-title">
                        <h2 className="section-title">Education</h2>
                    </div>
                </header>
                {educationData.education.map((edu) => (
                    <div key={edu.id} className="education-container-content">
                        <div className="education-description">
                            <h2>{edu.title}</h2>
                            <p>{edu.institution}</p>
                            <h3>{edu.location}</h3>
                            <button className="btn" onClick={() => openEducationModal(edu.id)}>More info</button>
                            <EducationModal
                                isOpen={openModal === edu.id}
                                onClose={closeEducationModal}
                                title={edu.modal.title}
                                institution={edu.modal.institution}
                                years={edu.modal.years}
                                description={edu.modal.description}
                                highlights={edu.modal.highlights}
                            />
                        </div>
                        <div className="education-img-wrapper">
                            {edu.imgSrc === 'chasLogo' && <img src={chasLogo} alt={`${edu.institution} logo`} />}
                            {edu.imgSrc === 'sihLogo' && <img src={sihLogo} alt={`${edu.institution} logo`} />}
                            {edu.imgSrc === 'dalarnaLogo' && <img src={dalarnaLogo} alt={`${edu.institution} logo`} />}
                            {edu.imgSrc === 'suLogo' && <img src={suLogo} alt={`${edu.institution} logo`} />}
                        </div>
                    </div>
                ))}
                <ScrollToTopButton className="btn" />
            </article>
        </main>
    );
}