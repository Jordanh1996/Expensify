import { ADD_BILL, EDIT_BILL, REMOVE_BILL, SET_BILLS, REMOVE_BILLS, PENDING_BILLS } from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_BILL:
            return [
                action.bill,
                ...state
            ];

        case EDIT_BILL:
            return state.map((bill) => {
                if (bill.id == action.bill.id) {
                    return action.bill;
                }
                return bill;
            });

        case REMOVE_BILL:
            return state.filter((bill) => bill.id !== action.id);

        case SET_BILLS:
            return action.bills;

        case PENDING_BILLS:
            return action.bills;

        case REMOVE_BILLS:
            return [];

        default:
            return state;
    };
};
