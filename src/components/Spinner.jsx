import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = ({ isLoading }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isLoading);
  }, [isLoading]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Backdrop
      data-testid="spinner"
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="secondary" size={100} />
    </Backdrop>
  );
};

export default Spinner;
