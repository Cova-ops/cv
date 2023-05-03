import { me } from '@/pages/api/api.type'
import React from 'react'

type Props = {
  me: me
}

const Me = ({ me }: Props) => {
  return (
    <div className='flex p-5'>
      <img
        alt=''
        src={me.imageLink}
        className='flex-initial relative h-40 w-40 rounded-md object-cover mx-3'
      />

      <div className='flex-1 mx-3'>
        <h1 className='font-bold uppercase text-xl'>{me.name}</h1>
        <h3 className='text-gray-500 text-base'>{me.role}</h3>
        <p className='text-sm'>
          {me.summary}
        </p>
      </div>
    </div>
  )
}

export default Me
