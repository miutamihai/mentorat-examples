import { Image } from "./image"
import { Content } from "./content"
import { Success } from "./success"
import { useSelector } from "react-redux"

const useSuccess = () => useSelector(state => state.success)

export const App = () => {
    const success = useSuccess()

    return <div className={'d-flex w-100 h-100'}>
        <Image />
        {!success && <Content />}
        {success && <Success  />}
    </div>
}