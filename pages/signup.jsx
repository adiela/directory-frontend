import React from 'react';
import MainLayout from "../layouts/MainLayout/MainLayout";

const Contact = () => {
    return (
        <MainLayout>
            <form noValidate={true}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password1" placeholder="Password" />
                <input type="password" name="password2" placeholder="Confirm Password" />
                <input type="submit" />
            </form>

        </MainLayout>
    );
};

export default Contact;