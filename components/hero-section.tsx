
"use client"

import { Button } from "@/components/ui/button"
import ButtonLink from "@/components/ui/button-link"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BrochureDownloadForm } from "./download-broucher"
import ParticleAnimation from "./particle-animation"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [brochureOpen, setBrochureOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative min-h-[100vh]  overflow-hidden bg-gray-950">

      {/* Particle animation background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950 to-gray-950"></div>
        <ParticleAnimation />
      </div>

      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center min-h-[100vh]">

        <motion.div
          variants={container}
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={item} className="flex justify-center">
            <Image src="/6.png" alt="Logo" width={400} height={50} />
          </motion.div>

          <motion.div variants={item}>
            <div className="text-xl md:text-2xl text-slate-200 mb-6 h-12 mt-7">
              Empowering the Future of Finance: Technology, Trust & Transformation
            </div>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-lg md:text-xl font-medium mb-8 text-slate-200">
              Global&apos;s Premier Banking & Fintech Summit
              <br />
              28 – 29 August 2025, Johannesburg, South Africa
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ButtonLink
              href="/sponsor"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border-0"
              >
              Sponsorship Options
            </ButtonLink>
            <ButtonLink
              href="/book-now"
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"            >
              Buy Tickets
            </ButtonLink>
            <Button
              variant="outline"
              size="lg"
               className="border-cyan-400 text-black"
              onClick={() => setBrochureOpen(true)}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </motion.div>
          <BrochureDownloadForm open={brochureOpen} onOpenChange={setBrochureOpen} />
        </motion.div>
      </div>
    </section>
  )
}




