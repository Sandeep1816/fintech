"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import ButtonLink from "@/components/ui/button-link"
import { Download } from "lucide-react"
import { BrochureDownloadForm } from "./download-broucher"
import { Button } from "./ui/button"

export default function CTASection() {
  const [brochureOpen, setBrochureOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="py-16 md:py-24 bg-white text-gray-900 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Global&apos;s Premier Fintech Event?</h2>

          <p className="text-xl md:text-2xl opacity-90 mb-10">
            Secure your spot at the Global Fintech Fest & Awards 2025 and be part of shaping the future of finance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink
              href="/book-now"
              // variant="secondary"
              size="lg"
              className="bg-gray-600/50  hover:bg-gray-600/50 text-white"
            >
              Buy Tickets Now
            </ButtonLink>
            <Button
              // href="/download-brochure"
              variant="outline"
              size="lg"
              className="border-gray-500/30 text-black "
              onClick={()=>setBrochureOpen(true)}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
            <BrochureDownloadForm open={brochureOpen} onOpenChange={setBrochureOpen} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

