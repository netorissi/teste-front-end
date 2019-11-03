import { KEY_YOUTUBE } from '../helpers/constants';

export const BASE_ENDPOINT = 'https://www.googleapis.com/youtube/v3';
export const SEARCH_URL = BASE_ENDPOINT + '/search?part=id,snippet&maxResults=15&q=';
export const DETAIL_URL = BASE_ENDPOINT + '/videos?id=';
export const STATISTICS_URL = '&part=snippet,statistics';
export const KEY_URL = '&key=' + KEY_YOUTUBE;

export const HOME = '/';
export const VIDEO_DETAIL = '/detail';