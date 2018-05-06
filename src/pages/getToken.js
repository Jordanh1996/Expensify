import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { dispatchSignIn } from '../actions/user';
import { startDispatchSetBills } from '../actions/bills';

class GetToken extends React.Component {

    componentWillMount() {
        this.props.insertToken(this.props.match.params.token);
        this.props.setBills();
    };

    render() {
        return (
            <Redirect to='/dashboard' />
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    insertToken: (token) => dispatch(dispatchSignIn(token)),
    setBills: () => dispatch(startDispatchSetBills())
});

const mapStateToProps = (state) => ({
    token: state.user.token
});

export default connect(mapStateToProps, mapDispatchToProps)(GetToken);
