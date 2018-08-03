import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import blue from '@material-ui/core/colors/blue';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@material-ui/icons/Add';
const styles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
};


class AddCategoryDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            type: "needs",
            name: ""
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
        var newCategory = { name: this.state.name, type: this.props.type }
        this.props.onSubmit(newCategory)
    };

    handleNameChange = event => {
        this.setState({
            "name": event.target.value,
        });
    };
    // handleTypeChange = event => {
    //     this.setState({
    //         "type": event.target.value,
    //     });
    // };

    render() {
        const { classes } = this.props;

        return (
            <div >
                <Button variant="fab" mini  color="primary" aria-label="add" className={classes.button}>
                <AddIcon  onClick={this.handleOpen}  />
                </Button>
              

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Add Category</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="name"
                            label="Name"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            margin="normal"
                        />
                        {/* <RadioGroup
                            aria-label="Type"
                            name="type1"
                            className={classes.group}
                            value={this.state.type}
                            onChange={this.handleTypeChange}
                        >
                            <FormControlLabel value="needs" control={<Radio />} label="Needs" />
                            <FormControlLabel value="wants" control={<Radio />} label="Wants" />
                        </RadioGroup> */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary" autoFocus>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


AddCategoryDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AddCategoryDialog);