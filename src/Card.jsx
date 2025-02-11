import React from 'react';
import { useState} from 'react';
// import Select from 'react-select';
import './Card.css';

const gifs = [
  { src: 'gifs/milk-mocha-blow-kisses.gif', caption: 'KISSES' },
  { src: 'gifs/milk-mocha-chomp.gif', caption: '*chomp*' },
  { src: 'gifs/milk-mocha-giggle.gif', caption: 'me when I see you' },
  { src: 'gifs/milk-mocha-jump.gif', caption: 'HIII' },
  { src: 'gifs/milk-mocha-hearts.gif', caption: 'I luv yew!!' },
  { src: 'gifs/milk-mocha-kisses.gif', caption: 'kiss kiss kiss' },
  { src: 'gifs/milk-mocha-run.gif', caption: 'huggggg' },
  { src: 'gifs/milk-mocha-dreaming.gif', caption: 'dreaming of you' },
  { src: 'gifs/milk-mocha-please.gif', caption: 'wanna grab dinner??' },
  { src: 'gifs/milk-mocha-tea.gif', caption: 'spilling all the tea' },
  { src: 'gifs/milk-mocha-texting.gif', caption: 'kicking my feet' }
];

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gifIndex, setGifIndex] = useState(0);
  const [showGif, setShowGif] = useState(false);
  const [isFullyOpen, setIsFullyOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullyOpen(true);
    }, 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsFullyOpen(false);
    setShowGif(false);
  };

  const handleGifChange = () => {
    setGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    setShowGif(true);
  };

  return (
    <div className="card-container">
      <div className={`card ${isOpen ? 'open' : ''}`}>
        <div className="card-front">
          <h1>Happy Birthday!!</h1>
          <h2>(sort of)</h2>
          <button onClick={handleOpen}>Open Card</button>
        </div>
        <div className="card-inside-left">
          <button onClick={handleGifChange}>
            {showGif ? 'Click!' : 'Just some button'}
          </button>
          {showGif ? (
            <>
              <img src={gifs[gifIndex].src} alt="GIF" className="gif" />
              <p>{gifs[gifIndex].caption}</p>
            </>
          ) : (
            <p>Stomp on the button. Perchance.</p>
          )}
        </div>
        <div className="card-inside-right">
          <p>Yifan, I'm bear-y glad for all the time we've had together so far! (get it?) I love you lots and I can't wait to get to know you even more.</p>
          <p>Happy two years, bun💖</p>
        </div>
        {isFullyOpen && <button className="close-button" onClick={handleClose}>Close Card</button>}
      </div>
    </div>
  );
};

export default Card;

// const Card = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   return (
//     <div className="card-container">
//       <div className={`card ${isOpen ? 'open' : ''}`}>
//         <div className="card-front">
//           <h1>Happy Two Years!!</h1>
//           <button onClick={handleOpen}>Open Card</button>
//         </div>
//         <div className="card-inside-left">
//           <p>Happy Anniversary! 💖</p>
//         </div>
//         <div className="card-inside-right">
//           <p>Here's to many more wonderful years together!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;