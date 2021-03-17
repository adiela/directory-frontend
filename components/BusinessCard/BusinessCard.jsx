import React from 'react';
import Button from "../Button/Button";

const BusinessCard = () => {
    return (
        <a href="/" className="shadow-md m-5">
            <div className="bg-turquoise text-white p-2 h-60 flex flex-col justify-end flex-wrap content-start">
                <h5 className="text-xl">Business Name</h5>
                <span className="bg-tangerine rounded px-2 py-1 text-sm uppercase font-bold">Category Name</span>
            </div>
            <div className="text-sm text-right p-2">10 Reviews</div>
        </a>
    );
};

export default BusinessCard;