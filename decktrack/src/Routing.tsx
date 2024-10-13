import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Track from './Track/Track';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import CardBack from './assets/magiccardback.jpeg';

function Routing() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  // Function to toggle the visibility of the navbar and image
  const handleToggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <>
      {/* Conditionally render the image or the navbar based on the state */}
      {!navbarVisible ? (
        <div className="flex justify-center mt-4">
          {/* Image that shows the navbar when clicked */}
          <img 
            src={CardBack} 
            className="w-12 cursor-pointer animate-slideDown" 
            alt="Card Back" 
            onClick={handleToggleNavbar} 
          />
        </div>
      ) : (
        <Navbar onImageClick={handleToggleNavbar} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/track" element={<Track />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/*<Route path="/register" element={<Register />} />*/}
      </Routes>
    </>
  );
}

// Define the props interface for Navbar
interface NavbarProps {
  onImageClick: () => void; // This defines that onImageClick is a function that takes no arguments and returns void
}

function Navbar( { onImageClick }: NavbarProps) {
  return (
    <div className="w-full bg-blue-300 p-2 animate-slideDown">
      <div className="flex justify-center">
        
          {/* Image that hides the navbar when clicked */}
          <img 
            src={CardBack} 
            className="w-12 cursor-pointer" 
            alt="Card Back" 
            onClick={onImageClick} 
          />
        
        <h1 className="text-black text-2xl font-bold mt-4">Deck Tracker</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex">
          <Link to="/login" className="font-bold rounded m-2 p-4 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-cyan-400">
            Login
          </Link>
          <Link to="/track" className="font-bold rounded m-2 p-4 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-cyan-400">
            Track
          </Link>
          <Link to="/about" className="font-bold rounded m-2 p-4 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-cyan-400">
            About
          </Link>
          <Link to="/contact" className="font-bold rounded m-2 p-4 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-cyan-400">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Routing;
