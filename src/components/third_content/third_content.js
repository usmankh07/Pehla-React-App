import React from 'react'
import third_front from '../third_content/third_front.jpg'
import '../third_content/third_content.css'

function Third_Content() {
    return (
       
           <div class="third_content">
        <div class="third_image">
            <img src={third_front} alt="" />
        </div>
        
        <div class="content">
            <div>
                <h2>Here are some steps to get your foot in the door.</h2>
            </div>
            
            <div class="content1">
                
                <div class="other">
                    <h2>01</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore voluptatem, neque porro magnam, dolor </p>
                </div>
                
                <div class="other">
                    <h2>02</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore voluptatem, neque porro magnam, dolor </p>
                </div>
                
            </div>        
            
            <div class="content1">
                
                <div class="other">
                    <h2>03</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore voluptatem, neque porro magnam, dolor </p>
                </div>
                
                <div class="other">
                    <h2>04</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore voluptatem, neque porro magnam, dolor </p>
                </div>
                
            </div>
            
            
        </div>
    </div>

    )
}

export default Third_Content