import React from "react";
import { motion } from "framer-motion";

type ErrorProps = {
  message?: string;
  onRetry: () => void;
};

const FeatureProductError: React.FC<ErrorProps> = ({ message, onRetry }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full gap-4 text-center bg-gray-00 rounded-lg border border-gray-200 shadow"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147746234.jpg?semt=ais_hybrid" // Use your custom image here
        alt="Error Illustration"
        className="w-80 h-80 animate-bounce"
      />
      <h2 className="text-2xl font-semibold text-gray-800">
        Something went wrong
      </h2>
      <p className="text-gray-500">
        {message || "We couldn’t fetch the data. Please try again."}
      </p>
      <button
        onClick={onRetry}
        className="px-4! py-2! cursor-pointer bg-primary-500 hover:bg-primary-600 text-white rounded body-medium-600 transition"
      >
        🔁 Refetch
      </button>
    </motion.div>
  );
};

export default React.memo(FeatureProductError) || FeatureProductError;
