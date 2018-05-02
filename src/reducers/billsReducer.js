import { ADD_BILL, EDIT_BILL, REMOVE_BILL } from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_BILL:
            return [
                action.bill,
                ...state
            ]

        case EDIT_BILL:
            return state.map((bill) => {
                if (bill.id == action.bill.id) {
                    return action.bill;
                }
                return bill;
            });

        case REMOVE_BILL:
            state.filter((bill) => bill.id == action.id);

        default:
            return state;
    };
};
