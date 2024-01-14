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
import SolidButton from "../../../FieldTypes/SolidButton/SolidButton";

interface Props {
    attrName: any;
    open_status: boolean;
    value_update: Function;
}

const CarForm: React.FC<Props> = ({
    attrName,
    open_status,
    value_update,
}) => {
    // const [buttonText, setButtonText] = useState('Bought a New Car');

    function handleClick() {

        setShow(!show);
    }
    const [show, setShow] = useState(true);
    const [quoteFields, setQuoteFields] = useState<{
        regnoField: { value: string, warning: boolean };
        policyExpiry: { value: string, warning: boolean };
        fuelType: { value: string, warning: boolean };
        pincode: { value: string, warning: boolean };
        mobile: { value: string, warning: boolean };
        makeAndModel: { value: string, warning: boolean };
        variant: { value: string, warning: boolean };
        previousInsurer: { value: string, warning: boolean };
        claimed: { value: string, warning: boolean };
        regDate: { value: Date | null, warning: boolean };
        selectrto: { value: string, warning: boolean };
        email: { value: string, warning: boolean };
    }>({
        regnoField: { value: 'DL01A2345', warning: false },
        policyExpiry: { value: '', warning: false },
        fuelType: { value: '', warning: false },
        pincode: { value: '2', warning: false },
        mobile: { value: '9876543210', warning: false },
        makeAndModel: { value: '', warning: false },
        variant: { value: '', warning: false },
        previousInsurer: { value: '', warning: false },
        claimed: { value: '', warning: false },
        regDate: { value: null, warning: false },
        selectrto: { value: '', warning: false },
        email: { value: '', warning: false },
    })
    const fueltype_data = [
        { key: "Petrol", value: "Petrol" },
        { key: "Diesel", value: "Diesel" },
        { key: "Electric", value: "Electric" },
    ];
    const claimed_data = [
        { key: "yes", value: "Yes" },
        { key: "no", value: "No" },
    ];
    const policyExpiry_data = [
        { key: "not yet expired", value: "Not yet expired" },
        { key: "Less than 90 days", value: "Less than 90 days" },
        { key: "More than 90 days", value: "More than 90 days" },
    ];

    const makeModel_data = [
        { label: "Maruti Suzuki", value: "Maruti Suzuki" },
        { label: "Hyundai", value: "Hyundai" },
        { label: "Mahindra", value: "Mahindra" },
        { label: "Tata", value: "Tata" },
        { label: "Skoda", value: "Skoda" },
    ]
    const variant_data = [
        { label: "Alto 800 LXI", value: "Alto 800 LXI" },
        { label: "Alto 800 LXI", value: "Alto 800 LXI" },
        { label: "Alto 800 LXI", value: "Alto 800 LXI" },
        { label: "Alto 800 LXI", value: "Alto 800 LXI" },
    ]
    const previousInsurer_data = [
        { label: "Alto 800 LXI", value: "Alto 800 LXI" },
        { label: "Alto 800 LXI", value: "Alto 800 LXI" },
        { label: "Alto 800 LXI", value: "Alto 800 LXI" },
        { label: "Alto 800 LXI", value: "Alto 800 LXI" },
    ]

    const travelCountry_data = [{ title: 'China', year: 1994 }, { title: 'Australia', year: 1972 }, { title: 'U.S.A', year: 1974 }, { title: 'The Dark Knight', year: 2008 }, { title: '12 Angry Men', year: 1957 }, { title: "Schindler's List", year: 1993 }, { title: 'Pulp Fiction', year: 1994 },];

    const fieldsUpdateState = (attrName: any, value: any) => {
        attrName[3]({ ...attrName[2], [attrName[0]]: { ...[attrName[0]], [attrName[1]]: value } });
    }

    function updateMasterState(attrName: any, value: any) {
        if (attrName == "nextButton") {
            if (stepStatus < 2) {
                setStepStatus(stepStatus + 1);
            }
        } else {
            attrName(value);
        }
    }
    const [stepStatus, setStepStatus] = React.useState(1);
    function validate_data() {
        if (stepStatus < 2) {
            setStepStatus(stepStatus + 1);
        }
    }

    function go_back() {
        if (stepStatus > 1) {
            setStepStatus(stepStatus - 1);
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
                                    {stepStatus != 1 ? (
                                        <Link
                                            href="#"
                                            className="back"
                                            onClick={() => go_back()}></Link>
                                    ) : null}
                                    Car<span> Insurance</span>
                                </h2>
                            </Grid>
                            <Grid xs={2} className="textRight">
                                <IconButton
                                    className="close-button"
                                    onClick={() => { value_update(attrName, false) }}></IconButton>
                            </Grid>

                        </Grid>

                        {
                            show ?
                                <>
                                    {stepStatus == 1 ? (
                                        <Grid container spacing={3} justifyContent={'Center'} className="mb-6">
                                            <Grid xs={12}>
                                                <h4 className="sectionTitle">
                                                    Vehicle Number
                                                </h4>
                                            </Grid>
                                            <Grid xs={4}>
                                                <RKTextField
                                                    class_name="inputField regnoField"
                                                    title={""}
                                                    value={quoteFields.regnoField.value}
                                                    attrName={["regnoField", "value", quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    warn_status={quoteFields.regnoField.warning}
                                                />
                                            </Grid>
                                            <Grid xs={4}>
                                                <SelectDropdown
                                                    class_name="inputField "
                                                    title="Policy expiry"
                                                    value={quoteFields.policyExpiry.value}
                                                    attrName={['policyExpiry', 'value', quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    dropdown_data={policyExpiry_data}
                                                    warn_status={quoteFields.policyExpiry.warning}
                                                />
                                            </Grid>

                                        </Grid>
                                    ) : null}
                                    {stepStatus == 2 ? (
                                        <Grid container spacing={3} justifyContent={'Center'} className="mb-6">
                                            <Grid xs={12}>
                                                <h4 className="sectionTitle">
                                                    Car Details
                                                </h4>
                                            </Grid>
                                            <Grid xs={8}>
                                                <SearchDropdown
                                                    class_name="inputField "
                                                    title="Make and Model"
                                                    value={quoteFields.makeAndModel.value}
                                                    attrName={["makeAndModel", "value", quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    data={makeModel_data}
                                                    warn_status={quoteFields.makeAndModel.warning}
                                                    error_message={''}
                                                />
                                            </Grid>
                                            <Grid xs={4}>
                                                <SelectDropdown
                                                    class_name="inputField "
                                                    title="Fuel Type"
                                                    value={quoteFields.fuelType.value}
                                                    attrName={['fuelType', 'value', quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    dropdown_data={fueltype_data}
                                                    warn_status={quoteFields.fuelType.warning}
                                                />
                                            </Grid>
                                            <Grid xs={8}>
                                                <SearchDropdown
                                                    class_name="inputField "
                                                    title="Variant"
                                                    value={quoteFields.variant.value}
                                                    attrName={["variant", "value", quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    data={variant_data}
                                                    warn_status={quoteFields.variant.warning}
                                                    error_message={''}
                                                />
                                            </Grid>
                                            <Grid xs={4}>
                                                <DatePicker
                                                    class_name="inputField"
                                                    title={'Reg. Date'}
                                                    value={quoteFields.regDate.value}
                                                    attrName={['regDate', 'value', quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    error_message=""
                                                    warn_status={quoteFields.regDate.warning}
                                                />
                                            </Grid>
                                            <Grid xs={4} >
                                                <SearchDropdown
                                                    class_name="inputField "
                                                    title="Previous Insurer"
                                                    value={quoteFields.previousInsurer.value}
                                                    attrName={["previousInsurer", "value", quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    data={previousInsurer_data}
                                                    warn_status={quoteFields.previousInsurer.warning}
                                                    error_message={''}
                                                />

                                            </Grid>

                                            <Grid xs={4} className="ncb">
                                                <SelectDropdown
                                                    class_name="inputField "
                                                    title="Claimed"
                                                    value={quoteFields.claimed.value}
                                                    attrName={['claimed', 'value', quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    dropdown_data={claimed_data}
                                                    warn_status={quoteFields.claimed.warning}
                                                />
                                                {quoteFields.claimed.value === 'no' ? <div className="previousncb ">
                                                    <p>Select Previous NCB</p>
                                                    <span className="radioBox smlabel mr-2 mb-2">
                                                        <input type="radio" id="CARNCB1" name="carPreviousNCB" className="carNCB" value="0" />
                                                        <label htmlFor="CARNCB1">0%</label>
                                                    </span>
                                                    <span className="radioBox smlabel mr-2 mb-2">
                                                        <input type="radio" id="CARNCB2" name="carPreviousNCB" className="carNCB" value="20" />
                                                        <label htmlFor="CARNCB2">20%</label>
                                                    </span>
                                                    <span className="radioBox smlabel mr-2 mb-2">
                                                        <input type="radio" id="CARNCB3" name="carPreviousNCB" className="carNCB" value="25" />
                                                        <label htmlFor="CARNCB3">25%</label>
                                                    </span>
                                                    <span className="radioBox smlabel mr-2">
                                                        <input type="radio" id="CARNCB4" name="carPreviousNCB" className="carNCB" value="35" />
                                                        <label htmlFor="CARNCB4">35%</label>
                                                    </span>
                                                    <span className="radioBox smlabel mr-2">
                                                        <input type="radio" id="CARNCB5" name="carPreviousNCB" className="carNCB" value="45" />
                                                        <label htmlFor="CARNCB5">45%</label>
                                                    </span>
                                                    <span className="radioBox smlabel">
                                                        <input type="radio" id="CARNCB6" name="carPreviousNCB" className="carNCB" value="50" />
                                                        <label htmlFor="CARNCB6">50%</label>
                                                    </span>
                                                </div>  :null}
                                            </Grid>
                                            <Grid xs={4}>
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
                                    ) : null}
                                    <Grid container spacing={3}>
                                        <Grid xs={12} className="solidBtn text-center">
                                            <SolidButton
                                                attrName="nextButton"
                                                title="Next"
                                                class_name="regular"
                                                value_update={updateMasterState}
                                            />
                                        </Grid>
                                    </Grid>
                                </> :
                                <>
                                    {stepStatus == 1 ? (
                                        <Grid container spacing={3} justifyContent={'Center'} className="mb-6">
                                            <Grid xs={12}>
                                                <h4 className="sectionTitle">
                                                    New Vehicle
                                                </h4>
                                            </Grid>
                                            <Grid xs={6}>
                                                <SearchDropdown
                                                    class_name="inputField "
                                                    title="Select RTO"
                                                    value={quoteFields.selectrto.value}
                                                    attrName={["selectrto", "value", quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    data={makeModel_data}
                                                    warn_status={quoteFields.selectrto.warning}
                                                    error_message={''}
                                                />
                                            </Grid>

                                        </Grid>
                                    ) : null}
                                    {stepStatus == 2 ? (
                                        <Grid container spacing={3} justifyContent={'Center'} className="mb-6">
                                            <Grid xs={12}>
                                                <h4 className="sectionTitle">
                                                    Car Details
                                                </h4>
                                            </Grid>
                                            <Grid xs={8}>
                                                <SearchDropdown
                                                    class_name="inputField "
                                                    title="Make and Model"
                                                    value={quoteFields.makeAndModel.value}
                                                    attrName={["makeAndModel", "value", quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    data={makeModel_data}
                                                    warn_status={quoteFields.makeAndModel.warning}
                                                    error_message={''}
                                                />
                                            </Grid>
                                            <Grid xs={4}>
                                                <SelectDropdown
                                                    class_name="inputField "
                                                    title="Fuel Type"
                                                    value={quoteFields.fuelType.value}
                                                    attrName={['fuelType', 'value', quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    dropdown_data={fueltype_data}
                                                    warn_status={quoteFields.fuelType.warning}
                                                />
                                            </Grid>
                                            <Grid xs={4}>
                                                <SearchDropdown
                                                    class_name="inputField "
                                                    title="Variant"
                                                    value={quoteFields.variant.value}
                                                    attrName={["variant", "value", quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    data={variant_data}
                                                    warn_status={quoteFields.variant.warning}
                                                    error_message={''}
                                                />
                                            </Grid>
                                            <Grid xs={4}>
                                                <RKTextField
                                                    class_name="inputField"
                                                    title={"Mobile"}
                                                    value={quoteFields.mobile.value}
                                                    attrName={["number", "value", quoteFields, setQuoteFields]}
                                                    value_update={fieldsUpdateState}
                                                    warn_status={quoteFields.mobile.warning}
                                                />
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
                                            </Grid>
                                        </Grid>
                                    ) : null}
                                    <Grid container spacing={3}>
                                        <Grid xs={12} className="solidBtn text-center">
                                            <SolidButton
                                                attrName="nextButton"
                                                title="Next"
                                                class_name="regular"
                                                value_update={updateMasterState}
                                            />
                                        </Grid>
                                    </Grid>
                                </>
                        }



                        <Grid container spacing={3}>
                            <Grid xs={12} textAlign="center" className="mt-4">
                                <Link className="newlink" onClick={handleClick}>{show === true ? "Bought a New Car!" : "Old Car!"}</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Modal>
        </>
    );
};

export default CarForm;
