import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Header from "../components/Header";
import ImageBanner from "../components/ImageBanner";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import {
  five,
  forma1Copy,
  forma1Copy5,
  forma1_5,
  four,
  group18,
  group18_2,
  group18_3,
  group18_4,
  layer598,
  one,
  rightArrowGrey,
  theBestImg1,
  three,
  two,
} from "../assets/images";
import { Helmet } from "react-helmet";

const Prices = () => {
  return (
    <div>
      <Helmet>
        <title>Prices - Helperland</title>
      </Helmet>
      <Header />
      <ImageBanner address={group18} alt="working-professional" />
      <div className="page-top">
        <Typography component="h1" variant="h1">
          Prices
        </Typography>
        <div className="star-design">
          <img src={forma1Copy5} alt="star" />
        </div>
      </div>
      <Container maxWidth="xl">
        <div className="prices-card-container">
          <div className="prices-card">
            <h1>One Time</h1>
            <Typography component="h2" variant="h2">
              <span className="euro">€</span> 18<span>/hr</span>
            </Typography>
            <ul>
              <li>
                {" "}
                <img src={forma1_5} width="24" height="24" alt="tick" />
                &nbsp;Lower Prices
              </li>
              <li>
                {" "}
                <img src={forma1_5} width="24" height="24" alt="tick" />
                &nbsp;Easy online and secure payment
              </li>
              <li>
                {" "}
                <img src={forma1_5} width="24" height="24" alt="tick" />
                &nbsp;Easy amendment
              </li>
            </ul>
          </div>
        </div>

        <hr className="prices-hr" />

        <div className="page-top">
          <Typography component="h1" variant="h1">
            Extra services
          </Typography>
          <div className="star-design">
            <img src={forma1Copy5} alt="star" />
          </div>
          <Grid container className="extra-services">
            <Grid item lg={2.4} xs={12} md={4} className="extra-services-item">
              <div>
                <img src={three} alt="cabinet" />
              </div>
              <p className="service-name">Inside cabinets</p>
              <p className="service-duration">30 minutes</p>
            </Grid>
            <Grid
              item
              xl={2.4}
              lg={2.4}
              xs={12}
              md={4}
              className="extra-services-item"
            >
              <div>
                <img src={five} alt="fridge" />
              </div>
              <p className="service-name">Inside fridge</p>
              <p className="service-duration">30 minutes</p>
            </Grid>
            <Grid item lg={2.4} xs={12} md={4} className="extra-services-item">
              <div>
                <img src={four} alt="oven" />
              </div>
              <p className="service-name">Inside oven</p>
              <p className="service-duration">30 minutes</p>
            </Grid>
            <Grid item lg={2.4} xs={12} md={6} className="extra-services-item">
              <div>
                <img src={two} alt="washing-machine" />
              </div>
              <p className="service-name">Laundry wash & dry</p>
              <p className="service-duration">30 minutes</p>
            </Grid>
            <Grid item lg={2.4} xs={12} md={6} className="extra-services-item">
              <div>
                <img src={one} alt="window" />
              </div>
              <p className="service-name">Inside windows</p>
              <p className="service-duration">30 minutes</p>
            </Grid>
          </Grid>
        </div>
      </Container>

      <div className="cleaning">
        <Container maxWidth="xl">
          <div className="page-top">
            <Typography component="h1" variant="h1">
              What we include in cleaning
            </Typography>
            <div className="star-design">
              <img src={forma1Copy5} alt="star" />
            </div>
          </div>
          <Grid container spacing={4} className="included-in-cleaning">
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <div className="included-in-cleaning-item">
                <img src={group18_3} alt="Bedroom and Living Room" />
                <Typography component="h4" variant="h4">
                  Bedroom and Living Room
                </Typography>
                <ul>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Included Dust all accessible surfaces</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Included Wipe down all mirrors and glass fixtures</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Not Included Clean all floor surfaces</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Included Take out garbage and recycling</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>To clean up</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Make beds</p>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <div className="included-in-cleaning-item">
                <img src={group18_4} alt="Bathroom" />
                <Typography component="h4" variant="h4">
                  Bathrooms
                </Typography>
                <ul>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>
                      Included Wash and sanitize the toilet, shower, tub, sink
                    </p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Not Included Dust all accessible surfaces</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Included Wipe down all mirrors and glass fixtures</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Not Included Clean all floor surfaces</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Included Take out garbage and recycling</p>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <div className="included-in-cleaning-item">
                <img src={group18_2} alt="Kitchen" />
                <Typography component="h4" variant="h4">
                  Kitchen
                </Typography>
                <ul>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Cleaning the sink</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Cleaning the oven (outside)</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Cleaning the work surfaces</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Included Dust all accessible surfaces</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Included Clean all floor surfaces</p>
                  </li>
                  <li>
                    <img src={rightArrowGrey} alt="right-arrow" />
                    <p>Included Take out garbage and recycling</p>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container maxWidth="xl">
        <div className="page-top">
          <Typography component="h1" variant="h1">
            Why Helperland
          </Typography>
          <div className="star-design">
            <img src={forma1Copy5} alt="star" />
          </div>
        </div>

        <Grid container className="why-helperland">
          <Grid lg={4} sm={12} item className="center-img" order={{ lg: 2 }}>
            <img src={theBestImg1} alt="best img" />
          </Grid>
          <Grid lg={4} sm={6} item className="left" order={{ lg: 1 }}>
            <div className="top-element">
              <Typography component="h4" variant="h4">
                Experienced and vetted professionals
              </Typography>
              <p>
                dominate the industry in scale and scope with an adaptable,
                extensive network that consistently delivers exceptional
                results.
              </p>
            </div>
            <div>
              <Typography component="h4" variant="h4">
                Dedicated customer service
              </Typography>
              <p>
                to our customers and are guided in all we do by their needs. The
                team is always happy to support you and offer all the
                information. you need.
              </p>
            </div>
          </Grid>
          <Grid lg={4} sm={6} item className="right" order={{ lg: 3 }}>
            <div className="top-element">
              <Typography component="h4" variant="h4">
                Every cleaning is insured
              </Typography>
              <p>
                and seek to provide exceptional service and engage in proactive
                behavior. We‘d be happy to clean your homes.
              </p>
            </div>
            <div>
              <Typography component="h4" variant="h4">
                Secure online payment
              </Typography>
              <p>
                Payment is processed securely online. Customers pay safely
                online and manage the booking.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Newsletter />
      <img className="chat-with-us" src={layer598} alt="chat-with-us-icon" />
      <a href="#">
        <div className="go-to-top">
          <img src={forma1Copy} alt="go-to-top-icon" />
        </div>
      </a>
      <Footer />
    </div>
  );
};

export default Prices;
