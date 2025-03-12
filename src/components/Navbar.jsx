import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo.png"

function Navbar() {
    return (
        <div className="flex justify-between px-6 py-2" >
            <div className="flex items-center border border-black">
                <AiOutlineMenu />
                <img src={logo} alt="Logo" className="w-28" />
            </div>
            <div className="border border-black">2</div>
            <div className="border border-black">3</div>
        </div>
    )
}

export default Navbar;