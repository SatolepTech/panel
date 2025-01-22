import { Provider as ChakraUIProvider } from "@components/ui/provider"
import { ReactNode } from "react"

type ProviderProps = {
    children: ReactNode
}

export function Provider({ children }:ProviderProps) {
    return (
        <ChakraUIProvider>{children}</ChakraUIProvider>
    )
}