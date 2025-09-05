import { AlertCircle, RefreshCw } from 'lucide-react';
import React from 'react';

interface ErrorDisplayProps {
  error: unknown;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  const errorMessage = error instanceof Error ? error.message : 'An unknown error has occurred';

  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
      <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-500" />

      <h3 className="mb-2 text-lg font-semibold text-red-800">Error loading news</h3>

      <p className="mb-4 text-red-600">{errorMessage}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mx-auto flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorDisplay;
