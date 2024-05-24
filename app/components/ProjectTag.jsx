import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "shadow-lg shadow-blur shadow-orange-400  text-yellow-400 border-yellow-400"
    : "text-[#ADB7BE] border-slate-600 hover:border-white shadow-lg shadow-blur hover:shadow-orange-400";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-md md:text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;