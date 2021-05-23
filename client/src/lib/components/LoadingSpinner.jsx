import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-screen bg-gray-900 flex justify-center items-center">
      <div className="animate-spin">
        <i className="fas fa-spinner text-4xl text-gray-50"></i>
      </div>
    </div>
  );
};

export { LoadingSpinner };
