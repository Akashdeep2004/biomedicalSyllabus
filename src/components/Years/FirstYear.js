import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './Mainpage.css'

const FirstYear = () => {
    return (
        <div className="mainpage">
            <Link to='/pagebuttonSem1' ><Button>Semester1</Button></Link>
            <Link to='/pagebuttonSem2' ><Button>Semester2</Button></Link>
        </div>
    )
}

export default FirstYear
