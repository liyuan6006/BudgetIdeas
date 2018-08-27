import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Line } from 'rc-progress';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';
import RenderToLayer from 'material-ui/internal/RenderToLayer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart } from 'recharts';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { red100, grey100, green300 } from 'material-ui/styles/colors';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ProgressBar } from 'react-bootstrap';
import { grey500 } from 'material-ui/styles/colors';
import { grey300 } from 'material-ui/styles/colors';
import { green100 } from 'material-ui/styles/colors';
import { getTransactions } from '../actions/transaction';
import { getIncome } from '../actions/income';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        // width: '100%',
        // height: '100%',
        //flexGrow: 1,
        //margin: 'auto'

    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    progressBar: {
        margin: 'auto',
        width: '90%',
        minHeight: 20
    },


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
        this.props.getIncome();
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
    // handleClick = (data, index) => {
    //     console.log(data, index)
    //     this.props.history.push(`/transactionList/${data.type.toLowerCase()}`)
    // };
    handleClick = (type) => {
        this.props.history.push(`/transactionList/${type.toLowerCase()}`)
    };

    handleAdd = () => {
        this.props.history.push('/addCategory')
    }
    render() {
        const { classes } = this.props;
        var needsWantsData = [];
        var savingData = [];
        this.organizeData(needsWantsData, savingData);

        var income = this.props.income.amount;

        var needs = this.props.transactions.filter(s=>s.type.toLowerCase()==="needs").map(s=>parseInt(s.amount));
        var needsAmount = needs.reduce((acc,value)=>acc+value,0);
        var needsBuget = this.props.income.needs/100*income;
        var needsPercentage=needsAmount>needsBuget?100:((needsAmount/needsBuget)*100).toFixed(2);

        var wants = this.props.transactions.filter(s=>s.type.toLowerCase()==="wants").map(s=>parseInt(s.amount));
        var wantsAmount = wants.reduce((acc,value)=>acc+value,0)
        var wantsBuget = this.props.income.wants/100*income;
        var wantsPercentage=wantsAmount>wantsBuget?100:((wantsAmount/wantsBuget)*100).toFixed(2);

        var savings = this.props.transactions.filter(s=>s.type.toLowerCase()==="savings").map(s=>parseInt(s.amount));
        var savingsAmount = savings.reduce((acc,value)=>acc+value,0)
        var savingsBuget = this.props.income.savings/100*income;
        var savingsPercentage=savingsAmount>savingsBuget?100:((savingsAmount/savingsBuget)*100).toFixed(2);

         
       
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>N</Avatar>
                        }
                        title={`You have spent ${needsPercentage}% on your needs`}
                        subheader="Sep 01,2016 - Sep 14,2016"
                    />
                    <CardMedia
                        className={classes.media}
                    >
                        <LinearProgress variant="determinate" value={needsPercentage} className={classes.progressBar} />
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            You have spent ${needsAmount} so far of your total buget ${needsBuget}
                            </Typography>
                    </CardContent>
                    <CardActions>

                        <Button size="small" color="primary" onClick={()=>this.handleClick('needs')}>
                            Learn More
                            </Button>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>W</Avatar>
                        }
                        title={`You have spent ${wantsPercentage}% on your wants`}
                        subheader="Sep 01,2016 - Sep 14,2016"
                    />
                    <CardMedia
                        className={classes.media}
                    >
                        <LinearProgress variant="determinate" value={wantsPercentage} className={classes.progressBar} />
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            You have spent ${wantsAmount} so far of your total buget ${wantsBuget}
                            </Typography>
                    </CardContent>
                    <CardActions>

                        <Button size="small" color="primary" onClick={()=>this.handleClick('wants')}>
                            Learn More
                            </Button>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>S</Avatar>
                        }
                        title={`You have saved ${savingsPercentage}% on your savings`}
                        subheader="Sep 01,2016 - Sep 14,2016"
                    />
                    <CardMedia
                        className={classes.media}
                    >
                        <LinearProgress variant="determinate" value={savingsPercentage} className={classes.progressBar} />
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            You have saved ${savingsAmount} so far of your total buget ${savingsBuget}
                            </Typography>
                    </CardContent>
                    <CardActions>

                        <Button size="small" color="primary" onClick={()=>this.handleClick('savings')}>
                            Learn More
                            </Button>
                    </CardActions>
                </Card>
                {/* <Typography variant="headline">Nedds</Typography>
                <LinearProgress variant="determinate" value={20} className={classes.progressBar} />
                <Typography variant="headline">Wants</Typography>
                <LinearProgress variant="determinate" value={60} className={classes.progressBar} />
                <Typography variant="headline">Savings</Typography>
                <LinearProgress variant="determinate" value={90} className={classes.progressBar} /> */}


                {/* <Card>
                    <CardContent className={classes.cardContent}> */}
                {/* <div className={classes.chartContent}>
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
                </div> */}
                {/* </CardContent>
                </Card> */}
                {/* <Card>
                    <CardContent  className={classes.cardContent}> */}
                {/* <div className={classes.chartContent}>
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
                </div> */}
                {/* </CardContent>
                </Card> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions,
        income:state.income
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTransactions: () => {
            dispatch(getTransactions())
        },
        getIncome: () => {
            dispatch(getIncome())
        }
    }
}

Overview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Overview));