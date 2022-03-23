import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";

import { bookServiceBanner, calenderBookService, details, detailsWhite, forma1Copy5, keyboardRightArrowButton2, payment, paymentWhite, schedule, scheduleWhite, setupService, setupServiceWhite, smiley } from '../assets/images'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ImageBanner from '../components/ImageBanner'
import Newsletter from '../components/Newsletter'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Helmet } from "react-helmet";

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Link, Navigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { getPostalCode, isAuthenticated, submitBooking } from '../api';
import { Modal } from '@mui/material';

const Pincode = styled(TextField)({
    width: '306px',
    paddingTop: '5px',
    '& .MuiOutlinedInput-root': {
        height: '46px',
        color: '#646464'
    }
})

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))({
    color: '#646464',
    borderBottom: '1px solid #E1E1E1',
    fontSize: '14px',
    '&:before': {
        display: 'none',
    }
});

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<img src={keyboardRightArrowButton2} />}
        {...props}
    />
))({
    backgroundColor: '#FFFFFF',
    flexDirection: 'row-reverse',
    paddingLeft: '0',
    paddingRight: '0',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)'
    },

    '& .MuiAccordionSummary-content': {
        paddingLeft: '8px'
    },

    '& .MuiAccordion-root': {
        border: 'none'
    }
});

const AccordionDetails = styled(MuiAccordionDetails)({
    paddingLeft: '28px',
    paddingBottom: '0',
    paddingTop: '0',
});

const StyledTab = styled(Tab)(({ theme }) => ({
    width: 'fit-content',
    maxWidth: '201px',
    backgroundColor: '#F3F3F3',
    color: "#646464",
    fontSize: '18px',
    fontWeight: '400',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',

    '&.Mui-selected':
    {
        backgroundColor: '#1D7A8C',
        color: '#FFFFFF',

    },

    [theme.breakpoints.down("md")]: {
        fontSize: '0',
    },
}))

const Check = styled('span')({
    width: 18,
    height: 18,
    border: "1px solid #C8C8C8",
    borderRadius: 3,
    marginRight: 8,
    'input:hover ~ &':
    {
        border: "1px solid rgba(0,0,0,0.4)",
    }
});

const CustomFormControlLabel = styled(FormControlLabel)({
    display: 'flex',
    textAlign: 'left',
    margin: '0',
    color: '#4F4F4F',
    fontSize: '16px',
    lineHeight: '24px',
    alignItems: 'center'
})

const CustomCheckbox = styled(Checkbox)({
    padding: '0'
})

const SelectedCheck = styled(Check)({
    backgroundColor: "#1D7A8C",
    '&:before': {
        display: 'inline-block',
        width: 15,
        height: 18,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
});

const StyledTabs = styled(Tabs)(({ theme }) => ({
    marginBottom: '34px',
    '& .MuiTabs-flexContainer':
    {
        justifyContent: 'center',
        height: '67px'
    },

    '& .MuiTabs-indicator':
    {
        height: '0px'
    },

    [theme.breakpoints.down("md")]: {
        overflow: 'auto',

    },
}))

const CustomSelect = styled(Select)({
    fontSize: '14px',
    color: '#646464',
    margin: "0 10px",
    width: '101px',

    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
    },

    '&.MuiInputBase-root': {
        marginLeft: '0'
    },

    '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '12px',
        border: '1px solid #D6D6D6'
    },
    '& .MuiSelect-select .Mui-focused': {
        border: '1px solid #E1E1E1'
    }
})
const StyledButton = styled(Button)({
    backgroundColor: '#1D7A8C',
    color: '#FFFFFF',
    borderRadius: '23px',
    width: '141px',
    height: '46px',
    textTransform: 'initial',
    fontSize: '20px',
    margin: '10px 0',

    '&:hover': {
        backgroundColor: '#176270',
    }
})

const CheckButton = styled(Button)({
    backgroundColor: '#1D7A8C',
    color: '#FFFFFF',
    borderRadius: '23px',
    width: '170px',
    height: '48px',
    textTransform: 'initial',
    fontSize: '17px',
    '&:hover': {
        backgroundColor: '#176270',
    }
})

