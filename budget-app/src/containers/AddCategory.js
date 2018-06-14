import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions/category'

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
                <button type="submit">
                    Add category
            </button>
            </form>
        </div>
    )

}

AddCategroy = connect()(AddCategroy)
export default AddCategroy