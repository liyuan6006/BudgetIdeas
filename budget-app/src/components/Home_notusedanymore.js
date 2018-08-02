import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddBudget from '../containers/AddBudget';
import BudgetList from '../containers/BudgetList';
import TransactionList from '../containers/TransactionList';
import AddTransaction from '../containers/AddTransaction';
import SetIncome from '../containers/SetIncome';
import SetUpStepper from './SetUpStepper';
import AddCategory from '../containers/AddCategory';
import AddIncome from '../containers/AddIncome';
import Toolbar from '@material-ui/core/Toolbar';
import ContentLink from 'material-ui/svg-icons/content/link';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { List, ListItem } from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;
const styles = theme => ({
    root: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
    },
  });


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: false,
        };
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleMenuItemClick = (path) => {
        this.setState({ left: false });
        this.props.history.push(path);

    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
        <AppBar
          position="absolute"
         
        >
                  <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer}
            
            >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <MenuItem primaryText="Budgets" onClick={() => this.handleMenuItemClick('/budgets')} leftIcon={<ContentLink />} />
                    <MenuItem primaryText="Transactions" onClick={() => this.handleMenuItemClick('/addTransactions')} leftIcon={<ContentLink />} />
                    <MenuItem primaryText="Incomes" onClick={() => this.handleMenuItemClick('/addIncomes')} leftIcon={<ContentLink />} />
                    <Divider />
                    <MenuItem primaryText="Settings" onClick={() => this.handleMenuItemClick('/settings')} leftIcon={<ContentLink />} />
                    <MenuItem primaryText="Reports" leftIcon={<ContentLink />} />
                </SwipeableDrawer>
                <div>
                    <Switch>
                        <Route path='/' exact component={BudgetList} />
                        <Route path='/budgets' component={BudgetList} />
                        <Route path='/addBudget' component={AddBudget} />
                        <Route path='/transactions' component={TransactionList} />
                        <Route path='/addIncomes' component={AddIncome} />
                        <Route path='/addTransactions' component={AddTransaction} />
                        <Route path='/addCategory' component={AddCategory} />
                        <Route path='/settings' component={SetUpStepper} />
                        <Route path='/setIncome' component={SetIncome} />
                    </Switch>
                </div>
            </div>
        );
    }
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  

export default withStyles(styles, { withTheme: true })(Home);
