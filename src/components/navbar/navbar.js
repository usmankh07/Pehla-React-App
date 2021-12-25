import React from 'react'
import '../navbar/navbar.css'
import logo from "../../logo.png"

function Navbar() {
  return (
    <div class="first_content">
        
    <nav>
        
        <div class="logo">
            <img src={logo} alt="Yoga Logo" />
        </div>
        <i class="fa fa-bars fa-2x open"></i>
        <div class="pages">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <i class="fa fa-times close"></i>
        </div>
        
        <div class="contact_no">
            <i class="fa fa-phone">+92 3576 345</i>
            {/* <p>Where we serve you the best!</p> */}
        </div>
        
    </nav>
    
    <div class="first_heading">
        
        <h2>Your Personal Yoga Trainer<br/> at your doorsteps.</h2>
        <p>Here you get a 1-week free trial to get <br/>used to the basics of yoga.</p>
        <button>Call Now</button>
        
    </div>
    
</div>
  )
}

export default Navbar

