import React from 'react';
import Header from '../components/Header';
import ImageBanner from '../components/ImageBanner';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { adminArrow, forma1Copy5, forma1_2, group16, group16_2, phoneCall, vectorSmartObject } from '../assets/images';


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

const style = () => ({
    notchedOutline: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        '&:hover': {
            borderColor: '#FFFFFF',
            borderWidth: 2
        },
    }
})

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
    const [subject, setSubject] = React.useState('');

    const handleChange = (event: SelectChangeEvent<typeof subject>) => {
        setSubject(
            event.target.value
        );
    };

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
                        <p>1111 Lorem ipsum text 100, </p>
                        <p>Lorem ipsum AB</p>
                    </Grid>
                    <Grid item lg={4} xs={12} display='flex' flexDirection='column' alignItems='center' pb={8}>
                        <img src={phoneCall} alt="phone icon" />
                        <a href="tel:+4940123567890"> <p>+49 (40) 123 56 7890</p> </a>
                        <a href="tel:+4940987560000"> <p>+49 (40) 987 56 0000</p> </a>
                    </Grid>
                    <Grid item lg={4} xs={12} display='flex' flexDirection='column' alignItems='center' pb={8}>
                        <img src={vectorSmartObject} alt="email icon" />
                        <a className='contact-us-email' href="mailto:info@helperland.com"> <p>info@helperland.com</p> </a>
                    </Grid>
                </Grid>
                <hr className='prices-hr' />

                <Typography pt={9} pb={3} variant='h3' component='h3' textAlign='center' fontSize='28px' color='#4F4F4F'>Get in touch with us</Typography>

                <Grid container maxWidth='614px' spacing={1.87} pr={2} mx='auto'>
                    <Grid item lg={6} xs={12}>
                        <StyledTextField fullWidth id="outlined-basic" placeholder='First Name' variant="outlined" />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <StyledTextField fullWidth id="outlined-basic" placeholder='Last Name' variant="outlined" />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <StyledTextField
                            InputProps={{
                                startAdornment: <StyledInputAdornment position="start">+49</StyledInputAdornment>,
                            }}
                            fullWidth id="outlined-basic" placeholder='Mobile Number' variant="outlined" />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <StyledTextField fullWidth id="outlined-basic" placeholder='Email address' variant="outlined" />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                        <FormControl fullWidth>
                            <Select
                                sx={{ height: '46px' }}
                                displayEmpty
                                value={subject}
                                input={<OutlinedInput />}
                                placeholder="Subject"
                                onChange={handleChange}
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
                        <TextField multiline rows={5} fullWidth id="outlined-basic-message" placeholder='Message' variant="outlined" />
                    </Grid>
                    <Grid item lg={12} xs={12} display='flex' justifyContent='center' mt={1} mb={10}>
                        <StyledButton>Submit</StyledButton>
                    </Grid>
                </Grid>
            </Container>
            <ImageBanner alt='map image' address={group16} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Contact;
