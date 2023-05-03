import config from '../../config'
import { me } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchMe = async () => {
  const response = await fetch(`${PUBLIC_NEXT_URL_BASE}/api/me`)
  const json = await response.json()
  return json as me
}

