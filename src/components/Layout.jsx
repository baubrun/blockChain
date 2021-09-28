import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Toaster from "../components/Toaster";
import Spinner from "./Spinner";
import { hideToaster } from "../redux/layoutSlice";
import { DrawerHeader } from "./Navbar/NavbarStyles";

const Layout = (props) => {
  const dispatch = useDispatch();
  const { isToasterShow, toasterMessage, toasterStatus, isLoading } =
    useSelector((s) => s.layout);
  const _hideToaster = () => {
    dispatch(hideToaster());
  };
  return (
    <>
      <DrawerHeader sx={{ marginTop: 2 }} />
      <div>{props.children}</div>
      <Toaster
        data-testid="spinner"
        show={isToasterShow}
        message={toasterMessage}
        status={toasterStatus}
        onClose={_hideToaster}
      />
      <Spinner isLoading={isLoading} />
    </>
  );
};

export default Layout;
