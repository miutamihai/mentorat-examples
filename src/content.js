import { useState } from 'react';

const url = 'https://devnet-api.elrond.com/transaction/40435228bf3cec5f9a4489bbb158d18adbb8af80438b02b2cae169bbf2438b33'

const callApi = setMessage => fetch(url)
  .then(response => response.json())
  .then(body => setMessage(body.data.transaction.receiver))
  .catch(() => console.log('failed'))

const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=vX9ypBYZqj88J6WYHcMLwd2RtCuE4BYNIKDa252V'

const callApi2 = setImage => fetch(nasaUrl)
  .then(response => response.json())
  .then(body => setImage(body.url))

export const Content = () => {
  const [message, setMessage] = useState("Not called yet")
  const [image, setImage] = useState('')

  return <div>
    <div style={{display: 'flex', width: '100vw', height: '80vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <img alt="Nasa image" src={image} />
      {message}
    </div>
    <button onClick={() => {
      callApi(setMessage)
      callApi2(setImage)
    }}>Click me</button>
  </div>;
} 