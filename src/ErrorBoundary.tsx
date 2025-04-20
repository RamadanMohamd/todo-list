import React, { Component, ReactNode } from "react";
import { Button } from "./components/ui/Button";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-full grow space-y-4">
          <h1 className="text-2xl font-bold">Something went wrong.</h1>
          <p className="text-gray-600">
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <Button onClick={this.handleRefresh} variant="outline">
            Refresh Page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
