import React, { Fragment, PureComponent } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CategoryDialog from '../components/CategoryDialog';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { getCategories } from '../actions/category';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
    container: {
        //display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    card: {
        minWidth: 275,
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
        numberformat: '1320',
        selectedDate: new Date(),
        name: '',
        open: false,
        type: 'a',
    };

    componentDidMount() {
        this.props.getCategories();
    }


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };



    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };

    render() {
        const { selectedDate } = this.state;
        const { classes } = this.props;
        const { numberformat } = this.state;

        return (
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardContent>
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={this.state.type === 'a'}
                                    onChange={this.handleChange("type")}
                                    value="a"
                                    color="primary"
                                    name="radio-button-demo"
                                    aria-label="A"
                                />
                            }
                            label="Expenses"
                        />
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={this.state.type === 'b'}
                                    onChange={this.handleChange("type")}
                                    value="b"
                                    color="secondary"
                                    label="Income"
                                    name="radio-button-demo"
                                    aria-label="B"
                                />}
                            label="savings"
                        />
                        <br />
                        <TextField
                            id="name"
                            label="Name"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            className={classes.formControl}
                            label="react-number-format"
                            value={numberformat}
                            onChange={this.handleChange('numberformat')}
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                        <br />
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue={"2017-05-24"}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br />
                        <TextField
                            id="name"
                            label="Note"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br />
                        <Typography variant="subheading">Selected: {this.state.selectedValue}</Typography>
                        <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
                        <CategoryDialog
                            categories={this.props.categories}
                            selectedValue={this.state.selectedValue}
                            open={this.state.open}
                            onClose={this.handleClose}
                        />
                        <br />
                        <Button variant="contained" size="small" >
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
        }
    }
}

AddTransaction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AddTransaction));