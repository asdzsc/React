import {
    createStore,
    applyMiddleware
} from 'redux'

//reducer 纯函数
import reducer from './reducer'

// thunk 中间件
import thunk from 'redux-thunk'

// 中间件一旦挂载 dispatch 就会被中间件拦截下来
const middleware = applyMiddleware(thunk)

export default createStore(reducer, middleware)