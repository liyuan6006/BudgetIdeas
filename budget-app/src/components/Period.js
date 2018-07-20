import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';


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
    'Month', 'Year', 'Week', 'Day'
];
class Period extends React.Component {

    state = {
        period: 'Month',
    };

    handleChange = event => {
        this.setState({ period: event.target.value });
        this.props.onSelect(event.target.value);
    };


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} autoComplete="off">
     
                   
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="period-simple">How often</InputLabel>
                        <Select
                        
                            value={this.props.period}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'period',
                                id: 'period-simple',
                            }}
                        >
                           
                            {names.map(name => (
                                <MenuItem key={name} value={name}>
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                            
                        </Select>
                    </FormControl>
         
            </div>
        );
    }
}

export default withStyles(styles)(Period);