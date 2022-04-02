import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { successSlice } from "./success-slice"
import { submittedSlice } from "./submitted-slice"


const useReset = () => {
    const dispatch = useDispatch()

    return () => {
        dispatch(successSlice.actions.reset())
        dispatch(submittedSlice.actions.reset())
    }
}

export const Success = () => {
    const reset = useReset()

    return <div className="d-flex w-100 h-100 justify-content-center align-items-center flex-column container">
        <FontAwesomeIcon icon={faCheckCircle} size="5x" style={{ color: 'green' }} />
        <h3 className="mt-3">Success</h3>
        <button className="btn btn-primary" onClick={reset}>
            Go back
        </button>
    </div>
}