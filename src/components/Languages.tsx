import { languages } from '@/pages/api/api.type'
import React from 'react'

type Props = {
  languages: languages[]
}

const Languages = ({ languages }: Props) => {

  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Languages</h2>

      {
        languages.map((item, idx) => (
          <div className='my-2' key={idx}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black">{item.name}</span>
              <span className="text-sm font-medium text-black">{item.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-green-blue h-2.5 rounded-full" style={{ width: item.progress + "%" }}></div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Languages
