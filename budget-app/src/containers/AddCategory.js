import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions/category'

let AddCategroy = ({ dispatch }) => {
    let textInput = React.createRef();
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!textInput.current.value.trim()) {
                    return
                }
                var newCategory = {
                    name: textInput.current.value,
                    budget: '100'

                }
                dispatch(addCategory(newCategory))
                textInput.current.value = ''
            }}
            >
                <input
                    ref={textInput}
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