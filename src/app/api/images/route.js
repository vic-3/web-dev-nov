import { NextResponse } from "next/server"

export const GET=async ()=>{
    try{
       const images={
            img1:'https://images.unsplash.com/photo-1712877334077-bbfb3475a597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
            img2:"https://images.unsplash.com/photo-1712939706943-b6b3b4549937?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
            img3:"https://plus.unsplash.com/premium_photo-1705091982008-b40865cb9c26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
            img4:"https://images.unsplash.com/photo-1712877334077-bbfb3475a597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
        }
        return new NextResponse(JSON.stringify(images),{status:200})

    }

    catch(err){
        console.log(err.message)
        return new NextResponse(JSON.stringify({msg:"server Error"}),{status:500})
    }
}