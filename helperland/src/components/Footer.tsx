import React from 'react'
import { Link } from 'react-router-dom'

import { footerLogo, icFacebook, icInstagram } from '../assets/images/index'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="footer-top">
                    <img src={footerLogo} alt="Helperland Logo" />


                    <ul className='footer-links'>
                        <li> <Link to="/">HOME</Link> </li>
                        <li> <Link to="/about">ABOUT</Link> </li>
                        <li> <Link to="/">TESTIMONIALS</Link> </li>
                        <li> <Link to="/faq">FAQS</Link> </li>
                        <li> <Link to="/">INSURANCE POLICY</Link> </li>
                        <li> <Link to="/">IMPRESSUM</Link> </li>
                    </ul>

                    <ul className='social-links'>
                        <a href="#"><img src={icFacebook} alt="Facebook Logo" /></a>
                        <a href="#"><img src={icInstagram} alt="Instagram Logo" /></a>
                    </ul>
                </div>
                <hr color='#424242' />
                <div className='footer-line'>
                    <p>©2018 Helperland. All rights reserved.</p>
                    <p><a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
                </div>
            </div >


        </>


    )
}

export default Footer
