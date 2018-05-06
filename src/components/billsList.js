import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import RemoveButton from './buttons/removeButton';
import EditButton from './buttons/editButton';

class BillList extends React.Component {

    state = {
        redirect: false
    };

    onCellClick = (rowIndex, cell) => {
        if (cell === 3) {
            return;
        }
        this.setState({ redirect: this.props.bills[rowIndex].id });
    };

    onRemove = (id) => {
        this.props.removeBill(id);
    };

    onEdit = (name, id) => {
        this.props.editBill(name, id);
    };

    render() {
        return (
            <div className='billsList'>
                <Table
                    fixedHeader
                    fixedFooter
                    onCellClick={this.onCellClick}
                    selectable={false}
                >
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn
                                colSpan="4"
                                style={{ textAlign: 'center' }}
                                className='table-header'
                            >
                                Bills
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn className='table-header-column'>ID</TableHeaderColumn>
                            <TableHeaderColumn className='table-header-column'>Name</TableHeaderColumn>
                            <TableHeaderColumn className='table-header-column'>Created At</TableHeaderColumn>
                            <TableHeaderColumn className='table-header-column'>Actions</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                    >
                        {this.props.bills.map((bill, index) => (
                            <TableRow
                                key={index}
                                className='billsList-row'
                            >
                                <TableRowColumn className='table-row-column'>{index + 1}</TableRowColumn>
                                <TableRowColumn className='table-row-column' style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{bill.name}</TableRowColumn>
                                <TableRowColumn className='table-row-column'>{moment(bill.createdAt).format('YYYY/MM/DD')}</TableRowColumn>
                                <TableRowColumn
                                    className='table-actions'
                                >
                                    <EditButton
                                        className='billsList-button'
                                        onClick={this.onEdit.bind(this, bill.name, bill.id)}
                                    />
                                    <RemoveButton
                                        className='billsList-button'
                                        onClick={this.onRemove.bind(this, bill.id)}
                                    />
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {this.state.redirect ?
                    <Redirect to={`/bill/${this.state.redirect}`} /> :
                    null}
            </div>
        );
    };
};

export default BillList;
