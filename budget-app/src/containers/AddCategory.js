import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions/category'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
  
class AddCategory extends React.Component {
    constructor(props) {
        super(props);

       
        this.state = {
            name: 'New Category',
            belongsTo: ''
           
        };
    }

    handleSelect = name=>value => {
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
        var newCategory = {
            name: this.state.name,
            belongsTo: this.state.belongsTo,
         
        }
        this.props.addCategory(newCategory);
        this.props.history.push('/categories')
    };

    render() {
        const { classes } = this.props;
        return (
            <form >
                <TextField
                    id="name"
                    label="Name"
                    defaultValue="new Category"
                    margin="normal"
                    onChange={this.handleChange('name')}
                />
                <br />
                <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={this.state.belongsTo}
            onChange={this.handleChange('belongsTo')}

          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Needs"}>Needs</MenuItem>
            <MenuItem value={"Wants"}>Wants</MenuItem>
            <MenuItem value={"Saving"}>Saving</MenuItem>
          </Select>
        </FormControl>
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

AddCategory = withStyles(styles)(connect(null, mapDispatchToProps)(AddCategory))
export default AddCategory