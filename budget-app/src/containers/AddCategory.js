import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions/category'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';



class AddCategroy extends React.Component {
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
        var newCategory = {
            name: this.state.name,
            budget: this.state.budget
        }
        this.props.addCategory(newCategory);
    };

    render() {
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
        addCategory: newCategory => {
            dispatch(addCategory(newCategory))
        }
    }
}

AddCategroy = connect(null, mapDispatchToProps)(AddCategroy)
export default AddCategroy