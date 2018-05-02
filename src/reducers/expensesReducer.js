import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return [
                action.expense,
                ...state
            ];

        case EDIT_EXPENSE:
            state.map((expense) => {
                if (action.expense.id == expense.id) {
                    return action.expense
                }
                return expense
            });

        case REMOVE_EXPENSE:
            state.filter((expense) => expense.id == action.id);

        default:
            return state;
    };
};