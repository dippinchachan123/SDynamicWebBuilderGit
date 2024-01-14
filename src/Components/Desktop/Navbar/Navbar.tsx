import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Link } from '@mui/material';
import "./Navbar.scss";

//Added
import {useEffect ,useState} from "react";      
import axios from "axios";



function Navbar() {
  //Data fetching
  const addrs = "https://strapi.evervent.in";
  const [data, setData] = useState([]);
    // useEffect(() => {
    // axios.get(addrs + "/api/home-page?populate=deep")
    // .then(response => {
    // setData(response.data.data.attributes.Header1.Links)
    // });
    // }, []);


    return (
      <Box className="navbar">
        <Grid container spacing={3}>
          <Grid xs={6}>
            <img src='./images/unison_logo.svg' height="40px"/>
          </Grid>
          <Grid xs={6} display="flex" justifyContent="end" alignItems="center">
              <ul className='navLinks'>
                 {
                 data.map((item: any) => (<li><Link className="navitems" href={item.URL} target = "_blank" >{item.Lable}</Link></li>))
                 }
                <li><Button className='btn login-btn'>Login</Button></li>
              </ul>
            {/* <Button className='btn mr-4'>Email Quotes</Button>
            <h6 className='mb-0'><span>Toll Free:</span> 1800 123 624276</h6> */}
          </Grid>
        </Grid>
      </Box>
    )
}

export default Navbar;