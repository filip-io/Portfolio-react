import { useEffect } from 'react'
import ExperienceData from '../assets/experience.json'
import siemensLogo from '../assets/siemens_logo.png'
import inetLogo from '../assets/inet.jpg'
import boschSiemensLogo from '../assets/boschsiemens.jpg'
import internChinaLogo from '../assets/internchina.jpg'
import candyKingLogo from '../assets/candyking.jpg'
import lfvLogo from '../assets/lfv.jpg'

// To return correct company logo according to 'imgSrc' property in experience.json 
function getImageSrc(imgSrc) {
    switch (imgSrc) {
        case 'siemensLogo':
            return siemensLogo;
        case 'inetLogo':
            return inetLogo;
        case 'boschSiemensLogo':
            return boschSiemensLogo;
        case 'internChinaLogo':
            return internChinaLogo;
        case 'candyKingLogo':
            return candyKingLogo;
        case 'lfvLogo':
            return lfvLogo;
        default:
            return '';
    }
}

export default function Experience() {
    return (
        <main>
            <header>
                <div className="experience-title">
                    <h2 className="section-title">Experience</h2>
                </div>
            </header>
            <article className="experience-container">
                {ExperienceData.experience.map((xp) => (
                    <div key={xp.id} className="experience-container-content">
                        <div className="experience-description">
                            <h2>{xp.title}</h2>
                            <p>{xp.company}</p>
                            <h3>{xp.location}</h3>
                            <a className="experience-btn" href={`#experience-${xp.id}-modal`}>More info</a>
                            <div id={`experience-${xp.id}-modal`} className="modal">
                                <div className="modal-content">
                                    <a href={`#${xp.id}`} className="modal-close">&times;</a>
                                    <h2>{xp.modal.title}</h2>
                                    <h3>{xp.modal.company}</h3>
                                    <h4>{xp.modal.years}</h4>
                                    <p>Areas of responsibility:</p>
                                    <ul className="experience-modal-list">
                                        {xp.modal.responsibilities.map((responsibility) => (
                                            <li key={xp.id}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="experience-img-wrapper">
                            <img src={getImageSrc(xp.imgSrc)} alt={`${xp.company} logo`} />
                        </div>
                    </div>
                ))}
            </article>
            <a className="btn" href="#">To top ↑</a>
        </main>
    );
}