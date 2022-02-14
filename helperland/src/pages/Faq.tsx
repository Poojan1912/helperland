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
                        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" className='styled-tabs'>
                            <StyledTab label="For Customer" {...a11yProps(0)} className='tab' />
                            <StyledTab label="For Service Provider" {...a11yProps(1)} className='tab' />
                        </StyledTabs>
                    </Box>
                    <StyledBox display={'flex'} justifyContent={'center'}>
                        <TabPanel value={value} index={0}>
                            <CustomAccordion
                                expandValue="panel1"
                                summery="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nunc, iaculis mattis tellus ac ut non imperdiet velit?"

                                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id diam tincidunt, fringilla ante vitae, dapibus velit. Vivamus id tortor rhoncus, efficitur quam at, suscipit tortor. Integer fermentum convallis eros vel semper. Ut non imperdiet velit. Praesent eu dui vel lacus porta eleifend eget quis dui. Integer tempus massa in gravida tincidunt. Fusce in libero tristique, euismod nisi vel, luctus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et placerat arcu. Suspendisse lacinia tristique massa. Etiam risus justo, scelerisque id arcu eu, sodales tempor eros. Aliquam efficitur pretium urna, sit amet congue risus malesuada rutrum. Donec id massa vel velit ullamcorper accumsan ut eget nisl. Fusce viverra commodo lacus, sit amet facilisis leo luctus dictum." />
                            <CustomAccordion
                                expandValue="false"
                                summery="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nunc, iaculis mattis tellus ac ut non imperdiet velit?"

                                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id diam tincidunt, fringilla ante vitae, dapibus velit. Vivamus id tortor rhoncus, efficitur quam at, suscipit tortor. Integer fermentum convallis eros vel semper. Ut non imperdiet velit. Praesent eu dui vel lacus porta eleifend eget quis dui. Integer tempus massa in gravida tincidunt. Fusce in libero tristique, euismod nisi vel, luctus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et placerat arcu. Suspendisse lacinia tristique massa. Etiam risus justo, scelerisque id arcu eu, sodales tempor eros. Aliquam efficitur pretium urna, sit amet congue risus malesuada rutrum. Donec id massa vel velit ullamcorper accumsan ut eget nisl. Fusce viverra commodo lacus, sit amet facilisis leo luctus dictum." />
                            <CustomAccordion
                                expandValue="panel1"
                                summery="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nunc, iaculis mattis tellus ac ut non imperdiet velit?"

                                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id diam tincidunt, fringilla ante vitae, dapibus velit. Vivamus id tortor rhoncus, efficitur quam at, suscipit tortor. Integer fermentum convallis eros vel semper. Ut non imperdiet velit. Praesent eu dui vel lacus porta eleifend eget quis dui. Integer tempus massa in gravida tincidunt. Fusce in libero tristique, euismod nisi vel, luctus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et placerat arcu. Suspendisse lacinia tristique massa. Etiam risus justo, scelerisque id arcu eu, sodales tempor eros. Aliquam efficitur pretium urna, sit amet congue risus malesuada rutrum. Donec id massa vel velit ullamcorper accumsan ut eget nisl. Fusce viverra commodo lacus, sit amet facilisis leo luctus dictum." />
                            <CustomAccordion
                                expandValue="false"
                                summery="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nunc, iaculis mattis tellus ac ut non imperdiet velit?"

                                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id diam tincidunt, fringilla ante vitae, dapibus velit. Vivamus id tortor rhoncus, efficitur quam at, suscipit tortor. Integer fermentum convallis eros vel semper. Ut non imperdiet velit. Praesent eu dui vel lacus porta eleifend eget quis dui. Integer tempus massa in gravida tincidunt. Fusce in libero tristique, euismod nisi vel, luctus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et placerat arcu. Suspendisse lacinia tristique massa. Etiam risus justo, scelerisque id arcu eu, sodales tempor eros. Aliquam efficitur pretium urna, sit amet congue risus malesuada rutrum. Donec id massa vel velit ullamcorper accumsan ut eget nisl. Fusce viverra commodo lacus, sit amet facilisis leo luctus dictum." />
                            <CustomAccordion
                                expandValue="panel1"
                                summery="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nunc, iaculis mattis tellus ac ut non imperdiet velit?"

                                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id diam tincidunt, fringilla ante vitae, dapibus velit. Vivamus id tortor rhoncus, efficitur quam at, suscipit tortor. Integer fermentum convallis eros vel semper. Ut non imperdiet velit. Praesent eu dui vel lacus porta eleifend eget quis dui. Integer tempus massa in gravida tincidunt. Fusce in libero tristique, euismod nisi vel, luctus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et placerat arcu. Suspendisse lacinia tristique massa. Etiam risus justo, scelerisque id arcu eu, sodales tempor eros. Aliquam efficitur pretium urna, sit amet congue risus malesuada rutrum. Donec id massa vel velit ullamcorper accumsan ut eget nisl. Fusce viverra commodo lacus, sit amet facilisis leo luctus dictum." />
                            <CustomAccordion
                                expandValue="false"
                                summery="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nunc, iaculis mattis tellus ac ut non imperdiet velit?"

                                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id diam tincidunt, fringilla ante vitae, dapibus velit. Vivamus id tortor rhoncus, efficitur quam at, suscipit tortor. Integer fermentum convallis eros vel semper. Ut non imperdiet velit. Praesent eu dui vel lacus porta eleifend eget quis dui. Integer tempus massa in gravida tincidunt. Fusce in libero tristique, euismod nisi vel, luctus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et placerat arcu. Suspendisse lacinia tristique massa. Etiam risus justo, scelerisque id arcu eu, sodales tempor eros. Aliquam efficitur pretium urna, sit amet congue risus malesuada rutrum. Donec id massa vel velit ullamcorper accumsan ut eget nisl. Fusce viverra commodo lacus, sit amet facilisis leo luctus dictum." />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <CustomAccordion
                                expandValue="false"
                                summery="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nunc, iaculis mattis tellus ac ut non imperdiet velit?"

                                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id diam tincidunt, fringilla ante vitae, dapibus velit. Vivamus id tortor rhoncus, efficitur quam at, suscipit tortor. Integer fermentum convallis eros vel semper. Ut non imperdiet velit. Praesent eu dui vel lacus porta eleifend eget quis dui. Integer tempus massa in gravida tincidunt. Fusce in libero tristique, euismod nisi vel, luctus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et placerat arcu. Suspendisse lacinia tristique massa. Etiam risus justo, scelerisque id arcu eu, sodales tempor eros. Aliquam efficitur pretium urna, sit amet congue risus malesuada rutrum. Donec id massa vel velit ullamcorper accumsan ut eget nisl. Fusce viverra commodo lacus, sit amet facilisis leo luctus dictum." />
                            <CustomAccordion
                                expandValue="false"
                                summery="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nunc, iaculis mattis tellus ac ut non imperdiet velit?"

                                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id diam tincidunt, fringilla ante vitae, dapibus velit. Vivamus id tortor rhoncus, efficitur quam at, suscipit tortor. Integer fermentum convallis eros vel semper. Ut non imperdiet velit. Praesent eu dui vel lacus porta eleifend eget quis dui. Integer tempus massa in gravida tincidunt. Fusce in libero tristique, euismod nisi vel, luctus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et placerat arcu. Suspendisse lacinia tristique massa. Etiam risus justo, scelerisque id arcu eu, sodales tempor eros. Aliquam efficitur pretium urna, sit amet congue risus malesuada rutrum. Donec id massa vel velit ullamcorper accumsan ut eget nisl. Fusce viverra commodo lacus, sit amet facilisis leo luctus dictum." />
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
