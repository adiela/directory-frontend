import React from 'react';
import MainLayout from "../layouts/MainLayout/MainLayout";

const Login = () => {
    return (
        <MainLayout>
            <form>
                <input type="text" name="email" placeholder="Email" />
                <input type="email" name="password" placeholder="Password" />
                <input type="submit"/>
            </form>

        </MainLayout>
    );
};

export default Login;