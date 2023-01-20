import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './Mainpage.css'

const ThirdYear = () => {
    return (
        <div className="mainpage">
            <Link to='/pagebuttonSem5' ><Button>Semester5</Button></Link>
            <Link to='/pagebuttonSem6' ><Button>Semester6</Button></Link>
        </div>
    )
}

export default ThirdYear
