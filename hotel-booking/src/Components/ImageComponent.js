import React from 'react'
import Image from '../Images/download.jpg'

function ImageComponent (props) {
    return(
        <>
    <h1> welcome to hotel booking</h1>
    <img src = {Image} onClick = {props.incrementcount}/>
    </>);
}

export default ImageComponent;