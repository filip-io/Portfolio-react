import educationData from '../assets/education.json'
import chasLogo from '../assets/chas.jpg'
import sihLogo from '../assets/sih.png'
import dalarnaLogo from '../assets/dalarna.jpg'
import suLogo from '../assets/su.jpg'

export default function Education() {
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
                            <a className="btn" href={`#education-${edu.id}-modal`}>More info</a>
                            <div id={`education-${edu.id}-modal`} className="modal">
                                <div className="modal-content">
                                    <a href={`#${edu.id}`} className="modal-close">&times;</a>
                                    <h2>{edu.modal.title}</h2>
                                    <h3>{edu.modal.institution}</h3>
                                    <h4>{edu.modal.years}</h4>
                                    <ul>
                                        <li>{edu.modal.description}</li>
                                        {edu.modal.highlights.map((highlight, index) => (
                                            <li key={`${edu.id}-${index}`}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="education-img-wrapper">
                            {edu.imgSrc === 'chasLogo' && <img src={chasLogo} alt={`${edu.institution} logo`} />}
                            {edu.imgSrc === 'sihLogo' && <img src={sihLogo} alt={`${edu.institution} logo`} />}
                            {edu.imgSrc === 'dalarnaLogo' && <img src={dalarnaLogo} alt={`${edu.institution} logo`} />}
                            {edu.imgSrc === 'suLogo' && <img src={suLogo} alt={`${edu.institution} logo`} />}
                        </div>
                    </div>
                ))}
               <a className="btn" href="#">To top ↑</a>
            </article>
        </main>
    );
}
