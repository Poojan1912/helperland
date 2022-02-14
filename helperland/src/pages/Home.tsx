import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'

import Navbar from '../components/Navbar'
import PurpleButton from '../components/PurpleButton'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

import { forma1Copy, group18_5, group21, group23, group24, group28, group29, group30, group31, group32, group33, group36, icCheck, layer598, rightArrow, step1, step2, step3, step4, stepArrow1, stepArrow1Copy } from '../assets/images'



const Home = () => {

    return (
        <>
            <div className="book-cleaner">
                <Navbar />
                <div className='listing'>
                    <Typography component="h1" variant="h1">Lorem ipsum text</Typography>
                    <ul>
                        <li><img src={icCheck} />&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                        <li><img src={icCheck} />&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                        <li><img src={icCheck} />&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    </ul>
                </div>

                <Box textAlign="center">
                    <PurpleButton value="Let's Book a Cleaner" />
                </Box>
                <Container sx={{ mt: 20 }} maxWidth="xl">
                    <div className='steps'>
                        <div>
                            <img src={step1} alt="step-1" />
                            <p>Enter your postcode</p>
                        </div>
                        <div>
                            <img src={stepArrow1} className='arrow' width="85" height="23" alt="arrow" />
                        </div>

                        <div>
                            <img src={step2} alt="step-2" />
                            <p>Select your plan</p>
                        </div>
                        <div>
                            <img src={stepArrow1Copy} className='arrow' width="85" height="23" alt="arrow" />
                        </div>


                        <div>
                            <img src={step3} alt="step-3" />
                            <p>Pay securely online</p>
                        </div>
                        <div>
                            <img src={stepArrow1} className='arrow' width="85" height="23" alt="arrow" />
                        </div>

                        <div>
                            <img src={step4} alt="step-4" />
                            <p>Enjoy amazing service</p>
                        </div>
                    </div>

                    <Box sx={{ pt: 5, pb: 4 }} textAlign="center">
                        <img src={group18_5} alt="Down-arrow" />
                    </Box>
                </Container>
            </div>

            <div className="features" id="features">
                <Container maxWidth="xl" sx={{ mb: { lg: 13.3, xs: 5 } }}>
                    <Typography sx={{ my: 10 }} component="h2" textAlign="center" variant="h2">Why Helperland</Typography>
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
                                        Experience & Vetted Professionals
                                    </Typography>
                                    <Typography variant="body1" mt={3.6} fontSize='17px'>
                                        dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.
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
                                    <Typography gutterBottom variant="h3" component="h3" mt={5.8} mb={0}>
                                        Secure Online Payment
                                    </Typography>
                                    <Typography variant="body1" mt={6.25} fontSize='17px'>
                                        Payment is processed securely online. Customers pay safely online and manage the booking.
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
                                    <Typography gutterBottom variant="h3" component="h3" mt={4} mb={0}>
                                        Dedicated Customer Service
                                    </Typography>
                                    <Typography variant="body1" mt={3.3} fontSize='17px'>
                                        to our customers and are guided in all we do by their needs. The team is always happy to support you and offer all the information.
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
                                Lorem ipsum dolor sit amet, consectetur
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18, color: '#4F4F4F' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi sapien, suscipit ut accumsan vitae, pulvinar ac libero.
                            </Typography>
                            <br />
                            <Typography variant='body1' sx={{ fontSize: 18, color: '#4F4F4F' }}>
                                Aliquam erat volutpat. Nullam quis ex odio. Nam bibendum cursus purus, vel efficitur urna finibus vitae. Nullam finibus aliquet pharetra. Morbi in sem dolor. Integer pretium hendrerit ante quis vehicula.
                            </Typography>
                            <br />
                            <Typography variant="body1" sx={{ fontSize: 18, color: '#4F4F4F' }}>
                                Mauris consequat ornare enim, sed lobortis quam ultrices sed.
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
            <Footer />
        </>
    )
}

export default Home
