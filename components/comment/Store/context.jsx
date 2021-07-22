import {createContext} from 'react'


const initialState = {
    input:'',
    list:[],
    visible:Infinity,
}

const Store = createContext(initialState)

export default Store