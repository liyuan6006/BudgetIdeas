import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Route, Switch } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';

import Settings from '@material-ui/icons/Settings';
import AddBudget from '../containers/AddBudget';
import BudgetList from '../containers/BudgetList';
import TransactionList from '../containers/TransactionList';
import AddTransaction from '../containers/AddTransaction';
import SavingList from '../containers/SavingList';
import AddSaving from '../containers/AddSaving';
import SetIncome from '../containers/SetIncome';
import SetUpStepper from './SetUpStepper';
import AddCategory from '../containers/AddCategory';
import Overview from '../containers/Overview';
import SignUp from './Authetication/SignUp'
import SignIn from './Authetication/SignIn';
import {auth} from '../firebase/index';
import PasswordForget from './Authetication/PasswordForget';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    //height: 430,
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
    marginLeft: -12,
    marginRight: 20,
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
    padding: `0 ${theme.spacing.unit * 1}px`,

  },
  flex: {
    flexGrow: 1,
  },
});

class Home extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenuItemClick = (path) => {
    this.setState({ open: false });
    this.props.history.push(path);

  };

  handleLoginClick = () => {
    this.props.history.push('/signIn');
  };
  handleLogoutClick = () => {
    auth.doSignOut();
    this.props.history.push('/signIn');
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Budget Ideas
            </Typography>
            {this.props.authUser?
            <Button color="inherit" onClick={this.handleLogoutClick}>Logout</Button>
            :
            <Button color="inherit" onClick={this.handleLoginClick}>Login</Button>}
          </Toolbar>
        </AppBar>
        <SwipeableDrawer

          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
          onClose={this.handleDrawerClose}
          onOpen={this.handleDrawerOpen}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => this.handleMenuItemClick('/overview')}>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button onClick={() => this.handleMenuItemClick('/transactionList/needs')}>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary="Needs" />
            </ListItem >
            <ListItem button onClick={() => this.handleMenuItemClick('/transactionList/wants')}>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary="Wants" />
            </ListItem >
            <ListItem button onClick={() => this.handleMenuItemClick('/transactionList/savings')}>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary="Savings" />
            </ListItem >
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => this.handleMenuItemClick('/settings')}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </SwipeableDrawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />


          <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/overview' component={Overview} />
            <Route path='/addBudget' component={AddBudget} />
            <Route path='/addTransactions' component={AddTransaction} />
            <Route path='/transactionList/:type' component={TransactionList} />
            <Route path='/addSavings' component={AddSaving} />
            <Route path='/savingList' component={SavingList} />
            <Route path='/addCategory' component={AddCategory} />
            <Route path='/settings' component={SetUpStepper} />
            <Route path='/setIncome' component={SetIncome} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/signIn' component={SignIn} />
            <Route path='/passwordForget' component={PasswordForget} />
            
          </Switch>

        </main>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
