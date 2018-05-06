import axios from 'axios';

export const getBills = (token) => {
    return axios({
        method: 'GET',
        url: `${process.env.URL}/bill/userid`,
        withCredentials: true,
        headers: {
            'x-auth': token
        }
    });
};

export const addBill = (token, name) => {
    return axios({
        method: 'POST',
        url: `${process.env.URL}/bill`,
        withCredentials: true,
        data: {
            name
        },
        headers: {
            'x-auth': token
        }
    });
};

export const updateBill = (token, name, billId) => {
    return axios({
        method: 'PATCH',
        url: `${process.env.URL}/bill/${billId}`,
        data: {
            name
        },
        withCredentials: true,
        headers: {
            'x-auth': token
        }
    });
};

export const removeBill = (token, billId) => {
    return axios({
        method: 'DELETE',
        url: `${process.env.URL}/bill/${billId}`,
        withCredentials: true,
        headers: {
            'x-auth': token
        }
    });
};
