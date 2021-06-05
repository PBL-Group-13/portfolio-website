import React from "react";
import { useState } from "react";
import "./contactcard.css";
const Card = (props) => {
  const [toggleMessage, setToggleMessage] = useState(false);
  return (
    <div className="bg-white contact-card">
      {/* component */}
      <div>
        <div>
          <div className="upper-card">
            <h3>{props.contactRequest.name}</h3>
            <button
              className="bg-gray-600 text-white active:bg-gray-100 text-xs  px-4 py-2 rounded shadow hover:bg-gray-500 hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              onClick={() => {
                setToggleMessage(!toggleMessage);
              }}
            >
              {toggleMessage ? <>Hide Message</> : <>Show Message</>}
            </button>
          </div>
          <div>
            <a>{props.contactRequest.email}</a>
          </div>
        </div>
      </div>

      {toggleMessage && (
        <div className=" w-full max-w-lg p-4 rounded  my-0 message">
          {props.contactRequest.message}
        </div>
      )}
    </div>
  );
};

export default Card;
