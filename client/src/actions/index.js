import streams from "../apis/streams";
import history from "../history";

import {
	CHANGE_ME,
	ALSO_CHANGE,
} from "./types";

export const changeMe = userId => {
	return {
		type: CHANGE_ME,
		payload: userId
	};
};

export const alsoChange = () => {
	return {
		type: ALSO_CHANGE
	};
};
