import React from 'react'
import { useState } from 'react'

const Greeting = () => {

  const [changeText, setchangeText] = useState(false);  
  return (
<>
    <h1 data-testid= "title">Hello World</h1>
    {!changeText && <p> Welcome Back</p>}
    { changeText && <p> See you soon</p>}
    <button onClick ={() => setchangeText(prevState => !prevState)}>Change Text</button>
</>
  )
}

export default Greeting