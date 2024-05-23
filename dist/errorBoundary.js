"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
const react_1 = __importDefault(require("react"));
class ErrorBoundary extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        this.props.onError?.(error, errorInfo);
    }
    render() {
        const { hasError } = this.state;
        const { Component, children } = this.props;
        if (hasError) {
            if (Component) {
                return <Component />;
            }
            return null;
        }
        return children;
    }
}
exports.ErrorBoundary = ErrorBoundary;
exports.default = ErrorBoundary;
