import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {connect} from 'react-redux';
import {getCategories} from '../actions/category'


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});



class BudgetList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.getBudgets();
    }
    
    handleOnClick = () => {
        this.props.history.push('/addbudget')
    }


    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    {
                        this.props.budgets.map(budget => (
                            <div>
                                <ListItem button>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={`Name is ${budget.name} Amount is ${budget.budget}`} />
                                </ListItem>
                                <MoreVertIcon />
                                <Divider />
                            </div>
                        )
                        )
                    }
                </List>
                <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                    <AddIcon onClick={() => this.handleOnClick()}/>
                </Button>
            </div>
        )

    };
}

const mapStateToProps = state =>{
    return {
        budgets: state.categories
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        getBudgets:()=>{
            dispatch(getCategories())
        }
    }
}

BudgetList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(BudgetList));