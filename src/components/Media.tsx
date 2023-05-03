import React from 'react'
// import { AiFillGithub, GrMail, BsPhone, IoLocationSharp, FaLinkedinIn, MdContactPage } from 'react-icons/all'
import { AiFillGithub } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { BsPhone } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdContactPage } from 'react-icons/md'
import { media } from '@/pages/api/api.type'

type Props = {
  media: media
}

const Media = ({ media }: Props) => {
  return (
    <div className='w-full bg-gray-300 grid grid-cols-2 gap-4 p-4'>

      <div className='flex content-center ml-7 self-center'>
        <GrMail color='#5EBBAA' size={24} />
        <p className='ml-3'>{media.email}</p>
      </div>

      <div className='flex content-center ml-7 self-center'>
        <BsPhone color='#5EBBAA' size={24} />
        <p className='ml-3'>{media.phone}</p>
      </div>

      <div className='flex content-center ml-7 self-center'>
        <IoLocationSharp color='#5EBBAA' size={24} />
        <p className='ml-3'>{media.location}</p>
      </div>

      <div className='flex content-center ml-7 self-center'>
        <AiFillGithub color='#5EBBAA' size={24} />
        <a className='ml-3' target='_blank' href={media.linkGithub}>{media.textGithub}</a>
      </div>

      <div className='flex content-center ml-7 self-center'>
        <FaLinkedinIn color='#5EBBAA' size={24} />
        <a className='ml-3' target='_blank' href={media.linkLinkedIn}>
          {media.textLinkedIn}
        </a>
      </div>

      <div className='flex content-center ml-7 self-center'>
        <MdContactPage color='#5EBBAA' size={24} />
        <a className='ml-3' target='_blank' href={media.linkPortfolio}>
          {media.textPortfolio}
        </a>
      </div>

    </div>
  )
}

export default Media
