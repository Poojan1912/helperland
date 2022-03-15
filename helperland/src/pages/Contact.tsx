import React from 'react';
import { useForm } from "react-hook-form";

import Header from '../components/Header';
import ImageBanner from '../components/ImageBanner';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { adminArrow, forma1Copy5, forma1_2, group16, group16_2, phoneCall, vectorSmartObject } from '../assets/images';

import { contactDetails } from '../api'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import { OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles'
import { Helmet } from 'react-helmet';

const StyledInputAdornment = styled(InputAdornment)({

    '&.MuiInputAdornment-root': {
        width: '57px',
        paddingLeft: '15px',
        paddingRight: '15px',
        height: '46px',
        maxHeight: 'none',
        backgroundColor: '#f3f3f3',
        borderRight: '1px solid #C8C8C8'
    },
})

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-input': {
        height: '13px'
    },

    '& .MuiOutlinedInput-root': {
        paddingLeft: '0'
    }
})

const StyledButton = styled(Button)({
    backgroundColor: '#1D7A8C',
    color: '#FFFFFF',
    height: '46px',
    width: '163px',
    borderRadius: '23px',
    textTransform: 'capitalize',
    fontSize: '20px',

    '&:hover': {
        backgroundColor: '#0d5968'
    }
})

const values = [
    "Meeting",
    "Pricing",
    "Others"
];

const Contact = () => {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [mobileNumber, setMobileNumber] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [subject, setSubject] = React.useState("")
    const [error, setError] = React.useState("")
    const [success, setSuccess] = React.useState("")

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onTouched'
    })

    const contactData = { firstName, lastName, mobileNumber, email, message, subject }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async () => {
        setFirstName("")
        setLastName("")
        setMobileNumber("")
        setEmail("")
        setMessage("")
        setError("")
        setSubject("")
        contactDetails(contactData)
    }

    return (
        <div>
            <Helmet>
                <title>Contact us - Helperland</title>
            </Helmet>
            <Header />
            <ImageBanner alt='image banner' address={group16_2} />
            <div className='page-top'>
                <Typography component="h1" variant="h1">Contact us</Typography>
                <div className='star-design'>
                    <img src={forma1Copy5} alt="star" />
                </div>
            </div>
            <Container maxWidth='xl'>
                <Grid container className='contact-us'>
                    <Grid item lg={4} xs={12} display='flex' flexDirection='column' alignItems='center' pb={8}>
                        <img src={forma1_2} alt="location icon" />
                        <p>Konigswinterer Str. 116 </p>
                        <p>53227 Bonn</p>
                    </Grid>
                    <Grid item lg={4} xs={12} display='flex' flexDirection='column' alignItems='center' pb={8}>
                        <img src={phoneCall} alt="phone icon" />
                        <a href="tel:+49(228)28693320"> <p>+49 (228) 28693320</p> </a>
                    </Grid>
                    <Grid item lg={4} xs={12} display='flex' flexDirection='column' alignItems='center' pb={8}>
                        <img src={vectorSmartObject} alt="email icon" />
                        <a className='contact-us-email' href="mailto:info@helperland.com"> <p>info@helperland.de</p> </a>
                    </Grid>
                </Grid>
                <hr className='prices-hr' />

                <Typography pt={9} pb={3} variant='h3' component='h3' textAlign='center' fontSize='28px' color='#4F4F4F'>Get in touch with us</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container maxWidth='614px' spacing={1.87} pr={2} mx='auto'>


                        <Grid item lg={6} xs={12}>
                            <StyledTextField value={firstName} fullWidth id="outlined-basic" placeholder='First Name' variant="outlined"
                                {...register("firstName", { required: "Firstname is required." })}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setFirstName(event.target.value)
                                }}
                            />
                            {errors.firstName && <p className='error'>{errors.firstName.message}</p>}
                        </Grid>


                        <Grid item lg={6} xs={12}>
                            <StyledTextField value={lastName} fullWidth id="outlined-basic" placeholder='Last Name' variant="outlined"
                                {...register("lastName", { required: "Lastname is required." })}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setLastName(event.target.value)
                                }}
                            />
                            {errors.lastName && <p className='error'>{errors.lastName.message}</p>}
                        </Grid>


                        <Grid item lg={6} xs={12}>
                            <StyledTextField
                                value={mobileNumber}
                                InputProps={{
                                    startAdornment: <StyledInputAdornment position="start">+49</StyledInputAdornment>,
                                }}
                                fullWidth id="outlined-basic" placeholder='Mobile Number' variant="outlined"
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


                        <Grid item lg={6} xs={12}>
                            <StyledTextField value={email} fullWidth id="outlined-basic" placeholder='Email address' variant="outlined"
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
                            />
                            {errors.email && <p className='error'>{errors.email.message}</p>}
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            <FormControl fullWidth>
                                <Select
                                    sx={{ height: '46px' }}
                                    displayEmpty
                                    value={subject}
                                    input={<OutlinedInput />}
                                    placeholder="Subject"
                                    onChange={(event: SelectChangeEvent<typeof subject>) => {
                                        setSubject(
                                            event.target.value
                                        );
                                    }}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <p style={{ color: '#A0A0A0' }}>Subject</p>;
                                        }
                                        return selected
                                    }}
                                >
                                    {values.map((data) => (
                                        <MenuItem
                                            key={data}
                                            value={data}
                                        >
                                            {data}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            <TextField value={message} multiline rows={5} fullWidth id="outlined-basic-message" placeholder='Message' variant="outlined"
                                {...register("message", {
                                    required: "Message is required."
                                })}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setMessage(event.target.value)
                                }}
                            />
                            {errors.message && <p className='error'>{errors.message.message}</p>}
                        </Grid>
                        <Grid item lg={12} xs={12} display='flex' justifyContent='center' mt={1} mb={10}>
                            <StyledButton type='submit'>Submit</StyledButton>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            <ImageBanner alt='map image' address={group16} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Contact;
