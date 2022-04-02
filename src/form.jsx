import { useDispatch } from "react-redux";
import { submittedSlice } from "./submitted-slice";

const useOnClick = () => {
    const dispatch = useDispatch()

    return () => {
        dispatch(submittedSlice.actions.set(true))
    }
}

export const Form = () => {
    const onClick = useOnClick()

    return <div className="d-flex w-100 h-100 justify-content-center align-items-center flex-column container">
        <h3>Login</h3>
        <input type="text" className="form-control mt-3" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        <input type="password" className="form-control mt-3" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
        <button className="btn btn-primary mt-3" style={{ width: '20%' }} onClick={onClick}>
            Login
        </button>
    </div>;
}