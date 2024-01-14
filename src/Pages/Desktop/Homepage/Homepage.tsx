import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Link, Rating } from "@mui/material";
import './Homepage.scss'
import './strapiStyles.scss'
import TermForm from './../../../Components/Desktop/Forms/TermForm/TermForm';
// import NonTermForm from './../../../Components/Desktop/Forms/NonTermForm/NonTermForm';
import TravelForm from './../../../Components/Desktop/Forms/TravelForm/TravelForm';
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
import { RampRight } from '@mui/icons-material';
import { add } from 'date-fns';

//Strapi Integration
import { Strapi } from 'strapi-frontend';

function Homepage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); }

    const [openInvestment, setOpenInvestment] = React.useState(false);
    const handleOpenInvestment = () => { setOpenInvestment(true); }

    const [openTravel, setOpenTravel] = React.useState(false);
    const handleOpenTravel = () => { setOpenTravel(true); }

    const [openHealth, setOpenHealth] = React.useState(false);
    const handleOpenHealth = () => { setOpenHealth(true); }

    const [openCar, setOpenCar] = React.useState(false);
    const handleOpenCar = () => { setOpenCar(true); }

    const [openBike, setOpenBike] = React.useState(false);
    const handleOpenBike = () => { setOpenBike(true); }


    const updateMasterState : any = (attrName: any, value: any) => {
        attrName(value);
    };
    const [components, setComponents] = useState<any>(null);
    
    //For reloading the api every 2 second from demo showing!!
    const [reload,setReload] = useState(false) 

    // setInterval(()=>{
    //     setReload(!reload)
    // },5000)
    



    //...................................................................................................................
    //Strapi-Integration

    function mountComponents(strapi : any){

        strapi.mountComponent("Section-1", (data: any) => {

            return (
                <div className="header_outer">
                    <Grid container spacing={0}>
                        <Grid xs={12}>
                            {/* header */}
                            <Grid container spacing={0}>
                                <Grid xs={12} className="header">
                                    <h1>{data.Title[0].text.split(":")[0]}<span>{data.Title[0].text.split(":")[1]}</span></h1>
                                    <Grid container spacing={0}>
                                        <Grid xs={6}>
                                            <Grid container spacing={3}>
                                                <Grid xs={6} >
                                                    <Link className="product_outer" onClick={handleOpenHealth}>
                                                        <div className="product_sec health">
                                                            <h5>Health<br /> Insurance</h5>
                                                        </div>
                                                    </Link>
                                                </Grid>
                                                <Grid xs={6}>
                                                    <Link className="product_outer" onClick={handleOpen}>
                                                        <div className="product_sec term">
                                                            <h5>Term<br /> Insurance</h5>
                                                        </div>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={3}>
                                                <Grid xs={12} className='pt-6'>
                                                    <Link className="product_outer" onClick={handleOpenTravel}>
                                                        <div className="travel_product_sec">
                                                            <h5>Air<br /> Insurance</h5>
                                                        </div>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid xs={6}>
                                            <Grid container spacing={3}>
                                                <Grid xs={6} >
                                                    <Link className="product_outer" onClick={handleOpenCar}>
                                                        <div className="car_product_sec">
                                                            <h5>Car<br /> Insurance</h5>
                                                        </div>
                                                    </Link>
                                                </Grid>
                                                <Grid xs={6}>
                                                    <Link className="product_outer" onClick={handleOpenBike}>
                                                        <div className="product_sec bike">
                                                            <h5>Bike<br /> Insurance</h5>
                                                        </div>
                                                    </Link>
                                                    <Link className="product_outer" onClick={handleOpenInvestment}>
                                                        <div className="product_sec investment  mt-6">
                                                            <h5>Family<br /> Insurance</h5>
                                                        </div>
                                                    </Link>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    <Grid container >
                                        <Grid xs={12} className="others_product_sec ml-3 mr-3">
                                            <ul>
                                                <li>Others:</li>
                                                {
                                                    [<li><a>Marine Insurance</a></li>,
                                                    <li><a>Fuel Insurance</a></li>,
                                                    <li><a>Fire Insurance</a></li>]
                                                }
                                            </ul>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            )
        })

        strapi.mountComponent("Section-2", (data: any) => {
            console.log("Data - Section-2 : ", data)

            return (
                <Grid container className="factsheet">
                    <Grid xs={12} className="textCenter">
                        <Grid container>
                            <Grid xs={12} className="mb-10">
                                <h2>{data.Title[0].text.split(":")[0]}</h2>
                                <p>{data.Title[0].text.split(":")[1]}</p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            {
                                data.Cards.map(
                                    (item: any) => (
                                        <Grid xs={3}>
                                            <div className="counter_sec">
                                                <h4><span className="counter">{item.title}</span>+</h4>
                                                <p className="mb-0">{item.text}</p>
                                            </div>
                                        </Grid>
                                    )
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            )
        })

        strapi.mountComponent("Section-3", (data: any) => {
            return (
                <Grid container className="feature_sec">
                    <Grid xs={12}>
                        <Grid container spacing={3}>
                            <Grid xs={3}>
                                <img src="./images/feature_sec_img.svg" alt="" className="img-fluid" />
                            </Grid>
                            <Grid xs={9}>
                                <h2>{data.Title[0].text.split(":")[0]}<br /> {data.Title[0].text.split(":")[1]}</h2>
                                <Grid container spacing={0}>
                                    <Grid xs={12} className='divider' padding={0}></Grid>
                                </Grid>
                                <Grid container spacing={0}>
                                    {
                                        data.Cards.map(
                                            (item: any) => (
                                                <Grid xs={4}>
                                                    <div className="feature_desc mb-6">
                                                        <span className={item.title.split(":")[0]}></span>
                                                        <h5>{item.lable} <br />{item.title.split(":")[1]}</h5>
                                                        <p>{item.text}</p>
                                                    </div>
                                                </Grid>
                                            )
                                        )
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            )
        })

        strapi.mountComponent("Section-4", (data: any) => {
            return (
                <div className='awards_sec_outer'>
                    <Grid container>
                        <Grid xs={12}>
                            <Grid container className="mb-5">
                                <Grid xs={3}>
                                    <h3>Awards &<br /> Recognition </h3>
                                </Grid>
                                <Grid xs={9}>
                                    {
                                        data.Relations.awards.data.map(
                                            (item: any) => (
                                                <Grid xs={9}>
                                                    <p>{item.attributes.Award}</p>
                                                </Grid>

                                            )
                                        )
                                    }
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid xs={12} className="divider"></Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </div>
            )
        })

        strapi.mountComponent("Section-5", (data: any, addrs: string) => {
            return (

                <Grid container className='customer_review'>
                    <Grid xs={12}>
                        <Grid container className="mb-10">
                            <Grid xs={12}>
                                <div className="top-heading">
                                    <h2>What customer say<br /> about us</h2>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            {
                                data.Relations.comments.data.map(
                                    (item: any) => {
                                        let rating = item.attributes.rating;
                                        let classname = rating + " mt-60";
                                        classname = "review_div " + classname;
                                        return (
                                            <Grid xs={6}>
                                                <div className={classname}>
                                                    <span><img src={addrs + item.attributes.PersonImage.data.attributes.formats.thumbnail.url} alt="" /></span>
                                                    <p>{item.attributes.Comment}</p>
                                                </div>
                                            </Grid>)
                                    }
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>

            )
        })

        strapi.mountComponent("Section-6", (data: any, addrs: string) => {
            return (

                <Grid container className='partners_section'>
                    <Grid xs={12}>
                        <Grid container>
                            <Grid xs={12} className="mb-10">
                                <h2>Our Partners</h2>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs={12}>
                                <ul className="partnersLogo">
                                    {
                                        data.Relations.partners.data.map(
                                            (item: any) => {
                                                return (<li><img src={addrs + item.attributes.Image.data.attributes.url} alt="insurer" /></li>)
                                            }
                                        )
                                    }
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            )
        })
    }

    useEffect(() => {
        const strapi = new Strapi('/api/pages/6?populate=deep')//Using the global config we set in App.ts file
        mountComponents(strapi);
        strapi.configure()
            .then(res => setComponents(strapi.render()))
            .catch(err => console.log("Error in fetching data from strapi portal :", err))
    }, [reload])

    //...................................................................................................................



   




    return (
        <Box className="homePageWrapper">
            <TermForm
                attrName={setOpen}
                open_status={open}
                value_update={updateMasterState}
            />
            <NonTermForm
                attrName={setOpenInvestment}
                open_status={openInvestment}
                value_update={updateMasterState}
            />
            <TravelForm
                attrName={setOpenTravel}
                open_status={openTravel}
                value_update={updateMasterState}
            />
            <HealthForm
                attrName={setOpenHealth}
                open_status={openHealth}
                value_update={updateMasterState}
            />
            <CarForm
                attrName={setOpenCar}
                open_status={openCar}
                value_update={updateMasterState}
            />
            <BikeForm
                attrName={setOpenBike}
                open_status={openBike}
                value_update={updateMasterState}
            />
            <Navbar />

            {components}
            {/* <Footer /> */}
        </Box>
    )
}

export default Homepage
