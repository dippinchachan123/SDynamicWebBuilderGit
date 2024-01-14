import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Collapse, Link, MenuItem } from "@mui/material";
import SlidingPanel from "react-sliding-side-panel";
import Menu, { MenuProps } from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./Navbar.scss";
import Button from '@mui/material/Button';

interface Props {
  open_status: boolean;
  attrName: any;
  value_update: Function;
}

const Navbar: React.FC<Props> = ({
  open_status,
  attrName,
  value_update,
}) =>  {
    const [slideOpen, setSlideOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 
  const [unusedFields, setUnusedFields] = React.useState(false); 
  const openUnusedFields = () => {setUnusedFields((expanded) => !expanded);};

  return (
    <Box className="navbar">
        <Grid container spacing={3} >
           <Grid xs={6}>
              <Link href="javascript:void(0)">
                <img
                  src="./images/unison_logo_mobile.svg"
                  alt=""
                  className="logo"
                />
              </Link>
            </Grid>
            <Grid xs={6} className="text-end">
              <Link className="menu-btn"  
              onClick={() => {
               setSlideOpen(true);
                }}>
                <span className="iconbars"></span>
              </Link>
            </Grid>
        </Grid>
        <SlidingPanel
            type={"right"}
            isOpen={slideOpen}
            size={100}
            panelClassName="slidingPanel"
            backdropClicked={() => value_update(attrName, false)}
            >
            <Box className="slide_popup">
                <Grid container spacing={3} alignItems="center">
                    <Grid xs={12}>
                        <Link href="javascript:void(0);" className="close" 
                        onClick={() => {
                            setSlideOpen(false);
                            }}>
                        </Link>   
                    </Grid>
                    <Grid xs={12}>
                        <ul>
                            <li className="nav-item">
                                <Link className="nav-link" href="javascript:void(0);">About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link dropdown" href="javascript:void(0);" 
                                onClick={openUnusedFields}
                                    >
                                    Products
                                </Link>
                                 <Collapse in={unusedFields}>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"><a href="javascript:void(0)">Health Insurance</a></li>
                                        <li className="dropdown-item"><a href="javascript:void(0)">Bike Insurance</a></li> 
                                        <li className="dropdown-item"><a href="javascript:void(0)">Car Insurance</a></li> 
                                        <li className="dropdown-item"><a href="javascript:void(0)">Term Insurance</a></li> 
                                        <li className="dropdown-item"><a href="javascript:void(0)">Invest Insurance</a></li> 
                                        <li className="dropdown-item"><a href="javascript:void(0)">Travel Insurance</a></li> 
                                    </ul> 
                                    </Collapse>
                            </li>
                            

                            <li className="nav-item">
                                <Link className="nav-link" href="javascript:void(0);">Claim</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="javascript:void(0);">Contact Us</Link>
                            </li>
                        </ul> 
                        <div className="mt-4 navbar_login">
                            <Link href="avascript:void(0);" className="login_btn">Login</Link>
                        </div>                   
                    </Grid>
                </Grid>
               
            </Box>
        </SlidingPanel>
    </Box>
    );
}

export default Navbar;