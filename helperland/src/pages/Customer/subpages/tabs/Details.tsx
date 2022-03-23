import React, { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications';
import { useForm } from "react-hook-form";

import Grid from '@mui/material/Grid';
import { CustomTextField, HelperButton, MobileNumber, ReadTextField, SaveButton, StyledInputAdornment } from '../../subcomponents/StyledComponents';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { calenderBookService } from '../../../../assets/images';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { getUserDetails, updateUserDetails } from '../../CustomerService';

type settingsProps = {
    email: string
}

const Details = (props: settingsProps) => {
    const { addToast } = useToasts();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [date, setDate] = React.useState<Date | null>(new Date("01/01/2001"));
    const [language, setLanguage] = useState("English");

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit'
    })

    const email = props.email;

    useEffect(() => {
        getUserDetails(props.email)
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log("response");
                    console.log(data);
                    setFirstName(data.firstName)
                    setLastName(data.lastName)
                    setMobileNumber(data.mobileNumber)
                    setLanguage(data.language)
                    setDate(new Date(data.date))
                }
            })
    }, [])


    const handleDateChange = (newValue: Date | null) => {
        setDate(newValue);
    };

    const handleLanguageChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };

    const updateDetails = () => {
        updateUserDetails({ firstName, lastName, mobileNumber, date, language, email })
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                    addToast("Could not save Data!", { appearance: 'error' });
                } else {
                    console.log(data)
                    addToast('Saved Successfully', { appearance: 'success' });
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(updateDetails)}>
                <Grid container spacing={2}>
                    <Grid item lg={4}>
                        <p>First name</p>
                        <CustomTextField
                            {...register("firstName", { required: "Firstname is required." })}
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            value={firstName}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setFirstName(event.target.value)
                            }}
                        />
                        {errors.firstName && !firstName && <p className='error'>{errors.firstName.message}</p>}
                    </Grid>

                    <Grid item lg={4}>
                        <p>Last name</p>
                        <CustomTextField
                            {...register("lastName", { required: "Lastname is required." })}
                            fullWidth
                            variant="outlined"
                            value={lastName}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setLastName(event.target.value)
                            }}
                        />
                        {errors.lastName && !lastName && <p className='error'>{errors.lastName.message}</p>}
                    </Grid>

                    <Grid item lg={4}>
                        <p>Email address</p>
                        <ReadTextField
                            fullWidth
                            variant="outlined"
                            value={props.email}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item lg={4}>
                        <p>Mobile number</p>
                        <MobileNumber
                            fullWidth
                            variant="outlined"
                            value={mobileNumber}
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
                        />
                        {errors.mobileNumber && !mobileNumber && <p className='error'>{errors.mobileNumber.message}</p>}
                    </Grid>
                    <Grid item lg={4}>
                        <p>Date of Birth</p>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                disableFuture
                                inputFormat="MM/dd/yyyy"
                                value={date}
                                onChange={handleDateChange}
                                InputAdornmentProps={{
                                    position: 'start'
                                }}
                                renderInput={(params) => <CustomTextField {...params} />}
                                components={{
                                    OpenPickerIcon: () => <img src={calenderBookService} alt="calender-icon" />
                                }}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                <hr className='prices-hr' />
                <Grid container pb={2}>
                    <Grid item lg={12}>
                        <p>My Preffered Language</p>
                        <Select
                            sx={{ height: '46px', width: '150px', marginTop: '5px' }}
                            defaultValue="English"
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <MenuItem value="English">English</MenuItem>
                            <MenuItem value="Deutsch">Deutsch</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <SaveButton type='submit'>Save</SaveButton>
            </form>
        </div >
    )
}

export default Details