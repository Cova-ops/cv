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
      name: "title 1",
      date: "2021-12-02T12:00:00.000Z",
      summary: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
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
