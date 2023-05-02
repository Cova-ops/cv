import React from 'react'
// import { AiFillGithub, GrMail, BsPhone, IoLocationSharp, FaLinkedinIn, MdContactPage } from 'react-icons/all'
import { AiFillGithub } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { BsPhone } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdContactPage } from 'react-icons/md'

type Props = {}

const Media = (props: Props) => {
  return (
    <div className='w-full bg-gray-300 grid grid-cols-2 gap-4 p-4'>

      <div className='flex content-center ml-7 self-center'>
        <GrMail color='#5EBBAA' size={24} />
        <p className='ml-3'>dacovasan00@gmail.com</p>
      </div>

      <div className='flex content-center ml-7 self-center'>
        <BsPhone color='#5EBBAA' size={24} />
        <p className='ml-3'>+52 55 1005 7272</p>
      </div>

      <div className='flex content-center ml-7 self-center'>
        <IoLocationSharp color='#5EBBAA' size={24} />
        <p className='ml-3'>Mexico State, Mexico</p>
      </div>

      <div className='flex content-center ml-7 self-center'>
        <AiFillGithub color='#5EBBAA' size={24} />
        <a className='ml-3' target='_blank' href='https://github.com/Cova-ops'>github.com/Cova-ops</a>
      </div>

      <div className='flex content-center ml-7 self-center'>
        <FaLinkedinIn color='#5EBBAA' size={24} />
        <a className='ml-3' target='_blank' href='https://www.linkedin.com/in/daniel-covarrubias-a5b2b7191/'>
          linkedin.com/in/DanielCovarrubias
        </a>
      </div>

      <div className='flex content-center ml-7 self-center'>
        <MdContactPage color='#5EBBAA' size={24} />
        <a className='ml-3' target='_blank' href='http://3.137.206.226:3001/'>
          My Portfolio
        </a>
      </div>

    </div>
  )
}

export default Media
