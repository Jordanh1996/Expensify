import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE, SET_EXPENSES, REMOVE_EXPENSES } from './actionTypes';
import { addExpense, updateExpense, removeExpense, getExpensesByBillId } from '../axios/expense';

export const dispatchAddExpense = (expense) => ({
    type: ADD_EXPENSE,
    expense
});

export const dispatchEditExpense = (expense) => ({
    type: EDIT_EXPENSE,
    expense
});

export const dispatchRemoveExpense = (id) => ({
    type: REMOVE_EXPENSE,
    id
});

export const dispatchSetExpenses = (expenses) => ({
    type: SET_EXPENSES,
    expenses
});

export const dispatchRemoveExpenses = () => ({
    type: REMOVE_EXPENSES
});

export const startDispatchAddExpense = (expense, billId) => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        return addExpense(token, expense.name, expense.currency, expense.amount, expense.time, billId).then((res) => {
            expense.id = res.data.id;
            dispatch(dispatchAddExpense(expense));
        });
    };
};

export const startDispatchEditExpense = (expense) => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        return updateExpense(token, expense.name, expense.currency, expense.amount, expense.time, expense.id).then(() => {
            dispatch(dispatchEditExpense(expense));
        });
    };
};

export const startDispatchRemoveExpense = (id) => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        return removeExpense(token, id).then(() => {
            dispatch(dispatchRemoveExpense(id));
        });
    };
};

export const startDispatchSetExpenses = (billId) => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        return getExpensesByBillId(token, billId).then((res) => {
            dispatch(dispatchSetExpenses(res.data.expenses.reverse()));
        });
    };
};
