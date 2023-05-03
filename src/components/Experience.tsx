import { experience } from '@/pages/api/api.type'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

type Props = {
  experience: experience[]
}

const Experience = ({ experience }: Props) => {

  const makeDate = (text: Date) => {
    const date = new Date(text)
    return `${date.getMonth() + 1}/${date.getFullYear()}`
  }

  return (
    <div className='mx-9 my-3'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Work Experience</h2>

      {
        experience.map((item, idx) => (
          <div className='my-2' key={idx}>
            <h4 className='font-bold text-lg'>{item.jobTitle}</h4>

            <div className='flex items-center mt-[-5px]'>
              <h4 className='text-lg mr-2'>{item.company}</h4>
              <a target='_blank' href={item.linkCompany} >
                <BiLinkExternal color='#5EBBAA' size={22} />
              </a>
            </div>

            <div className='flex justify-between text-gray-400 italic text-sm'>
              <p>
                {makeDate(item.dateStarted)} {" - "} {item.isCurrentlyWorkingHere ? "Present" : makeDate(item.dateEnded || "")}
              </p>
              <p>
                {item.place}
              </p>
            </div>

            <div>
              {
                item.points.map((item2, idx2) => (
                  <div className='flex' key={idx2}>
                    <p className='flex-initial text-green-blue w-4'>-</p>
                    <p className='flex-1 text-justify leading-5'>{item2}</p>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Experience
