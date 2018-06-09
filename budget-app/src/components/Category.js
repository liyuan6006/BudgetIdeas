import React from 'react'
import PropTypes from 'prop-types'

const Category = ({ onClick, deleted, text }) => (
    <li
        onClick={onClick}
        style={{ textDecoration: deleted ? 'line-through' : 'none' }}
    >
        {text}
    </li>
)

Category.propTypes = {
    onClick: PropTypes.func.isRequired,
    deleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

  export default Category;