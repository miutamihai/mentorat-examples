import { useSelector } from "react-redux"
import { Form } from "./form"
import { Spinner } from "./spinner"

const useSubmitted = () => useSelector(state => state.submitted)

export const Content = () => {
    const submitted = useSubmitted()

    return submitted
        ? <Spinner />
        : <Form />
}
