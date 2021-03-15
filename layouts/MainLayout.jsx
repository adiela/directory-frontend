import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

const MainLayout = ({ children }) => {
    return (
        <>
            <Meta />
            <div>
                <Navbar />
                <main>
                    {children}
                </main>
            </div>
            <Footer />

        </>
    );
};

export default MainLayout;