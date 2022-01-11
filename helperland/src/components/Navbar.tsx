import React from 'react'

import Menu from './Menu'
import SideMenu from './SideMenu';

import logo from '../assets/logo-large.png';


const Navbar = () => {
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
        <nav className='navbar'>
            <img className='logo' src={logo} alt="Helperland" />
            <div>
                <ul className='navbar-list'>
                    <li> <a href="#" className='link-navItem'>Book a Cleaner</a> </li>
                    <li> <a href="#">Prices</a> </li>
                    <li> <a href="#">Our Guarantee</a> </li>
                    <li> <a href="#">Blog</a> </li>
                    <li><a href="#">Contact us</a> </li>
                    <li ><a href="#" className='link-navItem'>Login</a> </li>
                    <li> <a href="#" className='link-navItem'>Become a Helper</a> </li>
                    <li>
                        <Menu />
                    </li>
                </ul>
            </div>
            <div className="hamburger"  onClick={toggleNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className='sideMenu'>
                <SideMenu />
            </div>
        </nav>
    )
}

export default Navbar

