import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import { Container, FormControl, Grid, TextField, Button, InputAdornment, Checkbox, FormControlLabel } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
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
    const [userDetails, setUserDetails] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
        // 0 for serviceProvider
        userTypeId: 0
    })

    const { firstName, lastName, email, mobileNumber, password, userTypeId } = userDetails;

    const handleChangeContactValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [event.target.name]: event.target.value })
    }

    const isEmpty = () => {
        let key: keyof typeof userDetails

        for (key in userDetails) {
            if (Object.prototype.hasOwnProperty.call(userDetails, key)) {
                if (userDetails[key] === "") {
                    return true;
                }
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (event: any) => {
        event.preventDefault()
        if (isEmpty()) {
            alert("All the Fields are required.")
        }
        else {
            Signup({ firstName, lastName, email, mobileNumber, password, userTypeId })
            alert("Details submitted successfully!")
        }
    }


    return (
        <>
            <div className="wrapper page">
                <Header />

                <Container maxWidth="xl" sx={{ py: 8, px: { sm: 0, xs: 0 } }}>
                    <h2 className="heading">Create Account</h2>
                    <FormControl sx={{ width: '100%' }}>
                        <Grid container className="contactus-form" textAlign="left" spacing={2} sx={{ m: 'auto', width: '100%' }}>
                            <Grid item md={6} sm={12} xs={12}>
                                <CustomTextField id="outlined1" type="text" color="primary" placeholder="First Name" variant="outlined" fullWidth required name="firstName" onChange={handleChangeContactValues} />
                            </Grid>
                            <Grid item md={6} sm={12} xs={12} >
                                <CustomTextField id="outlined2" type="text" placeholder="Last Name" variant="outlined" fullWidth required name="lastName" onChange={handleChangeContactValues} />
                            </Grid>
                            <Grid item md={6} sm={12} xs={12} >
                                <CustomTextField id="outlined3" type="mail" fullWidth placeholder="Email" variant="outlined" name="email" onChange={handleChangeContactValues} />
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <NumberTextField id="outlined" type="tel"
                                    InputProps={{
                                        startAdornment: <CustomInputAdornment position="start">+49</CustomInputAdornment>,
                                    }}
                                    placeholder="Mobile Number" variant="outlined" fullWidth
                                    name="mobileNumber" onChange={handleChangeContactValues}
                                />
                            </Grid>

                            <Grid item md={6} sm={12} xs={12} >
                                <CustomTextField type="password" fullWidth placeholder="Password" variant="outlined" name="password" onChange={handleChangeContactValues} />
                            </Grid>
                            <Grid item md={6} sm={12} xs={12} >
                                <CustomTextField type="password" fullWidth placeholder="Confirm Password" variant="outlined" name="confirmPassword" onChange={handleChangeContactValues} />
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} >
                                <CustomFormControlLabel control={<CustomCheckbox icon={<CustomIcon />} checkedIcon={<SelectedIcon />} />} label="Yes, I would like to subscribe to the Helperland GmbH newsletter with vouchers, trends, promotions and individualized offers. I can unsubscribe from the newsletter at any time in the newsletter and in my customer account" />
                                <CustomFormControlLabel control={<CustomCheckbox icon={<CustomIcon />} checkedIcon={<SelectedIcon />} />} label={labal2} />
                                <CustomFormControlLabel control={<CustomCheckbox icon={<CustomIcon />} checkedIcon={<SelectedIcon />} />} label={labal} />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12} textAlign="center">
                                <CustomButton onClick={onSubmit} type="submit">Register</CustomButton>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} textAlign="center" className="log-in-now">
                                Already registered? <Link to="">log in now</Link>
                            </Grid>
                        </Grid>
                    </FormControl>
                </Container>
                <Footer />
            </div>
        </>
    )
}
export default UserRegistration;