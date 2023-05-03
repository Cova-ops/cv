import config from '../../config'
import { expertise } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchExpertise = async () => {
  const response = await fetch(`${PUBLIC_NEXT_URL_BASE}/api/expertise`)
  const json = await response.json()
  return json as expertise[]
}

