import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'

import footerLogo from '../assets/footer-logo.png'
import facebookLogo from '../assets/ic-facebook.png'
import instaLogo from '../assets/ic-instagram.png'

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
                        <a href=""><img src={facebookLogo} alt="Facebook Logo" /></a> 
                        <a href=""><img src={instaLogo} alt="Instagram Logo" /></a>
                    </ul>
                </div>
                <hr color='#424242' />
                <p>©2018 Helperland. All rights reserved. Terms and Conditions | Privacy Policy</p>
            </div>


        </>


    )
}

export default Footer
