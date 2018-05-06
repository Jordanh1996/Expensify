import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE, SET_EXPENSES, REMOVE_EXPENSES } from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return [
                action.expense,
                ...state
            ];

        case EDIT_EXPENSE:
            return state.map((expense) => {
                if (action.expense.id == expense.id) {
                    return action.expense
                }
                return expense
            });

        case REMOVE_EXPENSE:
            return state.filter((expense) => expense.id != action.id);

        case SET_EXPENSES:
            return action.expenses;

        case REMOVE_EXPENSES:
            return [];

        default:
            return state;
    };
};