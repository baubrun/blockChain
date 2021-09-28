import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import Toaster from "../components/Toaster";
import Spinner from "./Spinner";

const Layout = (props) => {
  const {
    isToasterShow,
    isLoading,
    toasterMessage,
    toasterStatus,
    hideToaster,
  } = props;
  return (
    <>
      <div>{props.children}</div>
      <Toaster
        data-testid="spinner"
        show={isToasterShow}
        message={toasterMessage}
        status={toasterStatus}
        onClose={hideToaster}
      />
      <Spinner isLoading={isLoading} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  hideToaster: () => dispatch(),
});

export default Layout;
