import { SET_CURRENCIES } from '../actions/actionTypes';

export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_CURRENCIES:
            return action.currencies;

        default:
            return state;
    };
};
