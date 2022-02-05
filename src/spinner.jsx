import { useEffect } from "react";

export const Spinner = ({setSuccess}) => {
    useEffect(() => {
        setTimeout(() => setSuccess(true), 2000)
    }, [setSuccess])

    return <div className="d-flex w-100 h-100 justify-content-center align-items-center flex-column container">
        <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }} />
    </div>;
} 