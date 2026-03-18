"use client";

import { logger } from '@logger';
import { ReactNode, Component } from 'react';

type Props = {
    children: ReactNode;
    fallback?: ReactNode;
}

type State = {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error): void {
        logger.error("ErrorBoundary caught an error", error);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}