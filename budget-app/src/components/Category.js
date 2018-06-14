import React from 'react'
import PropTypes from 'prop-types'

const Category = ({ category,onClick}) => (
    <li>
        Name:{category.name}    |   Budget:{category.budget} 
        <button onClick={onClick}>X</button>
    </li>
)

Category.prototype = {
    onClick: PropTypes.func.isRequired
  }

  export default Category;