const AddressTextField = styled(TextField)({
    '& .MuiOutlinedInput-root':
    {
        height: 46,
        backgroundColor: 'white'
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
})

const CustomTextField = styled(TextField)({
    width: '146px',
    marginRight: '10px',
    '& .MuiOutlinedInput-root': {
        height: '46px',
    }
})

const Comments = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        color: '#646464'
    },
    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: '#C8C8C8'
    },

    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#C8C8C8'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#C8C8C8'
    },
})

const CustomTimeSelect = styled(Select)({
    fontSize: '14px',
    color: '#646464',
    margin: "0 10px",
    width: '108px',

    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
    },

    '&.MuiInputBase-root': {
        marginLeft: '0'
    },

    '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '12px',
        border: '1px solid #D6D6D6'
    },
    '& .MuiSelect-select .Mui-focused': {
        border: '1px solid #E1E1E1'
    }
})

const CustomDurationSelect = styled(Select)({
    fontSize: '14px',
    color: '#646464',
    margin: "0 10px",
    width: '156px',

    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
    },

    '&.MuiInputBase-root': {
        marginLeft: '0'
    },

    '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '12px',
        border: '1px solid #D6D6D6'
    },
    '& .MuiSelect-select .Mui-focused': {
        border: '1px solid #E1E1E1'
    }
})

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography component='div'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const AddressButton = styled(Button)({
    backgroundColor: '#white',
    color: '#1D7A8C',
    textTransform: 'none',
    display: 'block',
    padding: '0 30px',
    minHeight: '46px',
    fontSize: '20px',
    border: '2px solid #1D7A8C',
    borderRadius: 23,
    transition: '0.3s',
    '&:hover':
    {
        color: 'white',
        backgroundColor: '#176270'
    }
})

const CustomButton1 = styled(Button)({
    backgroundColor: '#1D7A8C',
    color: 'white',
    textTransform: 'none',
    padding: '0 20px',
    minHeight: '46px',
    fontSize: '20px',
    borderRadius: 23,
    transition: '0.3s',
    '&:hover':
    {
        backgroundColor: '#176270'
    }
});

const CustomButton2 = styled(Button)({
    backgroundColor: 'transparent',
    color: '#646464',
    textTransform: 'none',
    padding: '0 20px',
    minHeight: '46px',
    marginLeft: '15px',
    fontSize: '20px',
    border: '1px solid #c8c8c8',
    borderRadius: 23,
    transition: '0.3s',
    '&:hover':
    {
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: '1px solid #646464',
    }
});

const CustomFormControlRadio = styled(FormControlLabel)({
    "&":
    {
        display: 'flex',
        flex: '100%',
        maxWidth: '100%',
        border: '1px solid #c8c8c8',
        margin: '0',
        color: '#646464',
        marginBottom: '20px',
        borderRadius: '4px'
    }
})

