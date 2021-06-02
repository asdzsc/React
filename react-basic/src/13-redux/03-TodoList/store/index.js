import {
    createStore,
    applyMiddleware
} from 'redux'

//reducer 纯函数
import reducer from './reducer'

// thunk 中间件
import thunk from 'redux-thunk'


const middleware = applyMiddleware(thunk)
export default createStore(reducer, middleware)