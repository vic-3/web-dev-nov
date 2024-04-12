"use client"
import React, { useState } from 'react'
import './form.css'
export default function Register() {
    const [firstName, setFirstName]=useState('')
    const [lastName, setlastName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [err, setErr]=useState('');
    const [FirstNameErr, setFirstNameErr]=useState('');

    // create a function to handle for submission
    function submitHandler(e){
        // prevent form default submit
        e.preventDefault();
        console.log(e)

        if(!firstName){
            setFirstNameErr("provide firstname")
        }

        else if(!lastName){
            setErr("provide lastname")
        }
        else if(!email){
            setErr("provide email")
        }
        else if(!password){
            setErr("provide password")
        }
        else{
            // send user data to api

        }

    }
  return (
    <div className="container">
    <form action="" className='form' onSubmit={submitHandler}>
     {err && <p className="err">{err}</p>} 
        <div className="formGroup">
            <label htmlFor="" className="label">Firstname</label>
            <input type="Text" className="formControl" onChange={(e)=>setFirstName(e.target.value)} />
            {FirstNameErr && <p style={{color:"red"}}>{FirstNameErr}</p>}
        </div>
        <div className="formGroup">
            <label htmlFor="" className="label">LastName</label>
            <input type="Text" className="formControl" onChange={(e)=>setlastName(e.target.value)}/>
        </div>
        <div className="formGroup">
            <label htmlFor="" className="label">Email</label>
            <input type="Text" className="formControl" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="formGroup">
            <label htmlFor="" className="label">Password</label>
            <input type="password" className="formControl" onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button className="btn2">Submit</button>

       
    </form>
</div>
  )
}
