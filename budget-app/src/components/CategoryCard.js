import React from 'react';
import { List, ListItem } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import Chip from 'material-ui/Chip';
import { connect } from 'react-redux';
import { getCategories, update } from '../actions/category';

import CategoryRadioButtons from '../components/CategoryRadioButtons';
import { blue100, red100, green100 } from 'material-ui/styles/colors';
import Tooltip from '@material-ui/core/Tooltip';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  radioButton: {
    marginBottom: 16,
    '&$checked': {
      color: red100
    }
  },
};

class CategoryCard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

   handleRequestDelete=()=> {
    this.props.onDelete()
  }
  
  handleClick = (path, oldValue) => {
    var newValue;
    if (oldValue === 'needs') newValue = 'wants';
    if (oldValue === 'wants') newValue = 'needs'
    this.props.onClick(path, newValue);
  }

  render() {
    return (
      <div >
        <Card>
          <CardText style={styles.wrapper}>
            {
              this.props.categories.map(obj => {
                if (obj.type !== 'saving')
                  return (
                    <Tooltip title={obj.type} placement="top-start">
                      <Chip id={obj.id}
                         backgroundColor={obj.type == 'needs' ? red100 : obj.type == 'saving'? green100 :blue100}
                         onRequestDelete={this.handleRequestDelete}
                         onClick={()=>this.handleClick(obj.id + '/type', obj.type)}
                         style={styles.chip}
                      >
                        {obj.name}
                      </Chip>
                    </Tooltip>
                  )
              }
              )
            }
          </CardText>
          <CardActions>
            <RaisedButton label="Add" onClick={this.handleOpen} />
            <Dialog
              title="Add Category"
              actions={[
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onClick={this.handleClose}
                />,
                <FlatButton
                  label="Submit"
                  primary={true}
                  onClick={this.handleClose}
                />,
              ]}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <TextField
                hintText="Category name"
              />
              <RadioButtonGroup name="shipSpeed" defaultSelected="needs">
              <RadioButton
                value="needs"
                label="Needs"
                style={styles.radioButton}
              />
              <RadioButton
                value="wants"
                label="Wants"
                style={styles.radioButton}
              />
               </RadioButtonGroup>
            </Dialog>
          </CardActions>
        </Card>
      </div>
    )
  }
}



export default CategoryCard;