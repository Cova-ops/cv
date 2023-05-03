import { expertise } from '@/pages/api/api.type'
import React from 'react'

type Props = {
  expertise: expertise[]
}

const Expertise = ({ expertise }: Props) => {

  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Areas of Expertise</h2>

      <div className='flex flex-wrap'>
        {
          expertise.map((item, idx) => (
            <div className='bg-green-blue m-1 py-1 px-2 rounded-md' key={idx}>
              {item}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Expertise
