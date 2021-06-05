import React from "react";

const Resume = ({ education, experience }) => {
  return (
    <div className="p-6 sm:p-8 md:p-10 text-justify">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-300 mb-6">
        Resume
      </h1>
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-3">
          Education
        </h2>
        {/* COPY FROM HERE */}
        {education?.map((ed, i) => {
          return (
            <div className="text-justify relative mb-6" key={i}>
              <div className="w-2 h-2 absolute top-2.5 bg-gray-500 rounded"></div>
              <div className="pl-5">
                <h1 className="text-gray-50 text-lg">{ed.name}</h1>
                <h2 className="text-gray-400">
                  {new Date(ed.duration.start).getFullYear()} -{" "}
                  {ed.duration.end
                    ? new Date(ed.duration.end).getFullYear()
                    : "preset"}
                </h2>
                <p className="text-gray-500">{ed.description}</p>
              </div>
            </div>
          );
        })}
        {/* COPY End */}
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-3">
          Experience
        </h2>
        {/* COPY START */}
        {experience?.map((ex, i) => {
          return (
            <div className="text-justify relative mb-6" key={i}>
              <div className="w-2 h-2 absolute top-2.5 bg-gray-500 rounded"></div>
              <div className="pl-5">
                <h1 className="text-gray-50 text-lg">{ex.name}</h1>
                <h2 className="text-gray-400">
                  {new Date(ex.duration.start).getFullYear()} -{" "}
                  {ex.duration.end
                    ? new Date(ex.duration.end).getFullYear()
                    : "preset"}
                </h2>
                <p className="text-gray-500">{ex.description}</p>
              </div>
            </div>
          );
        })}
        {/* COPY END */}
      </div>
    </div>
  );
};

export { Resume };
