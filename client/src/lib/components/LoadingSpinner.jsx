import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center">
      <div className="animate-spin">
        <i class="fas fa-spinner text-4xl "></i>
      </div>
    </div>
  );
};

export { LoadingSpinner };
