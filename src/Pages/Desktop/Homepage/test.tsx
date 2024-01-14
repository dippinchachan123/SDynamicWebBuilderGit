import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Link, Rating } from "@mui/material";
import './Homepage.scss'
import TermForm from '../../../Components/Desktop/Forms/TermForm/TermForm';
// import NonTermForm from './../../../Components/Desktop/Forms/NonTermForm/NonTermForm';
import TravelForm from '../../../Components/Desktop/Forms/TravelForm/TravelForm';
import Navbar from '../../../Components/Desktop/Navbar/Navbar';
// import Footer from '../../../Components/Desktop/Footer/Footer';
import NonTermForm from '../../../Components/Desktop/Forms/NonTermForm/NonTermForm';
import HealthForm from '../../../Components/Desktop/Forms/HealthForm/HealthForm';
import CarForm from '../../../Components/Desktop/Forms/CarForm/CarForm';
import BikeForm from '../../../Components/Desktop/Forms/BikeForm/BikeForm';


//Added
import { useEffect, useState } from "react";
import axios from "axios";
import { da, mt } from 'date-fns/locale';
import { RampRight, Star } from '@mui/icons-material';
import { add } from 'date-fns';
import { Strapi } from 'strapi-frontend';

function Test() {
    const [components, setComponents] = useState<any>(null);

    //For reloading the api every 2 second from demo showing!!
    const [reload,setReload] = useState(false) 

    // setInterval(()=>{
    //     setReload(!reload)
    // },5000)



    //...................................................................................................................
    //Strapi-Integration

    function mountComponents(strapi : Strapi){
        //Write Code for the mounted Components
    }
    useEffect(() => {
        const strapi = new Strapi('/api/pages/7?populate=deep')//we will use the global config we set in App.ts file
        mountComponents(strapi);
        //Configuring
        strapi.configure()
            .then(res => setComponents(strapi.render()))
            .catch(err => console.log("Error in fetching data from strapi portal :", err))

    },[reload])

    //...................................................................................................................

    return (
        <div style={{display:'flex',flexDirection : 'column' ,rowGap : '20px',padding : '50px'}}>
            {components}
        </div>
    )
}

export default Test
