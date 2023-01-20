import React from 'react'
import './PagebuttonSem2.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PagebuttonSem2 = () => {
    return (
        <div className="pagebutton">
            <Link to="/subject-sem2"><Button className="button-b1">Subjects</Button></Link>
            <Button className="button-b2">Workshops</Button>
            <Button className="button-b3">Assignments</Button>
        </div>
    )
}

export default PagebuttonSem2
