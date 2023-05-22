import React,{useState, useEffect} from 'react'

const UseEffect2 = () => {

    const [width, setWidth] = useState(window.screen.width)

    const actualWidth=()=>{
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', actualWidth)
        // when we resize the window the function actualWidth runs.
        // console.log('added');

        //useEffect cleanup function
        return () => {
          window.removeEventListener('resize',actualWidth)
          // console.log('removed');
        }
    })


      return (
    <div>
        <p>The actual size of the window is:</p>
        <h1>{width}</h1>
    </div>
  )
}

export default UseEffect2