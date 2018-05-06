import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class BillForm extends React.Component {

    state = {
        open: false,
        name: '',
        edit: false
    };

    handleOpen = () => {
        this.setState({
            open: true,
            name: '',
            edit: false
        });
    };

    editHandleOpen = (oldName, id) => {
        this.setState({
            edit: id,
            name: oldName,
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

    onSubmit = () => {
        (
            this.state.edit ?
                this.props.editBill(this.state.name, this.state.edit) :
                this.props.addBill(this.state.name)
        )
            .then((res) => {
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
                disabled={!(this.state.name.length > 0)}
            />,
        ];

        return (
            <div>
                <RaisedButton
                    label="Add Bill"
                    onClick={this.handleOpen}
                    className='billForm-but'
                />
                <Dialog
                    title={this.state.edit ? 'Edit Bill' : 'Add Bill'}
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    className='billForm'
                >
                    <TextField
                        hintText='Enter bill name'
                        floatingLabelText='Bill name'
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                </Dialog>
            </div>
        );
    };
};

export default BillForm;
