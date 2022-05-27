import React from 'react'
import { useState } from 'react'

export default function App() {

  const [Count, setCount] = useState(0);

  const countff = ()=>{ 
    setCount(prev=>prev+1)
  }
  const countff1 = ()=>{ 
    setCount(prev=>prev-1)
  }

  return (
    <div>
      <button onClick={ countff1 }>-</button>
      <span>{Count}</span>
      <button onClick={ countff }>+</button>
    </div>
  )
}
