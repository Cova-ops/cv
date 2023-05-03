import Head from 'next/head'

import type { GetStaticProps } from 'next'

import Me from '@/components/Me'
import Media from '@/components/Media'
import Expertise from '@/components/Expertise'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Courses from '@/components/Courses'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Languages from '@/components/Languages'

import { courses, experience, expertise, me, media, skills, projects, education, languages } from './api/api.type'

import { fetchMe } from '@/utils/api/fetchMe'
import { fetchMedia } from '@/utils/api/fetchMedia'
import { fetchExpertise } from '@/utils/api/fetchExpertise'
import { fetchExperience } from '@/utils/api/fetchExperience'
import { fetchSkills } from '@/utils/api/fetchSkills'
import { fetchCourses } from '@/utils/api/fetchCourses'
import { fetchProjects } from '@/utils/api/fetchProjects'
import { fetchEducation } from '@/utils/api/fetchEducation'
import { fetchLanguages } from '@/utils/api/fetchLanguages'


type Props = {
  me: me
  media: media
  expertise: expertise[]
  experience: experience[]
  skills: skills[]
  courses: courses[]
  projects: projects[]
  education: education[]
  languages: languages[]
}

const Home = ({ me, media, experience, expertise, languages, education, projects, courses, skills }: Props) => {
  return (
    <div
      className='h-full min-h-screen bg-neutral-500 flex flex-col items-center pb-2.5'
    >

      <Head>
        <title>Daniel's - CV</title>
      </Head>

      <div className='w-[816px] h-[1056px] bg-white rounded-lg my-2.5'>

        <Me me={me} />

        <Media media={media} />

        <Expertise expertise={expertise} />

        <Experience experience={experience} />

      </div>

      <div className='w-[816px] h-[1056px] bg-white rounded-lg'>

        <Skills skills={skills} />

        <Courses courses={courses} />

        <Projects projects={projects} />

        <Education education={education} />

        <Languages languages={languages} />

      </div>

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const me: me = await fetchMe()
  const media: media = await fetchMedia()
  const expertise: expertise[] = await fetchExpertise()
  const experience: experience[] = await fetchExperience()
  const skills: skills[] = await fetchSkills()
  const courses: courses[] = await fetchCourses()
  const projects: projects[] = await fetchProjects()
  const education: education[] = await fetchEducation()
  const languages: languages[] = await fetchLanguages()


  return {
    props: {
      me, media, expertise, experience, skills, courses, projects, education, languages
    },
    revalidate: 10
  }
}
