import React from 'react';
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <nav className="shadow-md fixed w-full z-10 flex justify-between p-5">
            <div>Logo</div>
            <ul className="flex">
                <NavLink location='/'>Home</NavLink>
                <NavLink location='/contact'>Contact</NavLink>
                <NavLink location='/signup'>Signup</NavLink>
                <NavLink location='/login'>Login</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;