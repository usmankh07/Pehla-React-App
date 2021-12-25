import React from 'react'
import yoga2 from '../second_content/yoga 2.png'
import yoga3 from '../second_content/yoga 3.png'
import yoga4 from '../second_content/yoga 5.png'
import yoga5 from '../second_content/yoga 5.png'
import '../second_content/second_content.css'

function Second_Content() {
    return (
        <div>
            <div class="second_content">
        
        <div class="second_heading">
            <h2>Here are some steps to get the basics.</h2>
        </div>
        
        <div class="section_images">
            
            <div class="section2_image">
                <img src={yoga2} alt="" />
                <p>Basic</p>
            </div>
            
            <div class="section2_image">
                <img src={yoga3} alt="" />
                <p>Intermediate</p>
                
            </div>
            
            <div class="section2_image">
                <img src={yoga4} alt="" />
                <p>Advanced</p>
                
            </div>
            
            <div class="section2_image">
                <img src={yoga5} alt="" />
                <p>Billingual</p>
                
            </div>
            
        </div>
    </div>
        </div>
    )
}

export default Second_Content