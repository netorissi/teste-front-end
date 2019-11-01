import * as actionType from '../actions/actionTypes';

const initialState = {
	videos: [],
};

export default (state = initialState, action) => {

	switch (action.type) {

		case actionType.SET_VIDEOS:
			return { ...state,
				videos: action.payload.videos
			}

		default:
			return state;
	}
}
