import React from 'react';
import { useForm } from "react-hook-form";

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/system';

import { group18_5, arrowWhite, registerYourself, getServiceRequest, completeService, rightArrow } from '../assets/images';
import { Helmet } from 'react-helmet';
import { Signup } from '../api';
import { useNavigate } from 'react-router-dom';


const StyledInputAdornment = styled(InputAdornment)({

    '&.MuiInputAdornment-root': {
        width: '46px',
        paddingLeft: '10px',
        paddingRight: '15px',
        height: '46px',
        maxHeight: 'none',
        backgroundColor: '#f3f3f3'
    },
})

const StyledButton = styled(Button)({
    backgroundColor: '#1D7A8C',
    color: '#FFFFFF',
    height: '46px',
    width: '166px',
    borderRadius: '23px',
    textTransform: 'capitalize',
    fontSize: '16px',
    fontWeight: 'bold',

    '&:hover': {
        backgroundColor: '#0d5968'
    }
})

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
        marginTop: '7.5px',
        marginBottom: '7.5px'
    },

    '& .MuiOutlinedInput-input': {
        height: '13px'
    },

    '& .MuiOutlinedInput-root': {
        paddingLeft: '0'
    },

    '&.MuiTextField-root': {
        padding: '0 35px'
    },

    [theme.breakpoints.down("sm")]: {
        '&.MuiTextField-root': {
            padding: '0 16px'
        },
    },
}))

const StyledGridItem = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        '&.MuiGrid-root': {
            display: 'block',
            textAlign: 'center'
        }
    },

    [theme.breakpoints.up("lg")]: {
        '&.MuiGrid-root': {
            display: 'flex',
            justifyContent: 'end'
        }
    }
}))

const StyledMiddleGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        '&.MuiGrid-root': {
            display: 'block',
            textAlign: 'center'
        }
    },

    [theme.breakpoints.up("lg")]: {
        '&.MuiGrid-root': {
            display: 'flex',
            justifyContent: 'start'
        }
    }
}))

