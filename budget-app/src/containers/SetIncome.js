import React from 'react';
import { connect } from 'react-redux';
import { addIncome, getIncome, update } from '../actions/income';

import TextField from 'material-ui/TextField';


import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



const styles = {
    customWidth: {
      width: 150,
    },
  };

class SetIncome extends React.Component {

    componentDidMount() {
        this.props.getIncome();
    }

    handleAmountChange = id => event => {
          var  amount = event.target.value;
          var nodePath =id+"/amount";
        this.props.updateIncome(nodePath,amount);
    };

    handleFrequencyChange = id => event => {
        var frequency = event.target.innerText;
        var path =id+"/frequency";
        this.props.updateIncome(path,frequency);
    };

    render() {

        return (
            <div >
                <TextField
                    value={this.props.income.amount}
                    type="number"
                    floatingLabelText="Amount"
                    errorText=""
                    onChange={this.handleAmountChange(this.props.income.id)}
                    style={styles.customWidth}
                />
                <br />
                <SelectField
                    floatingLabelText="Frequency"
                    value={this.props.income.frequency}
                    onChange={this.handleFrequencyChange(this.props.income.id)}
                    style={styles.customWidth}
                >
                    <MenuItem value="Yearly" primaryText="Yearly" />
                    <MenuItem value="Monthly" primaryText="Monthly" />
                    <MenuItem value="Weekly" primaryText="Weekly" />
                </SelectField>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        income: state.income
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIncome: newIncome => {
            dispatch(addIncome(newIncome))
        },
        getIncome: () => {
            dispatch(getIncome())
        },
        updateIncome: (nodePath, value) => {
            dispatch(update(nodePath,value))
        }
    }
}

SetIncome = connect(mapStateToProps, mapDispatchToProps)(SetIncome)
export default SetIncome