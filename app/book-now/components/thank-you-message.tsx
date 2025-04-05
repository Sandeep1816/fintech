"use client"

import { motion } from "framer-motion"

interface ThankYouMessageProps {
  title: string
  message: string
}

export function ThankYouMessage({ title, message }: ThankYouMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-50 backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-sm text-center py-8"
    >
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
      <p className="text-gray-700 mb-6">{message}</p>
      <div className="text-sm text-gray-500">This message will disappear in a few seconds...</div>
      <div className="mt-6">
        <div className="h-1 w-full max-w-xs mx-auto bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 10, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  )
}

