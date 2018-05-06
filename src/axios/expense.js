import axios from 'axios';

export const getExpensesByBillId = (token, billId) => {
    return axios({
        method: 'GET',
        url: `${process.env.URL}/expense/userid/${billId}`,
        withCredentials: true,
        headers: {
            'x-auth': token
        }
    });
};

export const addExpense = (token, name, currency, amount, time, billId) => {
    return axios({
        method: 'POST',
        url: `${process.env.URL}/expense/add/${billId}`,
        data: {
            name,
            currency,
            amount,
            time
        },
        withCredentials: true,
        headers: {
            'x-auth': token
        }
    });
};

export const updateExpense = (token, name, currency, amount, time, expenseId) => {
    return axios({
        method: 'PATCH',
        url: `${process.env.URL}/expense/update/${expenseId}`,
        data: {
            name,
            currency,
            amount,
            time
        },
        withCredentials: true,
        headers: {
            'x-auth': token
        }
    });
};

export const removeExpense = (token, expenseId) => {
    return axios({
        method: 'DELETE',
        url: `${process.env.URL}/expense/${expenseId}`,
        withCredentials: true,
        headers: {
            'x-auth': token
        }
    });
};

