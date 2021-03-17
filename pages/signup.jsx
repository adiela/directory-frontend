import React from 'react';
import FormPageLayout from "layouts/FormPageLayout/FormPageLayout";
import Input from "forms/Input/Input";
import Button from "components/Button/Button";

const Signup = () => {
    return (
        <FormPageLayout>
            <form noValidate={true} className="bg-white mx-auto shadow-md p-5 md:max-w-7xl grid grid-cols-2">
                <Input type="text" name="business-name" placeholder="Business Name" />
                <Input type="text" name="category" placeholder="Category" />
                <Input type="text" name="address" placeholder="Street Address" />
                <Input type="tel" name="phone" placeholder="Phone" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="text" name="website" placeholder="Website" />
                <Button type="submit">Register</Button>
            </form>

        </FormPageLayout>
    );
};

export default Signup;