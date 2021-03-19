import React from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div class="p-6 sm:p-8 md:p-10 text-justify">
      <h1 class="text-3xl sm:text-4xl font-semibold text-gray-300 mb-6">
        Portfolio
      </h1>
      <div class="block sm:flex wrap">
        <div class="w-full sm:w-1/2">
          {/* copy Start */}
          <div class="p-2">
            <Link to="#">
              <figure>
                <img
                  src="https://picsum.photos/800"
                  alt=""
                  class="w-full h-full object-center object-cover rounded-2xl"
                />
                <figcaption class="p-2">
                  <h1 class="text-gray-300 text-lg font-semibold">Portfolio</h1>
                  <p class="text-gray-500">Lorem ipsum dolor sit amet.</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          {/* copy end */}
        </div>
        <div class="w-full sm:w-1/2">
          {/* copy Start */}
          <div class="p-2">
            <Link to="#">
              <figure>
                <img
                  src="https://picsum.photos/800"
                  alt=""
                  class="w-full h-full object-center object-cover rounded-2xl"
                />
                <figcaption class="p-2">
                  <h1 class="text-gray-300 text-lg font-semibold">Portfolio</h1>
                  <p class="text-gray-500">Lorem ipsum dolor sit amet.</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          {/* copy end */}
        </div>
      </div>
    </div>
  );
};

export { Projects };
