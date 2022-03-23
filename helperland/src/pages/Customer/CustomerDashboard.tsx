import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import { isAuthenticated } from '../../api'
import HeaderService from '../../components/HeaderService'
import Container from '@mui/material/Container'
import Footer from '../../components/Footer'
import { FaCaretDown } from "react-icons/fa";
import ServiceProvider from '../ServiceProvider'
import Dashboard from './subpages/Dashboard'

const sidebarData = ["Dashboard", "Service History", "Service Schedule", "Favourite Pros", "Invoices", "Notifications"];

const CustomerDashboard = () => {
    const [service, setService] = useState(sidebarData[0]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        const element = document.getElementById('serviceSidebar')!
        if (isMenuOpen) {
            setIsMenuOpen(false)
            element.classList.add("menu-toggle")
        }
        else {
            setIsMenuOpen(true)
            element.classList.remove("menu-toggle")
        }
    }

    const handleChange = (value: string) => {
        setService(value);
        setIsMenuOpen(true)
        closeMenu();
    }

    const currentRoute = useLocation().pathname



    return (
        isAuthenticated() ? (
            <div>
                <Helmet>
                    <title>Dashboard - Helperland</title>
                </Helmet>
                <HeaderService />
                <ul className='service-select'>
                    <li onClick={() => (closeMenu())}>{service} <span><FaCaretDown /></span> </li>
                </ul>
                <div className='welcome-msg'>
                    <p>Welcome, <span>{isAuthenticated().firstName}</span> </p>
                </div>
                <Container maxWidth='xl'>
                    <div className='service-row'>
                        <div className='service-sidebar menu-toggle' id='serviceSidebar'>
                            <ul>
                                {/* how are you */}
                                <Link to="/customer-dashboard"
                                    className={currentRoute === "/customer-dashboard" ? "active-link" : ""}>
                                    <li>{sidebarData[0]}</li>
                                </Link>
                                <Link to="/customer-dashboard/service-history"
                                    className={currentRoute.includes("service-history") ? "active-link" : ""}>
                                    <li>{sidebarData[1]}</li>
                                </Link>
                                <li onClick={() => handleChange(sidebarData[2])}>{sidebarData[2]}</li>
                                <li onClick={() => handleChange(sidebarData[3])}>{sidebarData[3]}</li>
                                <li onClick={() => handleChange(sidebarData[4])}>{sidebarData[4]}</li>
                                <li onClick={() => handleChange(sidebarData[5])}>{sidebarData[5]}</li>
                            </ul>
                        </div>
                        <div className='service-component'>
                            <Outlet />
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        ) : <Navigate to="/" />
    )
}

export default CustomerDashboard