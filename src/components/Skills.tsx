import React from 'react'

type Props = {}

const Skills = (props: Props) => {

  const arrSkills = [
    "Node JS", "Firebase", "Amazon Web Services (AWS)", "CSS", "JavaScript",
    "Mongo DB", "MySQL", "NextJS", "Oracle DB", "Docker", "Redux", "Tailwind",
    "Git", "Typescript", "Jest", "Linux", "Unix", "Python", "Bash", "API REST",
    "API SOAP", "API GraphQL"
  ]

  return (
    <div className='mx-9 my-5'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Technical Skills</h2>

      <div className='flex flex-wrap'>
        {
          arrSkills.map((item, idx) => (
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
