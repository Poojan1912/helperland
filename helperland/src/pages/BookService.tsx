import React from 'react'
import { arrowWhite, bookServiceBanner, calenderBookService, details, five, forma1Copy5, four, keyboardRightArrowButton, keyboardRightArrowButton2, one, payment, scheduleWhite, setupService, smiley, three, two } from '../assets/images'
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

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Link } from 'react-router-dom'

const BookService = () => {
    const [value, setValue] = React.useState(1);
    const [bed, setBed] = React.useState(10);
    const [bath, setBath] = React.useState(10);
    const [date, setDate] = React.useState<Date | null>(new Date());
    const [time, setTime] = React.useState(10)
    const [duration, setDuration] = React.useState(10)
    const [expanded, setExpanded] = React.useState<string | false>('');

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

    const handleTimeChange = (value: number) => {
        setTime(value)
    }

    const handleDurationChange = (value: number) => {
        setDuration(value)
    }

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
            transform: 'rotate(90deg)',
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
            fontSize: '16px',
            fontWeight: '600',
            whiteSpace: 'wrap',
            // maxWidth: '25%',
            // padding: '0 !important',            
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

    // const CustomFormControlLabel = styled(FormControlLabel)({
    //     '& .MuiTypography-root': {
    //         color: '#4F4F4F'
    //     }
    // })

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

    const CustomTextField = styled(TextField)({
        width: '146px',
        marginRight: '10px',
        '& .MuiOutlinedInput-root': {
            height: '46px',
        }
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

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <div>
            <Header />
            <ImageBanner address={bookServiceBanner} alt="book-service-banner" />
            <div className='page-top'>
                <Typography component="h1" variant="h1">Set up your cleaning service</Typography>
                <div className='star-design'>
                    <img src={forma1Copy5} alt="star" />
                </div>
            </div>

            <Container maxWidth='xl'>
                <Grid container pt={7}>
                    <Grid item sm={12} xl={8}>
                        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
                            <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <StyledTab icon={<img src={setupService} />} iconPosition='start' label="Setup Service" {...a11yProps(0)} className='tab' />
                                <StyledTab icon={<img src={scheduleWhite} />} iconPosition='start' label="Schedule & Plan" {...a11yProps(1)} className='tab' />
                                <StyledTab icon={<img src={details} />} iconPosition='start' label="Your Details" {...a11yProps(1)} className='tab' />
                                <StyledTab icon={<img src={payment} />} iconPosition='start' label="Make Payment" {...a11yProps(1)} className='tab' />
                            </StyledTabs>

                            <div className='book-service-left'>
                                <div className='room-count'>
                                    <Typography component='h5' variant='h5'>
                                        Select number of rooms and bath
                                    </Typography>

                                    <CustomSelect
                                        value={bed}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem onClick={() => handleBedChange(10)} value={10}>1 &nbsp;&nbsp;bed</MenuItem>
                                        <MenuItem onClick={() => handleBedChange(20)} value={20}>2 &nbsp;&nbsp;bed</MenuItem>
                                        <MenuItem onClick={() => handleBedChange(30)} value={30}>3 &nbsp;&nbsp;bed</MenuItem>
                                    </CustomSelect>

                                    <CustomSelect
                                        value={bath}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem onClick={() => handleBathChange(10)} value={10}>1 &nbsp;&nbsp;bath</MenuItem>
                                        <MenuItem onClick={() => handleBathChange(20)} value={20}>2 &nbsp;&nbsp;bath</MenuItem>
                                        <MenuItem onClick={() => handleBathChange(30)} value={30}>3 &nbsp;&nbsp;bath</MenuItem>
                                    </CustomSelect>
                                </div>
                                <hr className='prices-hr' />
                                <div className='cleaner-timing'>
                                    <Grid container>
                                        <Grid item lg={5}>
                                            <Typography component='h5' variant='h5'>
                                                When do you need the cleaner?
                                            </Typography>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DesktopDatePicker
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
                                                <MenuItem onClick={() => handleTimeChange(10)} value={10}>&nbsp;&nbsp;2:00 PM</MenuItem>
                                                <MenuItem onClick={() => handleTimeChange(20)} value={20}>&nbsp;&nbsp;10:00 AM</MenuItem>
                                                <MenuItem onClick={() => handleTimeChange(30)} value={30}>&nbsp;&nbsp;12:30 PM</MenuItem>
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
                                                <MenuItem onClick={() => handleDurationChange(10)} value={10}>&nbsp;&nbsp;3.0 Hrs</MenuItem>
                                                <MenuItem onClick={() => handleDurationChange(20)} value={20}>&nbsp;&nbsp;4.0 Hrs</MenuItem>
                                                <MenuItem onClick={() => handleDurationChange(30)} value={30}>&nbsp;&nbsp;2.5 Hrs</MenuItem>
                                            </CustomDurationSelect>
                                        </Grid>
                                    </Grid>
                                </div>
                                <hr className='prices-hr' />
                                <Typography component='h5' variant='h5'>
                                    Extra Services
                                </Typography>
                                <Grid container className='extra-services service-center'>
                                    <Grid item lg={2.4} xs={12} md={4} className='extra-services-item'>
                                        <div>
                                            <img src={three} alt="cabinet" />
                                        </div>
                                        <p className='service-name'>Inside cabinets</p>
                                    </Grid>
                                    <Grid item xl={2.4} lg={2.4} xs={12} md={4} className='extra-services-item'>
                                        <div>
                                            <img src={five} alt="fridge" />
                                        </div>
                                        <p className='service-name'>Inside fridge</p>
                                    </Grid>
                                    <Grid item lg={2.4} xs={12} md={4} className='extra-services-item'>
                                        <div>
                                            <img src={four} alt="oven" />
                                        </div>
                                        <p className='service-name'>Inside oven</p>
                                    </Grid>
                                    <Grid item lg={2.4} xs={12} md={6} className='extra-services-item'>
                                        <div>
                                            <img src={two} alt="washing-machine" />
                                        </div>
                                        <p className='service-name'>Laundry wash & dry</p>
                                    </Grid>
                                    <Grid item lg={2.4} xs={12} md={6} className='extra-services-item'>
                                        <div>
                                            <img src={one} alt="window" />
                                        </div>
                                        <p className='service-name'>Inside windows</p>
                                    </Grid>

                                </Grid>

                                <hr className='prices-hr' />

                                <div>
                                    <Typography component='h5' variant='h5'>
                                        Comments
                                    </Typography>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        fullWidth
                                        multiline
                                        minRows={2}
                                    />
                                    {/* <div className='pet-checkbox'> */}
                                    <CustomFormControlLabel sx={{ marginTop: 2 }} control={<CustomCheckbox icon={<Check />} checkedIcon={<SelectedCheck />} defaultChecked />} label="I have pets at home" />
                                    {/* </div> */}
                                </div>

                                <hr className='prices-hr' />

                                <div className='continue-button'>
                                    <StyledButton>Continue</StyledButton>
                                </div>

                            </div>
                        </div>
                    </Grid>

                    <Grid item sm={12} xl={4}>
                        <div style={{ maxWidth: '360px', margin: '0 auto' }}>
                            <div className='payment-summery'>
                                <div className='payment-summery-title'>
                                    <p>Payment Summary</p>
                                </div>
                                <div className='payment-summery-details'>
                                    <div className='room-details'>
                                        <p>01/01/2018 @ 4:00 pm <br /> 1 bed, 1 bath.</p>
                                    </div>
                                    <div className='payment-duration'>
                                        <Typography component='h5' variant='h5'>
                                            Duration
                                        </Typography>
                                        <div className='payment-duration-details'>
                                            <p>Basic</p>
                                            <p>3 Hrs</p>
                                        </div>
                                        <div className='payment-duration-details'>
                                            <p>Inside cabinets (extra)</p>
                                            <p>30 Mins</p>
                                        </div>
                                        <hr className='prices-hr' />
                                        <div className='payment-duration-details payment-duration-total'>
                                            <p>Total Service Time</p>
                                            <p>3.5 Hrs</p>
                                        </div>
                                    </div>
                                    <hr className='prices-hr' />
                                    <div className='payment-duration-details per-cleaning-discount'>
                                        <p>Per cleaning</p>
                                        <p className='payment-pricing'>$87</p>
                                    </div>
                                    <div className='payment-duration-details per-cleaning-discount'>
                                        <p>Discount</p>
                                        <p className='payment-pricing'>-$27</p>
                                    </div>
                                    <hr className='prices-hr' />
                                    <div className='payment-duration-details total-payment'>
                                        <Typography component='h4' variant='h4' className='pay-title'>Total Payment</Typography>
                                        <Typography component='h4' variant='h2' className='pay'>$63</Typography>
                                    </div>

                                    <div className='payment-duration-details effective-price'>
                                        <p>Effective Price</p>
                                        <Typography component='h4' variant='h4'>$50.4</Typography>
                                    </div>
                                    <p className='discount-line'>*You will save 20% according to §35a EStG.</p>
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
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <p>Which Helperland professional will come to my place?</p>
                                        </AccordionSummary>
                                        <AccordionDetails className='sidebar-accordion-details'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nesciunt inventore labore facilis illum accusamus sapiente asperiores culpa voluptatum. Ullam provident quam possimus nulla, ipsam praesentium minus omnis esse!</p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChangeAccordion('panel3')} >
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <p>Which Helperland professional will come to my place?</p>
                                        </AccordionSummary>
                                        <AccordionDetails className='sidebar-accordion-details'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nesciunt inventore labore facilis illum accusamus sapiente asperiores culpa voluptatum. Ullam provident quam possimus nulla, ipsam praesentium minus omnis esse!</p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChangeAccordion('panel4')} >
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <p>Which Helperland professional will come to my place?</p>
                                        </AccordionSummary>
                                        <AccordionDetails className='sidebar-accordion-details'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nesciunt inventore labore facilis illum accusamus sapiente asperiores culpa voluptatum. Ullam provident quam possimus nulla, ipsam praesentium minus omnis esse!</p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel5'} onChange={handleChangeAccordion('panel5')} >
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <p>Which Helperland professional will come to my place?</p>
                                        </AccordionSummary>
                                        <AccordionDetails className='sidebar-accordion-details'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nesciunt inventore labore facilis illum accusamus sapiente asperiores culpa voluptatum. Ullam provident quam possimus nulla, ipsam praesentium minus omnis esse!</p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel6'} onChange={handleChangeAccordion('panel6')} >
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
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
            </Container>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default BookService