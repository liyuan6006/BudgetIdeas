import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SetIncome from '../containers/SetIncome';
import SetPercentage from '../containers/SetPercentage';
import SetCategories from '../containers/SetCategories';
/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class SetUpStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: '12px 0' }}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const { finished, stepIndex } = this.state;

    return (
      <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Set up Income</StepLabel>
            <StepContent>
              <SetIncome history={this.props.history}/>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Set up Categories</StepLabel>
            <StepContent>
              <SetCategories history={this.props.history}/>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Set up percentage</StepLabel>
            <StepContent>
              <SetPercentage history={this.props.history}/>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          // <p style={{margin: '20px 0', textAlign: 'center'}}>
          //   <a
          //     href="#"
          //     onClick={(event) => {
          //       event.preventDefault();
          //       this.setState({stepIndex: 0, finished: false});
          //     }}
          //   >
          //     Click here
          //   </a> to reset
          // </p>
          <FlatButton label="Reset" primary={true}
            onClick={(event) => {
              event.preventDefault();
              this.setState({ stepIndex: 0, finished: false });
            }}
          >

          </FlatButton>
        )
        }
      </div>
    );
  }
}

export default SetUpStepper;