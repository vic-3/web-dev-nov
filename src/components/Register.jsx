import React from 'react'

export default function Register() {
  return (
    <div className="container">
    <form action="" className='form' >
      
        <div className="formGroup">
            <label htmlFor="" className="label">Firstname</label>
            <input type="Text" className="formControl" />
        </div>
        <div className="formGroup">
            <label htmlFor="" className="label">LastName</label>
            <input type="Text" className="formControl"/>
        </div>
        <div className="formGroup">
            <label htmlFor="" className="label">Email</label>
            <input type="Text" className="formControl" />
        </div>
        <div className="formGroup">
            <label htmlFor="" className="label">Password</label>
            <input type="password" className="formControl" />
        </div>

        <button className="btn2">Submit</button>

       
    </form>
</div>
  )
}
