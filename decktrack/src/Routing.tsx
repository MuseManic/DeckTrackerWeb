import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Track from './Track/Track';
import Contact from './Contact/Contact';
import { Link } from 'react-router-dom';
import CardBack from './assets/magiccardback.jpeg';

function Routing() {
  return (
 
    <>

<Navbar/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/track" element={<Track />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    
    </>
  
   
  );
}

function Navbar() {
  return (
    <div className="w-full bg-blue-300 p-2">
        <div className="flex justify-left">
        <Link to="/" className='justify-center'><img src={CardBack} className='w-12'></img></Link>
        </div>
      <div className="flex justify-center">
        <Link to="/track" className="font-bold rounded m-2 p-4 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-cyan-400">
          Track
        </Link>
        <Link to="/about" className="font-bold rounded m-2 p-4 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-cyan-400">
          About
        </Link>
        <Link to="/contact" className="font-bold rounded m-2 p-4  border-2 border-solid border-blue-700 bg-blue-500 hover:bg-cyan-400">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Routing;
