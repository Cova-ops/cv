import { projects } from '@/pages/api/api.type'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

type Props = {
  projects: projects[]
}

const Projects = ({ projects }: Props) => {

  const makeDate = (text: Date) => {
    const date = new Date(text)
    return `${date.getMonth() + 1}/${date.getFullYear()}`
  }

  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Personal Projects</h2>

      {
        projects.map((item, idx) => (
          <div key={idx}>
            <div className='flex items-center'>
              <p className='text-lg mr-2'>{item.name + " (" + makeDate(item.date) + ")"}</p>
              {
                item.link ?
                  <a target='_blank' href={item.link} >
                    <BiLinkExternal color='#5EBBAA' size={22} />
                  </a> : null
              }
            </div>

            <div className='flex'>
              <p className='flex-initial text-green-blue w-4'>-</p>
              <p className='flex-1 text-justify leading-5'>{item.summary}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Projects
