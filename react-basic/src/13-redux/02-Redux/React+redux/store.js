import {
    createStore
} from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

// console.log();
export default store