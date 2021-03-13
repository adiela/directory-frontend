import Link from 'next/link';
import React from 'react';

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