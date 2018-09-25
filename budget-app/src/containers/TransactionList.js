


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { getTransactions } from '../actions/transaction';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Line } from 'rc-progress';
import classnames from 'classnames';
import CardContent from '@material-ui/core/CardContent';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { NeedsAvatar, WantsAvatar, SavingsAvatar } from '../components/CommonControls/Controls'
import '../../node_modules/react-vis/dist/style.css';

import { PieChart, Pie, Legend, Tooltip } from 'recharts'

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        // width: '100%',
        // height: '100%'
    },
    card: {
        maxWidth: 400,
    },
    media: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
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
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
});


class TransactionList extends React.Component {
    state = {
        expanded: null,
        value: false
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
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
    render() {
        const { classes } = this.props;
        const { expanded, value } = this.state;

        if(this.props.transactions.length>0){
            var data01 = this.props.transactions.filter(s=>s.type===this.props.match.params.type).map(obj=>
                {var rObj={};
                rObj.name = obj.category;
                rObj.value = parseInt(obj.amount);
                return rObj;
            })
        }
        return (

            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            this.props.match.params.type === "needs" ?
                                <NeedsAvatar />
                                : this.props.match.params.type === "wants" ?
                                    <WantsAvatar />
                                    : <SavingsAvatar />
                        }
                        title={<Typography variant="headline">{this.props.match.params.type.toUpperCase()}</Typography>}
                        
                        subheader="Sep 01,2016 - Sep 14,2016"
                    />
                     
                    {  this.props.transactions.length>0&& 
                    <CardMedia className={classes.media}>
                         
                   
                       <PieChart width={300} height={300}>
                            <Pie isAnimationActive={true} data={data01}
                             outerRadius={80} fill="#8884d8" label />

                             <Tooltip />
                             <Legend  layout='horizontal' align='center'/>
                         </PieChart>
                   
                       
                       
                    
                    </CardMedia>
                    }
                    <CardContent>
                        <Typography component="p">
                            You can expend to see all transactions or add a new transaction
          </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        {/* <Button size="small" color="primary" onClick={() => this.handleAdd()}>
                            Add transaction
        </Button> */}
               <Button variant="fab" mini  color="primary" aria-label="add" className={classes.button}>
                <AddIcon   onClick={() => this.handleAdd()}  />
                </Button>

                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph variant="body2">
                                Transactions:
            </Typography>
                            {
                                this.props.transactions.filter(t => t.type === this.props.match.params.type).map(obj => (
                                    <Typography paragraph>
                                        You have spent ${obj.amount} on {obj.category} at {obj.date}
                                        <Divider />
                                    </Typography>

                                ))
                            }

                        </CardContent>
                    </Collapse>
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