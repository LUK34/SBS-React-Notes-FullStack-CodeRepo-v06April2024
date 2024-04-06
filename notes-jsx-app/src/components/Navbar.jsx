import { Link } from 'react-router-dom';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/"><h2 className="primary-color">Notes App</h2></Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add" className="ml-3">New Note</Link>
      </div>
    </nav>
  );
}

export default Navbar
