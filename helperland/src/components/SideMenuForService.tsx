import React from 'react'
import { iconNotification } from '../assets/images'
import MenuProfile from './MenuProfile'

const SideMenu = () => {
    return (
        <div>
            <ul className='side-menu-for-service'>
                <li> <a href="#">Prices & Services</a> </li>
                <li> <a href="#">Warrenty</a> </li>
                <li> <a href="#">Blog</a> </li>
                <li><a href="#">Contact</a> </li>
                <li> <a href="#"><img width="27" height="30" src={iconNotification} alt="Notification Icon" /></a> </li>
                <li>
                    <MenuProfile />
                </li>
            </ul>
        </div>
    )
}

export default SideMenu
