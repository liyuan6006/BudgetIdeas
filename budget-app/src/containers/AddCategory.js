import React from 'react'
import {connect} from 'react-redux'
import {addCategory} from '../actions/category'

let AddCategroy =({dispatch})=>{
    let input
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(addCategory(input.value))
                input.value=''
            }}
            >
            <input
            ref={node=>{
                input =node
            }}
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