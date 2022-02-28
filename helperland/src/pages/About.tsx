import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageBanner from '../components/ImageBanner';
import Newsletter from '../components/Newsletter';

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import { heroBannerImg, forma1Copy5 } from '../assets/images';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About us - Helperland</title>
            </Helmet>
            <Header />
            <ImageBanner address={heroBannerImg} alt="about-banner" />
            <Container maxWidth='xl'>
                <div className='page-top'>
                    <Typography component="h1" variant="h1">A Few words about us</Typography>
                    <div className='star-design'>
                        <img src={forma1Copy5} alt="star" />
                    </div>
                    <div className='page-top-data'>
                        <p className='about-page-top'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie convallis tempor. Duis vestibulum vel risus condimentum dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus quis enim orci. Fusce risus lacus, sollicitudin eu magna sed, pharetra sodales libero. Proin tincidunt vel erat id porttitor. Donec tristique est arcu, sed dignissim velit vulputate ultricies.</p>

                        <br />

                        <p className='about-page-top'>Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Vivamus eget mauris eget nisl euismod volutpat sed sed libero. Quisque sit amet lectus ex. Ut semper ligula et mauris tincidunt hendrerit. Aenean ut rhoncus orci, vel elementum turpis. Donec tempor aliquet magna eu fringilla. Nam lobortis libero ut odio finibus lobortis. In hac habitasse platea dictumst. Mauris a hendrerit felis. Praesent ac vehicula ipsum, at porta tellus. Sed dolor augue, posuere sed neque eget, aliquam ultricies velit. Sed lacus elit, tincidunt et massa ac, vehicula placerat lorem.</p>
                    </div>
                </div>
                <div className='page-top'>
                    <Typography component="h1" variant="h1">Our Story</Typography>
                    <div className='star-design'>
                        <img src={forma1Copy5} alt="star" />
                    </div>
                    <div className='page-top-data'>
                        <p className='about-page-top'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie convallis tempor. Duis vestibulum vel risus condimentum dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus quis enim orci. Fusce risus lacus, sollicitudin eu magna sed, pharetra sodales libero. Proin tincidunt vel erat id porttitor. Donec tristique est arcu, sed dignissim velit vulputate ultricies.</p>

                        <br />

                        <p className='about-page-top'>Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Vivamus eget mauris eget nisl euismod volutpat sed sed libero. Quisque sit amet lectus ex. Ut semper ligula et mauris tincidunt hendrerit.</p>

                        <br />

                        <p className='about-page-top'>Aenean ut rhoncus orci, vel elementum turpis. Donec tempor aliquet magna eu fringilla. Nam lobortis libero ut odio finibus lobortis. In hac habitasse platea dictumst. Mauris a hendrerit felis. Praesent ac vehicula ipsum, at porta tellus. Sed dolor augue, posuere sed neque eget, aliquam ultricies velit. Sed lacus elit, tincidunt et massa ac, vehicula placerat lorem.</p>
                    </div>
                </div>
            </Container>
            <Newsletter />
            <Footer />
        </div>
    )
};

export default About;
