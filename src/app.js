import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Website from './routers/appRouter';
import configureStore from './store/configureStore';
import './config/config';

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <Website />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
