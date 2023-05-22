import React, { useState } from 'react'

const BasicToDo = () => {
    const biodata = [
        {
            id: 0, myName: "Manoj", mAge: "20"
        },
        {
            id: 1, myName: "Sagar", mAge: "21"
        },
        {
            id: 2, myName: "Sudhan", mAge: "22"
        }
    ]

    const [MyArray, setMyArray] = useState(biodata)

    const clearAll = () => {
        setMyArray([]);
    }

    const removeElm=(id)=>{
        // alert(id)
            const myNewArray=MyArray.filter((curElm)=>{
            return curElm.id!=id;            
            })
            setMyArray(myNewArray)
    }

    return (
        <>
            {
                MyArray.map((curElm) => {
                    return (
                        <h1
                            key={curElm.id}>  Name: {curElm.myName} , Age: {curElm.mAge}
                            <button className='btn' onClick={()=>removeElm(curElm.id)}>remove</button>
                        </h1>
                    )
                }
                )
            }
            <button className="btn" onClick={clearAll}>Clear</button>
        </>
    )
}

export default BasicToDo