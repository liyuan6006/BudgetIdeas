import React from 'react';

import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { connect } from 'react-redux';
import { addIncome, getIncome, updateIncome } from '../actions/income';
import NativeSelect from '@material-ui/core/NativeSelect';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



const styles = theme => ({
    root: {
        width: '100%',
      },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
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

class SetIncome extends React.Component {

    state = {
        frequency: '',
        amount: 'hai',
    };


    componentDidMount() {
        this.props.getIncome();
    }

    handleAmountChange = id => event => {
        var amount = event.target.value;
        var nodePath = id + "/amount";
        this.props.updateIncome(nodePath, amount);
    };

    handleFrequencyChange = id => event => {
        var frequency = event.target.value;
        var path = id + "/frequency";
        this.props.updateIncome(path, frequency);
    };




    render() {
        const { classes } = this.props;
        const { numberformat } = this.state;
        return (
            <div className={classes.root}>
            <Card>
                <CardContent >
                    <TextField
                        className={classes.formControl}
                        label="Amount"
                        value={this.props.income.amount}
                        onChange={this.handleAmountChange(this.props.income.id)}
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                            startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                        helperText="Please type your income"
                    />
                    <br/>
                    <TextField
                        id="select-currency-native"
                        select
                        label="Frequency"
                        className={classes.textField}
                        value={this.props.income.frequency}
                        onChange={this.handleFrequencyChange(this.props.income.id)}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your frenquency"
                        margin="normal"
                    >
                        <option key="monthly" value={"monthly"}> Monthly</option>
                        <option key="weekly" value={"weekly"}> Weekly</option>
                        <option key="yearly" value={"yearly"}>Yearly</option>
                    </TextField>
                </CardContent>

            </Card>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        income: state.income
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIncome: newIncome => {
            dispatch(addIncome(newIncome))
        },
        getIncome: () => {
            dispatch(getIncome())
        },
        updateIncome: (nodePath, value) => {
            dispatch(updateIncome(nodePath, value))
        }
    }
}

SetIncome.propTypes = {
    classes: PropTypes.object.isRequired,
};

SetIncome = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SetIncome))
export default SetIncome