import React from 'react';
import { connect } from 'react-redux';
import BillList from '../components/billsList';
import BillForm from '../components/billForm';
import BillsPageDescription from '../components/billsPageDesc';
import { startDispatchAddBill, startDispatchRemoveBill, startDispatchEditBill } from '../actions/bills';

class BillsPage extends React.Component {

    startBillEdit = (name, id) => {
        this.refs.billForm.editHandleOpen(name, id);
    };

    render() {
        if (this.props.bills === 'loading') {
            return <img src='/images/loader3.gif' className='pageLoader-fullPage' />
        }
        return (
            <div className='billsPage'>
                <BillsPageDescription />
                <BillForm
                    ref='billForm'
                    addBill={this.props.addBill}
                    editBill={this.props.editBill}
                />
                <BillList
                    bills={this.props.bills}
                    removeBill={this.props.removeBill}
                    editBill={this.startBillEdit}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(BillsPage);
