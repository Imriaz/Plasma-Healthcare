import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark footer">
                <div className="row">
                    <div className="col-6">
                        <img className="footer-icon" src="" alt="" />
                    </div>
                    <div className="col-3">
                        <p>About Online Food</p>
                        <p>Read our blogs</p>
                    </div>
                    <div className="col-3">
                        <p>About Online Food</p>
                        <p>Read our blogs</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <p className="text-start">Terms and condition</p>
                    </div>
                    <div className="col-2">
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col-2">
                        <p>Terms and condition</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;