import { Image } from "./image"
import { useState } from "react"
import { Content } from "./content"
import { Success } from "./success"

export const App = () => {
    const [submitted, setSubmitted] = useState(false)
    const [success, setSuccess] = useState(false)

    return <div className={'d-flex w-100 h-100'}>
        <Image />
        {!success && <Content submitted={submitted} setSubmitted={setSubmitted} setSuccess={setSuccess} />}
        {success && <Success setSubmitted={setSubmitted} setSuccess={setSuccess} />}
    </div>
}