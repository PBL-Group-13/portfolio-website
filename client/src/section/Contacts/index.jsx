import React from "react";
import  Card   from "./Components/Card";

const MyContacts = () => {
  return (
    // max-w-7xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 bg-gray-800
    <div className="max-w-7xl flex flex-col items-center h-auto lg:h-screen  mx-auto my-32  lg:my-4 bg-gray-800 ">
        <div className="my-5 items-center content-start block">
            <h1 className="text-4xl font-bold text-gray-300 tracking-tight mb-8 text-left flex-left ">My Contacts</h1>
        </div>
        
        <div className="grid grid-col-3 gap-12 grid-flow-row place-self-auto">
            <Card/><Card/><Card/><Card/>
        </div>
      
    </div>
  );
};

export { MyContacts };
