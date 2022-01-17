import React from 'react'

import SideMenuForHeader from './SideMenuForHeader';

import logo from '../assets/logo-large.png';


const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    const toggleNavbar = () => {
        document.body.classList.toggle('sideBar')
    }


    return (
        <nav className='navbar header-navbar'>
            <img className='logo' src={logo} width={73} height={54} alt="Helperland" />
            <div>
                <ul className='navbar-list'>
                    <li> <a href="#" className='link-navItem link-header'>Book now</a> </li>
                    <li> <a href="#" className='link-navItem'>Prices & services</a> </li>
                    <li> <a href="#">Prices</a> </li>
                    <li> <a href="#">Warranty</a> </li>
                    <li> <a href="#">Blog</a> </li>
                    <li> <a href="#">Contact</a> </li>
                    <li ><a href="#" className='link-navItem link-header'>Login</a> </li>
                    <li> <a href="#" className='link-navItem link-header'>Become a Helper</a> </li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className='sideMenu'>
                <SideMenuForHeader />
            </div>
        </nav>
    )
}

export default Header

