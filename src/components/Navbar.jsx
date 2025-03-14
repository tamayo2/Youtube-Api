import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo.png"
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";

function Navbar() {
    return (
        <div className="flex justify-between px-6 py-2" >
            <div className="flex items-center space-x-4 border border-black">
                <AiOutlineMenu className="text-xl cursor-pointer" />
                <img src={logo} alt="Logo" className="w-28 cursor-pointer" />
            </div>
            <div className="flex w-[35%] border border-black">
                <div className="w-[100%] px-3 py-2 border rounded-l-full">
                    <input type="text" placeholder="search" className="outline-none"/>
                </div>
                <button>
                    <CiSearch />
                </button>
                <IoMdMic />
            </div>
            <div className="border border-black">3</div>
        </div>
    )
}

export default Navbar;