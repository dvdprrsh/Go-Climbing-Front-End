import React from "react";

export const Loading = ({ loadingText }) => <div className="ui text loader">{loadingText}</div>;

Loading.defaultProps = {
  loadingText: "Please Wait...."
};
