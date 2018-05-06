import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dispatchSignOut } from '../actions/user';
import { persistor } from '../app';

class Header extends React.Component {

    onSignOut = () => {
        persistor.purge().then(() => {
            this.props.signOut();
        });
    };


    render() {
        return (
            <div className='header'>
                <Link className='header-item' to='/dashboard'>
                    Home
                </Link>
                <Link className='header-item' to='/bills' >
                    Bills
                </Link>
                <div
                    onClick={this.onSignOut}
                    className='header-item'
                >
                    Sign out
                </div>
            </div >

        );
    };
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(dispatchSignOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
