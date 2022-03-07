import React from 'react'

import Menu from './Menu'
import SideMenu from './SideMenu';

import { logoLarge } from '../assets/images';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import { styled } from '@mui/system'
import { Box, Checkbox, FormControlLabel, InputAdornment, Modal, TextField } from '@mui/material';
import { ForgotPassword, Signin } from '../api';

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root':
    {
        height: 46,
        marginBottom: 15
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
    {
        borderColor: 'rgba(0,0,0,0.4)'
    },
    '.select':
    {
        marginRight: 10
    },
    '& [aria-expanded="true"] ~ .select':
    {
        transform: 'rotate(180deg)',
    },
});

const CustomButton = styled(Button)({
    backgroundColor: '#1D7A8C',
    color: 'white',
    textTransform: 'none',
    height: '46px',
    fontSize: '20px',
    width: '100%',
    borderRadius: 23,
    margin: "16px auto",
    transition: '0.3s',
    '&:hover':
    {
        backgroundColor: '#176270'
    }
});

const CustomFormControlLabel = styled(FormControlLabel)({
    '& .MuiTypography-root':
    {
        fontSize: '14px'
    }
})


const LoginButton = styled(Button)({
    color: '#FFFFFF',
    borderRadius: '20px',
    width: '97px',
    height: '40px',
    border: '1px solid #ffffff80',
    textTransform: 'initial',
    fontSize: '17px',
    fontWeight: 'normal',

    '&:hover': {
        color: '#1d7a8c',
        backgroundColor: '#FFFFFF',
    }
})

const HelperButton = styled(Button)({
    color: '#FFFFFF',
    borderRadius: '20px',
    width: '161px',
    height: '40px',
    border: '1px solid #ffffff80',
    textTransform: 'initial',
    fontSize: '17px',
    fontWeight: 'normal',

    '&:hover': {
        color: '#1d7a8c',
        backgroundColor: '#FFFFFF',
    }
})


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open1, setOpen1] = React.useState(false);
    const [login, setLogin] = React.useState({
        email: "",
        password: ""
    })
    const [forgotPasswordEmail, setForgotPasswordEmail] = React.useState('')

    const { email, password } = login

    const handleOpen1 = () => {
        handleClose();
        setOpen1(true);
    }
    const handleClose1 = () => setOpen1(false)
    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({ ...login, [event.target.name]: event.target.value })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForgotPasswordEmail(event.target.value)
    }

    const toggleNavbar = () => {
        document.body.classList.toggle('sideBar')
    }

    const isEmpty = () => {
        let key: keyof typeof login

        for (key in login) {
            if (Object.prototype.hasOwnProperty.call(login, key)) {
                if (login[key] === "") {
                    return true;
                }
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (event: any) => {
        event?.preventDefault()
        if (isEmpty()) {
            alert("All the Fields are required.")
        } else {
            Signin({ email, password })
            alert("Details submitted successfully!")
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ForgotPasswordRequest = async (event: any) => {
        event?.preventDefault();
        if (forgotPasswordEmail === "") {
            alert("All the Fields are required.")
        } else {
            const data = await ForgotPassword(forgotPasswordEmail)
            if (!data.length) {
                alert("User not found!")
            } else {
                alert("User found successfully!")
            }
        }
    }

    return (
        <nav className='navbar'>

            <img className='logo' src={logoLarge} alt="Helperland" />
            <div>
                <ul className='navbar-list'>
                    <li> <Link to='' className='link-navItem'>Book a Cleaner</Link> </li>
                    <li> <Link to='/prices' className='normal-navItem'>Prices</Link> </li>
                    <li> <Link to='/' className='normal-navItem'>Our Guarantee</Link> </li>
                    <li> <Link to='/' className='normal-navItem'>Blog</Link> </li>
                    <li><Link to='/contact' className='normal-navItem'>Contact us</Link> </li>
                    <li>
                        <LoginButton onClick={handleOpen}>Login</LoginButton>
                    </li>
                    <li>
                        <Link to='/become-a-pro' className='helper-button'>
                            <HelperButton>Become a Helper</HelperButton>
                        </Link>
                    </li>
                    <li>
                        <Menu />
                    </li>
                </ul>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                    <div className="login-modal">
                        <h4>Log In</h4>
                        <div onClick={handleClose}>&times;</div>
                    </div>
                    <CustomTextField type="text" InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">

                            </InputAdornment>
                        ),
                    }} color="primary" name="email" value={login.email} onChange={handleLogin} placeholder="Email" variant="outlined" fullWidth />
                    <CustomTextField type="password" name="password" value={login.password} onChange={handleLogin} color="primary" placeholder="Password" variant="outlined" fullWidth />
                    <CustomFormControlLabel control={<Checkbox defaultChecked />} label="Save on Computer" />
                    <CustomButton onClick={onSubmit}>Log in</CustomButton>
                    <div className="forgot-password">
                        <Link to="" onClick={handleOpen1}>Forgot Password?</Link>
                        <p>Don&apos;t have an account yet?</p>
                        <Link to="/user-registration">Create Account</Link>
                    </div>
                </Box>
            </Modal>
            <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                    <div className="login-modal">
                        <h4>Forgot Password</h4>
                        <div onClick={handleClose1}>&times;</div>
                    </div>
                    <CustomTextField type="email" InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">

                            </InputAdornment>
                        ),
                    }} name="forgotPasswordEmail" onChange={handleChange} color="primary" placeholder="Email-Address" variant="outlined" fullWidth />

                    <CustomButton onClick={ForgotPasswordRequest}>Send</CustomButton>
                    <div className="forgot-password">
                        <Link to="" onClick={handleOpen}>log in now</Link>
                    </div>
                </Box>
            </Modal>
            <div className="hamburger" onClick={toggleNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className='sideMenu'>
                <SideMenu />
            </div>
        </nav >
    )
}

export default Navbar

