import { client } from './client'

import { ReactNode } from 'react'
import { Provider } from 'urql'

type URQLProviderProps = {
  children: ReactNode
}

export function URQLProvider({ children }: URQLProviderProps) {
  return <Provider value={client()}>{children}</Provider>
}
