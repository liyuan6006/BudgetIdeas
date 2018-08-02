import React from 'react'
import { connect } from 'react-redux'
import { addTransaction } from '../actions/transaction';
import { getCategories } from '../actions/category';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import Save from '@material-ui/icons/Save';
import CategoryDialog from '../components/CategoryDialog';
import DatePicker from 'material-ui/DatePicker';
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

    componentDidMount() {
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
                    floatingLabelText="Name"
                    onChange={this.handleChange('name')}
                />
                <br />
                <TextField
                    floatingLabelText="Amount"
                    type="number"
                    onChange={this.handleChange('amount')}
                />
                <br />
                <CategoryDialog categories={this.props.categories} onSelect={this.handleSelect('category')} />
                <DatePicker floatingLabelText="Date" />
                <br />
                <TextField
                    floatingLabelText="Note"
                    onChange={this.handleChange('note')}
                /><br />
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

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

AddTransaction = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AddTransaction))
export default AddTransaction