import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';

const styles = theme => ({
    root: {
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

const names = [
    'Food&Drink', 'Bills', 'Home', 'Entertainment'
];
class OpenCategoryDialog extends React.Component {

    state = {
        open: false,
        selectedValue: '',
        age: '',
        name: 'hai',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root} autoComplete="off">
                <div>
                   
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Category</InputLabel>
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {names.map(name => (
                                <MenuItem key={name} value={name}>
                                    <Avatar className={classes.avatar}>
                                        <PersonIcon />
                                    </Avatar>
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                            <MenuItem value={10}>
                                <Avatar>
                                    <AddIcon />
                                </Avatar>
                                <ListItemText primary="add categorys" />
                            </MenuItem>

                        </Select>
                    </FormControl>
                </div>
            </form>
        );
    }
}

export default withStyles(styles)(OpenCategoryDialog);