import React from 'react'
import logo from "../../logo.png"
import '../fifth_content/fifth_content.css'

function Fifth() {
    return (
        <div>
            <div class="fifth_content">
    <div class="fifth_container">
        
        <div class="heading">
            
            <h2>Our Trials</h2>
        </div>
        
        
        <div class="fifth_card">
            <div class="img">
                <img src={logo} alt="" />
            </div>
            <div class="fifth_points">
                <ul>
                    
                    <li>- Basic</li>
                    <li>- Intermediate</li>
                    <li>- Advanced</li>
                    <li>- Hard</li>
                </ul>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Fifth
