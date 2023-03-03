import React  from "react";
import './Item_list.css'

function Item_list(props){
    return(
        
        <ul className="card">
           { console.log('pring',props)}
        <li>{props.id}</li>
        <li>{props.title}</li>
        <li>{props.priority}</li>
        <br></br>
        </ul>
    )
}

export default Item_list;