import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
  root:{
    display: 'flex',

  },
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

class CategoryRadioButtons extends React.Component {

  handleChange = id => event => {
    this.setState({
      selectedValue: event.target.value,
      id: event.target.value
    });
    var category = { id: id, type: event.target.value }
    this.props.onChange(category)
  };



  render() {

    return (
      <div style={styles.root}>
        <RadioButtonGroup name="shipSpeed" defaultSelected="needs">
          <RadioButton
            value="needs"
            label="needs"
            style={styles.radioButton}
          />
          <RadioButton
            value="wants"
            label="wants"
            style={styles.radioButton}
          />
          <RadioButton
            value="saving"
            label="saving"


            style={styles.radioButton}
          />
        </RadioButtonGroup>
      </div>




      // <div >
      //   <RadioButton
      //     checked={this.state.selectedValue === 'needs'}
      //     onChange={this.handleChange(this.props.category.id)}
      //     value="needs"
      //     name="radio-button-demo"
      //     aria-label="A"
      //   />
      //   <RadioButton
      //     checked={this.state.selectedValue === 'wants'}
      //     onChange={this.handleChange(this.props.category.id)}
      //     value="wants"
      //     name="radio-button-demo"
      //     aria-label="B"
      //   />
      //   <RadioButton
      //     checked={this.state.selectedValue === 'saving'}
      //     onChange={this.handleChange(this.props.category.id)}
      //     value="saving"
      //     name="radio-button-demo"
      //     aria-label="C"
      //   />
      // </div>
    );
  }
}



export default CategoryRadioButtons;