import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="about">

        <div className="about-left">
            <Image src={'https://cafeu.vercel.app/img/image/exparience.png'} width={100} height={100} className='about-image'/>
        </div>
        <div className="about-right">
            <p>
                About Us
            </p>
            <h3>
            Why We Are The Best
            </h3>
            <p>
            Quis autem vel eum iure reprehenderit qui in evoluptate velit esse qua nihil
molestiae consequatur, vel illum qui dolorem eum fugiat quvoluptas nulla
pariatureaque ipsa quae ab illo inventore veritatis et quasi architecto
beatae vitae dicta sunt explicabo.
            </p>
        </div>

    </div>
  )
}

export default About