import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/loginPage';
import Dashboard from '../pages/dashboard';
import GetToken from '../pages/getToken';
import BillsPage from '../pages/billsPage';
import Bill from '../pages/bill';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
// import StructuredRoute from './structuredRoute';

export const history = createHistory();


const Website = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path='/' component={LoginPage} exact />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/bills' component={BillsPage} />
            <PrivateRoute path='/bill/:bill' component={Bill} />
            <Route path='/token/:token' component={GetToken} />
        </Switch>
    </Router>
);

export default Website;
