import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import expensesReducer from '../reducers/expensesReducer';
import billsReducer from '../reducers/billsReducer';
import userReducer from '../reducers/userReducer';
import currencyReducer from '../reducers/currencyReducer';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const userPersistConfig = {
    key: 'user',
    storage: localStorage
};

export default () => {
    const store = createStore(
        combineReducers({
            bills: billsReducer,
            expenses: expensesReducer,
            currencies: currencyReducer,
            user: persistReducer(userPersistConfig, userReducer)
        }),
        composeEnchancers(applyMiddleware(thunk))
    );
    return store;
};
