import React from 'react';
import './Nav.css'
import image from '../../assets/latte.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Nav = () => {
const style ={ 
  textDecoration : "none"
}

    return (
      <>
      <div className="header">
        <div className="logo-container">
          <img className="img" src={image} alt="logo" />
          <h4 className="logo">Logo</h4>
        </div>
            <nav className="nav">
          <ul className="nav-links">
           <Link style={style} to="/"><li><a href="#card1">Home</a></li></Link>
            <Link style={style}><li><a  href="#card2">About</a></li></Link>
           <Link style={style}> <li><a  href="#card3">Contact </a></li></Link>
            <Link style={style} to='/profile'><li><a  href="#card4">Profile</a></li></Link>
          </ul>
        </nav>
        </div>
        </>
    )
}

export default Nav
