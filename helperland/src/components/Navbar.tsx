import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";

import Menu from './Menu'
import SideMenu from './SideMenu';

import { logoLarge } from '../assets/images';
import Button from '@mui/material/Button';

import { Link, useNavigate } from 'react-router-dom';

import { styled } from '@mui/system'
import { Box, Checkbox, FormControlLabel, InputAdornment, Modal, TextField } from '@mui/material';
import { authenticate, ForgotPassword, sendNewPassword, Signin } from '../api';

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

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [login, setLogin] = React.useState({
        email: "",
        password: ""
    })
    const [error, setError] = React.useState("")
    const [success, setSuccess] = React.useState("")
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    })
    const [resetPassword, setResetPassword] = React.useState("")
    const [resetConfirmPassword, setResetConfirmPassword] = React.useState("")

    const navigate = useNavigate()


    const {
        register: register2, formState: { errors: errors2 }, handleSubmit: handleSubmit2 } = useForm({
            mode: "onChange",
        });

    const {
        register: register3, formState: { errors: errors3 }, handleSubmit: handleSubmit3, watch } = useForm({
            mode: "onTouched"
        });

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

    const onSubmit = () => {
        Signin({ email, password })
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                    setError(data.error)
                    setSuccess("")
                } else {
                    console.log("Successful", data);
                    setSuccess(data.message)
                    authenticate({ email: data.email, token: data.token })
                    window.location.href = "http://localhost:3000/service-history"
                    setError("")
                }
            })
    }

    const ForgotPasswordRequest = () => {
        ForgotPassword(forgotPasswordEmail)
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data);
                }
            })
    }

    const ResetPasswordRequest = () => {
        sendNewPassword(resetPassword, window.location.pathname.split('/')[2])
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                }
                else {
                    console.log(data);
                }
            })
    }

    useEffect(() => {
        (window.location.pathname.split('/')[2] !== undefined) && setOpen2(true)
    }, [])


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
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                    <div className="login-modal">
                        <h4>Reset Password</h4>
                        <div onClick={handleClose2}>&times;</div>
                    </div>
                    <form onSubmit={handleSubmit3(ResetPasswordRequest)}>

                        {errors3.resetPassword && <p className='error'>{errors3.resetPassword.message}</p>}
                        <CustomTextField type="password" id="password2" {...register3("resetPassword",
                            {
                                required: "Pasword is required.",
                                minLength: {
                                    value: 6,
                                    message: "Password should be minimum 6 characters."
                                }
                            }
                        )} value={resetPassword} color="primary" placeholder="Enter Password" variant="outlined" fullWidth
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setResetPassword(event.target.value)
                            }}
                        />

                        {errors3.resetConfirmPassword && <p className='error'>{errors3.resetConfirmPassword.message}</p>}
                        <CustomTextField type="password" id="password3" {...register3("resetConfirmPassword",
                            {
                                required: "Confirm Pasword is required.",
                                validate: (value) => value === watch('resetPassword') || "Passwords don't match"
                            })}
                            value={resetConfirmPassword} color="primary" placeholder="Enter Confirm Password" variant="outlined" fullWidth
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setResetConfirmPassword(event.target.value)
                            }}
                        />

                        <CustomButton type="submit">Submit</CustomButton>
                    </form>
                </Box>
            </Modal>
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
                    {<h6>{error}</h6> && error}
                    {<h6>{success}</h6> && success}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.email && <p className='error'>{errors.email.message}</p>}
                        <CustomTextField type="email" {...register("email",
                            { required: "Email is required." })}
                            color="primary" name="email" id="email" value={email} placeholder="Email" variant="outlined" fullWidth onChange={handleLogin} />

                        {errors.password && errors.password.type === "required" && <p className='error'>{errors.password.message}</p>}
                        <CustomTextField type="password" id="password" {...register("password", { required: "Pasword is required." })} value={password} color="primary" placeholder="Password" variant="outlined" fullWidth onChange={handleLogin} />

                        <CustomFormControlLabel control={<Checkbox defaultChecked />} label="Save on Computer" />

                        <CustomButton type='submit'>Log in</CustomButton>
                    </form>
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
                    <form onSubmit={handleSubmit2(ForgotPasswordRequest)}>
                        {errors2.forgotPasswordEmail && <p className='error'>{errors2.forgotPasswordEmail.message}</p>}
                        <CustomTextField type="email"
                            {...register2("forgotPasswordEmail", { required: "Email is required." })}
                            value={forgotPasswordEmail}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setForgotPasswordEmail(event.target.value)
                            }}
                            color="primary" placeholder="Email-Address" variant="outlined" fullWidth />

                        <CustomButton type="submit">Send</CustomButton>
                    </form>
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

