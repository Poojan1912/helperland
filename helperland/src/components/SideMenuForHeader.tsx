import React from 'react'

import Button from '@mui/material/Button'
import { styled } from '@mui/system'


const SideMenuForHeader = () => {
    const StyledButton = styled(Button)({
        backgroundColor: '#29626D',
        color: '#FFFFFF',
        borderRadius: '20px',
        padding: '4px 16px',
        border: '1px solid #ffffff80',
        textTransform: 'initial',
        fontSize: '17px',
        fontWeight: 'normal',
        margin: '10px 0',

        '&:hover': {
            color: '#1d7a8c',
            backgroundColor: '#FFFFFF',
        }
    })

    return (
        <div>
            <ul>
                <li> <StyledButton>Book now</StyledButton></li>
                <li className='normal-link'> <a href="#">Prices & services</a> </li>
                <li className='normal-link'> <a href="#">Warranty</a> </li>
                <li className='normal-link'> <a href="#">Blog</a> </li>
                <li className='normal-link'> <a href="#">Contact</a> </li>
                <li><StyledButton>Login</StyledButton> </li>
                <li><StyledButton>Become a Helper</StyledButton></li>
            </ul>
        </div>
    )
}

export default SideMenuForHeader
