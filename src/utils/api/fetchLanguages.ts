import config from '../../config'
import { languages } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchLanguages = async () => {
  const response = await fetch(`${PUBLIC_NEXT_URL_BASE}/api/languages`)
  const json = await response.json()
  return json as languages[]
}

