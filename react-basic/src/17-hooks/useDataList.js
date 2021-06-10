import {
    useState,
    useEffect
} from 'react'

const useDataList = (id) => {
    // useState 实现响应式
    let [list, setList] = useState([])

    useEffect(() => {
        setTimeout(() => {
            id === 1 ? setList(['a', 'b', 'c']) : setList(['e', 'f', 'g'])
        }, 1000)

    }, [id])
    return list
}

export default useDataList