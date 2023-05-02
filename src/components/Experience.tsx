import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

type Props = {}

const Experience = (props: Props) => {

  const makeDate = (text: string) => {
    const date = new Date(text)
    return `${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const works = [
    {
      "company": "Xira",
      linkCompany: "https://xira.ai/en/home/",
      "dateStarted": "2022-12-31T12:00:00.000Z",
      "dateEnded": null,
      "place": "Mexico City",
      "isCurrentlyWorkingHere": true,
      "jobTitle": "Development Manager",
      "points": [
        "Chatbots creations for the interaction of international users with the different services of the companies using APIs, RPAs, and DB to carry out automated transactional actions.",
        "Development of new technology to implement a virtual voice assistant to one of the most important telecommunication companies in Mexico.",
        "Being the only one in the company to meet the KPIs assigned at the beginning of each quarter."
      ],
    },
    {
      "company": "Xira",
      linkCompany: "https://xira.ai/en/home/",
      "dateStarted": "2021-12-02T12:00:00.000Z",
      "dateEnded": "2022-12-31T12:00:00.000Z",
      "place": "Mexico City",
      "isCurrentlyWorkingHere": false,
      "jobTitle": "Software Engineer Jr.",
      "points": [
        "Manage the time of the development team with all the current projects of the company, such as estimating times for future projects in the company, as well as validating scope and requirements.",
        "Organize the development team to do a restore to the code base that is used for most of the new implementations, so as not to have obsolete code.",
        "Being responsible for completing current projects on time, such as resolving any questions or issues that have arisen during development time.",
        "Be in constant search of new technologies and tools to improve or create new products for sale in the company."
      ],
    }
  ]

  return (
    <div className='mx-9 my-3'>
      <h2 className='uppercase text-green-blue font-bold text-xl'>Work Experience</h2>

      {
        works.map((item, idx) => (
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
