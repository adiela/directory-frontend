import React from 'react';
import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
    return (
        <a href="/" className="p-7 rounded-md shadow-md m-5 text-lg text-turquoise hover:text-tangerine">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                 viewBox="0 0 512 512" className="m-auto stroke-current text-2xl"
            >
                <path
                    d="M57.49 47.74l368.43 368.43a37.28 37.28 0 0 1 0 52.72h0a37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44h0a48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z"
                    fill="none" strokeLinejoin="round" strokeWidth="32"/>
                <path d="M400 32l-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192" fill="none"
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                <path d="M320 224l11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112" fill="none"
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                      d="M440 72l-80 80"/>
                <path d="M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328" fill="none"
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
            </svg>
            <h5 className="text-center">{category.name}</h5>
        </a>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryCard;
