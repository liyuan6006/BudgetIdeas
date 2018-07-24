import React from 'react';
import { connect } from 'react-redux';
import { getIncome } from '../actions/income';
import { getCategories } from '../actions/category';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { PieChart, Pie, Legend, Tooltip ,Cell} from 'recharts';







class SetUpSummary extends React.Component {

    componentDidMount() {
        this.props.getIncome();
        this.props.getCategories();
    }


    render() {



        var caculatedNeeds = this.props.income.amount * this.props.income.needs / 100;
        var caculatedWants = this.props.income.amount * this.props.income.wants / 100;
        var caculatedSaving = this.props.income.amount * this.props.income.saving / 100;
        const data = [
            { name: `${this.props.income.needs}% of $${this.props.income.amount} is needs`, value: caculatedNeeds },
            { name: `${this.props.income.wnats}% of $${this.props.income.amount} is wnats`, value: caculatedWants },
            { name: `${this.props.income.saving}% of $${this.props.income.amount} is nsavingeds`, value: caculatedSaving }]
            const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
        return (
            <PieChart width={400} height={400}>
                <Pie isAnimationActive={false} label data={data}  cx={200} cy={200} outerRadius={80} fill="#8884d8"  >
                {
                data.map((entry, index) => <Cell fill={COLORS[index]}/>)
                }
                </Pie>

                <Tooltip />
            </PieChart>
            // <Card>
            //     <CardTitle title="Summary" />
            //     <CardText>
            //         Your {this.props.income.frequency} Income: {this.props.income.amount}<br />
            //         Your Income Split:<br />
            //         Needs is  {this.props.income.amount}*{this.props.income.needs}% ={caculatedNeeds}<br />
            //         Wants is  {this.props.income.amount}*{this.props.income.wants}%={caculatedWants}<br />
            //         Saving is  {this.props.income.amount}*{this.props.income.saving}%={caculatedSaving}<br />
            //         Category:
            //     </CardText>
            // </Card>




        )
    }
}

const mapStateToProps = state => {
    return {
        income: state.income,
        categories: state.categories
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => {
            dispatch(getCategories())
        },
        getIncome: () => {
            dispatch(getIncome())
        }
    }
}



SetUpSummary = connect(mapStateToProps, mapDispatchToProps)(SetUpSummary)
export default SetUpSummary