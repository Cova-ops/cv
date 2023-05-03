import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

type Props = {}

const Projects = (props: Props) => {

  const makeDate = (text: string) => {
    const date = new Date(text)
    return `${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const arrProjects = [
    {
      name: "My CV",
      date: "2023-04-01T12:00:00.000Z",
      summary: "This document was designed and created as a web page. The internal architecture is designed to be scalable and maintainable, with automated deployments on servers. Using NextJS, React, Tailwind, AWS, Git, Nginx, REST API.",
      link: "https://www.google.com"
    }
  ]

  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Personal Projects</h2>

      {
        arrProjects.map((item, idx) => (
          <div>
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
