import ExperienceData from '../assets/experience.json';

export default function Experience() {
    return (
            <main>
                <header>
                    <div className="experience-title">
                        <h2 className="section-title">Experience</h2>
                    </div>
                </header>
                <article className="experience-container">
                    {ExperienceData.experience.map((xp, index) => (
                        <div key={index} className="experience-container-content" >
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
                                            {xp.modal.responsibilities.map((responsibility, i) => (
                                                <li key={i}>{responsibility}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="experience-img-wrapper">
                                <img src={xp.imgSrc} alt={`${xp.company} logo`} />
                            </div>
                        </div>
                    ))}
                </article>
                <a className="btn" href="#">To top ↑</a>
            </main>
    );
}