import React, {useState} from 'react'

const UseStateArray = () => {
   const biodata = [
        {
            id: 0, myName: "Manoj", mAge: "20"
        },
        {
            id: 1, myName: "Sagar", mAge: "21"
        },
        {
            id: 2, myName: "Sudhan", mAge: "22"
        },
        {
            id: 3, myName: "Binod", mAge: "23"
        }
    ]

    const [MyArray, setMyArray] = useState(biodata)

    const clearAll=()=>{
        setMyArray([]);
    }
    return (
        <>
        {
            MyArray.map((curElm) => <h1 key={curElm.id}>  Name: {curElm.myName} , Age: {curElm.mAge} </h1>)
        }
        <button className="btn" onClick={clearAll}>Clear</button>
        </>
    )
}

export default UseStateArray