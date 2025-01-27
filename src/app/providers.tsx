'use client'

import { Provider as ChakraUIProvider } from '@components/ui/provider'

import { URQLProvider } from '@infra/urql/provider'

import { ReactNode } from 'react'

type ProviderProps = {
  children: ReactNode
}

export function Providers({ children }: ProviderProps) {
  return (
    <URQLProvider>
      <ChakraUIProvider>{children}</ChakraUIProvider>
    </URQLProvider>
  )
}
