import React from 'react'
import Category from '../components/Category'
import {connect} from 'react-redux';
import {deleteCategory,getCategories} from '../actions/category';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class CategoryList extends React.Component {

    componentDidMount(){
        this.props.getCategories();
    }
   
    handleAdd = () => {
        this.props.history.push('/addCategory')
    }

    render() {

        return (
            <div>
                {this.props.categories.map(category =>
                    <Category
                        key ={category.id}
                        category ={category}
                        onClick={()=>this.props.onCategoryClick(category.id)}
                    />)
                }
                   <Button variant="fab" color="primary" aria-label="add" >
                    <AddIcon onClick={() => this.handleAdd()} />
                </Button>
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