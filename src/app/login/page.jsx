"use client"
import React, { useEffect, useState } from 'react'
import './login.css'
import { useRouter } from 'next/navigation'
export default function Login() {
   
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [err, setErr]=useState('');
    const [FirstNameErr, setFirstNameErr]=useState('');
    const[loading,setLoading]=useState(false)
    const router=useRouter()

    // create a function to handle for submission
    async function submitHandler(e){
        
        
       
        // prevent form default submit
        e.preventDefault();
        console.log(e)

       
         if(!email){
            setErr("provide email")
        }
        else if(!password){
            setErr("provide password")
        }
        else{
        // show loader
        setLoading(true)
            // send user data to api
            const res=await fetch('http://localhost:3000/api/login/',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                // our body data type must be in json , so as to match the content-type data type(json)
               body:JSON.stringify({email,password})
        })
        
        
        if(res.status==200){
                // route to dashboard
                router.replace('/dashboard')

        }
        else if(res.status==400)
            setErr("Inavalid credentials")
        setLoading(false)
        }

    }
  return (
    <div className="container">
    <form action="" className='form' onSubmit={submitHandler}>
     {err && <p className="err">{err}</p>} 
       
        <div className="formGroup">
            <label htmlFor="" className="label">Email</label>
            <input type="Text" className="formControl" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="formGroup">
            <label htmlFor="" className="label">Password</label>
            <input type="password" className="formControl" onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button className="btn2">Submit </button>
        {loading ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : ""} 

       
    </form>
</div>
  )
}