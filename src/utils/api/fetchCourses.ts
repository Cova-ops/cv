import config from '../../config'
import { courses } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchCourses = async () => {
  const response = await fetch(`${PUBLIC_NEXT_URL_BASE}/api/courses`)
  const json = await response.json()
  return json as courses[]
}

