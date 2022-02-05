import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const reset = (setSuccess, setSubmitted) => () => {
    setSubmitted(false)
    setSuccess(false)
}

export const Success = ({setSuccess, setSubmitted}) => <div className="d-flex w-100 h-100 justify-content-center align-items-center flex-column container">
    <FontAwesomeIcon icon={faCheckCircle} size="5x" style={{color: 'green'}} />
    <h3 className="mt-3">Success</h3>
    <button className="btn btn-primary" onClick={reset(setSuccess, setSubmitted)}>
        Go back
    </button>
</div>