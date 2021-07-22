const reducer = (state,action)=>{

    switch(action.type){
        case "CHANGE":
            return {
                ...state,
                input:action.payload
            }
        case "SUBMIT":
            const {list} = {...state}
            list.push(action.payload)
            console.log(list)
            return {
                ...state, // input:'', list:['asdfasdf'] , visible 
                input:'',
                list:list
            }
        case "DELETE":
            return {
                ...state,
                list: state.list.filter( (v,k) => {
                    return k !== action.payload
                } )
            }
        case "VISIBLE":
            return {
                ...state,
                visible:action.payload
            }
        case "VISIBLEENTER":
            const newlist = [...state.list]
            newlist[action.payload.key] = action.payload.content
    
            return {
                ...state,
                list:newlist,
                visible:Infinity
            }
    }
}


export default reducer