import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './Mainpage.css'

const SecondYear = () => {
    return (
        <div className="mainpage">
            <Link to='/pagebuttonSem3' ><Button>Semester3</Button></Link>
            <Link to='/pagebuttonSem4' ><Button>Semester4</Button></Link>
        </div>
    )
}

export default SecondYear
