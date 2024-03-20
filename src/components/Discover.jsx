import React from 'react'
import Boxes from './Boxes'

export default function Discover() {
  return (
    <div className='box-container'>
        <Boxes heading='100% Swiss Quality' content='lorem ipsum dolor' image='https://cafeu.vercel.app/img/icon/1.png'/>
        <Boxes heading='Organic Production' content='lorem ipsum dolor' image='https://cafeu.vercel.app/img/icon/2.png'/>
        <Boxes heading='Food LAw Certified' content='lorem ipsum dolor' image='https://cafeu.vercel.app/img/icon/3.png'/>
        <Boxes heading='Food Production' content='lorem ipsum dolor' image='https://cafeu.vercel.app/img/icon/4.png'/>
    </div>
  )
}
