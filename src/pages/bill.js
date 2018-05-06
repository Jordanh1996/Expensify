import React from 'react';
import { connect } from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';
import Total from '../components/total';
import ExpenseForm from '../components/expenseForm';
import ExpenseList from '../components/expenseList';
import {
    startDispatchAddExpense,
    startDispatchEditExpense,
    startDispatchSetExpenses,
    startDispatchRemoveExpense,
    dispatchRemoveExpenses
} from '../actions/expenses';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Bill extends React.Component {

    state = {
        loading: true,
        currency: 'ILS'
    };

    componentWillMount() {
        this.props.setExpenses(this.props.match.params.bill).then(() => {
            this.setState({ loading: false });
        });
    };

    componentWillUnmount() {
        this.props.removeExpenses();
    };

    getSum = (expenses, currencies, currency) => {
        let sum = 0;
        expenses.forEach((expense) => {
            sum += currencies[currency] / currencies[expense.currency] * expense.amount
        });
        return parseFloat(Math.round(sum * 100) / 100).toFixed(2);
    };

    onCurrencyChange = (e, index, currency) => {
        this.setState({ currency });
    };

    onStartEditExpense = (oldname, currency, amount, time, id) => {
        this.refs.expenseForm.editHandleOpen(oldname, currency, amount, time, id)
    };

    render() {
        if (this.state.loading) {
            return <img src='/images/loader3.gif' className='pageLoader-fullPage' />
        }
        return (
            <div className='bill'>
                <Total
                    currencies={this.props.currencies}
                    expenses={this.props.expenses}
                    getSum={this.getSum}
                    currency={this.state.currency}
                />
                <DropDownMenu
                    animated
                    value={this.state.currency}
                    onChange={this.onCurrencyChange}
                    className='total-dropDown'
                    labelStyle={{
                        paddingLeft: 0
                    }}
                    underlineStyle={{
                        marginLeft: 0
                    }}
                >
                    {
                        Object.keys(this.props.currencies).map((key) => {
                            return <MenuItem
                                key={key}
                                value={key}
                                primaryText={`${getSymbolFromCurrency(key)} ${key}`}
                            />
                        })
                    }
                </DropDownMenu>
                <ExpenseForm
                    ref='expenseForm'
                    currencies={this.props.currencies}
                    addExpense={this.props.addExpense}
                    editExpense={this.props.editExpense}
                    billId={this.props.match.params.bill}
                />
                <div className='expenses-tables'>
                    <ExpenseList
                        expense
                        onEdit={this.onStartEditExpense}
                        onRemove={this.props.removeExpense}
                        expenses={this.props.expenses.filter((expense) => expense.amount < 0)}
                        getSum={this.getSum}
                        currency={this.state.currency}
                        currencies={this.props.currencies}
                    />
                    <ExpenseList
                        expense={false}
                        onEdit={this.onStartEditExpense}
                        onRemove={this.props.removeExpense}
                        expenses={this.props.expenses.filter((expense) => expense.amount > 0)}
                        getSum={this.getSum}
                        currency={this.state.currency}
                        currencies={this.props.currencies}
                    />
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    currencies: state.currencies,
    expenses: state.expenses
});

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense, billId) => dispatch(startDispatchAddExpense(expense, billId)),
    editExpense: (expense) => dispatch(startDispatchEditExpense(expense)),
    setExpenses: (billId) => dispatch(startDispatchSetExpenses(billId)),
    removeExpense: (expenseId) => dispatch(startDispatchRemoveExpense(expenseId)),
    removeExpenses: () => dispatch(dispatchRemoveExpenses())
});

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
