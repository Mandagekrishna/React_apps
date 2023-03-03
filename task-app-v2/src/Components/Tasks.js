import React  from "react";
import Item_list from './Item_list'

function Tasks(props){

         return( <ul>{
                     props.tasks.map((item)=> (     
                        <Item_list 
                        id = {item.id} 
                        title={item.title} 
                        priority={item.priority}>
                            
                        </Item_list>
                               ))
                     }
                </ul>
            
               );
        }

export default Tasks;