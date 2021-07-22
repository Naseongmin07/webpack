import React,{useContext,useState} from 'react'

import Store from './Store/context'

const CommentForm = ()=>{
    const {state,dispatch} = useContext(Store)
    const [input,setInput] = useState('')
    

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        dispatch({ type:'SUBMIT', payload:{userid:'nsm',usercontent:input, userdate:'2020-07-01'}})
        setInput('')
    }

    return (
        <div>
            <input type="text" className="content" placeholder = "댓글을 입력해주세요" value={input} onChange={handleChange}></input>
            <button className="btn" onClick = {handleSubmit}>등록</button>
        </div>
    )
}

export default CommentForm