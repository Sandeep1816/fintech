"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants: any
}

export function PageHeader({ variants }: PageHeaderProps) {
  return (
    <motion.div variants={variants} className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Book <span className="text-black">Now</span>
      </h1>
      <div className="w-20 h-1 bg-black mx-auto"></div>
    </motion.div>
  )
}

