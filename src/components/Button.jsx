import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
