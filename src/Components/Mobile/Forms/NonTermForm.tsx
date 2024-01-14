import React, {useState} from "react";
import "../../../Modal.scss";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import {
    Box,
    Checkbox,
    IconButton,
    Modal,
    TextField,
    FormControlLabel,
    Link,
    Button,
} from "@mui/material";
// import SolidButton from "../../../../Supporting files/SolidButton/SolidButton";
// import DatePicker from "../../../../Supporting files/DatePicker/DatePicker";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import FileUpload from "../../../../Supporting files/FileUpload/FileUpload";
// import CheckBox from "../../../../Supporting files/CheckBox/CheckBox";
import AddIcon from "@mui/icons-material/Add";
// import TextButton from "../../../../Supporting files/TextButton/TextButton";
import RemoveIcon from "@mui/icons-material/Remove";
import RKTextField from "../../FieldTypes/RKTextField/RKTextField";
import SearchDropdown from "../../FieldTypes/SearchDropdown/SearchDropdown";
import NativeSelectDropdown from "../../FieldTypes/NativeSelectDropdown/NativeSelectDropdown";

interface Props {
    attrName: any;
    open_status: boolean;
    value_update: Function;
}

const NonTermForm: React.FC<Props> = ({
    attrName,
    open_status,
    value_update,
}) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    const [quoteFields, setQuoteFields] = useState<{
        mode:{ value:string, warning:boolean};
        gender:{ value:string, warning:boolean};
        pincode:{ value:string, warning:boolean};
        mobile:{ value:string, warning:boolean};
        invest:{ value:string, warning:boolean};
        age:{ value:string, warning:boolean};
      }>({
        mode:{ value:'', warning:false },
        gender:{ value:'male', warning:false },
        pincode:{ value:'177001', warning:false },
        mobile:{ value:'9876543210', warning:false },
        invest:{ value:'', warning:false },
        age:{ value:'', warning:false },
      })
      const mode_data = [
        { key: "monthly", value: "Monthly" },
        { key: "quarterly", value: "Quarterly" },
        { key: "half-yearly", value: "Half-Yearly" },
        { key: "yearly", value: "Yearly" },
      ];
      const gender_data = [
        { key: "male", value: "Male" },
        { key: "female", value: "Female" },
      ];
      
    const age_data = [
        { label: "1 Lakh", value: "1 Lakh" },
        { label: "2 Lakhs", value: "2 Lakhs" },
        { label: "5 Lakhs", value: "5 Lakhs" },
        { label: "10 Lakhs", value: "10 Lakhs" },
        { label: "20 Lakhs", value: "20 Lakhs" },
        { label: "50 Lakhs", value: "50 Lakhs" },
    ]
      const fieldsUpdateState=(attrName:any,value:any) =>{
        attrName[3]({ ...attrName[2], [attrName[0]]: { ...[attrName[0]], [attrName[1]]: value } });
      }

    //   function updateMasterState(attrName: any, value: any) {
    //     if (attrName == "nextButton") {
    //       if (stepStatus < 8) {
    //         setStepStatus(stepStatus + 1);
    //       }
    //     } else {
    //       attrName(value);
    //     }
    //   }

    //addons
    const [proposerInsuredMember, setProposerInsuredMember] =
        React.useState(true);
    function updateAddonsState(attrName: string, value: any) {
        if (attrName == "proposerInsuredMember") {
            setProposerInsuredMember(value);
        }
        console.log(attrName, value);
    }

    // fileupload docs
    const [policyDocs, setPolicyDocs] = React.useState("");
    function updateMasterStates(attrName: string, value: any) {
        if (attrName == "policyDocs") {
            setPolicyDocs(value);
        }
    }

    //   // Step status
    //   const [stepStatus, setStepStatus] = React.useState(1);
    //   function validate_data() {
    //     if (stepStatus < 6) {
    //       setStepStatus(stepStatus + 1);
    //     }
    //   }

    //   function go_back() {
    //     if (stepStatus > 1) {
    //       setStepStatus(stepStatus - 1);
    //     }
    //   }

    return (
        <Modal
            open={open_status}
            aria-labelledby="Health Insurance Add New Policy"
            className="modalWrapper">
            <div className="modalInner mdWidth mobile_form_padding">
                <Box className="modalContent modalContent_mobile">
                    <Grid container alignItems="center">
                        <Grid xs={10}>
                            <h2 className="mobile_title_lg">
                                Investment<span> Plan</span> 
                            </h2>
                        </Grid>
                        <Grid xs={2} className="textRight">
                            <IconButton
                                className="close-button_mobile"
                                onClick={()=>{value_update(attrName, false)}}></IconButton>
                        </Grid>
                        <Grid xs={12}>
                            <h4 className="sectionTitle">
                                Details
                            </h4>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid  xs={6}>
                            <RKTextField
                                class_name="inputField"
                                title={"I want to Invest"}
                                value={quoteFields.invest.value}
                                attrName={["invest", "value", quoteFields, setQuoteFields]}
                                value_update={fieldsUpdateState}
                                warn_status={quoteFields.invest.warning}
                            />
                        </Grid>
                        <Grid xs={6}>
                            <NativeSelectDropdown
                                class_name="inputField "
                                title="Mode"
                                value={quoteFields.mode.value}
                                attrName={['mode','value', quoteFields, setQuoteFields]}
                                value_update={fieldsUpdateState}
                                dropdown_data={mode_data}
                                warn_status={quoteFields.mode.warning}
                                />
                        </Grid>
                        <Grid xs={6}>
                            <NativeSelectDropdown
                                class_name="inputField "
                                title="Gender"
                                value={quoteFields.gender.value}
                                attrName={['gender','value', quoteFields, setQuoteFields]}
                                value_update={fieldsUpdateState}
                                dropdown_data={gender_data}
                                warn_status={quoteFields.gender.warning}
                                />
                        </Grid>
                        <Grid  xs={6}>
                            <SearchDropdown
                                class_name="inputField mb-2"
                                title="Age"
                                value={quoteFields.age.value}
                                attrName={["age", "value", quoteFields, setQuoteFields]}
                                value_update={fieldsUpdateState}
                                data={age_data}
                                warn_status={quoteFields.age.warning}
                                error_message={''}
                            />
                        </Grid>
                        <Grid xs={6}>
                            <RKTextField
                                class_name="inputField"
                                title={"Pin Code"}
                                value={quoteFields.pincode.value}
                                attrName={["pinCode", "value", quoteFields, setQuoteFields]}
                                value_update={fieldsUpdateState}
                                warn_status={quoteFields.gender.warning}
                            />
                        </Grid>
                        <Grid xs={6}>
                            <RKTextField
                                class_name="inputField"
                                title={"Number"}
                                value={quoteFields.mobile.value}
                                attrName={["number", "value", quoteFields, setQuoteFields]}
                                value_update={fieldsUpdateState}
                                warn_status={quoteFields.mobile.warning}
                            />
                        </Grid>
                        
                    </Grid>

                    <Grid container spacing={3}>
                        {/* <Grid xs={12} className="solidBtn text-center mt-4">
                                        <SolidButton
                            attrName="nextButton"
                            title="Next"
                            class_name="regular"
                            value_update={updateMasterStates}
                            icon={<ArrowRightAltIcon />}
                        />
                        </Grid> */}
                        <Grid xs={12} textAlign="center">
                            <Button variant='contained' className="browsebtn uploadbtn" component="label">View Quotes </Button>
                        </Grid>
                    </Grid> 
                </Box>
            </div>
        </Modal>
    );
};

export default NonTermForm;
