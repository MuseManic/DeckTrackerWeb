import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Track from './Track/Track';
import Contact from './Contact/Contact';

function Routing() {
  return (
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/track" element={<Track />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   
  );
}

export default Routing;
