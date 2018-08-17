import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SetIncome from '../containers/SetIncome';
import SetupSavings from '../containers/SetupSavings';
import SetupNeedsAndWants from '../containers/SetupNeedsAndWants';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
const tutorialSteps = [
  {
    label: '1. Set Income',
    content: <SetIncome />
  },
  {
    label: '2. Set savings',
    content: <SetupSavings />
  },
  {
    label: '3. Set Categories',
    content: <SetupNeedsAndWants />
  }

];

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    
},
  header: {
    //display: 'flex',
    // alignItems: 'center',
    // height: 50,
    //paddingLeft: theme.spacing.unit * 4,
    //marginBottom: 20,
    //backgroundColor: theme.palette.background.default,
  }
});

class SetUpStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Card>
          <CardContent>
            <Paper square elevation={0} className={classes.header}>
              <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            {tutorialSteps[activeStep].content}
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={
                <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Back
            </Button>
              }
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

SetUpStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SetUpStepper);