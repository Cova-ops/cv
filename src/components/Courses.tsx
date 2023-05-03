import { courses } from '@/pages/api/api.type'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

type Props = {
  courses: courses[]
}

const Courses = ({ courses }: Props) => {

  const makeDate = (text: Date) => {
    const date = new Date(text)
    return `${date.getMonth() + 1}/${date.getFullYear()}`
  }

  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Courses & Training</h2>

      <div className='grid grid-cols-2 gap-2'>

        {
          courses.map((item, idx) => (
            <div key={idx}>
              <div className='flex items-center'>
                <p className='mr-2'>{item.name + " (" + makeDate(item.date) + ")"}</p>
                <a target='_blank' href={item.link} >
                  <BiLinkExternal color='#5EBBAA' size={18} />
                </a>
              </div>
              <p className='text-gray-400 italic mt-[-5px]'>{item.place}</p>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Courses
