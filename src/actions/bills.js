import { ADD_BILL, EDIT_BILL, REMOVE_BILL } from './actionTypes';

export const addBill = (bill) => ({
    type: ADD_BILL,
    bill
});

export const editBill = (bill) => ({
    type: EDIT_BILL,
    bill
});

export const removeBill = (id) => ({
    type: REMOVE_BILL,
    id
});
