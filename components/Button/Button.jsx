import React from 'react';

const Button = ({as, children, color, size, outline, styles, variant, ...restOfProps}) => {
    const className = `${outline ? `border border-${color} text-${color}` : `bg-${color} hover:bg-opacity-75 text-white`} ${size === 'sm' ? 'text-xs px-5 py-2' : size === 'lg' ? 'text-xl px-6 py-3' : "px-5 py-2"} ${!outline && size === 'lg' ? 'font-bold' : null} rounded-full focus:outline-none ${styles}`;
    return (
        React.createElement(as, {...restOfProps, className}, children)
    );
};

Button.defaultProps = {
    as: "button",
    color: "turquoise"
}

export default Button;