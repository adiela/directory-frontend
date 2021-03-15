import React from 'react';

const Footer = () => {
    return (
        <footer>
            Brand name © {(new Date().getFullYear())}
        </footer>
    );
};

export default Footer;