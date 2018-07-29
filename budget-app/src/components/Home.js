import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryList from '../containers/CategoryList';
import AddBudget from '../containers/AddBudget';
import BudgetList from '../containers/BudgetList';
import TransactionList from '../containers/TransactionList';
import AddTransaction from '../containers/AddTransaction';
import SetIncome from '../containers/SetIncome';
import SetUpStepper from './SetUpStepper';
import SetPercentage from '../containers/SetPercentage';
import AddCategory from '../containers/AddCategory';
import { List, ListItem } from 'material-ui/List';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }
    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => {
        this.setState({ open: false });
    };
    handleMenuItemClick = (path) => {
        this.setState({ open: false });
        this.props.history.push(path);

    };

    render() {
        return (
            <div>
                <AppBar
                    title="Budget Ideas"
                    onLeftIconButtonClick={this.handleToggle}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <MenuItem primaryText="Budgets" onClick={() => this.handleMenuItemClick('/budgets')} leftIcon={<ContentLink />} />
                    <MenuItem primaryText="Transactions" onClick={() => this.handleMenuItemClick('/transactions')} leftIcon={<ContentLink />} />
                    <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
                    <Divider />
                    <MenuItem primaryText="Settings" onClick={() => this.handleMenuItemClick('/settings')} leftIcon={<ContentLink />} />
                    <MenuItem primaryText="Reports" leftIcon={<ContentLink />} />
                </Drawer>
                <main>
                    <Switch>
                        <Route path='/' exact component={BudgetList} />
                        <Route path='/budgets' component={BudgetList} />
                        <Route path='/addBudget' component={AddBudget} />
                        <Route path='/transactions' component={TransactionList} />
                        <Route path='/addTransaction' component={AddTransaction} />
                        <Route path='/categories' component={CategoryList} />
                        <Route path='/addCategory' component={AddCategory} />
                        <Route path='/settings' component={SetUpStepper} />
                        <Route path='/setIncome' component={SetIncome} />
                        <Route path='/setPercentage' component={SetPercentage} />
                    </Switch>
                </main>
            </div>
        );
    }
};

export default Home;