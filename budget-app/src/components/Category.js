import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const Category = ({ category,onClick}) => (
    <li>
        Name:{category.name}    |   Budget:{category.budget} 
      
        <Button variant="fab"  aria-label="delete" >
        <DeleteIcon   onClick={onClick}/>
      </Button>
    </li>
)

Category.prototype = {
    onClick: PropTypes.func.isRequired
  }

  export default Category;