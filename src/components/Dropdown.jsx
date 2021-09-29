import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = (props) => {
  const { onChange, value, items, menuVal, label } = props;
  return (
    <FormControl fullWidth>
      <InputLabel id="news-select">{label}</InputLabel>
      <Select
        id="news-select"
        value={value}
        label="category"
        onChange={(evt) => onChange(evt?.target?.value)}
      >
        {items?.map((c, idx) => (
          <MenuItem key={idx} value={c?.[menuVal]}>
            {c?.[menuVal]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
