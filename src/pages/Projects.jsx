import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProjectsData from '../assets/projects.json';

export default function Projects() {
    const [loading, setLoading] = useState(false);
    const [repositories, setRepositories] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchRepositories = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.github.com/users/filip-io/repos');
            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }
            const data = await response.json();
            setRepositories(data);
            setErrorMessage(''); // Reset error message on successful fetch
        } catch (error) {
            console.error('Error fetching repositories:', error);
            setErrorMessage('Failed to load repositories. Please try again later.');
        }
        setLoading(false);
    };

    const excludedRepoNames = ['AudialAtlasService', 'Mini_project-API', 'BankNyBank'];

    const filteredRepositories = repositories.filter(repo => !excludedRepoNames.includes(repo.name));
    const sortedRepositories = filteredRepositories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return (
        <main>
            <header>
                <div className="projects-title">
                    <h2 className="section-title">Projects</h2>
                </div>
            </header>
            <article className="projects-container">
                {ProjectsData.Projects.map((proj, index) => (
                    <div className="project-container-left" key={proj.title}>
                        <div className="projects-img-wrapper">
                            <img src={proj.imgLink} alt={`${proj.title} logo`} />
                        </div>
                        <div className="project-description">
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                            <a className="btn" href={`#project-${proj.id}-modal`}>More info</a>
                            <div id={`project-${proj.id}-modal`} className="modal">
                                <div className="modal-content">
                                    <a href={`#${index}`} className="modal-close">&times;</a>
                                    <h2>{proj["modal-title"]}</h2>
                                    {proj["modal-description"].map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                    {proj.url && (
                                        <p>Go to site: <a href={proj.url} target="_blank" rel="noopener noreferrer">{proj.urlText}</a></p>
                                    )}
                                    {proj.componentUrl && (
                                        <p><NavLink to={proj.componentUrl}>Show gallery</NavLink></p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </article>
            <article className="projects-container">
                {!loading && repositories.length === 0 && !errorMessage && (
                    <button className="btn" onClick={fetchRepositories}>Load GitHub Repositories</button>
                )}
                {loading && <p>Loading repositories...</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </article>
            <article className="projects-container">
                {sortedRepositories.map((repo) => (
                    <div className="project-container-left" key={repo.id}>
                        <div className="projects-img-wrapper">
                            <img src="../src/assets/git.jpg" alt="Repository logo" />
                        </div>
                        <div className="project-description">
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <a className="btn" href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    </div>
                ))}
            </article>
            <a className="btn" href="#">To top ↑</a>
        </main>
    );
}