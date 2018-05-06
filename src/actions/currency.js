import { SET_CURRENCIES } from './actionTypes';
import { getCurrencies } from '../axios/currency';

export const dispatchSetCurrencies = (currencies) => ({
    type: SET_CURRENCIES,
    currencies
});

export const startDispatchSetCurrencies = () => {
    return (dispatch) => {
        getCurrencies().then((res) => {
            dispatch(dispatchSetCurrencies(res.data.currencies));
        });
    };
};
