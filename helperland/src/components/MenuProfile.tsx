import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { forma1, adminUser } from '../assets/images';
import { isAuthenticated, logout } from '../api';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutUser = () => {
        logout()
        handleClose()
        navigate("/")
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img src={adminUser} alt="Drop-down" className='admin-user' />
                <img src={forma1} height={7} width={12} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {isAuthenticated().userType === 0 ? (
                    <Link to="/customer-dashboard/my-settings">
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </Link>
                )
                    :
                    (
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                    )}
                <MenuItem onClick={logoutUser}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
