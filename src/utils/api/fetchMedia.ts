import config from '../../config'
import { media } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchMedia = async () => {
  const response = await fetch(`${PUBLIC_NEXT_URL_BASE}/api/media`)
  const json = await response.json()
  return json as media
}

