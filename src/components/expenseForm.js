import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';


class ExpenseForm extends React.Component {

    state = {
        open: false,
        name: '',
        currency: 'ILS',
        amount: '',
        time: new Date(),
        isExpense: true,
        edit: false
    };

    handleOpen = (isExpense) => {
        this.setState({
            open: true,
            name: '',
            amount: '',
            time: new Date(),
            edit: false,
            isExpense
        });
    };

    editHandleOpen = (oldName, currency, amount, time, id) => {
        this.setState({
            edit: id,
            name: oldName,
            currency,
            amount: Math.abs(amount),
            time: new Date(time),
            isExpense: amount < 0 ? true : false,
            open: true
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onCurrencyChange = (e, index, currency) => {
        this.setState({ currency });
    };

    onToggle = (e, value) => {
        this.setState({ isExpense: value });
    };

    onTimeChange = (e, time) => {
        this.setState({ time });
    };

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount })
        }
    };

    onSubmit = () => {
        const expense = {
            name: this.state.name,
            currency: this.state.currency,
            amount: this.state.isExpense ? -(Number(this.state.amount)) : Number(this.state.amount),
            time: this.state.time
        };
        (
            this.state.edit ?
                this.props.editExpense({
                    ...expense,
                    id: this.state.edit
                }) :
                this.props.addExpense(expense, this.props.billId)
        )
            .then(() => {
                this.handleClose();
            });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary
                onClick={this.onSubmit}
                disabled={this.state.amount < 1 || this.state.name < 1}
            />,
        ];

        return (
            <div>
                <div className='expenseForm-buttons'>
                    <RaisedButton
                        label="Add Expense"
                        onClick={this.handleOpen.bind(this, true)}
                        className='billForm-but'
                    />
                    <RaisedButton
                        label="Add Income"
                        onClick={this.handleOpen.bind(this, false)}
                        className='billForm-but'
                    />
                </div>
                <Dialog
                    title={
                        this.state.edit ?
                            `Edit ${this.state.isExpense ? 'Expense' : 'Income'}` :
                            `Add ${this.state.isExpense ? 'Expense' : 'Income'}`
                    }
                    titleStyle={{
                        fontSize: '2.4rem',
                        fontWeight: 600
                    }}
                    titleClassName={this.state.isExpense ? 'expenseForm-expense' : 'expenseForm-income'}
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    className='expenseForm'
                >
                    <div>
                        <TextField
                            hintText={`Enter ${this.state.isExpense ? 'expense' : 'income'} name`}
                            floatingLabelText={`${this.state.isExpense ? 'Expense' : 'Income'} name`}
                            value={this.state.name}
                            onChange={this.onNameChange}
                        />
                        <div>
                            <RadioButtonGroup
                                valueSelected={this.state.isExpense}
                                name='isExpense'
                                onChange={this.onToggle}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginTop: '2rem'
                                }}
                            >
                                <RadioButton
                                    value={true}
                                    label='Expense'
                                    style={{
                                        width: '10rem',
                                        marginLeft: '8.25rem'
                                    }}
                                />
                                <RadioButton
                                    value={false}
                                    label='Income'
                                    style={{
                                        width: '10rem'
                                    }}
                                />
                            </RadioButtonGroup>
                        </div>
                        <div>
                            <TextField
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                                floatingLabelText={'Amount'}
                                className='expenseform-textfield'
                                style={{
                                    width: '8rem'
                                }}
                            />
                            <DropDownMenu
                                animated
                                value={this.state.currency}
                                onChange={this.onCurrencyChange}
                                className='expenseForm-currency'
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
                        </div>
                        <DatePicker
                            hintText="Date"
                            mode="landscape"
                            onChange={this.onTimeChange}
                            value={this.state.time}
                            style={{
                                marginTop: '1rem'
                            }}
                        />
                    </div>
                </Dialog>
            </div >
        );
    };
};

export default ExpenseForm;
