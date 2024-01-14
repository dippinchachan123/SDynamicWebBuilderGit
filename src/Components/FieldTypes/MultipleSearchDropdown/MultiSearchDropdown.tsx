import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface Props {
    attrName: any;
    title: string;
    value: any;
    value_update: Function;
    multiple_data: Array<any>;
  //   error_message: string;
  //   warn_status?: boolean;
    class_name?: string;
  }
  
  const defaultProps: Props = {
    title: "",
    value: "",
    attrName: "",
  //   warn_status: false,
    value_update: () => {},
    multiple_data: [],
  //   error_message: "Please select",
  };
  
  const MultipleSearchDropdown: React.FC<Props> = ({
    attrName,
    title,
    value,
    multiple_data,
    class_name,
  //   error_message,
  //   warn_status,
    value_update,
  }) => {
    return (
      <div className={class_name}>
        <Autocomplete
          multiple
          options={multiple_data}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
        //   value={value}
          renderOption={(props, option, { selected }) => (<li {...props}>{option.title}</li>)}
          renderInput={(params) => <TextField {...params}  label={title} />  }
        />     
      </div>
    );
  };
  
  MultipleSearchDropdown.defaultProps = defaultProps;
  export default MultipleSearchDropdown;