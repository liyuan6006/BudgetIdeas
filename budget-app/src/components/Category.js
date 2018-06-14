import React from 'react'
import PropTypes from 'prop-types'

const Category = ({ category,onClick}) => (
    <li>
        Name:{category.name}    |   Budget:{category.budget}     
        <a href="" onClick={onClick}>--X</a>
    </li>
)

Category.prototype = {
    onClick: PropTypes.func.isRequired
  }

  export default Category;