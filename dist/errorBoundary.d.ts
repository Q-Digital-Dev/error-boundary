import React from 'react';
import { ErrorBoundaryP, ErrorBoundaryS } from './errorBoundary.options';
export declare class ErrorBoundary extends React.Component<ErrorBoundaryP, ErrorBoundaryS> {
    constructor(props: ErrorBoundaryP);
    static getDerivedStateFromError(): ErrorBoundaryS;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
}
export default ErrorBoundary;
