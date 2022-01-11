import React from 'react'
import Menu from './Menu'

const SideMenu = () => {
    return (
        <div>
            <ul>
                <li> <a href="#" className='link-navItem'>Book a Cleaner</a> </li>
                <li> <a href="">Prices</a> </li>
                <li> <a href="">Our Guarantee</a> </li>
                <li> <a href="">Blog</a> </li>
                <li><a href="#">Contact us</a> </li>
                <li ><a href="#" className='link-navItem'>Login</a> </li>
                <li> <a href="#" className='link-navItem'>Become a Helper</a> </li>
                <li>
                    <Menu />
                </li>
            </ul>
        </div>
    )
}

export default SideMenu
