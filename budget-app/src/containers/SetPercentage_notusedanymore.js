import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {  getIncome, updateIncome } from '../actions/income';
import TextField from '@material-ui/core/TextField';

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
 

    componentDidMount() {
        if(!this.props.income){
            this.props.getIncome();
        }
    }

    handleNeedsChange = id => event => {
        var  amount = event.target.value;
        var nodePath =id+"/needs";
      this.props.updateIncome(nodePath,amount);
  };

  handleWantsChange = id => event => {
      var frequency = event.target.value;
      var path =id+"/wants";
      this.props.updateIncome(path,frequency);
  };

  handleSavingChange = id => event => {
    var frequency = event.target.value;
    var path =id+"/saving";
    this.props.updateIncome(path,frequency);
};

    render() {

        return (
            <div>
                <TextField
                    value={this.props.income.needs}
                    type="number"
                    floatingLabelText="Needs"
                    errorText=""
                    style={styles.customWidth}
                    onChange={this.handleNeedsChange(this.props.income.id)}
                />%
                <br />
                <TextField
                    value={this.props.income.wants}
                    type="number"
                    floatingLabelText="Wants"
                    errorText=""
                    style={styles.customWidth}
                    onChange={this.handleWantsChange(this.props.income.id)}
                />%
                <br />
                <TextField
                    value={this.props.income.saving}
                    type="number"
                    floatingLabelText="Saving"
                    errorText=""
                    style={styles.customWidth}
                    onChange={this.handleSavingChange(this.props.income.id)}
                />%
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
        getIncome: () => {
            dispatch(getIncome())
        },
        updateIncome: (nodePath, value) => {
            dispatch(update(nodePath,value))
        }
    }
}

SetPercentage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SetPercentage))