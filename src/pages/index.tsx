import Image from 'next/image'
import Me from '../components/Me'
import Media from '@/components/Media'
import Expertise from '@/components/Expertise'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Courses from '@/components/Courses'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Languages from '@/components/Languages'

export default function Home() {
  return (
    <div
      className='h-full min-h-screen bg-neutral-500 flex flex-col items-center pb-2.5'
    >
      <div className='w-[816px] h-[1056px] bg-white rounded-lg my-2.5'>

        <Me />

        <Media />

        <Expertise />

        <Experience />

      </div>

      <div className='w-[816px] h-[1056px] bg-white rounded-lg'>

        <Skills />

        <Courses />

        <Projects />

        <Education />

        <Languages />

      </div>

    </div>
  )
}
