import React from "react";
import { useState } from "react";
import userimg from "../../../assets/img/user.svg"

const Card = () => {
    const [toggleMessage, setToggleMessage] = useState(false);
    return (
        
<div>
  {/* component */}
  <div className="flex items-left justify-left ">
    <div className="flex flex-col items-center w-full max-w-xs p-4 bg-white rounded md:flex-row">
      <div className="-mt-18 md:-my-16 md:-ml-32" style={{clipPath: 'url(#roundedPolygon)'}}>
        <img className="w-auto h-48" src={userimg} style={{backgroundColor:'white',objectFit:'scale-down'}} alt="Ahmed Kamel" />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-medium">Ahmed Kamel</h2>
          <p className="text-base font-medium text-gray-400">abcxyz@gmail.com</p>
        </div>
        <div className="flex items-center justify-center space-x-3 md:justify-start">
          {/* Icons source => https://boxicons.com/ */}
          
          <button  target="_blank" className="transition-transform transform hover:scale-125 animate-bounce" onClick={() => { setToggleMessage(!toggleMessage) }}>
           
          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
          </button>
         
        </div>
        
      </div>
      
      
    </div>
    
    <svg width={0} height={0} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* rounded polygon generator => https://weareoutman.github.io/rounded-polygon/ */}
        {/* polygon size 190 * 190 almost the same size as the image */}
        <clipPath id="roundedPolygon">
          <path d="M79 6.237604307034a32 32 0 0 1 32 0l52.870489570875 30.524791385932a32 32 0 0 1 16 27.712812921102l0 61.049582771864a32 32 0 0 1 -16 27.712812921102l-52.870489570875 30.524791385932a32 32 0 0 1 -32 0l-52.870489570875 -30.524791385932a32 32 0 0 1 -16 -27.712812921102l0 -61.049582771864a32 32 0 0 1 16 -27.712812921102" />
        </clipPath>
      </defs>
    </svg>
    
  </div>
  {toggleMessage &&
                    <div className="flex flex-col items-center w-full max-w-xs p-4 bg-white rounded md:flex-row my-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, consequatur?</div>}
  
</div>
    );
};

export default Card