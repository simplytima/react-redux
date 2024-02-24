import { useDispatch } from 'react-redux'

export default ({action,data, children}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({
            type: action,
            payload: data
        })
    }

    return <button onClick={handleClick}>{children}</button>
}