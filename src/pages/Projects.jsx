import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import projectsData from '../assets/projects.json'
import audialAtlasLogo from '../assets/audial_atlas_logo.jpg'
import apiLogo from '../assets/api.jpg'
import bankLogo from '../assets/bank.jfif'
import siemensLogo from '../assets/siemens.jpg'
import gitHubLogo from '../assets/git.jpg'

export default function Projects() {
    const [loading, setLoading] = useState(false);
    const [repositories, setRepositories] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchRepositories = async () => {
        setLoading(true);

        setTimeout(async () => {
            try {
                const response = await fetch('https://api.github.com/users/filip-io/repos');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                else {
                    const data = await response.json();
                    setRepositories(data);
                    setErrorMessage('');
                }

            } catch (error) {
                console.error('Error fetching repositories:', error);
                setErrorMessage('Failed to load repositories. Please try again later.');
            }
            setLoading(false);
        }, 2000);
    };

    // Exclude already rendered projects from the github repos to avoid duplicates
    const excludedRepoNames = ['AudialAtlasService', 'Mini_project-API', 'BankNyBank', 'Portfolio-react'];
    const filteredRepositories = repositories.filter(repo => !excludedRepoNames.includes(repo.name));

    // Sort repos by date
    const sortedRepositories = filteredRepositories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return (
        <main>
            <header>
                <div className="projects-title">
                    <h2 className="section-title">Projects</h2>
                </div>
            </header>
            <article className="projects-container">
                {projectsData.Projects.map((proj, index) => (
                    /*  Render each project on either left or right side accordin to it's index. 
                        Accomplished by different CSS styling for each div*/
                    <div className={`project-container-${index % 2 === 0 ? 'left' : 'right'}`} key={proj.id}>
                        <div className="projects-img-wrapper">
                            {/* Conditionally render specific logo depending on property value of 'imgSrc' using short circuit behaviour of operator '&&'
                            Will only render if property value of 'imgSrc' match (equals 'true'), otherwise will skip the img component and not render */}
                            {proj.imgSrc === 'audialAtlasLogo' && <img src={audialAtlasLogo} alt={`${proj.title} logo`} />}
                            {proj.imgSrc === 'apiLogo' && <img src={apiLogo} alt={`${proj.title} logo`} />}
                            {proj.imgSrc === 'bankLogo' && <img src={bankLogo} alt={`${proj.title} logo`} />}
                            {proj.imgSrc === 'siemensLogo' && <img src={siemensLogo} alt={`${proj.title} logo`} />}
                        </div>
                        <div className="project-description">
                            <h2>{proj.title}</h2>
                            <p>{proj.description}</p>
                            <a className="btn" href={`#project-${proj.id}-modal`}>More info</a>
                            <div id={`project-${proj.id}-modal`} className="modal">
                                <div className="modal-content">
                                    <a href={`#${index}`} className="modal-close">&times;</a>
                                    <h2>{proj["modal-title"]}</h2>
                                    {proj["modal-description"].map((desc, index) => (
                                        <p key={`${proj.id}-${index}`}>{desc}</p>
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
                {loading && <div className="spinner"></div>}
                {errorMessage && <p>{errorMessage}</p>}
            </article>
            <article className="projects-container">
                {sortedRepositories.map((repo, index) => (
                    <div className={`project-container-${index % 2 === 0 ? 'left' : 'right'}`} key={repo.id}>
                        <div className="projects-img-wrapper">
                            <img src={gitHubLogo} alt="GitHub logo" />
                        </div>
                        <div className="project-description">
                            <h2>{repo.name}</h2>
                            <p>{repo.description}</p>
                            <a className="btn" href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    </div>
                ))}
                <a className="btn" href="#">To top ↑</a>
            </article>
        </main>
    );
}