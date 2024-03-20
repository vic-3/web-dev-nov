import React from 'react'
import { IoIosSend } from "react-icons/io";

export default function Newsletter() {
  return (
<div className='newsletter'>
    <div className='overlay'></div>
<div className='newsletter-left'>
<h4>
    Stay Informed About Special Offers
</h4>
<p>
    lorem ipsum dolor
</p>
</div>
<div className='newsletter-right'>
    <div className='input-group'>
    <input type="email"  placeholder='Enter Your Email'/>
    <button className='news-submit'>
    <IoIosSend />
    </button>
    </div>
    

</div>

</div>
  )
}
