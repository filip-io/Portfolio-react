import { useEffect } from 'react';

function EducationModal({ isOpen, onClose, title, institution, years, description, highlights }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleClickOutside = (event) => {
        if (event.target.className === 'modal') {
            onClose();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape' || event.keyCode === 27) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal" onClick={handleClickOutside}>
            <div className="modal-content">
                <div className="modal-close-container">
                    <button className="modal-close" onClick={onClose}>&times;</button>
                </div>
                <h2>{title}</h2>
                <h3>{institution}</h3>
                <h4>{years}</h4>
                <p>{description}</p>
                <ul>
                    {highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EducationModal;