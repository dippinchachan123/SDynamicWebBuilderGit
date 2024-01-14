import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Link } from '@mui/material';
import "./Footer.scss";

//
import {useEffect ,useState} from "react";      
import axios from "axios";

// function Footer() {
//     return (
//         <Box className="footer">
//             <div className="footer-top">
//                 <Grid container spacing={3}>
//                     <Grid xs={3}>
//                         <img src='./images/unison_white_logo.svg' height="40px" />
//                         <p className="mt-4">CIN: U67200GJ1998PTC034882 <br />
//                             IRDAI Comp. Broker Registration<br /> Cert. No.149 | Valid up to 14/04/2024</p>
                        
//                     </Grid>
//                     <Grid xs={2}>
//                         <h5>{data.length !== 0?data[0].heading:"Loading"}</h5>
//                         <ul className="product_list">
//                             {
//                                 products.map(
//                                     (item: any) => (
//                                         <li><a href="#">{item.Lable}</a></li>
                                        
//                                     )
//                                 )
//                             }
//                         </ul>
//                     </Grid>
//                     <Grid xs={2}>
//                         <h5>{data.length !== 0?data[1].heading:"Loading"}</h5>
//                         <ul className="product_list">
//                             {
//                                 services.map(
//                                     (item: any) => (
//                                         <li><a href="#">{item.Lable}</a></li>
                                        
//                                     )
//                                 )
//                             }
//                         </ul>
//                     </Grid>
//                     <Grid xs={2}>
//                         <h5>{data.length !== 0?data[2].heading:"Loading"}</h5>
//                         <ul className="product_list">
//                             {
//                                 companies.map(
//                                     (item: any) => (
//                                         <li><a href="#">{item.Lable}</a></li>
                                        
//                                     )
//                                 )
//                             }
//                         </ul>
//                     </Grid>
//                     <Grid xs={3}>
//                         <h5>{data.length !== 0?data[3].heading:"Loading"}</h5>
//                         <ul className="product_list">
//                             {
//                                 contacts.map(
//                                     (item: any) => (
//                                         <li><a href="#">{item.Lable}</a></li>
                                        
//                                     )
//                                 )
//                             }
//                         </ul>
//                         <ul className="social-sites">
//                             <li><a href="#"><img src="./images/twitter_icon.svg" alt="" /></a></li>
//                             <li><a href="#"><img src="./images/fb_icon.svg" alt="" /></a></li>
//                             <li><a href="#"><img src="./images/linkedin_icon.svg" alt="" /></a></li>
//                             <li><a href="#"><img src="./images/youtube_icon.svg" alt="" /></a></li>
//                         </ul>
//                     </Grid>
//                 </Grid>
//             </div>
//         </Box>
//     )
// }

// export default Footer
