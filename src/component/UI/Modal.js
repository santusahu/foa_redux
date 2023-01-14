import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideCart}></div>;
};

const ModelOverlay = (props) => {

  return (
    <>
      <div className={classes.modal}>{props.children}</div>
    </>
  );
};

const ModelToTarget = document.getElementById("overlay");

const Modal = (props) => {

  // console.log(props);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop hideCart={props.hideCart} />,
        ModelToTarget
      )}

      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        ModelToTarget
      )}
    </React.Fragment>
  );
};

export default Modal;
