import React from 'react';
import Link from "next/link";
import Button from "../Button/Button";

const Navbar = () => {
    return (
        <nav id="main-nav" className="shadow-lg fixed w-full z-40 flex flex-wrap justify-between content-center px-10 bg-white">
            <Link href="/">Logo</Link>
            <ul>
                <Button as="a" href="/" type="search" color="turquoise" outline="true" styles="mx-1">Sign in</Button>
                <Button as="a" href="/" type="search" color="tangerine" outline="true" styles="mx-1">Add Listing +</Button>
            </ul>
        </nav>
    );
};

export default Navbar;