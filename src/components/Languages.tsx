import React from 'react'

type Props = {}

const Languages = (props: Props) => {

  const arrLanguages = [
    {
      name: "Spanish",
      progress: 100
    },
    {
      name: "English",
      progress: 70
    },
    {
      name: "German",
      progress: 20
    }
  ]

  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Languages</h2>

      {
        arrLanguages.map((item, idx) => (
          <div className='my-2'>
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
