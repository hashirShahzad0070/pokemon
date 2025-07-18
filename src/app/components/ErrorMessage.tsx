import React from "react";
import { Ban } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  retrySearch: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, retrySearch }) => {
  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: "url('./background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <Ban className="w-12 h-12 text-red-600 mb-4 mx-auto" />
        
        <h2 className="text-xl text-red-600 mb-4">{message}</h2>
        
        <button
          onClick={retrySearch}
          className="w-full px-4 py-3 bg-green-600 border border-black text-white rounded-lg shadow-black shadow-lg hover:bg-indigo-700 focus:outline-none flex items-center justify-center space-x-2 cursor-pointer"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
