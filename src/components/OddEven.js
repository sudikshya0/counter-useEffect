import React, { useState, useEffect }from 'react'
import '../App.css'
const OddEven = ({count}) => {
    const [numtype, setNumType] = useState('');
    useEffect(()=>{
        setNumType(count%2===0?"even":"odd")
    },[count])
  return (
    <div className='type-container'>
        <h2>Count is: {numtype}</h2>
    </div>
  )
}

export default OddEven