import { useEffect, useState } from 'react';
import MagicWordModal from '../components/MagicWordModal';
import filipPic from '../assets/filip.jpg';

export const HomePage = () => {
  const [typedCharacters, setTypedCharacters] = useState('');
  const magicKeyword = 'neo';
  const [showModal, setShowModal] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const handleMagicWord = (event) => {
      setTypedCharacters((prevTypedCharacters) => prevTypedCharacters + event.key.toLowerCase());
    };

    const checkMagicWord = () => {
      if (typedCharacters.toLowerCase() === magicKeyword) {
        setShowModal(true);
        setTypedCharacters('');
      } else if (!magicKeyword.startsWith(typedCharacters)) {
        setTypedCharacters('');
      }
    };

    document.addEventListener('keydown', handleMagicWord);

    checkMagicWord();

    return () => {
      document.removeEventListener('keydown', handleMagicWord);
    };
  }, [typedCharacters]);

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleBackground = () => {
    setBackgroundColor((prevColor) => (prevColor === '' ? 'black' : ''));
  };

  return (
    <main className="home-main-container" style={{ backgroundColor }}>
      <div className="home-main-title-container">
        <div className="home-main-container-left-box">
          <h1>Hi, I'm Filip Nilsson</h1>
          <h2>Full-stack .NET Developer</h2>
        </div>
        <div className="home-main-container-right-box">
          <img src={filipPic} alt="Picture of Filip" id="filip" className="filip-home-pic" onClick={toggleBackground} />
        </div>
        <article className="home-intro-container">
          <h3>Check out the new headless version of my portfolio <a href="https://filip-io.github.io/" target="_blank" rel="noopener noreferrer">here</a></h3>
        </article>
      </div>

      <article className="home-intro-container">
        <div>
          <h3>A Few Tidbits About Me:</h3>
        </div>
        <div className="home-intro-box">
          <div className="h4-container">
            <div>
              <i className="fa-solid fa-keyboard fa-2xl"></i>
              <h4>Web Developer</h4>
            </div>
            <div>
              <i className="fa-solid fa-face-grin-beam fa-2xl"></i>
              <h4>UX Enthusiast</h4>
            </div>
            <div>
              <i className="fa-sharp fa-solid fa-music fa-2xl"></i>
              <h4>HiFi Nerd</h4>
            </div>
          </div>
        </div>
      </article>
      <MagicWordModal isOpen={showModal} onClose={closeModal} />
    </main>
  );
};