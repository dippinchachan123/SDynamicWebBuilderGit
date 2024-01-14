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
import SearchDropdown from "../../FieldTypes/SearchDropdown/SearchDropdown";
import SelectDropdown from "../../FieldTypes/SelectDropdown/SelectDropdown";
import RKTextField from "../../FieldTypes/RKTextField/RKTextField";
import NativeSelectDropdown from "../../FieldTypes/NativeSelectDropdown/NativeSelectDropdown";

interface Props {
    attrName: any;
    open_status: boolean;
    value_update: Function;
}

const TermForm: React.FC<Props> = ({
    attrName,
    open_status,
    value_update,
}) =>  {
  const [quoteFields, setQuoteFields] = useState<{
        smokeData:{ value:string, warning:boolean};
        gender:{ value:string, warning:boolean};
        pincode:{ value:string, warning:boolean};
        mobile:{ value:string, warning:boolean};
        annualIncome:{ value:string, warning:boolean};
        age:{ value:string, warning:boolean};
      }>({
        smokeData:{ value:'no', warning:false },
        gender:{ value:'male', warning:false },
        pincode:{ value:'177001', warning:false },
        mobile:{ value:'9876543210', warning:false },
        annualIncome:{ value:'', warning:false },
        age:{ value:'', warning:false },
      })
      const smokeData_data = [
        { key: "yes", value: "Yes" },
        { key: "no", value: "No" },
      ];
      const gender_data = [
        { key: "male", value: "Male" },
        { key: "female", value: "Female" },
      ];
      const annualIncome_data = [
        { label: "1 Lakh", value: "1 Lakh" },
        { label: "2 Lakhs", value: "2 Lakhs" },
        { label: "5 Lakhs", value: "5 Lakhs" },
        { label: "10 Lakhs", value: "10 Lakhs" },
        { label: "20 Lakhs", value: "20 Lakhs" },
        { label: "50 Lakhs", value: "50 Lakhs" },
    ]
    const age_data = [
        { label: "21 Years", value: "21 Years" },
        { label: "22 Years", value: "22 Years" },
        { label: "23 Years", value: "23 Years" },
        { label: "24 Years", value: "24 Years" },
        { label: "25 Years", value: "25 Years" },
        { label: "26 Years", value: "26 Years" },
    ]
      const fieldsUpdateState=(attrName:any,value:any) =>{
        attrName[3]({ ...attrName[2], [attrName[0]]: { ...[attrName[0]], [attrName[1]]: value } });
      }

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
  return (
     <Modal
          open={open_status}
          aria-labelledby="Health Insurance Add New Policy"
          className="modalWrapper">
           <div className="modalInner mdWidth mobile_form_padding">
            <Box className="modalContent modalContent_mobile ">
                <Grid container alignItems="center">
                    <Grid xs={10}>
                        <h2 className="mobile_title_lg">
                            Term<span> Insurance</span> 
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
                    <Grid xs={6}>
                        <SearchDropdown
                            class_name="inputField mb-2"
                            title="Annual Income"
                            value={quoteFields.annualIncome.value}
                            attrName={["annualIncome", "value", quoteFields, setQuoteFields]}
                            value_update={fieldsUpdateState}
                            data={annualIncome_data}
                            warn_status={quoteFields.annualIncome.warning}
                            error_message={''}
                        />
                    </Grid>
                    <Grid xs={6}>
                        <NativeSelectDropdown
                            class_name="inputField "
                            title="Do you Smoke?"
                            value={quoteFields.smokeData.value}
                            attrName={['smokeData','value', quoteFields, setQuoteFields]}
                            value_update={fieldsUpdateState}
                            dropdown_data={smokeData_data}
                            warn_status={quoteFields.smokeData.warning}
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
                    <Grid xs={6}>
                        <SearchDropdown
                            class_name="inputField mb-2"
                            title="Age"
                            value={quoteFields.annualIncome.value}
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
}

export default TermForm