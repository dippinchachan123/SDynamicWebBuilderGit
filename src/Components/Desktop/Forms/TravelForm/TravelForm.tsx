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

interface Props {
    attrName: any;
    open_status: boolean;
    value_update: Function;
}

const TravelForm: React.FC<Props> = ({
    attrName,
    open_status,
    value_update,
}) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    const [quoteFields, setQuoteFields] = useState<{
        planType: { value: string, warning: boolean };
        frequency: { value: string, warning: boolean };
        gender: { value: string, warning: boolean };
        travellers: { value: string, warning: boolean };
        mobile: { value: string, warning: boolean };
        invest: { value: string, warning: boolean };
        age: { value: string, warning: boolean };
        travelCountry: { value: string, warning: boolean };
        startDate: { value: Date | null, warning: boolean };
        endDate: { value: Date | null, warning: boolean };
    }>({
        planType: { value: '', warning: false },
        frequency: { value: '', warning: false },
        gender: { value: 'male', warning: false },
        travellers: { value: '2', warning: false },
        mobile: { value: '9876543210', warning: false },
        invest: { value: '', warning: false },
        age: { value: '', warning: false },
        travelCountry: { value: '', warning: false },
        startDate: { value: null, warning: false },
        endDate: { value: null, warning: false },
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
        { label: "1 Lakh", value: "1 Lakh" },
        { label: "2 Lakhs", value: "2 Lakhs" },
        { label: "5 Lakhs", value: "5 Lakhs" },
        { label: "10 Lakhs", value: "10 Lakhs" },
        { label: "20 Lakhs", value: "20 Lakhs" },
        { label: "50 Lakhs", value: "50 Lakhs" },
    ]

    const travelCountry_data = [{ title: 'China', year: 1994 }, { title: 'Australia', year: 1972 }, { title: 'U.S.A', year: 1974 }, { title: 'The Dark Knight', year: 2008 }, { title: '12 Angry Men', year: 1957 }, { title: "Schindler's List", year: 1993 }, { title: 'Pulp Fiction', year: 1994 },];

    const fieldsUpdateState = (attrName: any, value: any) => {
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
                                    Travel<span> Insurance</span>
                                </h2>
                            </Grid>
                            <Grid xs={2} className="textRight">
                                <IconButton
                                    className="close-button"
                                    onClick={() => { value_update(attrName, false) }}></IconButton>
                            </Grid>
                            <Grid xs={12}>
                                <h4 className="sectionTitle">
                                    Details
                                </h4>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid xs={8}>
                                <MultipleSearchDropdown
                                    class_name="inputField"
                                    title={"Where do you want to Travel"}
                                    value={quoteFields.travelCountry.value}
                                    attrName={["travelCountry", "value", quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    multiple_data={travelCountry_data}
                                // warn_status={proposerFields.gender.warning}
                                />
                            </Grid>
                            <Grid xs={4}>
                                <SelectDropdown
                                    class_name="inputField "
                                    title="Plan Type"
                                    value={quoteFields.planType.value}
                                    attrName={['planType', 'value', quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    dropdown_data={planType_data}
                                    warn_status={quoteFields.planType.warning}
                                />
                            </Grid>
                            <Grid xs={4}>
                                <SelectDropdown
                                    class_name="inputField "
                                    title="Frequency"
                                    value={quoteFields.frequency.value}
                                    attrName={['frequency', 'value', quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    dropdown_data={frequency_data}
                                    warn_status={quoteFields.frequency.warning}
                                />
                            </Grid>
                            <Grid xs={4}>
                                <DatePicker
                                    class_name="inputField"
                                    title={'Start Date'}
                                    value={quoteFields.startDate.value}
                                    attrName={['startDate', 'value', quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    error_message=""
                                    warn_status={quoteFields.startDate.warning}
                                />
                            </Grid>
                            <Grid xs={4}>
                                <DatePicker
                                    class_name="inputField"
                                    title={'End Date'}
                                    value={quoteFields.endDate.value}
                                    attrName={['endDate', 'value', quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    error_message=""
                                    warn_status={quoteFields.endDate.warning}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <RKTextField
                                    class_name="inputField"
                                    title={"Travellers"}
                                    value={quoteFields.travellers.value}
                                    attrName={["travellers", "value", quoteFields, setQuoteFields]}
                                    value_update={fieldsUpdateState}
                                    warn_status={quoteFields.travellers.warning}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <RKTextField
                                    class_name="inputField"
                                    title={"Mobile"}
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
        </>
    );
};

export default TravelForm;
