import config from '../../config'
import { experience } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchExperience = async () => {
  const response = await fetch(`${PUBLIC_NEXT_URL_BASE}/api/experience`)
  const json = await response.json()
  return json as experience[]
}

