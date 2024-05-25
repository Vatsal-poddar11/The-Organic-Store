import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const EverythingItem = ({item}) => {
  return (
    <div className="bg-white cursor-pointer mx-auto flex flex-wrap mb-10 hover:scale-110 transition 
        duration-300 ease-in shadow-lg w-72 justify-center items-center rounded-lg">
        <div className="p-7 flex flex-col justify-center items-center font-merriweather">
            <div>
                <img src={`https://spoonacular.com/cdn/ingredients_250x250/${item.image}`} className='h-52 w-52 mb-2'></img>
            </div>
            <div className="font-merriweather text-[#333333] text-md font-semibold uppercase mb-2">{item.name}</div>
            <NavLink to="/">
                <button className="bg-[#508810e1] transition ease-in duration-200 hover:bg-[#8bc34a] flex items-center gap-x-4 uppercase font-semibold text-white pl-5 pr-5 pt-3 pb-3 rounded-md ">
                    <FaShoppingCart />
                    <p>Shop Now</p>
                </button>
            </NavLink>
        </div>
    </div>
  )
}

export default EverythingItem;