import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions/category'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });

  
let AddCategroy = ({ dispatch }) => {
    let textCategoryName = React.createRef();
    let textBudget = React.createRef();
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!textCategoryName.current.value.trim()) {
                    return
                }
                var newCategory = {
                    name: textCategoryName.current.value,
                    budget: textBudget.current.value
                }
                dispatch(addCategory(newCategory))
                textCategoryName.current.value = ''
                textBudget.current.value = ''
            }}
            >
                <input
                    ref={textCategoryName}
                />
                 <input
                    ref={textBudget}
                />
                <Button type="submit" variant="fab" color="primary" aria-label="add">
                <AddIcon />
                </Button>
            </form>
        </div>
    )

}

AddCategroy = connect()(AddCategroy)
export default AddCategroy