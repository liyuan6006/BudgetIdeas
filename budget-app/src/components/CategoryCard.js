import React from 'react';
import Chip from 'material-ui/Chip';
import { blue100, red100, green100 } from 'material-ui/styles/colors';
import { Card, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import AddCategoryDialog from './AddCategoryDialog';

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
    this.state = {
      open: false,
      selectedId: '',
      dialogTitle: ''
    };
  }

  handleDialogClose = () => {
    this.setState({ open: false });
  };

  handleItemDelete = (id, dialogTitle) => {
    //open dialog and set state for delete
    this.setState({ open: true, selectedId: id, dialogTitle: dialogTitle });
  }
  handleItemClick = (path, value) => {
    this.props.onItemClick(path, value)
  }

  handleAddSubmit = (value) => {
    this.props.onAdd(value);
  }

  handleDeleteSubmit = () => {
    this.props.onItemDelete(this.state.selectedId);
    this.setState({ open: false });
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
                    <Chip id={obj.id}
                      backgroundColor={obj.type === 'needs' ? red100 : obj.type === 'saving' ? green100 : blue100}
                      onRequestDelete={() => this.handleItemDelete(obj.id, obj.name)}
                      onClick={() => this.handleItemClick(obj.id + '/type', obj.type)}
                      style={styles.chip}
                    >
                      {obj.name}
                    </Chip>
                  )
              }
              )
            }
          </CardText>
          <CardActions>
            <AddCategoryDialog onSubmit={this.handleAddSubmit} />
          </CardActions>
        </Card>

        <Dialog
          title="Delete Category"
          onRequestClose={this.handleDialogClose}
          actions={[<FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleDialogClose}

          />,
          <FlatButton
            label="Submit"
            primary={true}
            onClick={this.handleDeleteSubmit}
          />]}
          modal={false}
          open={this.state.open}
        >
          Are you sure you want to delete <b>{this.state.dialogTitle}</b>?
        </Dialog>

      </div>
    )
  }
}



export default CategoryCard;