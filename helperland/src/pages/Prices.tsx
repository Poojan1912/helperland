import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Header from '../components/Header'
import ImageBanner from '../components/ImageBanner'
import group18 from '../assets/group-18.png'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer';

import star from "../assets/forma-1-copy-5.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import tick from "../assets/forma-1_5.png";
import bedroom from '../assets/group-18_3.png';
import bathroom from '../assets/group-18_4.png';
import kitchen from '../assets/group-18_2.png';
import bestImg from '../assets/the-best-img-1.png';


const Prices = () => {
    return (
        <div>
            <Header />
            <ImageBanner address={group18} alt='working-professional' />
            <div className='page-top'>
                <Typography component="h1" variant="h1">Prices</Typography>
                <div className='star-design'>
                    <img src={star} alt="star" />
                </div>
            </div>
            <Container maxWidth='xl'>
                <div className='prices-card-container'>
                    <div className='prices-card'>
                        <h1>One Time</h1>
                        <Typography component="h2" variant="h2">
                            <span className='euro'>€</span> 20<span>/hr</span>
                        </Typography>
                        <ul>
                            <li> <img src={tick} width="24" height="24" alt="tick" />&nbsp;Lower Prices</li>
                            <li> <img src={tick} width="24" height="24" alt="tick" />&nbsp;Easy online and secure payment
                            </li>
                            <li> <img src={tick} width="24" height="24" alt="tick" />&nbsp;Easy amendment</li>
                        </ul>
                    </div>
                </div>

                <hr className='prices-hr' />

                <div className='page-top'>
                    <Typography component="h1" variant="h1">Extra services</Typography>
                    <div className='star-design'>
                        <img src={star} alt="star" />
                    </div>
                    <Grid container className='extra-services'>
                        <Grid item lg={2.4} xs={12} md={6} className='extra-services-item'>
                            <div>
                                <img src={img3} alt="cabinet" />
                            </div>
                            <p className='service-name'>Inside cabinets</p>
                            <p className='service-time'>30 minutes</p>
                        </Grid>
                        <Grid item xl={2.4} lg={2.4} xs={12} md={6} className='extra-services-item'>
                            <div>
                                <img src={img5} alt="fridge" />
                            </div>
                            <p className='service-name'>Inside fridge</p>
                            <p className='service-time'>30 minutes</p>
                        </Grid>
                        <Grid item lg={2.4} xs={12} md={6} className='extra-services-item'>
                            <div>
                                <img src={img4} alt="oven" />
                            </div>
                            <p className='service-name'>Inside oven</p>
                            <p className='service-time'>30 minutes</p>
                        </Grid>
                        <Grid item lg={2.4} xs={12} md={6} className='extra-services-item'>
                            <div>
                                <img src={img2} alt="washing-machine" />
                            </div>
                            <p className='service-name'>Laundry wash & dry</p>
                            <p className='service-time'>30 minutes</p>
                        </Grid>
                        <Grid item lg={2.4} xs={12} md={12} className='extra-services-item'>
                            <div>
                                <img src={img1} alt="window" />
                            </div>
                            <p className='service-name'>Inside windows</p>
                            <p className='service-time'>30 minutes</p>
                        </Grid>

                    </Grid>
                </div>
            </Container>

            <div className='cleaning'>
                <Container maxWidth='xl'>
                    <div className='page-top'>
                        <Typography component="h1" variant="h1">What we include in cleaning</Typography>
                        <div className='star-design'>
                            <img src={star} alt="star" />
                        </div>
                    </div>
                    <Grid container spacing={4} className='included-in-cleaning'>
                        <Grid item lg={4} md={12} sm={12} xs={12} >
                            <div className='included-in-cleaning-item'>
                                <img src={bedroom} alt="Bedroom and Living Room" />
                                <Typography component='h4' variant='h4'>Bedroom and Living Room</Typography>
                                <ul>
                                    <li> &nbsp;&nbsp;Dust all accessible surfaces</li>
                                    <li>&nbsp;&nbsp;Wipe down all mirrors and glass fixtures</li>
                                    <li>&nbsp;&nbsp;Clean all floor surfaces</li>
                                    <li>&nbsp;&nbsp;Take out garbage and recycling</li>
                                </ul>
                            </div>

                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12} >
                            <div className='included-in-cleaning-item'>
                                <img src={bathroom} alt="Bathroom" />
                                <Typography component='h4' variant='h4'>Bathrooms</Typography>
                                <ul>
                                    <li>&nbsp;&nbsp;Wash and sanitize the toilet, shower, tub, sink</li>
                                    <li>&nbsp;&nbsp;Dust all accessible surfaces</li>
                                    <li>&nbsp;&nbsp;Wipe down all mirrors and glass fixtures</li>
                                    <li>&nbsp;&nbsp;Clean all floor surfaces</li>
                                    <li>&nbsp;&nbsp;Take out garbage and recycling</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12} >
                            <div className='included-in-cleaning-item'>
                                <img src={kitchen} alt="Kitchen" />
                                <Typography component='h4' variant='h4'>Kitchen</Typography>
                                <ul>
                                    <li>&nbsp;&nbsp;Dust all accessible surfaces</li>
                                    <li>&nbsp;&nbsp;Empty sink and load up dishwasher</li>
                                    <li>&nbsp;&nbsp;Wipe down exterior of stove, oven and fridge</li>
                                    <li>&nbsp;&nbsp;Clean all floor surfaces</li>
                                    <li>&nbsp;&nbsp;Take out garbage and recycling</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>


            <Container maxWidth='xl'>
                <div className='page-top'>
                    <Typography component="h1" variant="h1">Why Helperland</Typography>
                    <div className='star-design'>
                        <img src={star} alt="star" />
                    </div>
                </div>

                <Grid container className='why-helperland'>
                    <Grid lg={4} sm={12} item className='left'>
                        <Typography component='h4' variant='h4'>Experienced and vetted professionals</Typography>
                        <p>dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.</p>
                        <Typography component='h4' variant='h4'>Dedicated customer service</Typography>
                        <p>to our customers and are guided in all we do by their needs. The team is always happy to support you and offer all the information. you need.</p>
                    </Grid>
                    <Grid lg={4} sm={12} item className='center-img'>
                        <img src={bestImg} alt="best img" />
                    </Grid>
                    <Grid lg={4} sm={12} item className='right'>
                        <Typography component='h4' variant='h4'>Every cleaning is insured</Typography>
                        <p>and seek to provide exceptional service and engage in proactive behavior. We‘d be happy to clean your homes.</p>
                        <Typography component='h4' variant='h4'>Secure online payment</Typography>
                        <p>Payment is processed securely online. Customers pay safely online and manage the booking.</p>
                    </Grid>
                </Grid>
            </Container>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Prices
