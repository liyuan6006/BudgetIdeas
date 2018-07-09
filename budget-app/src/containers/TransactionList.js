import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {getTransactions} from '../actions/transaction';
import { connect } from 'react-redux';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>

            {props.children && ("name:"+props.children.name + " amount:" + props.children.amount+"  category:"+ props.children.category + " date:" + props.children.date + " note:" + props.children.note)}
        </Typography>
    );
}



const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class TransactionList extends React.Component {
        state = {
            value: "0",
    }
    componentDidMount() {
        this.props.getTransactions();
    }

    handleAdd = () => {
        this.props.history.push('/addTransaction')
    }


   

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Item One" value="0" />
                        <Tab label="Item Two" value="1" />
                        <Tab label="Item Three" value="2" />
                    </Tabs>
                </AppBar>
                {value === "0" && <TabContainer>{this.props.transactions[0]}</TabContainer>}
                {value === "1" && <TabContainer>{this.props.transactions[1]}</TabContainer>}
                {value === "2" && <TabContainer>{this.props.transactions[2]}</TabContainer>}
                <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                <AddIcon onClick={() => this.handleAdd()} />
                </Button>
            </div>
        );
    }
}

TransactionList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        transactions: state.transactions
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTransactions: () => {
            dispatch(getTransactions())
        }
        
    }
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(TransactionList));