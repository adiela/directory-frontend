import React from 'react';
import MainLayout from "../layouts/MainLayout/MainLayout";

const Contact = () => {
    return (
        <MainLayout>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
            </form>

        </MainLayout>
    );
};

export default Contact;