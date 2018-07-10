import React from 'react'
import { connect } from 'react-redux'
import { addTransaction } from '../actions/transaction';
import {getCategories} from '../actions/category';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';
import Period from '../components/Period'
import CategoryDialog from '../components/CategoryDialog';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class AddTransaction extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date();

        this.state = {
            name: 'New Transaction',
            amount: 100,
            date: today.getFullYear() + "-" + today.getMonth() + "-" + today.getDay(),
            category: 'Bills',
            note: ''
        };
    }

    componentDidMount(){
        this.props.getCategories();
    }

    handleSelect = name => value => {
        this.setState({
            [name]: value
        });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleSave = () => {
        var newTransaction = {
            name: this.state.name,
            amount: this.state.amount,
            category: this.state.category,
            date: this.state.date,
            note: this.state.note
        }
        this.props.addTransaction(newTransaction);
        this.props.history.push('/transactions')
    };

    render() {
        const { classes } = this.props;
        return (
            <form >
                <TextField
                    id="name"
                    label="Name"
                    defaultValue="new Transaction"
                    margin="normal"
                    onChange={this.handleChange('name')}
                />
                <br />
                <TextField
                    id="amount"
                    label="Amount"
                    defaultValue="100"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    onChange={this.handleChange('amount')}
                />
                <br />
                <CategoryDialog categories={this.props.categories} onSelect={this.handleSelect('category')} />

                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2018-07-05"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleChange('date')}
                />
                <br />
                <TextField
                    id="note"
                    label="Note"
                    multiline
                    rowsMax="4"
                    value={this.state.multiline}
                    onChange={this.handleChange('note')}
                    className={classes.textField}
                    margin="normal"
                />
                <br />
                <Button variant="contained" size="small" onClick={() => this.handleSave()} >
                    <Save />
                    Save
                </Button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTransaction: newTransaction => {
            dispatch(addTransaction(newTransaction))
        },
        getCategories: () => {
            dispatch(getCategories())
        }
    }
}

const mapStateToProps = state =>{
    return {
        categories: state.categories
    }
}

AddTransaction = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AddTransaction))
export default AddTransaction