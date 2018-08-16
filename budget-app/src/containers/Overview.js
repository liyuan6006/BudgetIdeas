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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { red100, grey100,green300 } from 'material-ui/styles/colors';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ProgressBar } from 'react-bootstrap';
import { grey500 } from 'material-ui/styles/colors';
import { grey300 } from 'material-ui/styles/colors';
import { green100 } from 'material-ui/styles/colors';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    card: {
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
const dataNeedsWants = [
    { name: 'Needs', unused: 400, amt: 240 },
    { name: 'Wants', unused: 300, amt: 120 }
];

const dataSavings = [
    { name: 'Retire', amt: 1000 },
    { name: 'Kids', amt: 300 },
    { name: 'Vacation', amt: 100 },
    { name: 'Other', amt: 50 }
];


class Overview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Retirement'
        };
    }


    handleClick = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };


    handleAdd = () => {
        this.props.history.push('/addCategory')
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="headline">Nedds and Wants</Typography>
                        <BarChart width={300} height={200} data={dataNeedsWants} layout="vertical" 
                            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number"/>
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amt" stackId="a" fill={green300} maxBarSize={20}/>
                            <Bar dataKey="unused" stackId="a" fill={grey300}  maxBarSize={20}/>
                        </BarChart>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                    <Typography variant="headline">Savings</Typography>
                        <BarChart width={300} height={200} data={dataSavings} layout="vertical"   
                            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number"/>
                            <YAxis type="category" dataKey="name" />                           
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amt" fill={green300} maxBarSize={20}/>
                        </BarChart>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Overview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Overview);