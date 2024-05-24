import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="spinner mb-10"></div>
        <p className="text-xl font-bold text-[#333333]">Loading</p>
    </div>
  )
}

export default Spinner