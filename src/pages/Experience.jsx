import { useState } from 'react';
import experienceData from '../assets/experience.json';
import devcoreLogo from '../assets/devcore.jpg'
import siemensLogo from '../assets/siemens_logo.png';
import inetLogo from '../assets/inet.jpg';
import boschSiemensLogo from '../assets/boschsiemens.jpg';
import internChinaLogo from '../assets/internchina.jpg';
import candyKingLogo from '../assets/candyking.jpg';
import lfvLogo from '../assets/lfv.jpg';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ExperienceModal from '../components/ExperienceModal';

const imageMap = {
    devcoreLogo,
    siemensLogo,
    inetLogo,
    boschSiemensLogo,
    internChinaLogo,
    candyKingLogo,
    lfvLogo
};

export default function Experience() {
    const [openModal, setOpenModal] = useState(null);

    const openExperienceModal = (id) => {
        setOpenModal(id);
    };

    const closeExperienceModal = () => {
        setOpenModal(null);
    };

    const renderExperienceImage = (imgSrc) => {
        return imageMap[imgSrc] ? <img src={imageMap[imgSrc]} alt={`${imgSrc} logo`} /> : null;
    };

    return (
        <main>
            <header>
                <div className="experience-title">
                    <h2 className="section-title">Experience</h2>
                </div>
            </header>
            <article className="experience-container">
                {experienceData.experience.map((xp) => (
                    <div key={xp.id} className="experience-container-content">
                        <div className="experience-description">
                            <h2>{xp.title}</h2>
                            <p>{xp.company}</p>
                            <h3>{xp.location}</h3>
                            <button className="btn" onClick={() => openExperienceModal(xp.id)}>More info</button>
                            <ExperienceModal
                                isOpen={openModal === xp.id}
                                onClose={closeExperienceModal}
                                title={xp.modal.title}
                                company={xp.modal.company}
                                years={xp.modal.years}
                                responsibilities={xp.modal.responsibilities}
                            />
                        </div>
                        <div className="experience-img-wrapper">
                            {renderExperienceImage(xp.imgSrc)}
                        </div>
                    </div>
                ))}
                <ScrollToTopButton className="btn" />
            </article>
        </main>
    );
}