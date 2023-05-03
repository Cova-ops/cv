import config from '../../config'
import { skills } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchSkills = async () => {
  const response = await fetch(`${PUBLIC_NEXT_URL_BASE}/api/skills`)
  const json = await response.json()
  return json as skills[]
}

