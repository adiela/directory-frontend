import React from 'react';
import Footer from "components/Footer/Footer";
import Meta from "components/Meta/Meta";

const FormPageLayout = ({ children }) => {
    return (
        <>
            <Meta />
            <div className="flex flex-col h-screen justify-between bg-gradient-to-r from-green-400 to-purple-500">
                <div className="h-full">
                    <main className="pt-20 h-full">
                        {children}
                    </main>
                </div>
                <Footer />
            </div>

        </>
    );
};

export default FormPageLayout;