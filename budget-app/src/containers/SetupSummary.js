import React from 'react';
import { connect } from 'react-redux';
import { getIncome } from '../actions/income';
import { getCategories } from '../actions/category';
import {Card, CardTitle, CardText} from 'material-ui/Card';



class SetUpSummary extends React.Component {

    componentDidMount() {
        this.props.getIncome();
        this.props.getCategories();
    }

   
    render() {
        var caculatedNeeds = this.props.income.amount*this.props.income.needs/100;
        var caculatedWants = this.props.income.amount*this.props.income.wants/100;
        var caculatedSaving = this.props.income.amount*this.props.income.saving/100;
        return (
     
              <Card>
 
    <CardTitle title="Summary" />
    <CardText>
      Your {this.props.income.frequency} Income: {this.props.income.amount}<br/>
      Your Income Split:<br/>
      Needs is  {this.props.income.amount}*{this.props.income.needs}% ={caculatedNeeds}<br/>
      Wants is  {this.props.income.amount}*{this.props.income.wants}%={caculatedWants}<br/>
      Saving is  {this.props.income.amount}*{this.props.income.saving}%={caculatedSaving}<br/>
      Category: 
    </CardText>
  </Card>
                     
                   
               
        
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