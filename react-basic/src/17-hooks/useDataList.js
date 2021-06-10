import {
    useState,
    useEffect
} from 'react'

const useDataList = (id) => {

    let [list, setList] = useState([])

    useEffect(() => {
        setTimeout(() => {
            id === 1 ? setList(['a', 'b', 'c']) : setList(['e', 'f', 'g'])
        }, 1000)

    }, [id])
    return list
}

export default useDataList