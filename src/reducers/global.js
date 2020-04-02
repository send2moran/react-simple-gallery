import {handleActions } from "redux-actions";

const defaultState = {
    deletedPhotos: [],
    selectectedAlbumId: NaN,
    selectedPhoto: null
};

export const globalReducer = handleActions(
    {
        "SELECT_ALBUM": {
            next: (state, action) => {
                return {
                    ...state,
                    selectectedAlbumId: action.payload === state.selectectedAlbumId ? -1 : action.payload
                };
            }
        },
        "SELECT_PHOTO": {
            next: (state, action) => {
                return {
                    ...state,
                    selectedPhoto: action.payload === state.selectedPhoto ? null : action.payload
                };
            }
        },
        "DELETE_PHOTO": {
            next: (state, action) => {
                return {
                    ...state,
                    deletedPhotos: [...state.deletedPhotos, action.payload]
                };
            }
        }
    },
    defaultState
);


