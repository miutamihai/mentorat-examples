import './App.css';
import { Content } from './content'
import { useState, useEffect } from 'react'

const buildClassname = counter => `App ${counter % 2 === 0 ? "blue" : "red"}`

const makeHandleChange = setPassword => {
  console.log('Making function')

  return event => {
    console.log(event.target)

    return setPassword(event.target.value);
  };
}

export const App = () => {
  const [counter, setCounter] = useState(0)
  const [password, setPassword] = useState("")

  useEffect(() => {
    console.log(password)
  }, [password])

  return <div>
    <Content />
  </div>
}

