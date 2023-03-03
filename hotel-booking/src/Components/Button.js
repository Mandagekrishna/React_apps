import react from 'react'
import '../CSS/buttonstyle.css'

function Button (props){
    return (
        <button onClick={props.click} className= 'button_class'>{props.text}</button>
    )
}

export default Button;