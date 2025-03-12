import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    return (
        <div className="flex justify-between px py-2" >
            <div className="border border-black">
                <AiOutlineMenu />
                Logo
            </div>
            <div className="border border-black">2</div>
            <div className="border border-black">3</div>
        </div>
    )
}

export default Navbar;