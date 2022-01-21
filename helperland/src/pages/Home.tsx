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

import experience from '../assets/group-21.png';
import secure from '../assets/group-23.png'
import dedicated from '../assets/group-24.png'
import icCheck from '../assets/ic-check.png'
import step1 from '../assets/step-1.png'
import step2 from '../assets/step-2.png'
import step3 from '../assets/step-3.png'
import step4 from '../assets/step-4.png'
import arrow1 from '../assets/step-arrow-1.png'
import arrow2 from '../assets/step-arrow-1-copy.png'
import downArrow from '../assets/group-18_5.png'
import group36 from '../assets/group-36.png'
import group28 from '../assets/group-28.png'
import group29 from '../assets/group-29.png'
import group30 from '../assets/group-30.png'
import rightArrow from '../assets/right-arrow.png'
import group31 from '../assets/group-31.png'
import group32 from '../assets/group-32.png'
import group33 from '../assets/group-33.png'

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
                            <img src={arrow1} className='arrow' width="85" height="23" alt="arrow" />
                        </div>

                        <div>
                            <img src={step2} alt="step-2" />
                            <p>Select your plan</p>
                        </div>
                        <div>
                            <img src={arrow2} className='arrow' width="85" height="23" alt="arrow" />
                        </div>


                        <div>
                            <img src={step3} alt="step-3" />
                            <p>Pay securely online</p>
                        </div>
                        <div>
                            <img src={arrow1} className='arrow' width="85" height="23" alt="arrow" />
                        </div>

                        <div>
                            <img src={step4} alt="step-4" />
                            <p>Enjoy amazing service</p>
                        </div>
                    </div>

                    <Box sx={{ pt: 5, pb: 4 }} textAlign="center">
                        <img src={downArrow} alt="Down-arrow" />
                    </Box>
                </Container>
            </div>

            <div className="features" id="features">
                <Container maxWidth="xl" sx={{ mb: 20 }}>
                    <Typography sx={{ my: 10 }} component="h2" textAlign="center" variant="h2">Why Helperland</Typography>
                    <Grid container>
                        <Grid item xs={12} lg={4} textAlign="center">
                            <Card sx={{ maxWidth: 320, boxShadow: 'none', marginX: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    image={experience}
                                    alt="group-21"
                                />
                                <CardContent sx={{ p: 0 }}>
                                    <Typography gutterBottom variant="h3" component="h3" mt={3}>
                                        Experience & Vetted Professionals
                                    </Typography>
                                    <Typography variant="body1" mt={4}>
                                        dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4} textAlign={'center'}>
                            <Card sx={{ maxWidth: 320, boxShadow: 'none', marginX: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    image={secure}
                                    alt="group-22"
                                />
                                <CardContent sx={{ p: 0 }}>
                                    <Typography gutterBottom variant="h3" component="h3" mt={4}>
                                        Secure Online Payment
                                    </Typography>
                                    <Typography variant="body1" mt={7}>
                                        Payment is processed securely online. Customers pay safely online and manage the booking.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4} textAlign={'center'}>
                            <Card sx={{ maxWidth: 320, boxShadow: 'none', marginX: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    image={dedicated}
                                    alt="group-23"
                                />
                                <CardContent sx={{ p: 0 }}>
                                    <Typography gutterBottom variant="h3" component="h3" mt={4}>
                                        Dedicated Customer Service
                                    </Typography>
                                    <Typography variant="body1" mt={3}>
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
                        <Grid item xs={12} lg={7} sx={{ px: 'auto' }}>
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

                        <Grid item xs={12} lg={5} textAlign={'center'}>
                            <img src={group36} alt="family" className='family' />
                        </Grid>
                    </Grid>
                </Container>



                <div className="blog">
                    <Container maxWidth="xl">
                        <Typography textAlign="center" component="h2" variant="h2">Our Blog</Typography>
                        <Grid container className='blog-items'>
                            <Grid item lg={4} xs={12}>
                                <Card sx={{ maxWidth: 357, mb: 6, mx: 'auto' }}>
                                    <CardMedia
                                        component="img"

                                        image={group28}
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
                                <Card sx={{ maxWidth: 357, mb: 6, mx: 'auto' }}>
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
                                <Card sx={{ maxWidth: 357, mb: 6, mx: 'auto' }}>
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
                            <Card className="card customer-item" sx={{ maxWidth: 357, borderLeft: 4, borderColor: '#006072', mx: 'auto', mb: 6 }}>
                                <Box display="flex" alignItems="center" >
                                    <img src={group31} style={{ paddingLeft: '10px' }} alt="" />
                                    <Box flexDirection="column">
                                        <Typography gutterBottom variant="h4" component="h4" sx={{ mb: 0 }}>
                                            Larry Watson
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: 14, color: '#8E8E8E' }} gutterBottom>
                                            Manchester
                                        </Typography>
                                    </Box>
                                </Box>
                                <CardContent>
                                    <Typography variant="body1" sx={{ paddingLeft: '10px' }}>
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
                            <Card className="card customer-item" sx={{ maxWidth: 357, borderLeft: 4, borderColor: '#006072', mx: 'auto', mb: 6 }}>
                                <Box display="flex" alignItems="center" >
                                    <img src={group32} style={{ paddingLeft: '10px' }} alt="" />
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="h4" sx={{ mb: 0 }}>
                                            John Smith
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: 14, color: '#8E8E8E' }} gutterBottom>
                                            Manchester
                                        </Typography>
                                    </Box>

                                </Box>
                                <CardContent>
                                    <Typography variant="body1" sx={{ paddingLeft: '10px' }}>
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
                            <Card className="card customer-item" sx={{ maxWidth: 357, borderLeft: 4, borderColor: '#006072', mx: 'auto', mb: 6 }}>
                                <Box display="flex" alignItems="center" >
                                    <img src={group33} style={{ paddingLeft: '10px' }} alt="" />
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="h4" sx={{ mb: 0 }}>
                                            Lars Johnson
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: 14, color: '#8E8E8E' }} gutterBottom>
                                            Manchester
                                        </Typography>
                                    </Box>

                                </Box>
                                <CardContent>
                                    <Typography variant="body1" sx={{ paddingLeft: '10px' }}>
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
            </div>
            <Footer />
        </>
    )
}

export default Home
