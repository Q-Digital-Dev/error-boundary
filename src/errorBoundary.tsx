import React from 'react'
import { ErrorBoundaryP, ErrorBoundaryS } from './errorBoundary.options'

export class ErrorBoundary extends React.Component<ErrorBoundaryP, ErrorBoundaryS> {
  constructor(props: ErrorBoundaryP) {
    super(props)
    this.state = {
      hasError: false
    } as ErrorBoundaryS
  }

  static getDerivedStateFromError(): ErrorBoundaryS {
    return { hasError: true }
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.onError?.(error, errorInfo)
  }

  override render() {
    const { hasError } = this.state
    const { Component, children } = this.props

    if (hasError) {
      if (Component) {
        return <Component />;
      }

      return null
    }

    return children
  }
}

export default ErrorBoundary