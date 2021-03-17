import React from 'react';
import FormPageLayout from "layouts/FormPageLayout/FormPageLayout";
import Input from "forms/Input/Input";
import Button from "components/Button/Button";

const Login = () => {
    return (
        <FormPageLayout>
            <form>
                <Input type="text" name="email" placeholder="Email" />
                <Input type="email" name="password" placeholder="Password" />
                <Button type="submit">Login</Button>
            </form>
        </FormPageLayout>
    );
};

export default Login;
