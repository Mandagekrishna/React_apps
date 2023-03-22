import React,{ useState} from 'react';
import ReactMapGL from 'react-map-gl';
import { ScreenCapture } from "react-screen-capture";
import './App.css';
import Cuboid from './Cuboid.js'


function App() {


    const [screenCapture, setscreenCapture] = useState("");

    const handleScreenCapture = (screenCapture) => {
      setscreenCapture(screenCapture);
    };

  const [viewport, setviewport] = useState({
    longitude:100,
    latitude:40,
    zoom:3.5,
 
  })
  return (
    <div >


<ReactMapGL mapboxAccessToken={"paste your mapbox public token key here"}
    {...viewport} onMove={evt => setviewport(evt.viewport)}
     mapStyle="mapbox://styles/mapbox/streets-v9"></ReactMapGL>

    <ScreenCapture onEndCapture={handleScreenCapture}>


      
        {({ onStartCapture }) => (<div>
          {screenCapture && <Cuboid img={screenCapture}/>}

          <button onClick={onStartCapture} style={{ height: "3rem" }}>
              Capture
            </button>

<p>The teacher of today is the salt of the earth. 
  He wants to create a man, not just make money. 
  He is a knowledgeable gentleman.
   He is an expert in the particular subject he teaches. 
   Though a scholar, he teaches the subject in such a way that all students, 
   brilliant or ordinary, can fully understand him. He doesn’t
    advertise his knowledge. He cares about his students and offers
     assistance to them both inside and outside of the classroom. 
     He attends his work regularly.

Anything that seems untidy gets the side eye from him.
 Being conscious of his social responsibilities,
  he offers assistance to neighbours in need a
  nd spends his free time on social services. 
  But there are very few teachers who consider 
  teaching as a mere profession like any other profession. 
  They do not have the dedication to become great teachers for ages.</p>

         
           </div>
         
        )}
      </ScreenCapture>

      <br></br>
      <br></br>
   
    

<img src={screenCapture} alt='img screeen'></img>
   
        
   
        </div>


     );
}

//sk.eyJ1IjoibWFuZGFnZWtyaXNobmEiLCJhIjoiY2xmZnBiejk2MGJrdTN5bnBuMDZ3anp5ciJ9.xovRE7HcttoWe3sk9bsUag

export default App;
