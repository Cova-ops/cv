import React from 'react'

type Props = {}

const Me = (props: Props) => {
  return (
    <div className='flex p-5'>
      <img
        alt=''
        src='http://localhost:3000/public/portfolio/image_yo.jpg'
        className='flex-initial relative h-40 w-40 rounded-md object-cover mx-3'
      />

      <div className='flex-1 mx-3'>
        <h1 className='font-bold uppercase text-xl'>Daniel Covarrubias Sanchez</h1>
        <h3 className='text-gray-500 text-base'>Middle Software Enginner</h3>
        <p className='text-sm'>
          Innovative Programmer and Critical thinker striving to make the world a more unified and connected place. A creative thinker, adept in
          software development and working with various data structures.
        </p>
      </div>
    </div>
  )
}

export default Me
