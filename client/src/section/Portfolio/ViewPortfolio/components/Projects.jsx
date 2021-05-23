import React from "react";
import { Link } from "react-router-dom";
const Projects = ({ projects }) => {
  const half = Math.ceil(projects.length / 2);

  const firstHalf = projects.slice(0, half);
  const secondHalf = projects.slice(-half);
  console.log({ projects, firstHalf, secondHalf });
  return (
    <div class="p-6 sm:p-8 md:p-10 text-justify">
      <h1 class="text-3xl sm:text-4xl font-semibold text-gray-300 mb-6">
        Portfolio
      </h1>
      <div class="block sm:flex wrap">
        <div class="w-full sm:w-1/2">
          {/* copy Start */}
          {firstHalf.map((fh, i) => {
            return (
              <div class="p-2" key={`first-${i}`}>
                <a href={fh.link} target="blank">
                  <figure>
                    <img
                      src={fh.coverImage}
                      alt=""
                      class="w-full h-full object-center object-cover rounded-2xl"
                    />
                    <figcaption class="p-2">
                      <h1 class="text-gray-300 text-lg font-semibold">
                        {fh.name}
                      </h1>
                      <p class="text-gray-500">
                        {String(fh.description).substring(50)}
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            );
          })}
          {/* copy end */}
        </div>
        <div class="w-full sm:w-1/2">
          {/* copy Start */}
          {secondHalf.map((fh, i) => {
            return (
              <div class="p-2" key={`second-${i}`}>
                <a href={fh.link} target="blank">
                  <figure>
                    <img
                      src={fh.coverImage}
                      alt=""
                      class="w-full h-full object-center object-cover rounded-2xl"
                    />
                    <figcaption class="p-2">
                      <h1 class="text-gray-300 text-lg font-semibold">
                        {fh.name}
                      </h1>
                      <p class="text-gray-500">
                        {String(fh.description).substring(50)}
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            );
          })}
          {/* copy end */}
        </div>
      </div>
    </div>
  );
};

export { Projects };
