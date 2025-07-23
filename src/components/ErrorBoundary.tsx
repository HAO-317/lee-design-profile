import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2 className="error-title">Ein Fehler ist aufgetreten</h2>
          <p className="error-text">Bitte versuchen Sie es später erneut.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;