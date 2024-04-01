import React from "react"; 
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="container mx-auto">
            <div className="navbar-brand">
                <Link to='/'></Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
