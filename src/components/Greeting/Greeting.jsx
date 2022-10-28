import React from 'react'
import { useState } from 'react'

const Greeting = () => {

  const [changeText, setChangeText] = useState(false);

  return (
    <>
      <h1 data-testid="title"> Hello world </h1>
      { !changeText && <p> Welcome Back</p> }
      { changeText && <p> See you soon </p> }
      <button onClick={()=> setChangeText(prevState => !prevState)}> Change Text</button>
    </>
     )
}

export default Greeting