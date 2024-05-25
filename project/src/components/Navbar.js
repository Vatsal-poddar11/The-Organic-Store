import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white w-full font-sans h-20 mx-auto flex justify-between text-[#333333] font-medium">
        <div className="flex space-x-10 ml-7 mt-4 items-center">
            <NavLink to="/">
                <div className="">
                    <img src="../organic_store_logo.jpeg" className="h-[4.4rem]"></img>
                </div>
            </NavLink>
            <div className="flex">
                <NavLink to="/">
                    <div>Everything</div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grocery">
                    <div>Groceries</div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/essentials">
                    <div>Essentials</div>
                </NavLink>
            </div>
        </div>
        <div className="flex gap-x-10 mr-6 mt-4 items-center">
            <div>
                <NavLink to="/">
                    <div>About</div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/contact">
                    <div>Contact</div>
                </NavLink>
            </div>
            <div className="flex items-center gap-x-3 text-[#8bc34a]">
                <div>
                    <p>$10.00</p>
                </div>
                <div>
                    <FaShoppingCart />
                </div>
            </div>  
            <div>
                <FaUser />
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar