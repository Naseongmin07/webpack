import React, {useContext} from 'react'
import Store from './Store/context'

const CommentList = () => {

    const{state} = useContext(Store)
    const list = state.list
    let result = []

    list.forEach((v,k)=>{
        result.push(
            <ul key={k}>
                <li>{v.userid}</li>
                <li>{v.usercontent}</li>
                <li>{v.userdate}</li>
            </ul>
        )
    })
    return (<li>{result}</li>)
}


export default CommentList