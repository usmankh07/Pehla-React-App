import React from 'react'
import circle1 from '../fourth_content/circle1.jpg'
import circle2 from '../fourth_content/circle2.jpg'
import circle3 from '../fourth_content/circle 3.jpg'
// import '../fourth_content/fourth_content.css'

function Fourth() {
    return (

            <div class="fourth_content">
    <h2>About Us</h2>
    
    <div class="circle_main">
        
        
        <div class="circle_images">
            <img src={circle1} alt="" />
            <p>Emily</p>
        </div>
        
        
        <div class="circle_images circle_2">
            
            <img src={circle2} alt="" />
            <p>Christine</p>
        </div>
        
        <div class="circle_images">
            
            <img src={circle3} alt="" />
            <p>Julia</p>
        </div>
        
    </div>
    <div class="circle2_main">
        <div class="circle2">
            <h5>1</h5>
        </div>
        
        <div class="circle2">
            <h5>2</h5>
        </div>
        
        <div class="circle2">
            <h5>3</h5>
        </div>
    </div>
</div>

      
    )
}

export default Fourth
