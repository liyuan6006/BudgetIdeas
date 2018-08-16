


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { getTransactions } from '../actions/transaction';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Line } from 'rc-progress';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    progress: {
        margin: theme.spacing.unit * 2,
      },
});

class TransactionList extends React.Component {
    state = {
        expanded: null,
    };

    componentDidMount() {
        this.props.getTransactions();
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    handleAdd = () => {
        this.props.history.push('/addTransactions')
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (

            <div className={classes.root}>
                <Card>
                    <CardContent >
                        <Typography gutterBottom variant="headline" component="h2"> Spendings-{this.props.match.params.type} </Typography>
                        <Line percent="20" className={classes.progress} strokeWidth="1" strokeColor="green" trailWidth="2" trailColor="#D9D9D9" strokeLinecap="square" />
                        {
                            this.props.transactions.filter(t => t.type === this.props.match.params.type).map(obj => (
                                <ExpansionPanel expanded={expanded === obj.id} onChange={this.handleChange(obj.id)}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>{obj.date}</Typography>
                                        <Typography className={classes.heading}>{obj.category}</Typography>
                                        <Typography className={classes.heading}>${obj.amount}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            {obj.note}
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                            )
                            )
                        }
                        <Button variant="fab" color="primary" aria-label="add" mini className={classes.fab}>
                            <AddIcon onClick={() => this.handleAdd()} />
                        </Button>
                    </CardContent>

                </Card>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TransactionList));