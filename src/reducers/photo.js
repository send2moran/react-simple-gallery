import { handleActions } from "redux-actions";

const filterPhotos = (photos, albumId, limit, deleted = []) => {
    return [
        ...photos
            .filter(photo => photo.albumId === albumId)
            .sort((a, b) => b.id - a.id)
            .splice(0, limit)
            .filter(photo => !deleted.includes(photo.id))
    ];
};

const defaultState = {
    selectedAlbum: [],
    photos: []
};

export const photoReducer = handleActions(
    {
        "GET_PHOTOS_BY_ALBUM": {
            next: (state, action) => {
                const [payload, deletedPhotos] = action.payload;
                return {
                    ...state,
                    selectedAlbum: filterPhotos(state.photos, payload, 12, deletedPhotos)
                };
            }
        },
        "RESET_PHOTOS_BY_ALBUM": {
            next: (state) => {
                return {
                    ...state,
                    selectedAlbum: []
                };
            }
        },
        "GET_PHOTOS": {
            next: (state, action) => {
                return {
                    ...state,
                    photos: [...action.payload]
                };
            }
        }
    },
    defaultState
);


