import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }: { children: any }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error: any) => {
      console.log('Error:', error);
      // You can perform additional error handling here, such as logging the error or displaying a generic error message
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return <h1>Oops! Something went wrong.</h1>;
  }

  return children;
};

export default ErrorBoundary;
