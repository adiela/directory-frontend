import React from 'react';

const FooterColumn = ({children}) => {
    return (
        <div className="">
            {children}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="text-gray-500 mt-12">
            <hr className="bg-gray-500" />
            <div className="flex-container pt-12">
                <div className="grid grid-cols-3 gap-12 my-5">
                    <FooterColumn>
                        <h4>Brand Name</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos error eveniet incidunt non omnis, perferendis porro veritatis? Debitis iste libero porro possimus, praesentium vel voluptate. Animi doloremque est recusandae.</p>
                    </FooterColumn>
                    <FooterColumn>
                        <h4>Link</h4>
                        <ul>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Careers</a></li>
                        </ul>
                    </FooterColumn>
                    <FooterColumn>
                        <h4>Contact Details</h4>
                        <p>Phone: (123) 123-456</p>
                        <p>E-Mail: office@example.com</p>
                    </FooterColumn>
                </div>
                <hr />
                <div className="p-5 text-center"> ©{(new Date().getFullYear())} Brand name</div>
            </div>
        </footer>
    );
};

export default Footer;