import React, { useState } from "react";
import "../../../../Modal.scss";
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
import SelectDropdown from "../../../FieldTypes/SelectDropdown/SelectDropdown";
import RKTextField from "../../../FieldTypes/RKTextField/RKTextField";
// import SolidButton from "../../../../Supporting files/SolidButton/SolidButton";
// import DatePicker from "../../../../Supporting files/DatePicker/DatePicker";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import FileUpload from "../../../../Supporting files/FileUpload/FileUpload";
// import CheckBox from "../../../../Supporting files/CheckBox/CheckBox";
import SearchDropdown from "../../../FieldTypes/SearchDropdown/SearchDropdown";
import AddIcon from "@mui/icons-material/Add";
// import TextButton from "../../../../Supporting files/TextButton/TextButton";
import RemoveIcon from "@mui/icons-material/Remove";
import MultipleSearchDropdown from "../../../FieldTypes/MultipleSearchDropdown/MultiSearchDropdown";
import DatePicker from "../../../FieldTypes/DatePicker/DatePicker";
import { Value } from "sass";
import { QuestionMarkTwoTone } from "@mui/icons-material";

interface Props {
    attrName: any;
    open_status: boolean;
    value_update: Function;
}
let isSubmitting : boolean = false;
const HealthForm: React.FC<Props> = ({
    attrName,
    open_status,
    value_update,
}) => {
    
    const [open, setOpen] = React.useState(false);
    const getError = (attrN : String,value : any)=>{
        switch(attrN){
            case "mobile" :
                if(!value){
                    return "Number is required"; 
                }else if(!/^\d{10}$/.test(value)){
                    return "Invalid Number"
                }else{
                    return "";
                }
            case "pincode" :
                if(!value){
                    return "pincode is required"; 
                }else if(!/^\d{6}$/.test(value)){
                    return "Invalid pincode"
                }else{
                    return "";
                }
            case "email" :
                if(!value){
                    return "email is required"; 
                }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
                    return "Invalid email"
                }else{
                    return "";
                }
            
            case "age":
                if(!value){
                    return "age is required"; }
                else{
                    return "";
                }
                
            default:
                return "";
           
        }
        
    }  

    const handleClose = () => setOpen(false);
    const [quoteFields, setQuoteFields] = useState<{
        gender: { value: string, warning: boolean , error : String};
        pincode: { value: string, warning: boolean, error : String };
        mobile: { value: string, warning: boolean , error : String};
        invest: { value: string, warning: boolean , error : String};
        age: { value: string, warning: boolean , error : String};
        travelCountry: { value: string, warning: boolean , error : String};
        startDate: { value: Date | null, warning: boolean , error : String};
        endDate: { value: Date | null, warning: boolean , error : String};
        email: { value: string, warning: boolean , error : String};
    }>({
        gender: { value: 'male', warning: false , error : ""},
        pincode: { value: '', warning: false , error : "Pincode is required"},
        mobile: { value: '', warning: false , error : "Number is required"},
        invest: { value: '', warning: false , error : ""},
        age: { value: '', warning: false , error : "Age is required"},
        travelCountry: { value: '', warning: false , error : ""},
        startDate: { value: null, warning: false , error : ""},
        endDate: { value: null, warning: false , error : ""},
        email: { value: '', warning: false , error : "Email is required"},
    })
    const planType_data = [
        { key: "individual/family", value: "Individual/Family" },
        { key: "group", value: "Group" },
    ];
    const frequency_data = [
        { key: "single trip", value: "Single Trip" },
        { key: "multi trip", value: "Multi Trip" },
    ];
    const gender_data = [
        { key: "male", value: "Male" },
        { key: "female", value: "Female" },
    ];

    const age_data = [
        { label: "18 years", value: "18 years" },
        { label: "19 years", value: "19 years" },
        { label: "20 years", value: "20 years" },
        { label: "21 years", value: "21 years" },
        { label: "22 years", value: "22 years" },
        { label: "23 years", value: "23 years" },
    ]

    const travelCountry_data = [{ title: 'China', year: 1994 }, { title: 'Australia', year: 1972 }, { title: 'U.S.A', year: 1974 }, { title: 'The Dark Knight', year: 2008 }, { title: '12 Angry Men', year: 1957 }, { title: "Schindler's List", year: 1993 }, { title: 'Pulp Fiction', year: 1994 },];

    const fieldsUpdateState = (attrName: any, value: any) => {
        isSubmitting = false;
        if(attrName[0] == 'mobile'){
            if(value.length > 10){
                return
            }
        }
        else if(attrName[0] == 'pincode'){
            if(value.length > 6){
                return
            }
        }
        return attrName[3]({ ...attrName[2], [attrName[0]]: { ...[attrName[0]], [attrName[1]]: value ,error : getError(attrName[0],value)}})};
    
        const handleSubmit = () =>{
        //Validation Check
        console.log("Submitting");
        isSubmitting = true;
        console.log(quoteFields)
        setQuoteFields({...quoteFields});
    }

    //Content Changing State
    const [ContentData,setContentData] = React.useState({
        1 : "Whom to Insure?",
        2 : "Select Children",
        3 : "Member's Details"
    });
    const changeMemberDetailsType = (type : String)=>{
        if(type == "One Adult"){
            setContentData({...ContentData,3 : "Member's Detail"});
        }
        else{
            setContentData({...ContentData,3 : "Eldest Member's Details"});
        }
        return undefined;
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
        <>
            <Modal
                open={open_status}
                aria-labelledby="Health Insurance Add New Policy"
                className="modalWrapper">
                <div className="modalInner">
                    <Box className="modalContent">
                        <Grid container alignItems="center">
                            <Grid xs={10}>
                                <h2 className="title_lg">
                                    Health<span> Insurance</span>
                                </h2>
                            </Grid>
                            <Grid xs={2} className="textRight">
                                <IconButton
                                    className="close-button"
                                    onClick={() => { value_update(attrName, false) }}></IconButton>
                            </Grid>

                        </Grid>
                        <Grid container spacing={3} justifyContent={'Center'}>
                            <Grid xs={12}>
                                <h4 className="sectionTitle mb-0">
                                    Whom to insure?
                                </h4>
                            </Grid>
                            <Grid xs={12} display={'flex'} justifyContent={'center'} className="mb-5">
                                <div className="switch-field mb-5">
                                    <input type="radio" id="healthSelf" name="healthAdult" value="One Adult" defaultChecked  onClick={() => changeMemberDetailsType("One Adult")}/>
                                    <label htmlFor="healthSelf">One Adult</label>
                                    <input type="radio" id="healthSpouse" name="healthAdult" value="Two Adults" onClick={() => changeMemberDetailsType("Two Adult")}/>
                                    <label htmlFor="healthSpouse">Two Adults</label>
                                </div>
                            </Grid>

                        </Grid>
                        <Grid container spacing={3} justifyContent={'Center'}>
                            <Grid xs={12}>
                                <h4 className="sectionTitle mb-0">
                                Select Children
                                </h4>
                            </Grid>
                            <Grid xs={12} display="flex" justifyContent={'center'} className="mb-5">
                                <span className="radioBox mr-2">
                                    <input type="radio" id="zeroChild" name="children" value="0" defaultChecked />
                                    <label htmlFor="zeroChild">0</label>
                                </span>
                                <span className="radioBox mr-2">
                                    <input type="radio" id="oneChild" name="children" value="1" />
                                    <label htmlFor="oneChild">1</label>
                                </span>
                                <span className="radioBox mr-2">
                                    <input type="radio" id="twoChild" name="children" value="2" />
                                    <label htmlFor="twoChild">2</label>
                                </span>
                                <span className="radioBox mr-2">
                                    <input type="radio" id="threeChild" name="children" value="3" />
                                    <label htmlFor="threeChild">3</label>
                                </span>
                                <span className="radioBox mr-2">
                                    <input type="radio" id="fourChild" name="children" value="4" />
                                    <label htmlFor="fourChild">4</label>
                                </span>
                            </Grid>

                        </Grid>


                        <Grid container spacing={3} justifyContent={'Center'}>
                            <Grid xs={12}>
                                <h4 className="sectionTitle mb-0">
                                {(ContentData!=undefined)?ContentData[3]:"Loading"}
                                </h4>
                            </Grid>
                            <Grid xs={4}>
                                <SearchDropdown
                                    class_name="inputField"
                                    title="Age"
                                    value={quoteFields.age.value}
                                    attrName={["age", "value", quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    data={age_data}
                                    warn_status={quoteFields.age.warning}
                                    error_message={''}
                                />
                                {quoteFields.age.error && isSubmitting?<div style={{margin: '3px 0px 0px 4px', color : 'red'}}>{quoteFields.age.error}</div>:null}
                            </Grid>
                            <Grid xs={4}>
                                <SelectDropdown
                                    class_name="inputField "
                                    title="Gender"
                                    value={quoteFields.gender.value}
                                    attrName={['gender', 'value', quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    dropdown_data={gender_data}
                                    warn_status={quoteFields.gender.warning}
                                />
                            </Grid>

                            <Grid xs={4}>
                                <RKTextField
                                    class_name="inputField"
                                    title={"Pin Code"}
                                    value={quoteFields.pincode.value}
                                    attrName={["pincode", "value", quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    warn_status={quoteFields.pincode.warning}
                                />
                                {quoteFields.pincode.error && isSubmitting?<div style={{margin: '3px 0px 0px 4px', color : 'red'}}>{quoteFields.pincode.error}</div>:null}
                            </Grid>
                            <Grid xs={4}>
                                <RKTextField
                                    class_name="inputField"
                                    title={"Mobile"}
                                    value={quoteFields.mobile.value}
                                    attrName={["mobile", "value", quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    warn_status={quoteFields.mobile.warning}
                                />
                                {quoteFields.mobile.error && isSubmitting?<div style={{margin: '3px 0px 0px 4px', color : 'red'}}>{quoteFields.mobile.error}</div>:null}
                            </Grid>
                            
                            <Grid xs={4}>
                                <RKTextField
                                    class_name="inputField"
                                    title={"Email"}
                                    value={quoteFields.email.value}
                                    attrName={["email", "value", quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    warn_status={quoteFields.email.warning}
                                />
                                {quoteFields.email.error && isSubmitting?<div style={{margin: '3px 0px 0px 4px', color : 'red'}}>{quoteFields.email.error}</div>:null}
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
                                <Button variant='contained' className="browsebtn uploadbtn" component="label" onClick={handleSubmit}>View Quotes </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Modal>
        </>
    );
};

export default HealthForm;
