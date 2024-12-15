import React, { useEffect, useState } from 'react'

function useCount() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=count+ "His on Button"
    },[count])
    function add()
    {
        setCount(count+1)
    }
    function minus()
    {
        setCount(count-1)
    }
    function reset()
    {
        setCount(0)
    }
  return (
    [count,add,minus,reset]
  )
}

export default useCount