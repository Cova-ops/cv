import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

type Props = {}

const Education = (props: Props) => {

  const makeDate = (text: string) => {
    const date = new Date(text)
    return `${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const arrEducation = [
    {
      title: "Computer Systems Engineer",
      school: "Escuela Superior de Compuro - IPN",
      link: "https://www.escom.ipn.mx",
      "dateStarted": "2017-08-01T12:00:00.000Z",
      "dateEnded": "2022-06-01T12:00:00.000Z",
    }
  ]

  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Education</h2>

      {
        arrEducation.map((item, idx) => (
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
