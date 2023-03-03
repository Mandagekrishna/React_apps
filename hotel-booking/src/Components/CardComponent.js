import React, { useState } from 'react'
import lobby from '../Images/download.jpg'
import '../CSS/card.css'
import Button from '../Components/Button.js'

function CardComponent (props)
{
    let likes = Math.floor(Math.random()*100);
   
    const imagestyle = {   //this is inline css styling in react
          width :'300px',
          height:'320px',
          margin : '18px'
}

let [_likes,inclike] = useState(likes);

function increment_like()
{
    inclike(prevcount=> prevcount+1)
}
    return(
    <div>
        <div className='card'>
            <img src ={props.img} style = {imagestyle}></img>
            <div>
              <h2>{props.name}</h2>
                <Button text = 'Like' click={increment_like}></Button> 
              
                <p>{_likes}</p>
            </div>
      
        </div>  
    </div>  
    
    )

}

export default CardComponent;