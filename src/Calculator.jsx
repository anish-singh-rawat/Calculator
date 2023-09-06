import React from 'react'
import './Calculator.css'
import { useState } from 'react'

function Calculator() {
    let [result, setResult] = useState(" ");
    
    let clickHeandle = (event)=>{
        setResult(result.concat(event.target.value))
    }

    let clear = ()=>{
        setResult('')
      }

    let equall = ()=>{
        setResult(eval(result).toString())
    }

  return (
    <>
    <div className="calculator"> 

        <input type="text" placeholder='0' id='answer' onChange={()=>{}} value={result} />
        <input type="button" value="9" className='button' onClick={clickHeandle} />
        <input type="button" value="8" className='button' onClick={clickHeandle}/>
        <input type="button" value="7" className='button' onClick={clickHeandle}/>
        <input type="button" value="6" className='button' onClick={clickHeandle}/>
        <input type="button" value="5" className='button' onClick={clickHeandle}/>
        <input type="button" value="4" className='button' onClick={clickHeandle}/>
        <input type="button" value="3" className='button' onClick={clickHeandle}/>
        <input type="button" value="2" className='button' onClick={clickHeandle}/>
        <input type="button" value="1" className='button' onClick={clickHeandle}/>
        <input type="button" value="0" className='button' onClick={clickHeandle}/>
        <input type="button" value="." className='button' onClick={clickHeandle}/>
        <input type="button" value="+" className='button' onClick={clickHeandle}/>
        <input type="button" value="-" className='button' onClick={clickHeandle}/>
        <input type="button" value="*" className='button' onClick={clickHeandle}/>
        <input type="button" value="/" className='button' onClick={clickHeandle}/>
        <input type="button" value="%" className='button' onClick={clickHeandle}/>
        <input type="button" value="(" className='button' onClick={clickHeandle}/>
        <input type="button" value=")" className='button' onClick={clickHeandle}/>
        <input type="button" value="=" className='button' onClick={equall}/>
        <input type="button" value="Clear" className='button' onClick={clear}/>

    </div>
    </>
  )
}

export default Calculator