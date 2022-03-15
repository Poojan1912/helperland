import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import { styled } from '@mui/system';

import Navbar from '../components/Navbar'
import PurpleButton from '../components/PurpleButton'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

import { forma1Copy, group18_5, group21, group23, group24, group28, group29, group30, group31, group32, group33, group36, icCheck, layer598, rightArrow, step1, step2, step3, step4, stepArrow1, stepArrow1Copy } from '../assets/images'
import { Link } from 'react-router-dom'



const Home = () => {

    const PrivacyButton = styled(Button)({
        backgroundColor: '#EED507',
        color: '#4F4F4F',
        borderRadius: '20px',
        width: '99px',
        height: '40px',
        fontWeight: 'medium',

        '&:hover': {
            backgroundColor: '#cab50b'
        },

        '&:focus': {
            backgroundColor: '#cab50b'
        }
    })

    const handleClick = () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const element = document.getElementById('privacy-policy')!
        element.classList.add("hide-privacy-policy")
    }

    return (
        <>
            <div className="book-cleaner">
                <Navbar />
                <div className='listing'>
                    <Typography component="h1" variant="h1">Do not feel like housework?</Typography>
                    <ul>
                        <li>Great! Book now for Helperland and enjoy the benefits</li>
                        <li><img src={icCheck} />&nbsp;&nbsp;certified & insured helper</li>
                        <li><img src={icCheck} />&nbsp;&nbsp;easy booking procedure</li>
                        <li><img src={icCheck} />&nbsp;&nbsp;friendly customer service</li>
                        <li><img src={icCheck} />&nbsp;&nbsp;secure online payment method</li>
                    </ul>
                </div>

                <Box textAlign="center">
                    <Link to='/book-service'><PurpleButton value="Book a helper!" /></Link>
                </Box>
                <Container sx={{ mt: 20 }} maxWidth="xl">
                    <div className='steps'>
                        <div>
                            <img src={step1} alt="step-1" />
                            <p>Enter postal code</p>
                        </div>
                        <div className='arrow'>
                            <img src={stepArrow1} width="85" height="23" alt="arrow" />
                        </div>

                        <div>
                            <img src={step2} alt="step-2" />
                            <p>Select desired date</p>
                        </div>
                        <div className='arrow'>
                            <img src={stepArrow1Copy} className='arrow' width="85" height="23" alt="arrow" />
                        </div>

                        <div>
                            <img src={step3} alt="step-3" />
                            <p>Secure online payment</p>
                        </div>
                        <div className='arrow'>
                            <img src={stepArrow1} width="85" height="23" alt="arrow" />
                        </div>

                        <div>
                            <img src={step4} alt="step-4" />
                            <p>Feel at home</p>
                        </div>
                    </div>

                    <Box sx={{ pt: 5, pb: 4 }} textAlign="center">
                        <Button>
                            <img src={group18_5} alt="Down-arrow" />
                        </Button>
                    </Box>
                </Container>
            </div>

            <div className="features" id="features">
                <Container maxWidth="xl" sx={{ mb: { lg: 13.3, xs: 5 } }}>
                    <Typography sx={{ my: 10 }} component="h2" textAlign="center" variant="h2">Convince yourself!</Typography>
                    <Grid container>
                        <Grid item xs={12} lg={4} textAlign='center'>
                            <Card sx={{ maxWidth: 320, boxShadow: 'none', marginX: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    image={group21}
                                    alt="group-21"

                                />
                                <CardContent sx={{ p: 0 }}>
                                    <Typography gutterBottom variant="h3" component="h3" mt={4} mb={0}>
                                        Friendly & Certified Helpers
                                    </Typography>
                                    <Typography variant="body1" mt={3.6} fontSize='17px'>
                                        We want you to be completely satisfied with our service and feel comfortable at home. In order to guarantee this, our helpers go through a test procedure. Only when the cleaners meet our high standards, they may call themselves Helper.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4} textAlign='center'>
                            <Card sx={{ maxWidth: 320, boxShadow: 'none', marginX: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    image={group23}
                                    alt="group-22"
                                />
                                <CardContent sx={{ p: 0 }}>
                                    <Typography gutterBottom variant="h3" component="h3" mt={4} mb={0}>
                                        Transparent and secure payment
                                    </Typography>
                                    <Typography variant="body1" mt={4} fontSize='17px'>
                                        We have transparent prices, you do not have to scratch money on the sideboard Leave it: Pay your helper easily and secure via the online payment method. You will also receive an invoice for each completed cleaning.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4} textAlign='center'>
                            <Card sx={{ maxWidth: 320, boxShadow: 'none', marginX: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    image={group24}
                                    alt="group-23"
                                />
                                <CardContent sx={{ p: 0 }}>
                                    <Typography
                                        sx={{ lineHeight: '53px' }}
                                        gutterBottom variant="h3" component="h3" mt={4}
                                        mb={0}>
                                        We&apos;re here for you
                                    </Typography>
                                    <Typography variant="body1" mt={6} fontSize='17px'>
                                        You have a question or need assistance with the booking process? Our customer service is happy to help and advise you. How you can reach us you will find out when you look under &ldquo;Contact&rdquo;. We look forward to hearing from you or reading.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <div className="blog-section">
                <Container maxWidth="xl">
                    <Grid container sx={{ px: 0, display: 'flex', alignItems: 'center' }}>
                        <Grid item xs={12} lg={7} order={{ lg: 1, xs: 2 }} sx={{ px: 'auto' }} className='happy-customer'>
                            <Typography variant="h3" component="h3">
                                We do not know what makes you happy, but ...
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18, color: '#4F4F4F' }}>
                                If it&apos;s not dusting off, our friendly helpers will free you from this burdon - do not worry anymore about spending valuable time doing housework, but savor life, you&apos;re well worth your time with beautiful experiences. Free yourself and enjoy the gained time: Go celebrate, relax, play with your children, meet friends or dare to jump on the bungee. Other leisure ideas and exclusive events can be found in our blog - guaranteed free from dust and cleaning tips!
                            </Typography>
                        </Grid>

                        <Grid item xs={12} lg={5} order={{ lg: 2, xs: 1 }} textAlign={'center'}>
                            <img src={group36} alt="family" className='family' />
                        </Grid>
                    </Grid>
                </Container>



                <div className="blog">
                    <Container maxWidth="xl">
                        <Typography textAlign="center" component="h2" variant="h2">Our Blog</Typography>
                        <Grid container className='blog-items'>
                            <Grid item lg={4} xs={12}>
                                <Card sx={{ maxWidth: 357, mb: 5.5, mx: 'auto', boxShadow: '0 0 30px #e4ebf0' }}>
                                    <CardMedia
                                        component="img"

                                        image={group28}
                                        alt="blog-1"
                                    />
                                    <CardContent sx={{ pl: 2.5, pt: 2, pb: 3.25 }}>
                                        <Typography gutterBottom variant="h4" sx={{ mb: 0 }} component="h4" color="#3D4046">
                                            Lorem ipsum dolor sit amet
                                        </Typography>
                                        <Typography variant="caption">January 28, 2019</Typography>
                                        <Typography variant="body1" sx={{ mt: 1, pb: 1.5 }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet.
                                        </Typography>
                                        <a href="#">Read the Post &nbsp; <img src={rightArrow} alt="right-arrow" /></a>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <Card sx={{ maxWidth: 357, mb: 5.5, mx: 'auto', boxShadow: '0 0 30px #e4ebf0' }}>
                                    <CardMedia
                                        component="img"

                                        image={group29}
                                        alt="blog-1"
                                    />
                                    <CardContent sx={{ pl: 2.5, pt: 2 }}>
                                        <Typography gutterBottom variant="h4" sx={{ mb: 0 }} component="h4" color="#3D4046">
                                            Lorem ipsum dolor sit amet
                                        </Typography>
                                        <Typography variant="caption">January 28, 2019</Typography>
                                        <Typography variant="body1" sx={{ mt: 1, pb: 1.5 }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet.
                                        </Typography>
                                        <a href="#">Read the Post &nbsp; <img src={rightArrow} alt="right-arrow" /></a>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <Card sx={{ maxWidth: 357, mb: 5.5, mx: 'auto', boxShadow: '0 0 30px #e4ebf0' }}>
                                    <CardMedia
                                        component="img"

                                        image={group30}
                                        alt="blog-1"
                                    />
                                    <CardContent sx={{ pl: 2.5, pt: 2 }}>
                                        <Typography gutterBottom variant="h4" sx={{ mb: 0 }} component="h4" color="#3D4046">
                                            Lorem ipsum dolor sit amet
                                        </Typography>
                                        <Typography variant="caption">January 28, 2019</Typography>
                                        <Typography variant="body1" sx={{ mt: 1, pb: 1.5 }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet.
                                        </Typography>
                                        <a href="#">Read the Post &nbsp; <img src={rightArrow} alt="right-arrow" /></a>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>

            <div className='customer-feedback'>
                <Container maxWidth="xl">
                    <Typography textAlign="center" component="h2" variant="h2">What our Customers say</Typography>
                    <Grid container>
                        <Grid item lg={4} xs={12}>
                            <Card className="card customer-item" sx={{ maxWidth: 357, borderLeft: 4, borderColor: '#006072', mx: 'auto', mb: 3, boxShadow: 'none' }}>
                                <Box display="flex" alignItems="center" >
                                    <img className='customer-photo' src={group31} alt="customer-photo" />
                                    <Box flexDirection="column">
                                        <Typography gutterBottom variant="h4" component="h4">
                                            Larry Watson
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: 14, color: '#8E8E8E' }} gutterBottom>
                                            Manchester
                                        </Typography>
                                    </Box>
                                </Box>
                                <CardContent className='customer-feedback-content'>
                                    <Typography variant="body1" sx={{ paddingLeft: '22px', paddingRight: '5px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Sed
                                        fermentum metus pulvinar aliquet consequat. Praesent nec malesuada nibh. <br /> <br />
                                        Nullam et metus congue, auctor augue sit amet, consectetur tortor.
                                        <br /> <br />
                                    </Typography>
                                    <a href="#">Read More &nbsp; <img src={rightArrow} alt="right-arrow" /></a>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Card className="card customer-item" sx={{ maxWidth: 357, borderLeft: 4, borderColor: '#006072', mx: 'auto', mb: 3, boxShadow: 'none' }}>
                                <Box display="flex" alignItems="center" >
                                    <img className='customer-photo' src={group32} alt="customer-photo" />
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="h4" sx={{ mb: 0 }}>
                                            John Smith
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: 14, color: '#8E8E8E' }} gutterBottom>
                                            Manchester
                                        </Typography>
                                    </Box>

                                </Box>
                                <CardContent className='customer-feedback-content'>
                                    <Typography variant="body1" sx={{ paddingLeft: '22px', paddingRight: '5px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Sed
                                        fermentum metus pulvinar aliquet consequat. Praesent nec malesuada nibh. <br /> <br />
                                        Nullam et metus congue, auctor augue sit amet, consectetur tortor.
                                        <br /> <br />
                                    </Typography>
                                    <a href="#">Read More &nbsp; <img src={rightArrow} alt="right-arrow" /></a>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Card className="card customer-item" sx={{ maxWidth: 357, borderLeft: 4, borderColor: '#006072', mx: 'auto', mb: 3, boxShadow: 'none' }}>
                                <Box display="flex" alignItems="center" >
                                    <img className='customer-photo' src={group33} alt="customer-photo" />
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="h4" sx={{ mb: 0 }}>
                                            Lars Johnson
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: 14, color: '#8E8E8E' }} gutterBottom>
                                            Manchester
                                        </Typography>
                                    </Box>

                                </Box>
                                <CardContent className='customer-feedback-content'>
                                    <Typography variant="body1" sx={{ paddingLeft: '22px', paddingRight: '5px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Sed
                                        fermentum metus pulvinar aliquet consequat. Praesent nec malesuada nibh. <br /> <br />
                                        Nullam et metus congue, auctor augue sit amet, consectetur tortor.
                                        <br /> <br />
                                    </Typography>
                                    <a href="#">Read More &nbsp; <img src={rightArrow} alt="right-arrow" /></a>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Newsletter />
                </Container>
                <img className='chat-with-us' src={layer598} alt="chat-with-us-icon" />
                <a href="#">
                    <div className='go-to-top'>
                        <img src={forma1Copy} alt="go-to-top-icon" />
                    </div>
                </a>
            </div>
            <div className='privacy-policy' id="privacy-policy">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc libero, ac malesuada ligula aliquam ac.   <a href="#">Privacy Policy</a></p>
                <div>
                    <PrivacyButton onClick={handleClick}>ok!</PrivacyButton>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
