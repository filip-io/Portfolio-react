import EducationData from '../assets/education.json'

export default function Education() {
    return (
            <main>
                <article className="education-container">
                    <header>
                        <div className="education-title">
                            <h2 className="section-title">Education</h2>
                        </div>
                    </header>
                    {EducationData.education.map((edu, index) => (
                        <div className="education-container-content" key={edu.title}>
                            <div className="education-description">
                                <h2>{edu.title}</h2>
                                <p>{edu.institution}</p>
                                <h3>{edu.location}</h3>

                                <a className="education-btn" href={`#education-${edu.id}-modal`}>More info</a>
                                <div id={`education-${edu.id}-modal`} className="modal">
                                    <div className="modal-content">
                                        <a href={`#${index}`} className="modal-close">&times;</a>
                                        <h2>{edu.modal.title}</h2>
                                        <h3>{edu.modal.institution}</h3>
                                        <h4>{edu.modal.years}</h4>
                                        <ul>
                                            <li>{edu.modal.description}</li>
                                            {edu.modal.highlights.map((highlight, i) => (
                                                <li key={i}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="education-img-wrapper">
                                <img src={edu.imgSrc} alt={`${edu.institution} logo`} />
                            </div>
                        </div>
                    ))}
                </article>
                <a className="btn" href="#">To top ↑</a>
            </main>
    );
}
