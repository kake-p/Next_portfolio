import React from 'react'
import Image from 'next/image'

const Works = () => {
  return (
    <article className="flex flex-col items-center gap-[30%] relative h-96">
      <Image src="/img/top/0N1A4326.jpg" layout="fill" objectFit="cover" alt="background" className="absolute opacity-50 z-[-1]"/>
      <h2 className="heading">Works</h2>
      <div className="flex justify-center gap-[50%]">
        <a href="" className=" text-2xl hover:opacity-80 text-shadow">Photograph</a>
        <a href="" className=" text-2xl hover:opacity-80 text-shadow">Design</a>
        <a href="" className=" text-2xl hover:opacity-80 text-shadow">Cording</a>
      </div>
    </article> 
  )
}

export default Works
