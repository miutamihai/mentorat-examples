import { Form } from "./form"
import { Spinner } from "./spinner"

export const Content = ({submitted, setSubmitted, setSuccess}) => submitted 
    ? <Spinner setSuccess={setSuccess} /> 
    : <Form setSubmitted={setSubmitted} />