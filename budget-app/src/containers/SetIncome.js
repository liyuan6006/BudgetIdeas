import React from 'react';
import { connect } from 'react-redux';
import { addIncome,getIncomes, update } from '../actions/income';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';
import Period from '../components/Period';
import CategoryDialog from '../components/CategoryDialog';
import { withStyles } from '@material-ui/core/styles';

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
  
class SetIncome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: '1000',
            period:'month'
        };
      
    }

    componentDidMount(){
        this.props.getIncomes();
    }

    handleSelect = name=>value => {
        this.setState({
            [name]: value
        });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSave = () => {
        var newIncome = {
            amount: this.state.amount,
            period: this.state.period,
        }
        var incomeId = this.props.incomes&&this.props.incomes.id;
        if  (incomeId){
            this.props.update(incomeId,newIncome);
        }else{
            this.props.addIncome(newIncome);
        }
       
        
    };

    render() {
        const { classes } = this.props;
        return (
            <div >
                <TextField
                    required
                    id="amount"
                    label="Amount"
                   
                    defaultValue={this.state.amount}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    onChange={this.handleChange('amount')}
                />
                <br />
                <Period onSelect={this.handleSelect('period')}/>
                <br />
                <Button variant="contained" size="small" onClick={() => this.handleSave()} >
                    <Save />
                    Save
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        incomes: state.incomes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIncome: newIncome => {
            dispatch(addIncome(newIncome))
        },
        getIncomes:()=>{
            dispatch(getIncomes())
        },
        update:(id,newIncome)=>{
            dispatch(update(id,newIncome))
        }
    }
}

SetIncome = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SetIncome))
export default SetIncome