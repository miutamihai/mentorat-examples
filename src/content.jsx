import { useAppContext } from "./context"
import { Form } from "./form"
import { Spinner } from "./spinner"

export const Content = () => {
    const {submitted} = useAppContext()

    return submitted
        ? <Spinner />
        : <Form />
}
