import React, { Fragment } from "react";
import Spinner from "./spinner.gif";

export const spinner = () => {
  return (
    <Fragment>
      <img
        src={Spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default spinner;
