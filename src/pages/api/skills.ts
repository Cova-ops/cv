// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import config from '../../config'

import type { skills } from './api.type.ts'

export default async (_: NextApiRequest, res: NextApiResponse<skills>) => {

  const response = await fetch(`${config.URL_BACK}/back/cv/v1/skills`)
  const json = await response.json()

  res.status(200).json(json as skills)
}


