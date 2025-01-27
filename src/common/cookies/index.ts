import { getCookieName } from './get-cookie-name'
import { getTokenInCookies, setTokenInCookies } from './token'

export const cookies = {
  token: {
    get: getTokenInCookies,
    name: getCookieName('token'),
    set: setTokenInCookies
  }
}
