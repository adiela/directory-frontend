import React from 'react';

const Contact = () => {
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
            </form>

        </div>
    );
};

export default Contact;