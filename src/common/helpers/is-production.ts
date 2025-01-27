import { dotEnv } from '@config/dotEnv'

export function isProduction() {
  return dotEnv.nodeEnv === 'production'
}
