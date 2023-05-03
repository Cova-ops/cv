import { education } from '@/pages/api/api.type'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

type Props = {
  education: education[]
}

const Education = ({ education }: Props) => {

  const makeDate = (text: Date) => {
    const date = new Date(text)
    return `${date.getMonth() + 1}/${date.getFullYear()}`
  }

  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Education</h2>

      {
        education.map((item, idx) => (
          <div key={idx}>
            <p className='font-bold text-xl'>{item.title}</p>

            <div className='flex items-center mt-[-4px]'>
              <p className='text-xl mr-2'>{item.school}</p>
              <a target='_blank' href={item.link} >
                <BiLinkExternal color='#5EBBAA' size={22} />
              </a>
            </div>

            <p className='italic text-gray-400'>
              {makeDate(item.dateStarted) + " - " + makeDate(item.dateEnded)}
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default Education
