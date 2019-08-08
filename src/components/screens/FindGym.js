import React from "react";
import MapView from "../../common-components/MapView";
import { locations } from "../../apis/gymLocations";
import { GYMS, DETAIL } from "../../types";

const renderList = () => {
	return locations.map(location => {
		const detail = location[DETAIL];
		return (
			<div className="item" key={location[DETAIL]}>
				<i className="map marker icon" />
				<div
					className="content"
					dangerouslySetInnerHTML={{ __html: detail }}
				/>
			</div>
		);
	});
};

const FindGym = () => (
	<div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
		<div>
			<MapView toFind={GYMS} />
		</div>
		<div
			className="ui divided list pushable"
			style={{
				alignSelf: "flex-end",
				height: "92vh",
				width: "19.5%"
			}}
		>
			<h4>Locations</h4>
			{renderList()}
		</div>
	</div>
);

export default FindGym;
