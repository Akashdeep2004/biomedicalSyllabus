import React from 'react'
import { Button } from 'react-bootstrap'

const Backwardbutton = (e) => {
    return (
        <div>
            <Button onClick={(e) =>window.history.back()} className="btn btn-block m-2 btn-sm">&#8634;Back</Button>
            <button onClick={(e) =>window.history.forward()} className="btn btn-primary btn-sm float-right">&#8635; Forward</button>
        </div>
    )
}

export default Backwardbutton
