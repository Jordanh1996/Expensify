import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from './actionTypes';

export const addExpense = (expense) => ({
    type: ADD_EXPENSE,
    expense
});

export const editExpense = (expense) => ({
    type: EDIT_EXPENSE,
    expense
});

export const removeExpense = (id) => ({
    type: REMOVE_EXPENSE,
    id
});

