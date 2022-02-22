import React from 'react'
import MenuProfile from './MenuProfile'

import SideMenuForService from './SideMenuForService';

import { logoLarge, iconNotification } from '../assets/images';
import { Link } from 'react-router-dom';

const HeaderService = () => {
    const toggleNavbar = () => {
        document.body.classList.toggle('sideBar')
    }

    return (
        <nav className='navbar header-navbar'>
            <img className='logo' src={logoLarge} width={73} height={54} alt="Helperland" />
            <div>
                <ul className='navbar-list'>
                    <li className='normal-link'> <Link to="/prices">Prices & services</Link> </li>
                    <li className='normal-link'> <Link to="/">Warranty</Link> </li>
                    <li className='normal-link'> <Link to="/">Blog</Link> </li>
                    <li className='normal-link'> <Link to="/contact">Contact</Link> </li>
                    <li className='icon-notification'> <Link to="/"><img width="27" height="30" src={iconNotification} alt="Notification Icon" /></Link> </li>
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