const BecomeAPro = () => {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mobileNumber, setMobileNumber] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const userTypeId = 1;
    const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onTouched'
    })

    const onSubmit = () => {
        Signup({ firstName, lastName, email, mobileNumber, password, userTypeId })
            .then(data => {
                console.log(data)
                navigate('/')
            })
    }

    return (
        <div>
            <Helmet>
                <title>Become a Provider - Helperland</title>
            </Helmet>
            <div className='become-cleaner-top'>
                <Navbar />
                <div className='sp-registration'>
                    <Typography component="h4" variant="h4">Register Now!</Typography>
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {errors.firstName && <p className='error'>{errors.firstName.message}</p>}
                            <StyledTextField
                                {...register("firstName", { required: "Firstname is required." })}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setFirstName(event.target.value)
                                }}
                                fullWidth id="outlined-basic-5" placeholder='First name' variant="outlined" value={firstName} />

                            {errors.lastName && <p className='error'>{errors.lastName.message}</p>}
                            <StyledTextField
                                {...register("lastName", { required: "Lastname is required." })}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setLastName(event.target.value)
                                }}
                                fullWidth id="outlined-basic-4" placeholder='Last name' variant="outlined" value={lastName} />

                            {errors.email && <p className='error'>{errors.email.message}</p>}
                            <StyledTextField
                                value={email}
                                {...register("email", {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: 'Email is invalid'
                                    }
                                })}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setEmail(event.target.value)
                                }}
                                fullWidth id="outlined-basic-3" placeholder='Email Address' variant="outlined" />

                            {errors.mobileNumber && <p className='error'>{errors.mobileNumber.message}</p>}
                            <StyledTextField
                                InputProps={{
                                    startAdornment: <StyledInputAdornment position="start">+46</StyledInputAdornment>,
                                }}
                                {...register("mobileNumber",
                                    {
                                        required: "Mobilenumber is required.",
                                        pattern: {
                                            value: /^[789]\d{9}$/,
                                            message: "Mobilenumber is invalid."
                                        }
                                    })}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setMobileNumber(event.target.value)
                                }}
                                fullWidth id="outlined-basic-2" placeholder='Phone Number' variant="outlined" />

                            {errors.password && <p className='error'>{errors.password.message}</p>}
                            <StyledTextField
                                {...register("password", {
                                    required: "Password is required.",
                                    minLength: {
                                        value: 6,
                                        message: "Password should be minimum 6 characters."
                                    }
                                })}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setPassword(event.target.value)
                                }}
                                fullWidth
                                id="outlined-password-input"
                                placeholder="Password"
                                type="password"
                                variant="outlined" />

                            {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
                            <StyledTextField
                                {...register("confirmPassword", {
                                    required: "Confirm password is required.",
                                    validate: (value) => value === watch('password') || "Passwords don't match"
                                })}
                                value={confirmPassword}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setConfirmPassword(event.target.value)
                                }}
                                fullWidth
                                id="outlined-password-input-2"
                                placeholder="Confirm Password"
                                type="password"
                                variant="outlined" />

                            <div className='registration-checkbox'>
                                <div>
                                    <input type="checkbox" id="send" />
                                    <label htmlFor='send'>
                                        &nbsp;Send me newsletters from Helperland
                                    </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="terms" />
                                    <label htmlFor="terms">
                                        &nbsp;I accept <a href="#">terms and conditions</a> & <a href="#">privacy policy</a>
                                    </label>
                                </div>
                            </div>
                            <StyledButton type="submit" >Get Started <img src={arrowWhite} alt="white arrow" /></StyledButton>
                        </form>
                    </Box>
                </div>
                <Box sx={{ pt: 5.5, pb: 3.75 }} textAlign="center">
                    <Button>
                        <img src={group18_5} alt="Down-arrow" />
                    </Button>
                </Box>
            </div>
            <div className='how-it-works'>
                <Container maxWidth='md'>
                    <Typography component='h2' variant='h2' textAlign='center' pb={8}>How it works</Typography>
                    <Grid container pb={{ md: 0, xs: 6 }}>
                        <Grid item lg={6} md={6} xs={12} order={{ md: 1, xs: 2 }} display='flex' flexDirection='column' justifyContent='center'>
                            <Typography component='h3' variant='h3'>Register yourself</Typography>
                            <p>Provide your basic information to register yourself as a service provider.</p>
                            <a href="#">Read more &nbsp; <img src={rightArrow} alt="right-arrow" /></a>
                        </Grid>
                        <StyledGridItem item lg={6} md={6} xs={12} order={{ md: 2, xs: 1 }}>
                            <img src={registerYourself} alt="Register Yourself" />
                        </StyledGridItem>
                    </Grid>

                    <Grid container pb={{ md: 0, xs: 6 }}>
                        <Grid item lg={6} md={6} xs={12} order={{ md: 2, xs: 2 }} display='flex' flexDirection='column' justifyContent='center'>
                            <Typography component='h3' variant='h3'>Get service requests</Typography>
                            <p>You will get service requests from customes depend on service area and profile.</p>
                            <a href="#">Read more &nbsp; <img src={rightArrow} alt="right-arrow" /></a>
                        </Grid>
                        <StyledMiddleGrid item lg={6} md={6} xs={12} order={{ md: 1, xs: 1 }} >
                            <img src={getServiceRequest} alt="get service request" />
                        </StyledMiddleGrid>
                    </Grid>

                    <Grid container pb={{ md: 0, xs: 6 }}>
                        <Grid item lg={6} md={6} xs={12} order={{ md: 1, xs: 2 }} display='flex' flexDirection='column' justifyContent='center'>
                            <Typography component='h3' variant='h3'>Complete service</Typography>
                            <p>Accept service requests from your customers and complete your work.</p>
                            <a href="#">Read more &nbsp; <img src={rightArrow} alt="right-arrow" /></a>
                        </Grid>

                        <StyledGridItem item xs={12} md={6} lg={6} order={{ md: 2, xs: 1 }}>
                            <img src={completeService} alt="complete service" />
                        </StyledGridItem>
                    </Grid>

                </Container>
            </div>
            <Newsletter />
            <Footer />
        </div >
    );
};

export default BecomeAPro;
