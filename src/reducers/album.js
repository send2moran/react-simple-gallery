import {handleActions, combineActions } from 'redux-actions';
import {albumSuccess} from '../actions/album'

const defaultState = [];
export const albumReducer = handleActions(
    {
        [combineActions(albumSuccess)]: (state, { payload }) => {
            return [...state, ...payload];
        }
    },
    defaultState
);


