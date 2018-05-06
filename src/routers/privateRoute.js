import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/header';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route
            {...rest}
            component={(props) => (
                <div className="containers__column">
                    <Header />
                    <div className='container__overflow'>
                        {
                            isAuthenticated ?
                                <Component {...props} /> :
                                <Redirect to='/' />
                        }
                    </div>
                </div>
            )}
        />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.token
});

export default connect(mapStateToProps)(PrivateRoute);
