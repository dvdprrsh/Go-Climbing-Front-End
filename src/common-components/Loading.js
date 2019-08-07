import React from "react";

const Loading = props => {
	return (
		<div className="ui active dimmer">
			<div className="ui text loader">{props.loadingText}</div>
		</div>
	);
};

Loading.defaultProps = {
	loadingText: "Please Wait...."
};

export default Loading
