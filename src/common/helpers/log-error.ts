import { deepBoolean } from './deep-boolean'

type LogError = {
  archive: string
  error: unknown
  usedFunction: string
  type?: 'error' | 'warn'
}

export function logError({
  archive,
  error,
  type = 'error',
  usedFunction
}: LogError) {
  if (!deepBoolean(process.env.CONSOLE_ERRORS)) {
    return
  }

  console.groupCollapsed(`Error: ${archive}`)

  console.log('Archive: ', archive)
  console.log('Function: ', usedFunction)
  console[type]('Error: ', error)

  console.groupEnd()
}
