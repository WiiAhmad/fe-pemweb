import React from "react";

const Text = ({ children, type, className }) => {
  return React.createElement(type || "p", { className }, children);
};

export default Text;
