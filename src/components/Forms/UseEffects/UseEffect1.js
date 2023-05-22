import React,{useState, useEffect} from 'react'

const UseEffect1 = () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
   document.title= `Chats (${count})`
   console.log("i'm first one");
    }, [count])

 useEffect(()=>{
  console.log('second one');
    }, [])

console.log('hello outside');



  return (
    <div>
      <h1>{count}</h1>
      <button className='btn' onClick={()=> setCount(count+1)}>Click</button>
    </div>
  )
}

export default UseEffect1