import React from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

interface Props {
  title: string;
  value: string | Date | null;
  attrName: any;
  value_update: Function;
  error_message: string;
  warn_status: boolean;
  class_name: string;
  disableFuture?: string | Date | null;
}

const DatePicker: React.FC<Props> = ({
  title,
  value,
  value_update,
  attrName,
  error_message,
  warn_status,
  class_name,
  disableFuture,
}) => {
  return (
    <div className={class_name}>
      <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label={title}
          value={value}
          onChange={(e) => {
            value_update(attrName, e);
          }}
          // renderInput={(params:any) => <TextField fullWidth {...params}  />}
          // inputFormat="dd/MM/yyyy"
          // disableFuture={true}
          // showToolbar={false}
        />
      </LocalizationProvider>
      {warn_status == true ? (
        <span className="error">{error_message}</span>
      ) : null}
    </div>
  );
};

export default DatePicker;
