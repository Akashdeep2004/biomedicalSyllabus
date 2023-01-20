import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './Mainpage.css'

const FourthYear = () => {
    return (
        <div className="mainpage">
            <Link to='/pagebuttonSem7' ><Button>Semester7</Button></Link>
            <Link to='/pagebuttonSem8' ><Button>Semester8</Button></Link>
        </div>
    )
}

export default FourthYear
