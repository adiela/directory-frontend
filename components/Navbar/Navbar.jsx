import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div>Logo</div>
            <ul>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
            
        </nav>
    );
};

export default Navbar;