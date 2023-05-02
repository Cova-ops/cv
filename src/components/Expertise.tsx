import React from 'react'

type Props = {}

const Expertise = (props: Props) => {

  const areas = [
    'Proficient Troubleshooting', 'Scrum & Agile Methodologies', 'Team Leadership & Supervision',
    'Application Development & Testing', 'Logical Thinking', 'Object-Oriented Design (OOD)'
  ]
  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Areas of Expertise</h2>

      <div className='flex flex-wrap'>
        {
          areas.map((item, idx) => (
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
