import React from 'react';
import { connect } from 'react-redux';
import BillForm from '../components/billForm';
import Introduction from '../components/introduction';
import DescriptiveCards from '../components/descriptiveCards';
import GetStarted from '../components/getStarted';
import BillsList from '../components/billsList';
import { startDispatchAddBill, startDispatchEditBill, startDispatchRemoveBill } from '../actions/bills';


class Dashboard extends React.Component {

    startBillEdit = (name, id) => {
        this.refs.billForm.editHandleOpen(name, id);
    };

    render() {
        return (
            <div>
                <Introduction />
                <DescriptiveCards />
                {
                    this.props.bills === 'loading' ?
                        <img
                            src='/images/loader3.gif'
                            className='loader'
                        /> :
                        this.props.bills.length < 1 ?
                            <GetStarted
                                addBill={this.props.addBill}
                            /> :
                            <div className='billsPage'>
                                <BillForm
                                    ref='billForm'
                                    addBill={this.props.addBill}
                                    editBill={this.props.editBill}
                                />
                                <BillsList
                                    bills={this.props.bills}
                                    removeBill={this.props.removeBill}
                                    editBill={this.startBillEdit}
                                />
                            </div>
                }
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    bills: state.bills
});

const mapDispatchToProps = (dispatch) => ({
    addBill: (name) => dispatch(startDispatchAddBill(name)),
    editBill: (name, id) => dispatch(startDispatchEditBill(name, id)),
    removeBill: (id) => dispatch(startDispatchRemoveBill(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
