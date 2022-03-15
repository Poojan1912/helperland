import React from "react";
import { useForm } from "react-hook-form";

import Header from "../components/Header";
import Footer from "../components/Footer"
import { Container, FormControl, Grid, TextField, Button, InputAdornment, Checkbox, FormControlLabel } from "@mui/material";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "../api";
const CustomButton = styled(Button)({
    backgroundColor: '#1D7A8C',
    color: 'white',
    textTransform: 'none',
    height: '46px',
    fontSize: '20px',
    width: 163,
    borderRadius: 23,
    margin: "16px auto",
    transition: '0.3s',
    '&:hover':
    {
        backgroundColor: '#176270'
    }
});

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root':
    {
        height: 46,
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

const NumberTextField = styled(TextField)({
    '& .MuiOutlinedInput-root':
    {
        height: 46,
        paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input':
    {
        paddingLeft: 10
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
    {
        borderColor: 'rgba(0,0,0,0.4)'
    }
})

const CustomInputAdornment = styled(InputAdornment)({
    backgroundColor: 'rgba(128,128,128,0.1)',
    '&':
    {
        height: 46,
        maxHeight: 'none',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRight: '1px solid rgba(0,0,0,0.23)',
        marginRight: 0
    }
});

const CustomCheckbox = styled(Checkbox)({
    padding: 0,
});

const CustomIcon = styled('span')({
    width: 20,
    height: 20,
    border: "1px solid #C8C8C8",
    borderRadius: 3,
    marginRight: 8,
    'input:hover ~ &':
    {
        border: "1px solid rgba(0,0,0,0.4)",
    }
});

const SelectedIcon = styled(CustomIcon)({
    backgroundColor: "#1D7A8C",

    '&:before': {
        display: 'inline-block',
        width: 18,
        height: 18,
        background:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        backgroundPosition: 'center',
        content: '""',
    },
});

const CustomFormControlLabel = styled(FormControlLabel)({
    display: 'flex',
    textAlign: 'left',
    margin: '0 0 10px',
    alignItems: 'flex-start',
    '& .MuiTypography-root':
    {
        fontSize: '14px',
        color: '#4f4f4f'
    },
    '& .MuiTypography-root a':
    {
        color: '#1d7a8c'
    }
})

const labal = <p>I have read the <a href="###">privacy policy</a></p>
const labal2 = <p>I agree to the <a href='#'>terms and conditions</a> of Helperland GmbH</p>
const UserRegistration = () => {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [mobileNumber, setMobileNumber] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const navigate = useNavigate()
    // const []
    // 0 for serviceProvider        
    const [userTypeId, setUserTypeId] = React.useState(0)

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onTouched'
    })

    const onSubmit = () => {
        Signup({ firstName, lastName, email, mobileNumber, password, userTypeId })
            .then(data => {
                console.log(data);
                navigate('/')
            })
    }

    return (
        <>
            <div className="wrapper page">
                <Header />
                <Container maxWidth="xl" sx={{ py: 8, px: { sm: 0, xs: 0 } }}>
                    <h2 className="heading">Create Account</h2>
                    <FormControl sx={{ width: '100%' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container className="contactus-form" textAlign="left" spacing={2} sx={{ m: 'auto', width: '100%' }}>
                                <Grid item md={6} sm={12} xs={12}>
                                    <CustomTextField id="outlined1" type="text" color="primary" placeholder="First Name" variant="outlined" fullWidth
                                        {...register("firstName", { required: "Firstname is required." })}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setFirstName(event.target.value)
                                        }} />
                                    {errors.firstName && <p className='error'>{errors.firstName.message}</p>}
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} >
                                    <CustomTextField id="outlined2" type="text" placeholder="Last Name" variant="outlined" fullWidth
                                        {...register("lastName", { required: "Lastname is required." })}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setLastName(event.target.value)
                                        }}
                                    />
                                    {errors.lastName && <p className='error'>{errors.lastName.message}</p>}
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} >
                                    <CustomTextField
                                        {...register("email", {
                                            required: "Email is required.",
                                            pattern: {
                                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                message: 'Email is invalid'
                                            }
                                        })}
                                        id="email" type="email" fullWidth placeholder="Email" variant="outlined"
                                        value={email}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setEmail(event.target.value)
                                        }}
                                    />
                                    {errors.email && <p className='error'>{errors.email.message}</p>}
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <NumberTextField id="outlined" type="tel"
                                        InputProps={{
                                            startAdornment: <CustomInputAdornment position="start">+49</CustomInputAdornment>,
                                        }}
                                        placeholder="Mobile Number" variant="outlined" fullWidth
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
                                    />
                                    {errors.mobileNumber && <p className='error'>{errors.mobileNumber.message}</p>}
                                </Grid>

                                <Grid item md={6} sm={12} xs={12} >
                                    <CustomTextField type="password" fullWidth placeholder="Password" variant="outlined"
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
                                    />
                                    {errors.password && <p className='error'>{errors.password.message}</p>}
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} >
                                    <CustomTextField type="password" fullWidth placeholder="Confirm Password" variant="outlined"
                                        {...register("confirmPassword", {
                                            required: "Confirm password is required.",
                                            validate: (value) => value === watch('password') || "Passwords don't match"
                                        })}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setConfirmPassword(event.target.value)
                                        }}
                                    />
                                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
                                </Grid>
                                <Grid item md={12} sm={12} xs={12} >
                                    <CustomFormControlLabel control={<CustomCheckbox icon={<CustomIcon />} checkedIcon={<SelectedIcon />} />} label="Yes, I would like to subscribe to the Helperland GmbH newsletter with vouchers, trends, promotions and individualized offers. I can unsubscribe from the newsletter at any time in the newsletter and in my customer account" />
                                    <CustomFormControlLabel control={<CustomCheckbox icon={<CustomIcon />} checkedIcon={<SelectedIcon />} />} label={labal2} />
                                    <CustomFormControlLabel control={<CustomCheckbox icon={<CustomIcon />} checkedIcon={<SelectedIcon />} />} label={labal} />
                                </Grid>

                                <Grid item md={12} sm={12} xs={12} textAlign="center">
                                    <CustomButton type="submit">Register</CustomButton>
                                </Grid>
                                <Grid item md={12} sm={12} xs={12} textAlign="center" className="log-in-now">
                                    Already registered? <Link to="">log in now</Link>
                                </Grid>
                            </Grid>
                        </form>
                    </FormControl>
                </Container>
                <Footer />
            </div>
        </>
    )
}
export default UserRegistration;