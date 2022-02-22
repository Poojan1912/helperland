import React from 'react'

import SideMenuForHeader from './SideMenuForHeader';
import Button from '@mui/material/Button'
import { styled } from '@mui/system'

import { logoLarge } from '../assets/images/index'
import { Link } from 'react-router-dom';


const Header = () => {
    const toggleNavbar = () => {
        document.body.classList.toggle('sideBar')
    }

    const StyledButton = styled(Button)({
        backgroundColor: '#29626D',
        color: '#FFFFFF',
        borderRadius: '20px',
        padding: '4px 16px',
        border: '1px solid #ffffff80',
        textTransform: 'initial',
        fontSize: '17px',
        fontWeight: 'normal',

        '&:hover': {
            color: '#1d7a8c',
            backgroundColor: '#FFFFFF',
        }
    })


    return (
        <nav className='navbar header-navbar'>
            <img className='logo' src={logoLarge} width={73} height={54} alt="Helperland" />
            <div>
                <ul className='navbar-list'>
                    <li> <StyledButton>Book now</StyledButton></li>
                    <li className='normal-link'> <Link to='/prices'>Prices & services</Link> </li>
                    <li className='normal-link'> <Link to='#'>Warranty</Link> </li>
                    <li className='normal-link'> <Link to='/#'>Blog</Link> </li>
                    <li className='normal-link'> <Link to='/contact'>Contact</Link> </li>
                    <li><StyledButton>Login</StyledButton> </li>
                    <li><Link to='/become-a-pro' style={{ padding: '0' }}> <StyledButton>Become a Helper</StyledButton></Link></li>
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

