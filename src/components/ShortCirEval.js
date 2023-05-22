import React from 'react'

const ShortCirEval = () => {
    const [demo, setDemo] = React.useState("")
  return (
    <div>
        <h1 className='h1style'>{demo || 
        <>
        <h1 className='h1style'>hello world</h1>
        <p>whats going on</p>
        </> 
        }</h1>
        <h1 className='h1style'>{demo && "thapa"}</h1>
    </div>
  )
}

export default ShortCirEval