import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    // TODO: Log error to monitoring service like Sentry
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <div className="error-icon">
              <svg
                className="error-icon-svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            <h2 className="error-title">Oops! Có lỗi xảy ra</h2>

            <p className="error-message">
              Xin lỗi, đã có lỗi không mong muốn xảy ra. Vui lòng thử lại sau.
            </p>

            <div className="error-actions">
              <button onClick={this.handleRetry} className="retry-button">
                Thử lại
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className="home-button"
              >
                Về trang chủ
              </button>
            </div>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="error-details">
                <summary>Chi tiết lỗi (Development only)</summary>
                <pre className="error-stack">
                  {this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export const ErrorMessage = ({
  title = "Có lỗi xảy ra",
  message = "Vui lòng thử lại sau.",
  onRetry,
  className = "",
}) => {
  return (
    <div className={`error-message-container ${className}`}>
      <div className="error-message-content">
        <h3 className="error-message-title">{title}</h3>
        <p className="error-message-text">{message}</p>
        {onRetry && (
          <button onClick={onRetry} className="error-retry-button">
            Thử lại
          </button>
        )}
      </div>
    </div>
  );
};

export const NotFound = ({
  title = "Cái này bảnk chưa làm 😅",
  message = "Trang này bảnk chưa kịp code xong nè! Thông cảm bảnk chút nha 🙏",
}) => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-icon">
          <span className="not-found-emoji">🚧</span>
          <span className="not-found-subtitle">Work in Progress</span>
        </div>
        <h2 className="not-found-title">{title}</h2>
        <p className="not-found-message">{message}</p>
        <div className="not-found-extra">
          <p className="not-found-extra-text">
            💡 Bảnk đang code cật lực để hoàn thiện tính năng này. Hãy quay lại
            sau nha!
          </p>
        </div>
        <div className="not-found-actions">
          <button onClick={() => window.history.back()} className="back-button">
            ← Quay lại
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="home-button"
          >
            🏠 Về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
