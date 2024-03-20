import React from 'react'
import Image from 'next/image'

export default function Boxes({image, heading, content}) {
  return (
    <div className='box'>
            <Image src={image} width={100} height={100} alt=""/> 

            <h4>
                {heading}
            </h4> 

            <p>
                {content}
            </p>
           
    </div>
  )
}
