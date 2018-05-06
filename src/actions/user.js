import { SIGN_IN, SIGN_OUT } from './actionTypes';

export const dispatchSignIn = (token) => ({
    type: SIGN_IN,
    token
});

export const dispatchSignOut = () => ({
    type: SIGN_OUT
});
