"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-black/5 rounded-full blur-3xl"
        animate={{
          x: [100, 150, 100],
          y: [-100, -50, -100],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl"
        animate={{
          x: [-50, 0, -50],
          y: [50, 0, 50],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 18,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
    </div>
  )
}

