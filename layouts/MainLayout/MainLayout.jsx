import React from 'react';
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import Meta from "components/Meta/Meta";

const MainLayout = ({ children }) => {
    return (
        <>
            <Meta />
            <div className="flex flex-col min-h-screen justify-between">
                <div>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                </div>
                <Footer />
            </div>

        </>
    );
};

export default MainLayout;