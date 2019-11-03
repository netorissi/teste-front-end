import { combineReducers } from 'redux';
import rdToaster from '../reducers/toaster';
import rdVideos from '../reducers/videos';

export default combineReducers({
	rdToaster,
	rdVideos
});
