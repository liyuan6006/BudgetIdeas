import React from 'react';
import { connect } from 'react-redux';
import { addIncome, getIncome, update } from '../actions/income';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
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

class SetPercentage extends React.Component {
    constructor(props) {
        super(props);
    }

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
        const { classes } = this.props;
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


//SetPercentage = withStyles(styles)(connect(SetPercentage)
export default connect(mapStateToProps, mapDispatchToProps)(SetPercentage)