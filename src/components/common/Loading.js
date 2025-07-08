import React from "react";

const Loading = ({ size = "medium", text = "Đang tải...", className = "" }) => {
  const sizeClasses = {
    small: "loading-small",
    medium: "loading-medium",
    large: "loading-large",
  };

  return (
    <div className={`loading-container ${className}`}>
      <div className={`loading-spinner ${sizeClasses[size]}`}>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

export const LoadingSpinner = ({ size = "small" }) => {
  const sizeClasses = {
    small: "spinner-small",
    medium: "spinner-medium",
    large: "spinner-large",
  };

  return (
    <div className={`inline-spinner ${sizeClasses[size]}`}>
      <div className="spinner-circle"></div>
    </div>
  );
};

export const LoadingSkeleton = ({ lines = 3, className = "" }) => {
  return (
    <div className={`skeleton-container ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="skeleton-line"></div>
      ))}
    </div>
  );
};

export const LoadingCard = () => {
  return (
    <div className="loading-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    </div>
  );
};

export default Loading;
