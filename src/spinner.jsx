import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { successSlice } from "./success-slice";

const useOnChange = () => {
    const dispatch = useDispatch()

    return useCallback(() => {
        dispatch(successSlice.actions.set(true))
    }, [dispatch])
}

export const Spinner = () => {
    const onChange = useOnChange()

    useEffect(() => {
        setTimeout(onChange, 2000)
    }, [onChange])

    return <div className="d-flex w-100 h-100 justify-content-center align-items-center flex-column container">
        <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }} />
    </div>;
} 