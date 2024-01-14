import React from "react";
import { Box, FormControl, InputLabel, MenuItem, NativeSelect, Select, Tooltip } from "@mui/material";
import "../FieldTypes.scss";

interface Props {
  title: string;
  value: string;
  attrName: any;
  value_update: Function;
  dropdown_data: Array<any>;
  warn_status?: boolean;
  class_name?: string;
  error_messg?: string;
}

const defaultProps: Props = {
  title: "",
  value: "",
  attrName: "",
  warn_status: false,
  value_update: () => {},
  dropdown_data: [],
  error_messg: "Please select",
};

const NativeSelectDropdown: React.FC<Props> = ({
  title,
  value,
  value_update,
  attrName,
  dropdown_data,
  warn_status,
  class_name,
  error_messg,
}) => {
  return (
     <div className={class_name}>
      <FormControl fullWidth>
        <InputLabel>{title}</InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
            {dropdown_data.map((data) => (
            <option value={data.key}>{data.value}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

NativeSelectDropdown.defaultProps = defaultProps;

export default NativeSelectDropdown;
