import { Image } from "./image"
import { Content } from "./content"
import { Success } from "./success"
import { useAppContext } from "./context"

export const App = () => {
    const {success} = useAppContext()

    return <div className={'d-flex w-100 h-100'}>
        <Image />
        {!success && <Content />}
        {success && <Success  />}
    </div>
}