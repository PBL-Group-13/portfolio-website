import React from "react";

const About = ({ skills, about }) => {
  return (
    <>
      <div className="p-6 sm:p-8 md:p-10 text-justify">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-300 mb-6">
          About
        </h1>
        {about.split("\n").map((text, i) => {
          return (
            <p className="text-gray-400 my-4" key={i}>
              {text}
            </p>
          );
        })}
      </div>
      <div className="p-6 sm:p-8 md:p-10 text-justify">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6">
          What I'm doing?
        </h1>
        <div className="flex justify-between flex-wrap">
          {skills?.map((skill, i) => {
            return (
              <div
                className="flex items-center justify-center border-gray-10 rounded-2xl  w-full sm:w-1/2 p-1"
                key={i}
              >
                <div className="px-2 w-full h-full py-12 rounded-2xl border border-gray-700">
                  <h1 className="text-center text-lg md:text-2xl font-semibold text-gray-400">
                    {skill}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { About };