const NumberTextField = styled(TextField)({
    '& .MuiOutlinedInput-root':
    {
        height: 46,
        paddingLeft: 0,
        backgroundColor: 'white'
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

const CustomButton = styled(Button)({
    backgroundColor: '#1D7A8C',
    color: 'white',
    textTransform: 'none',
    display: 'block',
    padding: '0 30px',
    minHeight: '46px',
    fontSize: '20px',
    borderRadius: 23,
    margin: '16px 0 16px auto',
    transition: '0.3s',
    '&:hover':
    {
        backgroundColor: '#176270'
    }
});

const SuccessButton = styled(Button)({
    backgroundColor: '#1D7A8C',
    color: 'white',
    textTransform: 'none',
    display: 'block',
    padding: '0 30px',
    minHeight: '46px',
    fontSize: '20px',
    marginTop: '20px',
    borderRadius: 23,
    transition: '0.3s',
    '&:hover':
    {
        backgroundColor: '#176270'
    }
});

interface customer {
    streetName: string,
    city: string,
    houseNumber: string,
    mobilenumber: string,
    zipCode: string
}

let labal: customer[];

const BookService = () => {
    const [value, setValue] = React.useState(0);
    const [bed, setBed] = React.useState(1);
    const [bath, setBath] = React.useState(1);
    const [date, setDate] = React.useState<Date | null>(new Date());
    const [time, setTime] = React.useState("2:00 PM")
    const [duration, setDuration] = React.useState(3)
    const [expanded, setExpanded] = React.useState<string | false>('');
    const [postalCode, setPostalCode] = React.useState("")
    const [isSecondActive, setIsSecondActive] = React.useState(false)
    const [comments, setComments] = React.useState("")
    const [isThirdActive, setIsThirdActive] = React.useState(false)
    const [isForthActive, setIsForthActive] = React.useState(false)
    const [cabinet, setCabinet] = React.useState(false)
    const [fridge, setFridge] = React.useState(false)
    const [oven, setOven] = React.useState(false)
    const [laundry, setLaundry] = React.useState(false)
    const [windows, setWindows] = React.useState(false)
    const [pet, setPet] = React.useState(false)
    const [error, setError] = React.useState("")
    const [radio, setRadio] = React.useState('1');
    const [agreement, setAgreement] = React.useState(false)
    const handleRadio = (event: any) => {
        setRadio(event.target.value);
    };
    const [streetName, setStreetName] = React.useState("");
    const [houseNumber, setHouseNumber] = React.useState("");
    const [city, setCity] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState("");
    const [open, setOpen] = React.useState(false);
    // const [finalPrice, setFinalPrice] = React.useState<number>(0)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleStreetName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStreetName(event.target.value);
    }
    const handleHouseNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHouseNumber(event.target.value);
    }
    const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    }
    const handleMobileNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMobileNumber(event.target.value);
    }

    const [showAddress, setShowAddress] = React.useState(false);
    const handleOpenAddress = () => {
        setShowAddress(true);
    }
    const handleCloseAddress = () => {
        setShowAddress(false);
    }

    const [addressObj, setAddressObj] = React.useState(labal);

    const renderAddress = async () => {
        const path = 'http://localhost:5000/users?email=pandyapoojan2000@gmail.com';
        const response = await fetch(path);
        const data = await response.json();
        console.log(data);
        labal = [];
        if ('address' in data[0]) {
            const address = data[0].address;
            labal = address;
            setAddressObj(labal);
            console.log(labal);
        }
    }


    const saveAddress = async () => {
        const object =
        {
            zipCode: postalCode,
            streetName: streetName,
            houseNumber: houseNumber,
            city: city,
            mobilenumber: mobileNumber
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(object),
            headers: { 'Content-Type': 'application/json' }
        }
        const path = "http://localhost:5000/api/Account/Address";
        const response = await fetch(path, options);
        const data = await response.json();
        if (data.message) {
            handleCloseAddress();
            setCity("");
            setMobileNumber("");
            setStreetName("");
            setHouseNumber("");
        }
        setTimeout(() => {
            renderAddress();
        }, 600);

    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    })

    const { register: register5, handleSubmit: handleSubmit5, formState: { errors: errors5 } } = useForm({
        mode: "onChange"
    })

    const { register: register4, handleSubmit: handleSubmit4, formState: { errors: errors4 } } = useForm({
        mode: "onChange"
    })

    const { register: register2, formState: { errors: errors2 }, handleSubmit: handleSubmit2 } = useForm({
        mode: "onChange",
    });

    const handleChangePostalCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostalCode(event.target.value)
    }

    const handleChangeAccordion = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleDateChange = (newValue: Date | null) => {
        setDate(newValue);
    };

    const handleBedChange = (value: number) => {
        setBed(value);
    }

    const handleBathChange = (value: number) => {
        setBath(value);
    }

    const handleTimeChange = (value: string) => {
        setTime(value)
    }

    const handleDurationChange = (value: number) => {
        setDuration(value)
    }

    const checkAvailibility = () => {
        getPostalCode(postalCode)
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                    setError(data.error)
                    setPostalCode("")
                }
                else {
                    console.log(data);
                    setIsSecondActive(true)
                    setValue(1)
                }
            })
    }

    const storeScheduleData = () => {
        if (isAuthenticated() === false) {
            console.log("You are not authenticated.");
        }
        else {
            setValue(2)
            setIsThirdActive(true)
        }
        console.log(isAuthenticated());
    }

    const getPaymentTotal = (): number => {
        let sum: number = duration;
        if (cabinet) {
            sum += 0.5
        }
        if (fridge) {
            sum += 0.5
        }
        if (oven) {
            sum += 0.5
        }
        if (laundry) {
            sum += 0.5
        }
        if (windows) {
            sum += 0.5
        }
        return sum
    }

    const perCleaning = (): number => {
        const hourlyPrice = 18;
        const finalRate: number = Math.round(getPaymentTotal() * hourlyPrice)
        return finalRate;
    }

    const discount = (): number => Math.round(perCleaning() * 0.1);

    const totalPayment = (): number => Math.round(perCleaning() - discount())

    const effectivePrice = (): number => {
        const ePrice: number = Math.round(totalPayment() - totalPayment() * 0.2)
        return ePrice;
    }

    const submitForm = () => {
        const index = parseInt(radio)
        const addressData = addressObj[index]
        const email = isAuthenticated().email
        const finalPrice = effectivePrice()
        const status = "Remaining"

        console.log({ email, bed, bath, date, time, duration, cabinet, fridge, oven, laundry, windows, finalPrice, status, comments, pet, addressData })
        submitBooking({ email, bed, bath, date, time, duration, cabinet, fridge, oven, laundry, windows, finalPrice, status, comments, pet, addressData })
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                }
                else {
                    console.log(data.message);
                    handleOpen()
                    // window.location.href = "http://localhost:3000/service-history"
                }
            })
    }

    const yourDetailsDone = () => {
        setIsForthActive(true);
        setValue(3);
    }

    useEffect(() => {
        renderAddress()
    }, [])


    return (
        isAuthenticated() ? (
            <div>
                <Helmet>
                    <title>Book Service - Helperland</title>
                </Helmet>
                <Header />
                <ImageBanner address={bookServiceBanner} alt="book-service-banner" />
                <div className='page-top'>
                    <Typography component="h1" variant="h1">Set up your cleaning service</Typography>
                    <div className='star-design'>
                        <img src={forma1Copy5} alt="star" />
                    </div>
                </div>
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="modal">
                        <div className="login-modal service-booked">
                            <h4>Booking has been successfully submitted</h4>
                            <Link to='/customer-dashboard'><SuccessButton>Ok</SuccessButton></Link>
                        </div>
                    </Box>
                </Modal>


                <Container maxWidth='xl'>
                    <Grid container pt={7}>
                        <Grid item xs={12} xl={8}>
                            <div style={{ maxWidth: '750px', margin: '0 auto' }}>
                                <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <StyledTab icon={value === 0 ? (<img src={setupServiceWhite} />) : (<img src={setupService} />)} iconPosition='start' label="Setup Service" {...a11yProps(0)} className='   tab' />
                                    <StyledTab icon={value === 1 ? (<img src={scheduleWhite} />) : (<img src={schedule} />)} iconPosition='start' label="Schedule & Plan" {...a11yProps(1)} className='tab' disabled={isSecondActive ? false : true} />
                                    <StyledTab icon={value === 2 ? (<img src={detailsWhite} />) : (<img src={details} />)} iconPosition='start' label="Your Details" {...a11yProps(2)} className='tab' disabled={isThirdActive ? false : true} />
                                    <StyledTab icon={value === 3 ? (<img src={paymentWhite} />) : (<img src={payment} />)} iconPosition='start' label="Make Payment" {...a11yProps(3)} className='tab' disabled={isForthActive ? false : true} />
                                </StyledTabs>

                                <TabPanel value={value} index={0}>
                                    <div className='pincode-book'>
                                        <Typography component='h5' variant='h5'>
                                            Please enter your zip code:
                                        </Typography>
                                        <form onSubmit={handleSubmit(checkAvailibility)}>
                                            <div className='pincode-textfield'>
                                                <Pincode
                                                    {...register("postalCode",
                                                        {
                                                            required: "Postal Code is required.",
                                                            pattern: {
                                                                value: /^[0-9]*$/,
                                                                message: "PostalCode is invalid."
                                                            },
                                                            maxLength: {
                                                                value: 6,
                                                                message: 'Postal code must be 6 digits'
                                                            },
                                                            minLength: {
                                                                value: 6,
                                                                message: 'Postal code must be 6 digits'
                                                            }
                                                        })}
                                                    value={postalCode}
                                                    onChange={handleChangePostalCode} type="text" variant='outlined' placeholder="Postal code" />
                                                <CheckButton type='submit'>Check Availibility</CheckButton>
                                            </div>
                                            {error && (<p>{error}</p>)}
                                        </form>
                                        {errors.postalCode && <p className='error'>{errors.postalCode.message}</p>}
                                    </div>
                                </TabPanel>

                                <TabPanel value={value} index={1}>
                                    <form onSubmit={handleSubmit(storeScheduleData)}>
                                        <div className='book-service-left'>
                                            <div className='room-count'>
                                                <Typography component='h5' variant='h5'>
                                                    Select number of rooms and bath
                                                </Typography>

                                                <CustomSelect
                                                    value={bed}
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    <MenuItem onClick={() => handleBedChange(1)} value={1}>1 &nbsp;&nbsp;bed</MenuItem>
                                                    <MenuItem onClick={() => handleBedChange(2)} value={2}>2 &nbsp;&nbsp;bed</MenuItem>
                                                    <MenuItem onClick={() => handleBedChange(3)} value={3}>3 &nbsp;&nbsp;bed</MenuItem>
                                                </CustomSelect>

                                                <CustomSelect
                                                    value={bath}
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    <MenuItem onClick={() => handleBathChange(1)} value={1}>1 &nbsp;&nbsp;bath</MenuItem>
                                                    <MenuItem onClick={() => handleBathChange(2)} value={2}>2 &nbsp;&nbsp;bath</MenuItem>
                                                    <MenuItem onClick={() => handleBathChange(3)} value={3}>3 &nbsp;&nbsp;bath</MenuItem>
                                                </CustomSelect>
                                            </div>
                                            <hr className='prices-hr' />
                                            <div className='cleaner-timing'>
                                                <Grid container>
                                                    <Grid item lg={5} pb={3}>
                                                        <Typography component='h5' variant='h5'>
                                                            When do you need the cleaner?
                                                        </Typography>
                                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                            <DesktopDatePicker
                                                                disablePast
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
                                                        <CustomTimeSelect
                                                            value={time}
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                        >
                                                            <MenuItem onClick={() => handleTimeChange("2:00 PM")} value={"2:00 PM"}>&nbsp;&nbsp;2:00 PM</MenuItem>
                                                            <MenuItem onClick={() => handleTimeChange("10:00 AM")} value={"10:00 AM"}>&nbsp;&nbsp;10:00 AM</MenuItem>
                                                            <MenuItem onClick={() => handleTimeChange("12:30 PM")} value={"12:30 PM"}>&nbsp;&nbsp;12:30 PM</MenuItem>
                                                        </CustomTimeSelect>
                                                    </Grid>

                                                    <Grid item lg={7}>
                                                        <Typography component='h5' variant='h5'>
                                                            How long do you need your cleaner to stay?
                                                        </Typography>
                                                        <CustomDurationSelect
                                                            value={duration}
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                        >
                                                            <MenuItem onClick={() => handleDurationChange(1)} value={1}>&nbsp;&nbsp;1.0 Hrs</MenuItem>
                                                            <MenuItem onClick={() => handleDurationChange(2)} value={2}>&nbsp;&nbsp;2.0 Hrs</MenuItem>
                                                            <MenuItem onClick={() => handleDurationChange(3)} value={3}>&nbsp;&nbsp;3.0 Hrs</MenuItem>
                                                        </CustomDurationSelect>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <hr className='prices-hr' />
                                            <Typography component='h5' variant='h5' pt={3}>
                                                Extra Services
                                            </Typography>
                                            <Grid container className='extra-services service-center' pt={1} pb={1.5}>
                                                <Grid item lg={2.4} xs={12} md={4} className='extra-services-item cabinet-checkbox'>
                                                    <input type="checkbox" name="cabinet" id="cabinet" checked={cabinet}
                                                        onChange={() => {
                                                            setCabinet(!cabinet)
                                                        }}
                                                    />
                                                    <label className='cabinet-label' htmlFor="cabinet">
                                                        <div>
                                                        </div>
                                                    </label>
                                                    <p className='service-name'>Inside cabinets</p>
                                                </Grid>
                                                <Grid item xl={2.4} lg={2.4} xs={12} md={4} className='extra-services-item fridge-checkbox'>
                                                    <input type="checkbox" name="fridge" id="fridge" checked={fridge}
                                                        onChange={() => {
                                                            setFridge(!fridge)
                                                        }} />
                                                    <label className='fridge-label' htmlFor="fridge">
                                                        <div>
                                                        </div>
                                                    </label>
                                                    <p className='service-name'>Inside fridge</p>
                                                </Grid>
                                                <Grid item lg={2.4} xs={12} md={4} className='extra-services-item oven-checkbox'>
                                                    <input type="checkbox" name="oven" id="oven" checked={oven}
                                                        onChange={() => {
                                                            setOven(!oven)
                                                        }} />
                                                    <label className='oven-label' htmlFor="oven">
                                                        <div>
                                                        </div>
                                                    </label>
                                                    <p className='service-name'>Inside oven</p>
                                                </Grid>
                                                <Grid item lg={2.4} xs={12} md={6} className='extra-services-item machine-checkbox'>
                                                    <input type="checkbox" name="machine" id="machine" checked={laundry}
                                                        onChange={() => {
                                                            setLaundry(!laundry)
                                                        }} />
                                                    <label className='machine-label' htmlFor="machine">
                                                        <div>
                                                        </div>
                                                    </label>
                                                    <p className='service-name laundry-wash'>Laundry wash & dry</p>
                                                </Grid>
                                                <Grid item lg={2.4} xs={12} md={6} className='extra-services-item window-checkbox'>
                                                    <input type="checkbox" name="window" id="window" checked={windows}
                                                        onChange={() => {
                                                            setWindows(!windows)
                                                        }} />
                                                    <label className='window-label' htmlFor="window">
                                                        <div>
                                                        </div>
                                                    </label>
                                                    <p className='service-name interior-windows'>Interior windows</p>
                                                </Grid>

                                            </Grid>

                                            <hr className='prices-hr' />

                                            <div>
                                                <Typography component='h5' variant='h5'>
                                                    Comments
                                                </Typography>

                                                <Comments
                                                    fullWidth
                                                    multiline
                                                    minRows={2}
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                        setComments(event.target.value)
                                                    }}
                                                />
                                                <CustomFormControlLabel
                                                    sx={{ marginTop: 2, marginBottom: 3 }} control={<CustomCheckbox icon={<Check />} checkedIcon={<SelectedCheck />}
                                                        checked={pet} onChange={() => {
                                                            setPet(!pet)
                                                        }}
                                                    />} label="I have pets at home" />
                                            </div>

                                            <hr className='prices-hr' />

                                            <div className='continue-button'>
                                                <StyledButton type='submit'>Continue</StyledButton>
                                            </div>

                                        </div>
                                    </form>
                                </TabPanel>

                                <TabPanel value={value} index={2}>
                                    <div className="details">
                                        <Typography className="title">Enter your contact details, so we can serve you in better way!</Typography>

                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={radio}
                                            onChange={handleRadio}
                                        >
                                            {addressObj &&
                                                addressObj.map((user, i) => (
                                                    <CustomFormControlRadio key={i} value={i++} control={<Radio />} label={`Address : ${user.streetName} ${user.houseNumber} , ${user.city}  ${user.zipCode}     
                                                Phone number : ${user.mobilenumber}`} />
                                                ))
                                            }
                                        </RadioGroup>
                                        {showAddress &&
                                            <div className="address-card">

                                                <form onSubmit={handleSubmit4(saveAddress)}>
                                                    <Grid container spacing={2} sx={{ mb: 2 }}>
                                                        <Grid item lg={6}>
                                                            <Typography variant="body2">Street name</Typography>
                                                            <AddressTextField {...register4("streetName", { required: true, minLength: 3 })} value={streetName} onChange={handleStreetName} type="text" color="primary" placeholder="Street name" variant="outlined" fullWidth />
                                                            {errors4.streetName && errors4.streetName.type === "required" && <p className='error'>Street name is required</p>}
                                                            {errors4.streetName && errors4.streetName.type === "minLength" && <p className='error'>Min length should be 3</p>}
                                                        </Grid>
                                                        <Grid item lg={6}>
                                                            <Typography variant="body2">House number</Typography>
                                                            <AddressTextField {...register4("houseNumber", {
                                                                required: "House number is required.",
                                                                pattern: {
                                                                    value: /^[1-9]\d*$/,
                                                                    message: "House number is invalid."
                                                                }
                                                            })} value={houseNumber} onChange={handleHouseNumber} type="text" color="primary" placeholder="House number" variant="outlined" fullWidth />
                                                            {errors4.houseNumber && <p className='error'>{errors4.houseNumber.message}</p>}
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2} sx={{ mb: 2 }}>
                                                        <Grid item lg={6}>
                                                            <Typography variant="body2">Postal code</Typography>
                                                            <AddressTextField value={postalCode} type="text" color="primary" placeholder="Postal code" disabled variant="outlined" fullWidth />
                                                        </Grid>
                                                        <Grid item lg={6}>
                                                            <Typography variant="body2">City</Typography>
                                                            <AddressTextField {...register4("city", { required: true, minLength: 3 })} value={city} onChange={handleCity} type="text" color="primary" placeholder="City" variant="outlined" fullWidth />
                                                            {errors4.city && errors4.city.type === "required" && <p className='error'>City name is required</p>}
                                                            {errors4.city && errors4.city.type === "minlength" && <p className='error'>Minlength must be 3 characters</p>}
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2} sx={{ mb: 2 }}>
                                                        <Grid item lg={6}>
                                                            <Typography variant="body2">Phone number</Typography>
                                                            <NumberTextField {...register4("mobileNumber", { required: true, minLength: 10, maxLength: 10, pattern: /^[789]\d{9}$/ })} type="tel" value={mobileNumber} onChange={handleMobileNumber}
                                                                InputProps={{
                                                                    startAdornment: <CustomInputAdornment position="start">+49</CustomInputAdornment>,
                                                                }}
                                                                placeholder="Mobile Number" variant="outlined" fullWidth />
                                                            {errors4.mobileNumber && errors4.mobileNumber.type === "required" && <p className='error'>Mobile number is required</p>}
                                                            {errors4.mobileNumber && errors4.mobileNumber.type === "minLength" && <p className='error'>Mobile number is invalid</p>}
                                                            {errors4.mobileNumber && errors4.mobileNumber.type === "maxLength" && <p className='error'>Mobile number is invalid</p>}
                                                            {errors4.mobileNumber && errors4.mobileNumber.type === "pattern" && <p className='error'>Must start with valid number</p>}
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2}>
                                                        <Grid item lg={12}>
                                                            <CustomButton1 type="submit">Save</CustomButton1>
                                                            <CustomButton2 onClick={handleCloseAddress}>Cancel</CustomButton2>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </div>
                                        }
                                        {!showAddress &&
                                            <AddressButton onClick={handleOpenAddress}>+ Add New Address</AddressButton>
                                        }
                                        <CustomButton onClick={yourDetailsDone}>Continue</CustomButton>

                                    </div>
                                </TabPanel>

                                <TabPanel value={value} index={3}>
                                    <form onSubmit={handleSubmit(submitForm)}>
                                        <CustomFormControlLabel sx={{ marginTop: 2, marginBottom: 3 }} control={<CustomCheckbox icon={<Check />} checkedIcon={<SelectedCheck />}
                                            {...register5("agreement",
                                                {
                                                    required: "Agreement is required for submission.",
                                                }
                                            )}
                                            checked={agreement} onChange={() => {
                                                setAgreement(!agreement)
                                            }}
                                        />} label="I accepted terms and conditions, the cancellation policy and the privacy policy. I confirm that Helperland starts to execute the contract before the expiry of the withdrawal period and I lose my right of withdrawal as a consumer with full performance of the contract." />
                                        {errors5.agreement && errors5.agreement.type === "required" && <p className='error'>errors5.agreement.message</p>}
                                        <CustomButton type='submit'>Complete Booking</CustomButton>
                                    </form>
                                </TabPanel>
                            </div>
                        </Grid>

                        <Grid item xs={12} xl={4}>
                            <div style={{ maxWidth: '360px', margin: '0 auto' }}>
                                <div className='payment-summery'>
                                    <div className='payment-summery-title'>
                                        <p>Payment Summary</p>
                                    </div>
                                    <div className='payment-summery-details'>
                                        {isSecondActive && <div className='room-details'>
                                            <p>{date?.toDateString()} @ {time} <br /> {bed} bed, {bath} bath.</p>
                                        </div>}
                                        <div className='payment-duration'>
                                            <Typography component='h5' variant='h5'>
                                                Duration
                                            </Typography>
                                            <div className='payment-duration-details'>
                                                <p>Basic</p>
                                                <p>{duration} Hrs</p>
                                            </div>
                                            {cabinet && <div className='payment-duration-details'>
                                                <p>Inside cabinets (extra)</p>
                                                <p>30 Mins</p>
                                            </div>}
                                            {fridge && <div className='payment-duration-details'>
                                                <p>Inside fridge (extra)</p>
                                                <p>30 Mins</p>
                                            </div>}
                                            {oven && <div className='payment-duration-details'>
                                                <p>Inside oven (extra)</p>
                                                <p>30 Mins</p>
                                            </div>}
                                            {laundry && <div className='payment-duration-details'>
                                                <p>Laundry wash & dry (extra)</p>
                                                <p>30 Mins</p>
                                            </div>}
                                            {windows && <div className='payment-duration-details'>
                                                <p>Interior windows (extra)</p>
                                                <p>30 Mins</p>
                                            </div>}
                                            <hr className='prices-hr' />
                                            <div className='payment-duration-details payment-duration-total'>
                                                <p>Total Service Time</p>
                                                <p>{getPaymentTotal()} Hrs</p>
                                            </div>
                                        </div>
                                        <hr className='prices-hr' />
                                        <div className='payment-duration-details per-cleaning-discount'>
                                            <p>Per cleaning</p>
                                            <p className='payment-pricing'>${isSecondActive ? perCleaning() : 0}</p>
                                        </div>
                                        {isSecondActive && <div className='payment-duration-details per-cleaning-discount'>
                                            <p>Discount</p>
                                            <p className='payment-pricing'>-${discount()}</p>
                                        </div>}
                                        <hr className='prices-hr' />
                                        <div className='payment-duration-details total-payment'>
                                            <Typography component='h4' variant='h4' className='pay-title'>Total Payment</Typography>
                                            <Typography component='h4' variant='h2' className='pay'>${isSecondActive ? totalPayment() : 0}</Typography>
                                        </div>

                                        {isSecondActive && <>
                                            <div className='payment-duration-details effective-price'>
                                                <p>Effective Price</p>
                                                <Typography component='h4' variant='h4'>${effectivePrice()}</Typography>
                                            </div>
                                            <p className='discount-line'>*You will save 20% according to §35a EStG.</p>
                                        </>}
                                    </div>
                                    <div className='payment-footer'>
                                        <img src={smiley} alt="smiley-logo" />
                                        <p>See what is always included</p>
                                    </div>
                                </div>
                                <div className='questions'>
                                    <Typography component='h5' variant='h5'>
                                        Questions?
                                    </Typography>
                                    <div style={{ marginBottom: '18px' }}>
                                        <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')}>
                                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                <p>Which Helperland professional will come to my place?</p>
                                            </AccordionSummary>
                                            <AccordionDetails className='sidebar-accordion-details'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nesciunt inventore labore facilis illum accusamus sapiente asperiores culpa voluptatum. Ullam provident quam possimus nulla, ipsam praesentium minus omnis esse!</p>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')} >
                                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                                <p>Which Helperland professional will come to my place?</p>
                                            </AccordionSummary>
                                            <AccordionDetails className='sidebar-accordion-details'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nesciunt inventore labore facilis illum accusamus sapiente asperiores culpa voluptatum. Ullam provident quam possimus nulla, ipsam praesentium minus omnis esse!</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel3'} onChange={handleChangeAccordion('panel3')} >
                                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                                <p>Which Helperland professional will come to my place?</p>
                                            </AccordionSummary>
                                            <AccordionDetails className='sidebar-accordion-details'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nesciunt inventore labore facilis illum accusamus sapiente asperiores culpa voluptatum. Ullam provident quam possimus nulla, ipsam praesentium minus omnis esse!</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel4'} onChange={handleChangeAccordion('panel4')} >
                                            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                                <p>Which Helperland professional will come to my place?</p>
                                            </AccordionSummary>
                                            <AccordionDetails className='sidebar-accordion-details'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nesciunt inventore labore facilis illum accusamus sapiente asperiores culpa voluptatum. Ullam provident quam possimus nulla, ipsam praesentium minus omnis esse!</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel5'} onChange={handleChangeAccordion('panel5')} >
                                            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                                <p>Which Helperland professional will come to my place?</p>
                                            </AccordionSummary>
                                            <AccordionDetails className='sidebar-accordion-details'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nesciunt inventore labore facilis illum accusamus sapiente asperiores culpa voluptatum. Ullam provident quam possimus nulla, ipsam praesentium minus omnis esse!</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel6'} onChange={handleChangeAccordion('panel6')} >
                                            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                                                <p>Which Helperland professional will come to my place?</p>
                                            </AccordionSummary>
                                            <AccordionDetails className='sidebar-accordion-details'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nesciunt inventore labore facilis illum accusamus sapiente asperiores culpa voluptatum. Ullam provident quam possimus nulla, ipsam praesentium minus omnis esse!</p>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                    <Link to='#' className='more-help'>For more help</Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container >

                <Newsletter />
                <Footer />
            </div >
        ) : (
            <Navigate to="/" />
        )
    )
}

export default BookService