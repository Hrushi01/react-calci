import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-72 p-0 overflow-hidden mt-4  bg-slate-100 shadow-2xl">
      {children}
    </div>
  );
};

export default Wrapper;
