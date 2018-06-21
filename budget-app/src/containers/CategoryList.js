import React from 'react'
import Category from '../components/Category'
import {connect} from 'react-redux'
import {deleteCategory,getCategories} from '../actions/category'
import AddCategory from './AddCategory'
class CategoryList extends React.Component {

    componentDidMount(){
        this.props.getCategories();
    }
    render() {
        return (
            
            <ul>
                <AddCategory/>
                {this.props.categories.map(category =>
                    <Category
                        key ={category.id}
                        category ={category}
                        onClick={()=>this.props.onCategoryClick(category.id)}
                        //onClick={()=>this.props.onCategoryClick(category.id)}
                    />)
                }
            </ul>)
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