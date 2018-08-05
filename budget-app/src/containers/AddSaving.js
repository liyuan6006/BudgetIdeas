import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CategoryDialog from '../components/CategoryDialog';

import { connect } from 'react-redux';
import { getCategories } from '../actions/category';
import { addSaving } from '../actions/saving';


import SaveIcon from '@material-ui/icons/Save';



const styles = theme => ({
    root: {
        //display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    card: {
        minWidth: 275,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
});



function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            ref={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            prefix="$"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

class AddSaving extends React.Component {
    state = {
        category:'',
        amount: '',
        date: new Date(),
        note:'',
        open: false
    };

    componentDidMount() {
        this.props.getCategories();
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.setState({ category: value, open: false });
    };

    handleSave=()=>{
        var savingObj = {};
        savingObj.category=this.state.category;
        savingObj.amount=this.state.amount;
        savingObj.date=this.state.date;
        savingObj.note=this.state.note;
        this.props.addSaving(savingObj);
        this.props.history.push("/savingList");
    }
    render() {

        const { classes } = this.props;
        const { amount } = this.state;

        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <TextField
                            id="number"
                            label="Category"
                            value={this.state.category}
                            onClick={this.handleClickOpen}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Click to choose category"
                            margin="normal"
                        />
                        <br />
                        <TextField
                            className={classes.formControl}
                            label="Amount"
                            value={amount}
                            onChange={this.handleChange('amount')}
                            id="formatted-amount-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Type amount"
                        />
                        <br />
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue={"2017-05-24"}
                            className={classes.textField}
                            onChange={this.handleChange('date')}
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Click to pick date"
                        />
                        <br />
                        <TextField
                            id="name"
                            label="Note"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('note')}
                            margin="normal"
                            placeholder="Type note"
                        />

                        <br />
                        <CategoryDialog
                            categories={this.props.categories.filter(s=>s.type==="savings")}
                            selectedValue={this.state.selectedValue}
                            open={this.state.open}
                            onClose={this.handleClose}
                        />
                        <br />
                        <Button variant="contained" size="small"  onClick={this.handleSave}>
                            <SaveIcon />
                            Save
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => {
            dispatch(getCategories())
        },
        addSaving: (savingObj) => {
            dispatch(addSaving(savingObj))
        }
    }
}

AddSaving.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AddSaving));