import { Autocomplete, TextField } from "@mui/material";
import React from "react";

interface Props {
  attrName: any;
  title: string;
  value: string;
  value_update: Function;
  data: Array<any>;
  error_message: string;
  warn_status: boolean;
  class_name: string;
}

const SearchDropdown: React.FC<Props> = ({
  attrName,
  title,
  value,
  data,
  class_name,
  error_message,
  warn_status,
  value_update,
}) => {
  return (
    <div className={class_name}>
      <Autocomplete
        disablePortal
        options={data}
        renderInput={(params) => <TextField {...params} label={title} />}
        value={value}
        onChange={(event, new_team) => {
          value_update(attrName, new_team.value);
        }}
      />
      {warn_status == true ? (
        <span className="error">{error_message}</span>
      ) : null}
    </div>
  );
};

export default SearchDropdown;
