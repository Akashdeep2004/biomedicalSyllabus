import React from 'react'
import './AnatomyBio.css'

const AnatomyBio = ({name, image, define, functions}) => {
    return (
        <div  className="recipe">
            <h1 className="name">{name}</h1>
            
            <p><h3>Define:</h3><p>{define}</p> </p>

            <p><h3>Function:</h3><p>{functions}</p> </p>

            
            <img className= "image" src={image} alt="recipe pictures" />
        </div>
    )
}

export default AnatomyBio;

