import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Category from '../components/Category'
import {connect} from 'react-redux'
import {deleteCategory} from '../actions/category'

class CategoryList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.categories.map(category =>
                    <Category
                        key={category.id}
                        {...category}
                        onClick={() => { this.props.onCategroyClick(category.id) }}
                    />)
                }
            </ul>)
    }
}

CategoryList.PropTypes={
    categories:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        deleted:PropTypes.bool.isRequired,
        text:PropTypes.string.isRequired
    }).isRequired).isRequired,
    onCategroyClick:PropTypes.func.isRequired
}

const mapStateToProps = state =>{
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onCategroyClick: id=>{
            dispatch(deleteCategory(id))
        }
    }
}

CategoryList = connect(mapStateToProps,mapDispatchToProps)(CategoryList)
export default CategoryList