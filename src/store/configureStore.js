import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expensesReducer';
import billsReducer from '../reducers/billsReducer';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(
        combineReducers({
            bills: billsReducer,
            expenses: expensesReducer
        }),
        composeEnchancers(applyMiddleware(thunk))
    );
    return store;
};
