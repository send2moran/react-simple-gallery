/* eslint-disable no-console */
import {getAlbums} from "../services/api";
import {createAction} from "redux-actions";

export const albumSuccess = createAction("GET_ALBUMS", payload => payload);
export const getAlbumsFromApi = () => async dispatch => {
    try {
        const response = await getAlbums();
        dispatch(albumSuccess(response.splice(0, 25)));
    } catch (e) {
        console.log(e);
    }
};





