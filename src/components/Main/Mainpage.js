import React from 'react';
import './Mainpage.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Mainpage = () => {
    return (
        <div className="mainpage">  
          <Link to='/firstYear' ><button className="btn btn-warning btn-lg" >First Year</button ></Link>
          <Link to='/secondYear' ><button className="btn btn-warning btn-lg" >Second Year</button ></Link>
          <Link to='/thirdYear' ><button className="btn btn-warning btn-lg" >Third Year</button ></Link>
          <Link to='/fourthYear' ><button className="btn btn-warning btn-lg" >Fourth Year</button ></Link>
        </div>
    )
}

export default Mainpage
