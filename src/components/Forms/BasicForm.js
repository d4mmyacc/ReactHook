import React, {useState} from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])
    
    const submitForm=(e)=>{  
        e.preventDefault(); // prevents automatic refresh
        const newEntry={ id:new Date().getTime().toString() ,email:email, password:password };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);

        // After submitting email and password field is set empty
        setEmail("");
        setPassword("");
    }
  return (
    <>
    <form onSubmit={submitForm}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        
        <div>
            <label htmlFor="email">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </div>

        <button type="submit">Login</button>
    </form>


    {/* to show email and password on the screen */}
    <div>
        {
            allEntry.map((curElem)=>{
                const {id,email,password}= curElem;
                return (
                    <div className='showDetails' key={id}>
                        <p>{email}</p>
                        <p>{password}</p>
                        </div>
                )
            })
        }
    </div>
    </>
  )
}

export default BasicForm    