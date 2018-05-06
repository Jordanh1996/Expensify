import { SIGN_IN, SIGN_OUT } from '../actions/actionTypes';

export const INITIAL_STATE = {
    token: undefined,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SIGN_IN:
            return { ...state, token: action.token };

        case SIGN_OUT:
            return { ...INITIAL_STATE };

        default:
            return state;
    };
};
