import React from 'react';










import {  red100 } from 'material-ui/styles/colors';


import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    radioButton: {
        marginBottom: 16,
        '&$checked': {
            color: red100
        }
    },
};

class AddCategoryDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            type: "needs",
            name:""
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleSubmit = () => {
        this.setState({ open: false });
        var newCategory={name:this.state.name,type:this.state.type}
        this.props.onSubmit(newCategory)
    };

    handleNameChange = event => {
        this.setState({
            "name": event.target.value,
        });
    };
    handleTypeChange =  event => {
        this.setState({
            "type": event.target.value,
        });
    };

    render() {
        return (
            <div >
                <RaisedButton label="Add" onClick={this.handleOpen} />
                <Dialog
                    title="Add Category"
                    actions={[
                        <FlatButton
                            label="Cancel"
                            primary={true}
                            onClick={this.handleClose}
                        />,
                        <FlatButton
                            label="Submit"
                            primary={true}
                            onClick={this.handleSubmit}
                        />,
                    ]}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        hintText="Category name"
                        onChange={this.handleNameChange}
                    />
                    <RadioButtonGroup name="shipSpeed" valueSelected={this.state.type}
                        onChange={this.handleTypeChange}>
                        <RadioButton
                            value="needs"
                            label="Needs"
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="wants"
                            label="Wants"
                            style={styles.radioButton}
                        />
                    </RadioButtonGroup>
                </Dialog>
            </div>
        )
    }
}


export default AddCategoryDialog;