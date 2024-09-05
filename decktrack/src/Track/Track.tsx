
import CardBack from '../assets/magiccardback.jpeg';



function ScatteredImages() {
  // Number of images to display
  const numberOfImages = 10;

  // Function to generate a random position
  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
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
          className="absolute"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '100px', // Adjust size as needed
            height: 'auto',
            transform: 'rotate(0deg)', // Optional: You can add random rotation here if desired
          }}
        />
      ))}
    </div>
  );
}

export default ScatteredImages;
