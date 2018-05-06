import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route
            {...rest}
            component={(props) => (
                isAuthenticated ? (
                    <Redirect to='/dashboard' />
                ) : (
                        <div className="header__divide">
                            <div className="content-container__page">
                                <Component {...props} />
                            </div>
                        </div>
                    )
            )}
        />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.token
});

export default connect(mapStateToProps)(PublicRoute);
