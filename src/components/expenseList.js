import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import getSymbolFromCurrency from 'currency-symbol-map';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import RemoveButton from './buttons/removeButton';
import EditButton from './buttons/editButton';

class ExpenseList extends React.Component {

    render() {
        return (
            <div className='expenseList'>
                <Table
                    fixedHeader
                    fixedFooter
                    selectable={false}
                >
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn
                                colSpan="5"
                                style={{ textAlign: 'center' }}
                                className={this.props.expense ? 'table-header-expense' : 'table-header-income'}
                            >
                                {
                                    this.props.expense ? 'Expenses' : 'Incomes'
                                }
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn
                                className={this.props.expense ? 'table-header-column' : 'table-header-column-income'}
                            >
                                Name
                            </TableHeaderColumn>
                            <TableHeaderColumn
                                className={this.props.expense ? 'table-header-column' : 'table-header-column-income'}
                            >
                                Currency
                            </TableHeaderColumn>
                            <TableHeaderColumn
                                className={this.props.expense ? 'table-header-column' : 'table-header-column-income'}
                            >
                                Amount
                            </TableHeaderColumn>
                            <TableHeaderColumn
                                className={this.props.expense ? 'table-header-column' : 'table-header-column-income'}
                            >
                                Date
                            </TableHeaderColumn>
                            <TableHeaderColumn
                                className={this.props.expense ? 'table-header-column' : 'table-header-column-income'}
                            >
                                Actions
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                    >
                        {this.props.expenses ? this.props.expenses.map((expense, index) => (
                            <TableRow
                                key={index}
                                className='billsList-row'
                            >
                                <TableRowColumn className='table-row-column' style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>
                                    {expense.name}
                                </TableRowColumn>
                                <TableRowColumn className='table-row-column'>
                                    {`${getSymbolFromCurrency(expense.currency)} ${expense.currency}`}
                                </TableRowColumn>
                                <TableRowColumn className='table-row-column'>
                                    {numeral(Math.abs(expense.amount)).format('0,0.00')}
                                </TableRowColumn>
                                <TableRowColumn className='table-row-column'>
                                    {moment(expense.time).format('YYYY/MM/DD')}
                                </TableRowColumn>
                                <TableRowColumn className='table-actions'>
                                    <EditButton
                                        className='billsList-button'
                                        onClick={
                                            this.props.onEdit.bind(
                                                this,
                                                expense.name,
                                                expense.currency,
                                                expense.amount,
                                                expense.time,
                                                expense.id
                                            )
                                        }
                                    />
                                    <RemoveButton
                                        className='billsList-button'
                                        onClick={this.props.onRemove.bind(this, expense.id)}
                                    />
                                </TableRowColumn>
                            </TableRow>
                        )) : null}
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableRowColumn
                                colSpan="1"
                                style={{ textAlign: 'center' }}
                                className={this.props.expense ? 'table-header-expense' : 'table-header-income'}
                            >
                                Total: {
                                    this.props.expenses.length > 0 ?
                                        `${numeral(
                                            this.props.getSum(
                                                this.props.expenses,
                                                this.props.currencies,
                                                this.props.currency
                                            )).format('0,0.00')}${getSymbolFromCurrency(this.props.currency)} 
                                        ${this.props.currency}` :
                                        0
                                }
                                {

                                }
                            </TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        );
    };
};

export default ExpenseList;
