import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active ? "text-yellow-400" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-yellow-400 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton