import React from 'react'

const UseStateObject = () => {
    const [myObject, setmyObject] = React.useState({
        myName: 'Sagar', myAge:22 , myDegree:'Bachelor'
    })
    const changeData=()=>{
        setmyObject({...myObject ,myName: 'Hari'})
    } //three dots(...) lets you change or modify individual data inside object
    return (
        <div>
            <h1>Name:{myObject.myName}, Age:{myObject.myAge}, Degree: {myObject.myDegree}</h1>
            <button className='btn' onClick={changeData}>Update</button>
        </div>
    )
}

export default UseStateObject