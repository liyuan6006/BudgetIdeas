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
import { addTransaction } from '../actions/transaction';


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

class AddTransaction extends React.Component {
    state = {
        category:'',
        amount: '',
        date: new Date(),
        note:'',
        open: false,
        type:''
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

    handleClose = (categoryValue,typeValue) => {
        this.setState({ category: categoryValue, type:typeValue,open: false });
    };

    handleSave=()=>{
        var transactionObj = {};
        transactionObj.category=this.state.category;
        transactionObj.amount=this.state.amount;
        transactionObj.date=this.state.date;
        transactionObj.note=this.state.note;
        transactionObj.type=this.state.type;
        this.props.addTransaction(transactionObj);
        this.props.history.push(`/transactionList/${this.state.type}`);
    }
    render() {
        
        const { classes } = this.props;
        const { amount } = this.state;

        return (
            <div className={classes.root}>
                {/* <Card className={classes.card}>
                    <CardContent> */}
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
                            categories={this.props.categories}
                            selectedValue={this.state.selectedValue}
                            open={this.state.open}
                            onClose={this.handleClose}
                        />
                        <br />
                        <Button variant="contained" size="small"  onClick={this.handleSave}>
                            <SaveIcon />
                            Save
                        </Button>
                    {/* </CardContent>
                </Card> */}
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
        addTransaction: (transactionObj) => {
            dispatch(addTransaction(transactionObj))
        }
    }
}

AddTransaction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AddTransaction));