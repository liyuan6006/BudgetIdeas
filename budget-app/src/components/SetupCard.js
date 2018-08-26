import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCategoryDialog from './AddCategoryDialog';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';


import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from 'classnames';


const styles = theme => ({
    root: {
         //display: 'flex',
         //justifyContent: 'center',
        // flexWrap: 'wrap'
        width: '100%'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '80%',
    },
    chip: {
        margin: theme.spacing.unit*0.1,
    },
    // chipWrap: {
    //     display: 'flex',
    //     flexWrap: 'wrap'
    // },
    avatar: {
        margin: 10,
    },
    redAvatar: {

        color: '#fff',
        backgroundColor: red[500],
    },
    blueAvatar: {
        color: '#fff',
        backgroundColor: blue[500],
    },
    purpleAvatar: {
        color: '#fff',
        backgroundColor: purple[500],
    },

});



class SetupCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectedId: '',
            dialogTitle: ''
        };
    }

    handleDialogClose = () => {
        this.setState({ open: false });
    };

    handleItemDelete = (id, dialogTitle) => {
        this.setState({ open: true, selectedId: id, dialogTitle: dialogTitle });
    }

    handleItemClick = (path, type) => {
        if (type === "savings") return;
        this.props.onItemClick(path, type)
    }

    handleAddSubmit = (value) => {
        this.props.onAdd(value);
    }

    handleDeleteSubmit = () => {
        this.props.onItemDelete(this.state.selectedId);
        this.setState({ open: false });
    }

    handleChange = (type, id) => event => {
        console.log('1111')
        if (type === "needs")
            this.props.onChange(id + "/needs", event.target.value)
        if (type === "wants")
            this.props.onChange(id + "/wants", event.target.value)
        if (type === "savings")
            this.props.onChange(id + "/savings", event.target.value)
    };



    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                {/* <Card>
                    <CardContent > */}
                <FormControl
                    className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
                    aria-describedby="weight-helper-text"
                >
                    <InputLabel htmlFor="adornment-amount">Percentage</InputLabel>
                    <Input
                        id="adornment-weight"
                        type="number"
                        value={this.props.type === "needs" ?
                            this.props.income.needs
                            : this.props.type === "wants" ?
                                this.props.income.wants
                                : this.props.income.savings}
                        onChange={this.handleChange(this.props.type, this.props.income.id)}
                        endAdornment={<InputAdornment position="end">%</InputAdornment>}
                        inputProps={{
                            'aria-label': 'Weight',
                        }}
                    />
                    <FormHelperText>Please define the percentage</FormHelperText>
                </FormControl>
                <br />
                <FormControl className={classes.textField} disabled>
                    <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                    <Input
                        id="adornment-amount"
                        value={this.props.type === "needs" ?
                            this.props.income.amount * this.props.income.needs * 0.01
                            : this.props.type === "wants" ?
                                this.props.income.amount * this.props.income.wants * 0.01
                                : this.props.income.amount * this.props.income.savings * 0.01}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                    <FormHelperText>This is the caculated amount </FormHelperText>
                </FormControl>

                <br />

                {
                    this.props.categories.map(obj => (

                        <Chip key={obj.id} label={obj.name}
                            avatar={this.props.type === "needs" ?
                                <Avatar className={classes.redAvatar}>N</Avatar>
                                : this.props.type === "wants" ?
                                    <Avatar className={classes.purpleAvatar}>W</Avatar>
                                    : <Avatar className={classes.blueAvatar}>S</Avatar>}
                            className={classes.chip}
                            onDelete={() => this.handleItemDelete(obj.id, obj.name)}
                            onClick={() => this.handleItemClick(obj.id + '/type', obj.type)}
                        />

                    )
                    )
                }
                {/* </CardContent> */}

                <AddCategoryDialog type={this.props.type} onSubmit={this.handleAddSubmit} />

                {/* </Card> */}

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Delete Category?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete <b>{this.state.dialogTitle}</b>?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleDeleteSubmit} color="primary" autoFocus>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
}

SetupCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SetupCard);
