import React from 'react'

import { footerLogo, icFacebook, icInstagram } from '../assets/images/index'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="footer-top">
                    <img src={footerLogo} alt="Helperland Logo" />


                    <ul className='footer-links'>
                        <li> <a href="#">HOME</a> </li>
                        <li> <a href="#">ABOUT</a> </li>
                        <li> <a href="#">TESTIMONIALS</a> </li>
                        <li> <a href="#">FAQS</a> </li>
                        <li> <a href="#">INSURANCE POLICY</a> </li>
                        <li> <a href="#">IMPRESSUM</a> </li>
                    </ul>

                    <ul className='social-links'>
                        <a href="#"><img src={icFacebook} alt="Facebook Logo" /></a>
                        <a href="#"><img src={icInstagram} alt="Instagram Logo" /></a>
                    </ul>
                </div>
                <hr color='#424242' />
                <p>©2018 Helperland. All rights reserved. <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
            </div>


        </>


    )
}

export default Footer
