import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SetIncome from '../containers/SetIncome';
import SetPercentage from '../containers/SetPercentage';
import SetCategories from '../containers/SetCategories';
import SetupSummary from '../containers/SetupSummary';
/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class SetUpStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <div> Set up your income and how offen<br/> <SetIncome history={this.props.history}/></div>;
      case 1:
        return <div> Split your into <br/> <SetPercentage history={this.props.history}/></div>;
      case 2:
        return <div> Set up your Category<br/> <SetCategories history={this.props.history}/></div>;
      default:
        return <div> Set up your income and how offen<br/>  <SetIncome history={this.props.history}/></div>;
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
      
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Set up Income</StepLabel>
          </Step>
          <Step>
            <StepLabel>Split Income</StepLabel>
          </Step>
          <Step>
            <StepLabel>Set up Category</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <SetupSummary/>
              <br/>
              <RaisedButton label="Reset" primary={true}  
              onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}/>
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SetUpStepper;