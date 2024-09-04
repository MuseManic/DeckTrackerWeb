import CardBack from '../assets/magiccardback.jpeg';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Track from '../Track/Track';
import { Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        <LoadImage />
        <DiagonalBanner />
      </div>
      <Navigate /> {/* Ensure routes are included */}
    </>
  );
}

function Navigate() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/track" element={<Track />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function DiagonalBanner() {
  return (
    <div className="absolute w-full h-48 bg-black transform rotate-45 flex justify-center items-center">
      <h1 className="text-white text-6xl font-bold">Deck Tracker</h1>
    </div>
  );
}

function LoadImage() {
  return (
    <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
      <img src={CardBack} alt="Magic Card Back" className="max-w-xs" />
    </div>
  );
}

function Navbar() {
  return (
    <div className="w-full bg-blue-300 p-2">
      <div className="flex justify-center">
        <Link to="/track" className="font-bold rounded m-2 p-6 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-cyan-400">
          Track
        </Link>
        <Link to="/about" className="font-bold rounded m-2 p-6 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-cyan-400">
          About
        </Link>
        <Link to="/contact" className="font-bold rounded m-2 p-6 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-cyan-400">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Home;
