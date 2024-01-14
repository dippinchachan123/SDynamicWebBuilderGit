import React from 'react'
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Link } from "@mui/material";
import './Homepage.scss';
import Footer from '../../../Components/Mobile/Footer/Footer';
import Navbar from '../../../Components/Mobile/Navbar/Navbar';
import TermForm from '../../../Components/Mobile/Forms/TermForm';
import NonTermForm from '../../../Components/Mobile/Forms/NonTermForm';
interface Props {
  open_status: boolean;
  attrName: any;
  value_update: Function;
}

const Homepage: React.FC<Props> = ({
  open_status,
  attrName,
  value_update,
}) =>  {
    const handleOpen = () => {setOpen(true);}
    const [open, setOpen] = React.useState(false);
    const updateMasterState = (attrName: any, value: any) => {
        attrName(value);
    };
    const [openInvestment, setOpenInvestment] = React.useState(false);
    const handleOpenInvestment = () => {setOpenInvestment(true); }
    
    
    
    //Data fetching
    const addrs = "https://strapi.evervent.in";
    const [data, setData] = React.useState<any>([]);
    React.useEffect(() => {
    axios.get(addrs + "/api/home-page?populate=deep")
    .then(response => {
        setData(response.data.data.attributes)
    });
    }, []);


    let blockdata,titleData;
    let otherInsuranceData = [],facts1Data = [],facts2Data = [],awardData = [],commentData = [],partnerData = []
    
    //Assigning Data
    console.log(data);
    if(data !== null && data !== undefined){
        blockdata = data.Blocks;
        titleData = data.Title1;
    }
    if(blockdata !== null && blockdata !== undefined){
        otherInsuranceData = blockdata[0].OtherTypes;
        facts1Data = 1 in blockdata ? blockdata[1].facts_1 : [];
        facts2Data = 1 in blockdata ? blockdata[1].facts_2 : [];
        awardData = 2 in blockdata ? blockdata[2].awards.data : [];
        commentData = 3 in blockdata ? blockdata[3].commentSection.data : [];;
        partnerData = 4 in blockdata ? blockdata[4].partners.data : [];
    }

    return (
      <Box className="homePageWrapper">
          <TermForm
              attrName={setOpen}
              open_status= {open}
              value_update= {updateMasterState}
          />
          <NonTermForm
              attrName={setOpenInvestment}
              open_status={openInvestment}
              value_update={updateMasterState}
          />
      
          <Navbar 
            open_status = {false}
            attrName={"r"}
            value_update={()=>{}}
          />    
        
        {/* header  */}
        <Grid container spacing={3} className="header">
          <Grid xs={12}>
            <h1>
              {titleData!==null && titleData !== undefined?titleData[0].Lable:"Loading"}<span>{titleData!==null && titleData !== undefined?titleData[0].Lable2:"Loading"}</span>
            </h1>
          </Grid>
          <Grid xs={6} className="pe-6">
            <Grid container spacing={3} className="px-0 py-0">
              <Grid xs={12} className="px-0 py-0">
                <Link href="javascript:void(0);" className="product_outer">
                  <div className="product_sec health">
                    <h5>
                      {blockdata!==null && blockdata !== undefined?blockdata[0].Types[0].lable:"Loading"}<br /> {blockdata!==null && blockdata !== undefined?blockdata[0].Types[0].lable2:"Loading"}
                    </h5>
                  </div>
                </Link>
              </Grid>
              <Grid xs={12} className="px-0 pb-0">
                <Link className="product_outer" onClick={handleOpen}>
                  <div className="product_sec term">
                    <h5>
                      {blockdata!==null && blockdata !== undefined?blockdata[0].Types[1].lable:"Loading"}<br /> {blockdata!==null && blockdata !== undefined?blockdata[0].Types[1].lable2:"Loading"}
                    </h5>
                  </div>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} className="py-0 ps-6">
            <Link href="javascript:void(0);" className="product_outer">
              <div className="car_product_sec">
                <h5>
                  {blockdata!==null && blockdata !== undefined?blockdata[0].Types[3].lable:"Loading"}<br /> {blockdata!==null && blockdata !== undefined?blockdata[0].Types[3].lable2:"Loading"}
                </h5>
              </div>
            </Link>
          </Grid>
          <Grid xs={12}>
            <Link href="javascript:void(0);" className="product_outer">
              <div className="bike_product_sec">
                <h5>
                  {blockdata!==null && blockdata !== undefined?blockdata[0].Types[4].lable:"Loading"}<br /> {blockdata!==null && blockdata !== undefined?blockdata[0].Types[4].lable2:"Loading"}
                </h5>
              </div>
            </Link>
          </Grid>
          <Grid xs={6} className="py-0 pe-6">
            <Link href="javascript:void(0);" className="product_outer" onClick={handleOpenInvestment}>
              <div className="product_sec investment">
                <h5>
                  {blockdata!==null && blockdata !== undefined?blockdata[0].Types[5].lable:"Loading"}<br /> {blockdata!==null && blockdata !== undefined?blockdata[0].Types[5].lable2:"Loading"}
                </h5>
              </div>
            </Link>
          </Grid>
          <Grid xs={6} className="py-0 ps-6">
            <Link href="javascript:void(0);" className="product_outer">
              <div className="product_sec travel">
                <h5 className="font-color">
                  {blockdata!==null && blockdata !== undefined?blockdata[0].Types[2].lable:"Loading"}<br /> {blockdata!==null && blockdata !== undefined?blockdata[0].Types[2].lable2:"Loading"}
                </h5>
              </div>
            </Link>
          </Grid>
        </Grid>

        {/* factsheet sction */}
        <Grid container spacing={3} className="factsheet_sec">
          <Grid xs={12} className="mb-10 text-center">
            <h2>{blockdata!==null && blockdata !== undefined?blockdata[1].heading:"Loading"}</h2>
            <p>{blockdata!==null && blockdata !== undefined?blockdata[1].SubHeading:"Loading"}</p>
          </Grid>
          {
              facts1Data.map(
                  (item: any) => (
                    <Grid xs={6} className="pe-6">
                      <div className="counter_sec">
                        <h4>
                          <span className="counter">{item.lable}</span>+
                        </h4>
                        <p className="mb-0">{item.content}</p>
                      </div>
                    </Grid>
                      
                  )
              )
          }
        </Grid>

        {/* featurs section */}
        <Grid container spacing={3} className="feature_sec">
          <Grid xs={12}>
            <h2>
              It's not just what we do, it's how we do it that sets us apart.
            </h2>
          </Grid>
          <Grid xs={12} className="mb-10">
            <div className="divider"></div>
          </Grid>
          <Grid xs={12} className="text-center mb-10">
            <img
              src="./images/feature_sec_img_mobile.svg"
              alt=""
              className="img-fluid"
            ></img>
          </Grid>
          <Grid xs={6} className="text-center pe-6 mb-6">
            <div className="feature_desc">
              <img
                src="./images/customer_img_mobile.svg"
                alt=""
                height="46"
              ></img>
              <h5>
                Customer <br /> Satisfaction
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </Grid>
          <Grid xs={6} className="text-center ps-6 mb-6">
            <div className="feature_desc">
              <img
                src="./images/compare_plans_img_mobile.svg"
                alt=""
                height="46"
              ></img>
              <h5>
                Compare <br /> Plans
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </Grid>
          <Grid xs={12} className="text-center">
            <div className="feature_desc new">
              <div className="inner">
                <img
                  src="./images/claim_assistance_img_mobile.svg"
                  alt=""
                  height="46"
                ></img>
                <h5>
                  24/7 Claim <br /> Assistance
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </Grid>
        </Grid>

        {/*  awards section */}

        <div className="awards_sec">
          <Grid container spacing={3}>
            <Grid xs={12}>
              <h3>
                Awards & <br /> Recognition
              </h3>
              {
                  awardData.map(
                      (item: any) => <p>{item.attributes.Award}</p>
                  )
              }
            </Grid>
            
          </Grid>
        </div>

        {/* customer review section */}
        <Grid container spacing={3} className="customer_review">
          <Grid xs={12} className="top-heading">
             <h2>What customer say about <br /> us ?</h2>
          </Grid>
        </Grid>

        {/* our partner section */}
        <Grid container spacing={3} className="our-partners-section">
            <Grid xs={12} className="our_partners_inner">
                 <h2>Our Partners</h2>
            </Grid>
        </Grid>
        {/* footer section */}
        <Footer/>
      </Box>
    );
}

export default Homepage