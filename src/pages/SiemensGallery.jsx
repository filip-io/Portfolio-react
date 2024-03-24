import { NavLink } from "react-router-dom";

export default function SiemensGallery() {
    return (
            <main className="home-main-container">
                <div className="home-main-title-container">
                    <div className="home-main-container-left-box">
                        <h1>SCM Nordics</h1>
                        <h2>Sharepoint</h2>
                    </div>
                    <div className="home-main-container-right-box">
                        <img src="../src/assets/siemens.jpg" alt="Siemens logo" className="siemens-gallery-icon" />
                    </div>
                </div>
                <article className="siemens-gallery-container">
                    <div className="siemens-gallery-wrapper">
                        <div><img src="../src/assets/siemens-sharepoint.png" alt="Image of Siemens sharepoint site"
                            className="siemens-gallery-img" /></div>

                        <div><img src="../src/assets/siemens-sharepoint-support.png" alt="Image of Siemens sharepoint site"
                            className="siemens-gallery-img" /></div>

                        <div><img src="../src/assets/siemens-sharepoint-ofs.png" alt="Image of Siemens sharepoint site"
                            className="siemens-gallery-img" /></div>

                        <div><img src="../src/assets/siemens-sharepoint-travel.png" alt="Image of Siemens sharepoint site"
                            className="siemens-gallery-img" /></div>
                    </div>
                    <br />
                    <NavLink to="/projects" className="btn">Back to projects</NavLink>
                    <br />
                </article>
            </main>
    );
}