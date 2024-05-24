import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full h-screen select-none">
        <div className="flex h-auto w-full mx-auto mt-5 bg-[#f8f6f392]">
            <div className='pt-32 pb-28 w-1/2 flex pl-10 pr-10 items-center'>
                <img src="..\organic-products-hero.png" className='h-9/10 w-full'></img>
            </div>
            <div className="flex w-1/2 pt-32 pb-28 flex-col pl-10 pr-10 items-center">
                <div className="font-merriweather">
                    <img src="..\logo-leaf-new.png" className="mb-8"></img>
                    <h4 className="font-semibold mb-6 text-lg">Best Quality Products</h4>
                    <h2 className="font-semibold text-6xl tracking-normal mb-4">Join The Organic</h2>
                    <h2 className="font-semibold text-6xl tracking-normal mb-6">Movement!</h2>
                    <p className="font-sans mb-6 bg-[#f8f6f392]">
                        Embrace sustainable agriculture for better health, environmental conservation, and local farming. Opt for natural produce to support eco-friendly practices and ensure a healthier future.
                    </p>
                    <div className="font-sans">
                        <NavLink to="/">
                            <button className="bg-[#508810e1] transition ease-in duration-100 hover:bg-[#8bc34a] flex items-center gap-x-4 uppercase font-semibold text-white pl-6 pr-6 pt-3 pb-3 rounded-md ">
                                <FaShoppingCart />
                                <p>Shop Now</p>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="min-h-52 w-full bg-black text-white text-center flex gap-4 items-center justify-around pl-8 pr-8">
            <div className='bg-[#333333] p-5 w-full rounded-sm cursor-pointer'>
                <div className="flex pt-5 gap-2 justify-center items-center">
                    <FaTruck className="text-[#8bc34a] h-6 w-6"/>
                    <p className="font-bold text-xl">Free Shipping</p>
                </div>
                <div className="pb-5">
                    <p className="text-lg pl-4">Above $5 Only</p>
                </div>
            </div>
            <div className='bg-[#333333] w-full p-5 rounded-sm cursor-pointer'>
                <div className="flex pt-5 gap-2 justify-center items-center">
                    <FaAddressBook className="text-[#8bc34a] h-6 w-6"/>
                    <p className="font-bold pr-1 text-xl">Certified Organic</p>
                </div>
                <div className="pb-5">
                    <p className="text-lg">100% Guarantee</p>
                </div>
            </div>
            <div className='bg-[#333333] w-full p-5 rounded-sm cursor-pointer'>
                <div className="flex pt-5 gap-2 justify-center items-center">
                    <FaRegMoneyBillAlt className="text-[#8bc34a] h-6 w-6"/>
                    <p className="font-bold pr-2 text-xl">Huge Savings</p>
                </div>
                <div className="pb-5">
                    <p className="text-lg pl-6">At Lowest Price</p>
                </div>
            </div>
            <div className='bg-[#333333] w-full p-5 rounded-sm cursor-pointer'>
                <div className="flex pt-5 gap-2 justify-center items-center">
                    <FaRecycle className="text-[#8bc34a] h-6 w-6"/>
                    <p className="font-bold pr-6 text-xl">Easy Returns</p>
                </div>
                <div className="pb-5">
                    <p className="text-lg pl-8">No Questions Asked</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home