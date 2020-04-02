import { combineReducers } from "redux";
import {albumReducer} from "../reducers/album";
import {photoReducer} from "../reducers/photo";
import {globalReducer} from "../reducers/global";

export const rootReducer = combineReducers({
    albums: albumReducer,
    photos: photoReducer,
    app: globalReducer
});

export {};
