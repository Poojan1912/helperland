import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import ImageBanner from '../components/ImageBanner'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { styled } from '@mui/material/styles'

import { faqBanner, forma1Copy5 } from '../assets/images'


import CustomAccordion from '../components/CustomAccordion'
import { Helmet } from 'react-helmet'

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
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

const Faq = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const StyledTab = styled(Tab)(({ theme }) => ({
        width: '50%',
        maxWidth: '472px',
        backgroundColor: '#F6F6F6',
        color: "#646464",
        borderBottom: '4px solid #1D7A8C',
        fontSize: '24px',
        fontWeight: '400',

        '&.Mui-selected':
        {
            backgroundColor: '#1D7A8C',
            color: '#FFFFFF'
        },

        [theme.breakpoints.up("xs")]: {
            padding: '12px 10px 8px',
            '&.MuiTab-root':
            {
                fontSize: '18px',
            }
        },

        [theme.breakpoints.up("sm")]: {
            '&.MuiTab-root':
            {
                fontSize: '24px',
            }
        }
    }))

    const StyledTabs = styled(Tabs)({
        marginBottom: '9px',
        '& .MuiTabs-flexContainer':
        {
            justifyContent: 'center',
            height: '66px'
        },

        '& .MuiTabs-indicator':
        {
            height: '0px'
        }
    })

    const StyledBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            '& .MuiBox-root': {
                padding: '24px 5px'
            }
        }
    }))

    return (
        <div>
            <Helmet>
                <title>Faq - Helperland</title>
            </Helmet>
            <Header />
            <ImageBanner address={faqBanner} alt="faq-banner" />
            <Container maxWidth='xl'>
                <div className='page-top'>
                    <Typography component="h1" variant="h1">FAQs</Typography>
                    <div className='star-design'>
                        <img src={forma1Copy5} alt="star" />
                    </div>
                    <div className='page-top-data'>
                        <p>Whether you are Customer or Service provider, </p>
                        <p>We have tried our best to solve all your queries and questions.</p>
                    </div>
                </div>
                <Box>
                    <Box>
                        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <StyledTab label="For Customer" {...a11yProps(0)} className='tab' />
                            <StyledTab label="For Service Provider" {...a11yProps(1)} className='tab' />
                        </StyledTabs>
                    </Box>
                    <StyledBox display='flex' justifyContent='center'>
                        <TabPanel value={value} index={0}>
                            <CustomAccordion
                                expandValue="panel1"
                                summery="What's included in a cleaning?"

                                details="Bedroom, Living Room & Common Areas, Bathrooms, Kitchen, Extras" />
                            <CustomAccordion
                                expandValue="false"
                                summery="Which Helperland professional will come to my place?"

                                details="Helperland has a vast network of experienced, top-rated cleaners. Based on the time and date of your request, we work to assign the best professional available. Like working with a specific pro? Add them to your Pro Team from the mobile app and they'll be requested first for all future bookings. You will receive an email with details about your professional prior to your appointment." />
                            <CustomAccordion
                                expandValue="panel1"
                                summery="Can I skip or reschedule bookings?"

                                details="You can reschedule any booking for free at least 24 hours in advance of the scheduled start time. If you need to skip a booking within the minimum commitment, we’ll credit the value of the booking to your account. You can use this credit on future cleanings and other Helperland services." />
                            <CustomAccordion
                                expandValue="false"
                                summery="Do I need to be home for the booking?"

                                details="We strongly recommend that you are home for the first clean of your booking to show your cleaner around. Some customers choose to give a spare key to their cleaner, but this decision is based on individual preferences." />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <CustomAccordion
                                expandValue="false"
                                summery="How much do service providers earn?"

                                details="The self-employed service providers working with Helperland set their own payouts, this means that they decide how much they earn per hour." />
                            <CustomAccordion
                                expandValue="false"
                                summery="What support do you provide to the service providers?"

                                details="Our call-centre is available to assist the service providers with all queries or issues in regards to their bookings during office hours. Before a service provider starts receiving jobs, every individual partner receives an orientation session to familiarise with the online platform and their profile." />
                        </TabPanel>
                    </StyledBox>

                </Box>
                <Newsletter />
            </Container>

            <Footer />
        </div >
    )
}

export default Faq
