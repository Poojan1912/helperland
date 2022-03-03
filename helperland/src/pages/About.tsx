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
                        <p className='about-page-top'>We are providers of professional home cleaning services, offering hourly based house cleaning options, which mean that you don&#39;t have to fret about getting your house cleaned anymore. We will handle everything for you, so that you can focus on spending your previous time with your family members.</p>

                        <br />

                        <p className='about-page-top'>We have a number of experienced cleaners to help you make cleaning out or shifting your home an easy affair.</p>
                    </div>
                </div>
                <div className='page-top'>
                    <Typography component="h1" variant="h1">Our Story</Typography>
                    <div className='star-design'>
                        <img src={forma1Copy5} alt="star" />
                    </div>
                    <div className='page-top-data'>
                        <p className='about-page-top'>A cleaner is a type of industrial or domestic worker who cleans homes or commercial premises for payment. Cleaners may specialize in cleaning particular things or places, such as window cleaners. Cleaners often work when the people who otherwise occupy the space are not around. They may clean offices at night or houses during the workday.</p>
                    </div>
                </div>
            </Container>
            <Newsletter />
            <Footer />
        </div>
    )
};

export default About;
