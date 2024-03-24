import { useEffect, useState } from 'react'
import filipPic from '../assets/filip.jpg'
import dennisPic from '../assets/dennis.gif'

export const HomePage = () => {
  const [typedCharacters, setTypedCharacters] = useState('');
  const magicKeyword = 'neo';

  useEffect(() => {
    const handleMagicWord = (event) => {
      setTypedCharacters((prevTypedCharacters) => prevTypedCharacters + event.key.toLowerCase());
    };
  
    const checkMagicWord = () => {
      if (typedCharacters === magicKeyword) {
        const modal = document.getElementById('dennis');
        modal.style.display = 'block';
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
  

  useEffect(() => {
    const modal = document.getElementById('dennis');
    const closeModal = (event) => {
      if (event.target === modal || event.target.classList.contains('modal-close')) {
        modal.style.display = 'none';
      }
    };

    modal.addEventListener('click', closeModal);
    
    return () => {
      modal.removeEventListener('click', closeModal);
    };
  }, []);

  const toggleBackground = () => {
    const body = document.querySelector('.page-container');
    if (body.style.backgroundColor === 'rgb(12, 11, 37)') {
      body.style.backgroundColor = 'black';
    } else {
      body.style.backgroundColor = 'rgb(12, 11, 37)';
    }
  };

  return (
    <>
      <main className="home-main-container">
        <div className="home-main-title-container">
          <div className="home-main-container-left-box">
            <h1>Hi, I'm Filip Nilsson</h1>
            <h2>Full-Stack .NET Student</h2>
          </div>
          <div className="home-main-container-right-box">
            <img src={filipPic} alt="Picture of Filip" id="filip" className="filip-home-pic" onClick={toggleBackground} />
          </div>
        </div>
        <article className="home-intro-container">
          <div>
            <h3>A Few Tidbits About Me:</h3>
          </div>
          <div className="home-intro-box">
            <div className="h4-container">
              <div>
                <i className="fa-solid fa-keyboard fa-2xl"></i>
                <h4>Web Developer <br />(to be)</h4>
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
      </main>
      <div id="dennis" className="modal">
        <div className="modal-content">
          <a href="#" className="modal-close">&times;</a>
          <img src={dennisPic} alt="Dennis saying 'Ah ah ah, you didn't say the magic word'" />
        </div>
      </div>
    </>
  );
};