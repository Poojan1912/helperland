import React from 'react';
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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/system';

import { group18_5, arrowWhite, registerYourself, getServiceRequest, completeService, rightArrow } from '../assets/images';



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

// const StyledFormControlLabel = styled(FormControlLabel)({
//     '& .MuiTypography-root': {
//         color: '#4F4F4F',
//     }
// })

// const StyledCheckbox = styled(Checkbox)({
//     '&.MuiCheckbox-root': {
//         color: '#C8C8C8'
//     },
//     '&.Mui-checked': {
//         color: '#1D798C'
//     }
// })

const StyledTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        marginTop: '7.5px',
        marginBottom: '7.5px'
    },

    '& .MuiOutlinedInput-input': {
        height: '13px'
    },

    '& .MuiOutlinedInput-root': {
        paddingLeft: '0'
    }
})

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
    return (
        <div>
            <div className='become-cleaner-top'>
                <Navbar />
                <div className='sp-registration'>
                    <Typography component="h4" variant="h4">Register Now!</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { px: 4.4 },
                        }}>
                        <StyledTextField fullWidth id="outlined-basic" placeholder='First name' variant="outlined" />
                        <StyledTextField fullWidth id="outlined-basic" placeholder='Last name' variant="outlined" />
                        <StyledTextField fullWidth id="outlined-basic" placeholder='Email Address' variant="outlined" />
                        <StyledTextField
                            InputProps={{
                                startAdornment: <StyledInputAdornment position="start">+46</StyledInputAdornment>,
                            }}
                            fullWidth id="outlined-basic" placeholder='Phone Number' variant="outlined" />
                        <StyledTextField
                            fullWidth
                            id="outlined-password-input"
                            placeholder="Password"
                            type="password"
                            variant="outlined" />
                        <StyledTextField
                            fullWidth
                            id="outlined-password-input"
                            placeholder="Confirm Password"
                            type="password"
                            variant="outlined" />
                        <div className='registration-checkbox'>
                            {/* <StyledFormControlLabel control={<StyledCheckbox />} label="Send me newsletters from Helperland" />
                            <StyledFormControlLabel control={<StyledCheckbox />} label="I accept terms and conditions & privacy policy" /> */}
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
                        <StyledButton >Get Started <img src={arrowWhite} alt="white arrow" /></StyledButton>
                    </Box>
                </div>
                <Box sx={{ pt: 5.5, pb: 3.75 }} textAlign="center">
                    <img src={group18_5} alt="Down-arrow" />
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
