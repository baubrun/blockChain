import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Toaster = (props) => {
  const { show, onClose, status, message } = props;
  return (
    <Snackbar open={show} autoHideDuration={5000} onClose={onClose}>
      <Alert elevation={6} variant="filled" onClose={onClose} severity={status}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;
