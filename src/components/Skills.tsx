import { skills } from '@/pages/api/api.type'
import React from 'react'

type Props = {
  skills: skills[]
}

const Skills = ({ skills }: Props) => {

  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Technical Skills</h2>

      <div className='flex flex-wrap'>
        {
          skills.map((item, idx) => (
            <div className='border border-gray-500 m-1 py-1 px-2 rounded-md' key={idx}>
              {item}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
