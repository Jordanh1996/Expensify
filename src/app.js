import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Website from './routers/appRouter';
import configureStore from './store/configureStore';
import './config/config';

// const store = configureStore();

// export const persistor = persistStore(store);

const jsx = (
    // <Provider store={store}>
    //     <PersistGate loading={<LoadingPage />} persistor={persistor}>
    //         <MuiThemeProvider>
    <Website />
    //         </MuiThemeProvider>
    //     </PersistGate>
    // </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
