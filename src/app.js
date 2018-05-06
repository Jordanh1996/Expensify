import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Website from './routers/appRouter';
import configureStore from './store/configureStore';
import './config/config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { startDispatchSetBills } from './actions/bills';
import { startDispatchSetCurrencies } from './actions/currency';

const store = configureStore();

store.dispatch(startDispatchSetCurrencies());

export const persistor = persistStore(store, null, () => {
    store.dispatch(startDispatchSetBills());
});

const jsx = (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Website />
            </MuiThemeProvider>
        </PersistGate>
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
