import logo from './logo.svg';
import './App.css';
import ImageComponent from './Components/ImageComponent.js'
import { useState } from 'react';
import FlexComponent from './Components/FlexComponent.js'
import CardComponent from './Components/CardComponent'
import lobby from './Images/lobby.jpg'
import garden from './Images/garden.jpg'
import swimming from './Images/swimming.jpg'
import coffee from './Images/Coffee.jpg'
import bed from './Images/bed.jpg'
import single from './Images/single-bed.jpg'
import Button from './Components/Button'




function App() {
//hotel starts here

return(<div>

<FlexComponent></FlexComponent>
<div className="welcome">Hi, Welcome to Hotel Venta Pillar. <br/>We are delighted to have you as our guest and look forward to providing you
an unforgettable stay. <br/>In below images you can see glimps of our hotel.Hope you like them.</div>

<div><CardComponent img ={lobby} name = "Lobby"></CardComponent></div>
<div><CardComponent img ={garden} name = "Garden">></CardComponent></div>
<div><CardComponent img ={swimming} name = "Pool Area">></CardComponent></div>
<div><CardComponent img ={coffee} name = "Meeting Area">></CardComponent></div>
<div><CardComponent img ={bed} name = "BED">></CardComponent></div>
<div><CardComponent img ={single} name = "Delux Bed">></CardComponent></div>


<div>
              <p class="welcome">
                 Find your next weekend getaway at participating hotels and resorts.<br/>
                 <button className='button_style'>Book Now</button>
              </p>
            </div>


</div>)









//hotel ends here





/*

  let [count, inc] = useState(0);

  function inccount ()
  {inc(prevcount=> prevcount+1)
  
  }

  return(<>
  <ImageComponent incrementcount = {inccount}></ImageComponent>
  <p>count = {count}</p>
  {console.log(count)}

  </>);*/
  }

export default App;
