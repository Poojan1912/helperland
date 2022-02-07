import React from 'react'
import MenuProfile from './MenuProfile'

import SideMenuForService from './SideMenuForService';

import { logoLarge, iconNotification } from '../assets/images';

const HeaderService = () => {
    const toggleNavbar = () => {
        document.body.classList.toggle('sideBar')
    }

    return (
        <nav className='navbar header-navbar'>
            <img className='logo' src={logoLarge} width={73} height={54} alt="Helperland" />
            <div>
                <ul className='navbar-list'>
                    <li className='normal-link'> <a href="#">Prices & services</a> </li>
                    <li className='normal-link'> <a href="#">Warranty</a> </li>
                    <li className='normal-link'> <a href="#">Blog</a> </li>
                    <li className='normal-link'> <a href="#">Contact</a> </li>
                    <li className='icon-notification'> <a href="#"><img width="27" height="30" src={iconNotification} alt="Notification Icon" /></a> </li>
                    <li>
                        <MenuProfile />
                    </li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className='sideMenu'>
                <SideMenuForService />
            </div>
        </nav>
    )
}

export default HeaderService

