import { useEffect, useState } from "react"
import defaultImage from './1-muntii-carpati.jpeg'

const headers = {
    'Authorization': 'Client-ID QAJFL5kD2duuBVc6J8uJDOrSsEWtC4eM6zZt4X3nvJk'
}

const getImage = () => fetch('https://api.unsplash.com/photos/random', {headers})
    .then(response => response.json())
    .then(response => response.urls.full)

export const Image = () => {
    const [image, setImage] = useState('')

    useEffect(() => {
        getImage()
            .then(url => setImage(url))
            .catch(() => setImage(defaultImage))
    }, [setImage])

    return <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <img src={image} className="image" />
    </div>
}