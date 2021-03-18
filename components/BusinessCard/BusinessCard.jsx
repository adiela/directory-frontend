import React from 'react';
import Link from "next/link";

const StarIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.283.95l-3.523 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
    );
};

const BusinessCard = ({rating}) => {
    return (
        <a href="/" className="shadow-md rounded-md m-5">
            <div
                className="rounded-t-md text-white p-3 h-64 flex flex-col justify-end flex-wrap content-start bg-center bg-cover bg-no-repeat"
                style={{backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 50%, rgba(0, 0, 0, 0.7)), url('https://www.vasterad.com/themes/listeo/images/listing-item-04.jpg')"}}
            >
                <h5 className="text-xl">Business Name</h5>
                <Link href="/"><a className="bg-turquoise text-white rounded py-1 px-2 text-sm uppercase w-max">Category
                    Name</a></Link>
            </div>
            <div className="text-sm p-2 flex justify-between">
                <div className="flex flex-row-reverse text-gray-300">
                    <StarIcon className={`star-icon ${rating && rating === 5 && "star-rating"}`} />
                    <StarIcon className={`star-icon ${rating && rating === 4 && "star-rating"}`} />
                    <StarIcon className={`star-icon ${rating && rating === 3 && "star-rating"}`} />
                    <StarIcon className={`star-icon ${rating && rating === 2 && "star-rating"}`} />
                    <StarIcon className={`star-icon ${rating && rating === 1 && "star-rating"}`} />
                </div>
                <div>
                    10 reviews
                </div>
            </div>

        </a>
    );
};

export default BusinessCard;