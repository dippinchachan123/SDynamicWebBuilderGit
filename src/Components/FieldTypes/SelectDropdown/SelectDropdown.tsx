import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
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

const SelectDropdown: React.FC<Props> = ({
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
        <Select
          value={value}
          label={title}
          onChange={(e) => value_update(attrName, e.target.value)}>
          {dropdown_data.map((data) => (
            <MenuItem value={data.key}>{data.value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {warn_status == true ? (
        <span className="error">{error_messg}</span>
      ) : null}
    </div>
  );
};

SelectDropdown.defaultProps = defaultProps;

export default SelectDropdown;
