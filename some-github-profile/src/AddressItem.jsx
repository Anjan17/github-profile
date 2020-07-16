import React, { Fragment } from "react";

const AddressItem = ({ icon, text }) => {
  return (
    <Fragment>
      <div className="icon"></div>
      <div className="address-text">{text}</div>
    </Fragment>
  );
};

export default AddressItem;
