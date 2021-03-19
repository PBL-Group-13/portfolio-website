import React from "react";

const Resume = () => {
  return (
    <div class="p-6 sm:p-8 md:p-10 text-justify">
      <h1 class="text-3xl sm:text-4xl font-semibold text-gray-300 mb-6">
        Resume
      </h1>
      <div>
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-400 mb-3">
          Education
        </h2>
        {/* COPY FROM HERE */}
        <div class="text-justify relative mb-6">
          <div class="w-2 h-2 absolute top-2.5 bg-gray-500 rounded"></div>
          <div class="pl-5">
            <h1 class="text-gray-50 text-lg">University Of Pune</h1>
            <h2 class="text-gray-400">2000 - present</h2>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              accusantium a voluptatum, illum beatae optio nam. Quaerat quos
              nisi illum maiores cumque rerum, vel sapiente architecto ullam
              quas expedita fugit?
            </p>
          </div>
        </div>
        {/* COPY End */}
      </div>
      <div>
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-400 mb-3">
          Experience
        </h2>
        {/* COPY START */}
        <div class="text-justify relative mb-6">
          <div class="w-2 h-2 absolute top-2.5 bg-gray-500 rounded"></div>
          <div class="pl-5">
            <h1 class="text-gray-50 text-lg">University Of Pune</h1>
            <h2 class="text-gray-400">2000 - present</h2>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              accusantium a voluptatum, illum beatae optio nam. Quaerat quos
              nisi illum maiores cumque rerum, vel sapiente architecto ullam
              quas expedita fugit?
            </p>
          </div>
        </div>
        {/* COPY END */}
      </div>
    </div>
  );
};

export { Resume };
