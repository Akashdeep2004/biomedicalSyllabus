import React from 'react'
import './Profile.css'
import boy from '../../assets/Akash deep.jpg';

const Profile = () => {
    return (
        <div>
            <h2 className="profile">User Profile Card</h2>

<div className="card">
  <img src={boy} alt="John" />
  <h1>Akash Deep</h1>
  <p className="title">Biomedical Engineer</p>
  <p>National Institute of Technology, Raipur </p>
  <p>Live in Jamui, Bihar</p>
  <div className="detail">
    <a href="https://www.instagram.com/akash20_/" target="_blank"><i className="fa fa-instagram" style= {{ 
        style:"font-size:50px",
        color:"red"}}></i></a> 
    <a><i style= {{ 
        style:"font-size:50px",
        color:"aqua"}} className="fa fa-twitter"></i></a>  
    <a><i className="fa fa-whatsapp" style= {{ 
        style:"font-size:50px",
        color:"rgb(32, 255, 32)"}}></i></a>  
    <a href="https://www.facebook.com/profile.php?id=100006932738781" target="_blank"><i class="fa fa-facebook-official" style= {{ 
        style:"font-size:50px",
        color:"blue"}}></i></a> 
  </div>
</div>
        </div>
    )
}

export default Profile
