import axios from 'axios';

export const getCurrencies = () => {
    return axios({
        method: 'GET',
        url: `${process.env.URL}/currency`
    });
};
