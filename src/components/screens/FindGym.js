import React from "react";
import MapView from "../../common-components/MapView";

import { GYMS } from "../../types";

const FindGym = () => {
	return (
		<div className="ui grid" style={{height:'100%'}}>
			<div className="twelve wide column">
				<MapView toFind={GYMS} />
			</div>

			<div className="four wide column" />
		</div>
	);
};

export default FindGym;
