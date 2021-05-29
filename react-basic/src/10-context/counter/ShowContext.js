import {
    createContext
} from 'react'

const {
    Provider,
    Consumer
} = createContext({
    show: 'false'
})

export {
    Provider,
    Consumer
}