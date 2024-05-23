import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active ? "text-yellow-400 px-3 py-2 border-2 rounded-3xl border-yellow-400 hover:border-yellow-400 hover:text-yellow-400" : "text-[#ADB7BE] px-3 py-2 border-2 rounded-3xl border-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`text-xs md:text-md lg:text-lg mx-2 font-semibold px-3 py-2 border-2 rounded-3xl hover:border-white hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton