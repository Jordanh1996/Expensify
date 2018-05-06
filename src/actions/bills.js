import { ADD_BILL, EDIT_BILL, REMOVE_BILL, SET_BILLS, REMOVE_BILLS, PENDING_BILLS } from './actionTypes';
import { getBills, addBill, updateBill, removeBill } from '../axios/bill';

export const dispatchAddBill = (bill) => ({
    type: ADD_BILL,
    bill
});

export const dispatchEditBill = (bill) => ({
    type: EDIT_BILL,
    bill
});

export const dispatchRemoveBill = (id) => ({
    type: REMOVE_BILL,
    id
});

export const dispatchSetBills = (bills) => ({
    type: SET_BILLS,
    bills
});

export const dispatchPendingBills = () => ({
    type: PENDING_BILLS,
    bills: 'loading'
});

export const dispatchRemoveBills = () => ({
    type: REMOVE_BILLS
});

export const startDispatchAddBill = (name) => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        return addBill(token, name).then((res) => {
            const bill = {
                name,
                id: res.data.id
            };
            dispatch(dispatchAddBill(bill));
        });
    };
};

export const startDispatchEditBill = (name, id) => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        return updateBill(token, name, id).then(() => {
            dispatch(dispatchEditBill({ name, id }));
        });
    };
};

export const startDispatchRemoveBill = (id) => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        return removeBill(token, id).then(() => {
            dispatch(dispatchRemoveBill(id));
        });
    };
};

export const startDispatchSetBills = () => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        dispatch(dispatchPendingBills());
        return getBills(token).then((res) => {
            dispatch(dispatchSetBills(res.data.bills.reverse()));
        });
    };
};
