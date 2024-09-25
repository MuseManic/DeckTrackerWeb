import { useState, useEffect } from 'react';
import CardBack from '../assets/magiccardback.jpeg';

function About() {
  const [showAbout2, setShowAbout2] = useState(false);

  // Show About2 after a delay (e.g., 5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAbout2(true);
    }, 5000); // Delay of 5 seconds (5000 ms)

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <>
      <About1 />
      {showAbout2 && <About2 />}
    </>
  );
}

function About1() {
  const numberOfImages = 10;

  // Function to generate a random position
  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * (window.innerWidth));
    const y = Math.floor(Math.random() * (window.innerHeight));
    const randomDirection = Math.floor(Math.random() * 360);
    return { x, y, randomDirection };
  };

  // Generate an array of image positions
  const imagePositions = Array.from({ length: numberOfImages }).map(() => getRandomPosition());

  return (
    <div className="relative w-full h-screen">
      {imagePositions.map((position, index) => (
        <img
          key={index}
          src={CardBack}
          alt="Magic Card Back"
          className="absolute animate-bunch"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '100px', // Adjust size as needed
            height: 'auto',
            transform: `rotate(${position.randomDirection}deg)`, // Optional: You can add random rotation here if desired
          }}
        />
      ))}
    </div>
  );
}

function About2() {
  // Function to moveå each card and reveal the about text
  const getMoveAndDisplay = () => {
    const y = 25;
    return { y };
  };

  const imagePositions2 = Array.from({ length: 10 }).map(() => getMoveAndDisplay());

  return (
    <div className="relative w-full h-screen">
      {imagePositions2.map((position2, index) => (
        <img
          key={index}
          src={CardBack}
          alt="Magic Card Back"
          className="absolute animate-moveTop"
          style={{
            left:'100px',
            top: `${position2}px`,
            width: '100px', // Adjust size as needed
            height: 'auto',
          }}
        />
      ))}
    </div>
  );
}

export default About;
