import config from '../../config'
import { projects } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchProjects = async () => {
  const response = await fetch(`${PUBLIC_NEXT_URL_BASE}/api/projects`)
  const json = await response.json()
  return json as projects[]
}

