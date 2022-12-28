import React, {useState} from 'react'
import OddEven from './OddEven';
import '../App.css'
const Counter = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
        <div className='count-container'>
            <div className='count'>
                <h1>Counter: {count} </h1>
                <button onClick={()=>setCount((e)=>e+1)}>+</button>
                <button onClick={()=>setCount((e)=>e>0?e-1:0)}>-</button>
            </div>
            <OddEven count={count}/>
        </div>
        
    </div>
  )
}

export default Counter