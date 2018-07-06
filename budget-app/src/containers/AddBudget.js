import React from 'react'
import { connect } from 'react-redux'
import { addBudget } from '../actions/budget'
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
  
class AddBudget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'New Budget',
            budget: 100
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleSave = () => {
        var newBudget = {
            name: this.state.name,
            budget: this.state.budget
        }
        this.props.addBudget(newBudget);
        this.props.history.push('/budgets')
    };

    render() {
        const { classes } = this.props;
        return (
            <form >
                <TextField
                    id="name"
                    label="Name"
                    defaultValue="new Budget"
                    margin="normal"

                    onChange={this.handleChange('name')}
                />
                <br />
                <TextField
                    id="budget"
                    label="Budget"
                    defaultValue="100"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    onChange={this.handleChange('budget')}
                />
                <br />
                <CategoryDialog />
                <Period />

                <TextField
                    id="date"
                    label="Starting"
                    type="date"
                    defaultValue="2018-07-05"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
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
        addBudget: newBudget => {
            dispatch(addBudget(newBudget))
        }
    }
}

AddBudget = withStyles(styles)(connect(null, mapDispatchToProps)(AddBudget))
export default AddBudget