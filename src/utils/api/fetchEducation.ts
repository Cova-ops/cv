import config from '../../config'
import { education } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchEducation = async () => {
  const response = await fetch(`${PUBLIC_NEXT_URL_BASE}/api/education`)
  const json = await response.json()
  return json as education[]
}

