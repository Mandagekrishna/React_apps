

import React from "react";
import  { FreeCamera, Vector3, HemisphericLight, MeshBuilder, Camera} from "@babylonjs/core";
 import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
import * as BABYLON from 'babylonjs';





function Cuboid(props) {

  let box;
  let logo = props.img;

  const onSceneReady = (scene) => {
    // This creates and positions a free camera (non-mesh)
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  
    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());
  
    const canvas = scene.getEngine().getRenderingCanvas();
  
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
  
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  
    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 1;
  
    // Our built-in 'box' shape.
    box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  
    // Move the box upward 1/2 its height
    box.position.y = 1;
    // Our built-in 'ground' shape.
  
    const myMaterial = new BABYLON.StandardMaterial("myMaterial",scene);
  myMaterial.diffuseTexture = new BABYLON.Texture(logo,scene);
  box.material = myMaterial;
    
    
    
    
    
   
  scene.render();
  var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
  
  
  
  //var myTexture = new BABYLON.Texture("path to texture.png",scene)
  
  
  };






  /**
   * Will run on every frame render.  We are spinning the box on y-axis.
   */
  const onRender = (scene) => {
    if (box !== undefined) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();
  
      const rpm = 10;
      box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  
    
  };





  return (
    <div>
    <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender}  id="my-canvas" />
  </div>
  
  );
}

export default Cuboid;





