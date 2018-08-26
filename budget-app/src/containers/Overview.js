import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Line } from 'rc-progress';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';
import RenderToLayer from 'material-ui/internal/RenderToLayer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { red100, grey100, green300 } from 'material-ui/styles/colors';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ProgressBar } from 'react-bootstrap';
import { grey500 } from 'material-ui/styles/colors';
import { grey300 } from 'material-ui/styles/colors';
import { green100 } from 'material-ui/styles/colors';
import { getTransactions } from '../actions/transaction';
import { connect } from 'react-redux';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%'

    },
    chartContent: {
        width: '30%',
        height: '70%'
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    }
};


const renderCustomizedLabel = ({ percent }) => {
    return (
        `${(percent * 100).toFixed(0)}%`
    );
}

// const needsWantsData = [
//     { name: 'Needs', unused: 400, value: 240 },
//     { name: 'Wants', unused: 300, value: 120 }
// ];

// const savingData = [
//     { name: 'Retire', value: 1000 },
//     { name: 'Kids', value: 300 },
//     { name: 'Vacation', value: 100 },
//     { name: 'Other', value: 50 }
// ];


class Overview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Retirement'
        };
    }

    componentDidMount() {
        this.props.getTransactions();
    }
    organizeData = (needsWantsData, savingData) => {
        //var filteredTransactions = this.props.transactions.filter(t => t.type === type);
        var needs = { name: "needs", type: "needs", value: 0 };
        var wants = { name: "wants", type: "wants", value: 0 };

        this.props.transactions.forEach(obj => {
            if (obj.type === "needs") {
                needs.value += parseInt(obj.amount)

            }
            if (obj.type === "wants") {
                wants.value += parseInt(obj.amount)
            }
            if (obj.type === "savings") {
                var savings = {};
                savings.name = obj.category;
                savings.type = obj.type;
                savings.value = parseInt(obj.amount)
                savingData.push(savings);
            }
        }
        )
        needsWantsData.push(needs);
        needsWantsData.push(wants);


    }
    handleClick = (data, index) => {
        console.log(data, index)
        this.props.history.push(`/transactionList/${data.type.toLowerCase()}`)
    };


    handleAdd = () => {
        this.props.history.push('/addCategory')
    }
    render() {
        const { classes } = this.props;
        var needsWantsData = [];
        var savingData = [];
        this.organizeData(needsWantsData, savingData);
        return (
            <div className={classes.root}>
                {/* <Card>
                    <CardContent className={classes.cardContent}> */}
                <div className={classes.chartContent}>
                    <Typography variant="headline">Nedds and Wants</Typography>
                    <ResponsiveContainer height='100%' width='100%'>
                        <BarChart
                            data={needsWantsData} layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip active={true} viewBox={{ x: 0, y: 0, width: 10, height: 10 }} />
                            <Legend />
                            <Bar dataKey="value" stackId="a" fill={green300} onClick={this.handleClick} />
                            <Bar dataKey="unused" stackId="a" fill={grey300} onClick={this.handleClick} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                {/* </CardContent>
                </Card> */}
                {/* <Card>
                    <CardContent  className={classes.cardContent}> */}
                <div className={classes.chartContent}>
                    <Typography variant="headline">Savings</Typography>
                    <ResponsiveContainer height='100%' width='100%'>
                        <BarChart data={savingData} layout="vertical"
                            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill={green300} onClick={this.handleClick} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                {/* </CardContent>
                </Card> */}
            </div>
        );
    }
}

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

Overview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Overview));