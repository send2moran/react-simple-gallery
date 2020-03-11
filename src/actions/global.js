import { createActions } from 'redux-actions';
export const { selectAlbum, deletePhoto, selectPhoto } = createActions({
  SELECT_ALBUM: payload => (payload),
  DELETE_PHOTO: payload => (payload),
  SELECT_PHOTO: payload => (payload)
});