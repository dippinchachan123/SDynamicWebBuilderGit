import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Link } from "@mui/material";
import "./Footer.scss";

function Footer() {
  return (
    <Box className="footer">
      <Grid container spacing={3} className="footer-top">
        <Grid xs={12} className="text-center">
          <img src="./images/unison_white_logo_mobile.svg" alt="" height="27" ></img>
          <p>
            CIN: U67200GJ1998PTC034882 <br />
            IRDAI Comp. Broker Registration Cert. No.149 <br /> Valid up to
            14/04/2024
          </p>
        </Grid>
        <Grid xs={6}>
            <h6>Products</h6>
            <ul className="product_list">
                <li><Link href="javascript:void(0)">Health Insurance</Link></li>
                <li><Link href="javascript:void(0)">Bike Insurance</Link></li>
                <li><Link href="javascript:void(0)">Car Insurance</Link></li>
                <li><Link href="javascript:void(0)">Term Insurance</Link></li>
                <li><Link href="javascript:void(0)">Investment Insurance</Link></li>
                <li><Link href="javascript:void(0)">Travel Insurance</Link></li>
            </ul>
        </Grid>
        <Grid xs={6}>
            <h6>Services</h6>
            <ul className="product_list">
                <li><Link href="javascript:void(0)">Claim</Link></li>
                <li><Link href="javascript:void(0)">Complaint</Link></li>
                <li><Link href="javascript:void(0)">FAQ</Link></li>
                <li><Link href="javascript:void(0)">Contact</Link></li>
            </ul>
        </Grid>
        <Grid xs={6}>
            <h6>Company</h6>
            <ul className="product_list pb-0">
                <li><Link href="javascript:void(0)">About Us</Link></li>
                <li><Link href="javascript:void(0)">Terms and Conditions</Link></li>
                <li><Link href="javascript:void(0)">Privacy Policy</Link></li>
                <li><Link href="javascript:void(0)">Disclaimer</Link></li>
                <li><Link href="javascript:void(0)">Refund & Cancellation</Link></li>
            </ul>
        </Grid>
        <Grid xs={6}>
            <h6>Contact Us</h6>
            <ul className="product_list pb-5">
                <li><Link href="javascript:void(0)">info@unisoninsurance.net</Link></li>
                <li>Sales: 18006785676</li>
                <li>Claim: 18006785676</li>                       
            </ul>
            <ul className="social_sites">
                <li><Link href="#"><img src="./images/twitter_icon.svg" alt=""></img></Link></li>
                <li><Link href="#"><img src="./images/fb_icon.svg" alt=""></img></Link></li>
                <li><Link href="#"><img src="./images/linkedin_icon.svg" alt=""></img></Link></li>
                <li><Link href="#"><img src="./images/youtube_icon.svg" alt=""></img></Link></li>
            </ul>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="footer-bottom">
        <Grid xs={12}>
             <p className="copyrighjt_p">© Copyright 2008-2021 bimabuy.in. All Rights Reserved.</p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
