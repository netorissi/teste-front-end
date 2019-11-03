import * as actionType from '../actions/actionTypes';

const initialState = {
	videos: [],
	pageToken: null
};

export default (state = initialState, action) => {

	switch (action.type) {

		case actionType.SET_VIDEOS:
			return { ...state,
				videos: action.payload.videos,
				pageToken: action.payload.pageToken
			}

		default:
			return state;
	}
}
