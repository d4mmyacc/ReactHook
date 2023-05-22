import React, {useState}from 'react'

const RulesHooks = () => {
    const [val, setval] = useState('hey there')
  return (
    <h1>{val}</h1>
  )
}

export default RulesHooks