import axios from 'axios';
import * as actionType from './actionTypes';
import * as acToaster from './toaster';
import { SEARCH_URL, KEY_URL } from '../routes/names';

const setVideos = (videos, pageToken) => ({
    type: actionType.SET_VIDEOS,
	payload: { videos, pageToken }
});

export const getVideos = (textFilter = '') => async (dispatch, getState) => {

    const stateCurrent = getState();
    const videos = stateCurrent.rdVideos.videos;
    const pageToken = stateCurrent.rdVideos.pageToken;
    
    let URL_FULL = SEARCH_URL + textFilter + KEY_URL;
    if (pageToken) 
        URL_FULL = `${SEARCH_URL}${textFilter}&pageToken=${pageToken}${KEY_URL}`;

    await axios.get(URL_FULL)
    .then(async resp => {
        const data = resp.data || [];
        const nextPageToken = data.nextPageToken;
        
        let newVideos = [];
        if (!textFilter)
            newVideos = videos || [];
            
        if (data.items.length > 0)
            newVideos = newVideos.concat(data.items);

        let delay = 0;
        if (videos.length === 0)
            delay = 500;

        setTimeout(async () => await dispatch(setVideos(newVideos, nextPageToken)), delay);
    })
    .catch(error => {
        console.log("DEU RUIM", error);
        acToaster.ACTIVE_TOASTER(
            'error',
            'Ocorreu um erro inesperado! Tente novamente.'
        )
    })
}