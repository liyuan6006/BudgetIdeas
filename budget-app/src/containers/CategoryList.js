import React from 'react'
import Category from '../components/Category'
import {connect} from 'react-redux'
import {deleteCategory,getCategories} from '../actions/category'
import AddBudget from './AddBudget'
class CategoryList extends React.Component {

    componentDidMount(){
        this.props.getCategories();
    }
    render() {
        return (
            <div>
                <AddBudget/>
                {this.props.categories.map(category =>
                    <Category
                        key ={category.id}
                        category ={category}
                        onClick={()=>this.props.onCategoryClick(category.id)}
                        //onClick={()=>this.props.onCategoryClick(category.id)}
                    />)
                }
            </div>)
    }
}

const mapStateToProps = state =>{
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onCategoryClick: id=>{
            dispatch(deleteCategory(id))
        },
        getCategories:()=>{
            dispatch(getCategories())
        }
    }
}

CategoryList = connect(mapStateToProps,mapDispatchToProps)(CategoryList)
export default CategoryList