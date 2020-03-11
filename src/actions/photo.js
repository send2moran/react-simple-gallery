import {getPhotos} from '../services/api'
import {createAction} from 'redux-actions';

export const photosSuccess = createAction('GET_PHOTOS', payload => (payload));
export const photosByAlbum = createAction('GET_PHOTOS_BY_ALBUM', (payload) => (payload));
export const getPhotosFromApi = () => async dispatch => {
    const response = await getPhotos();
    dispatch(photosSuccess(response))
}





