import React from 'react';
import { connect } from 'react-redux';
import { addIncome,getIncomes, update } from '../actions/income';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';
import Period from '../components/Period';
import CategoryDialog from '../components/CategoryDialog';
import { withStyles } from '@material-ui/core/styles';
import IncomePercentage from '../components/IncomePercentage';
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });
  
class SetPercentage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: '1000',
            period:'month'
        };
      
    }



    handleSave = () => {
        // var newIncome = {
        //     amount: this.state.amount,
        //     period: this.state.period,
        // }
        // var incomeId = this.props.incomes&&this.props.incomes.id;
        // if  (incomeId){
        //     this.props.update(incomeId,newIncome);
        // }else{
        //     this.props.addIncome(newIncome);
        // }
       console.log('save')
        
    };

    render() {
        const { classes } = this.props;
        return (

                <IncomePercentage handleSave = {()=>this.handleSave()}/>
           
        )
    }
}

SetPercentage = withStyles(styles)(SetPercentage)
export default SetPercentage