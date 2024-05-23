import { PropsWithChildren } from "react"

export type ErrorBoundaryP = PropsWithChildren<{
  onError?: React.Component['componentDidCatch']
  Component?: React.ComponentType<any>
}>

export type ErrorBoundaryS = {
  hasError: boolean
}