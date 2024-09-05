import CardBack from '../assets/magiccardback.jpeg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center overflow-hidden">

      <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <ImageContainer/>
        <DiagonalBanner1 />
      </div>
    </div>
  );
}

function DiagonalBanner1() {
  return (
    <div className="animate-fadeIn absolute w-full h-48 bg-black transform rotate-45 flex justify-center items-center">
      <h1 className="animiate-fadeIn text-white text-6xl font-bold">Deck Tracker</h1>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="flex justify-center items-center space-x-4">
      <LoadImage />
      <LoadImage2 />
      <LoadImage3 />
      <LoadImage4 />
    </div>
  );
}

function LoadImage() {
  return (
    <div className="animate-org transform rotate-45">
      <img src={CardBack} alt="Magic Card Back" className="max-w-xs" />
    </div>
  );
}

function LoadImage2() {
  return (
    <div className="animate-org2 transform rotate-45">
      <img src={CardBack} alt="Magic Card Back" className="max-w-xs" />
    </div>
  );
}

function LoadImage3() {
  return (
    <div className="animate-org3 transform rotate-45">
      <img src={CardBack} alt="Magic Card Back" className="max-w-xs" />
    </div>
  );
}

function LoadImage4() {
  return (
    <div className="animate-org4 transform rotate-45">
      <img src={CardBack} alt="Magic Card Back" className="max-w-xs" />
    </div>
  );
}



export default Home;
