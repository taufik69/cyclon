import React from "react";
import { motion } from "framer-motion";
interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}
const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="flex items-center justify-center h-screen bg-[var(--color-gray-50)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 rounded-2xl shadow-lg bg-white max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          className="text-[80px] mb-4 text-[var(--color-danger-500)]"
        >
          ⚠️
        </motion.div>
        <h2 className="heading2 text-[var(--color-danger-700)] mb-2">
          Oops! An error occurred
        </h2>
        <p className="body-medium-400 text-[var(--color-gray-600)] mb-6">
          {error.message}
        </p>
        {resetErrorBoundary && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-xl bg-[var(--color-primary-500)] text-white font-semibold shadow hover:bg-[var(--color-primary-600)] transition"
            onClick={resetErrorBoundary}
          >
            Try Again
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default React.memo(ErrorFallback);
