"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import ButtonLink from "@/components/ui/button-link"
import { Download } from "lucide-react"
import { Button } from "./ui/button"
// import { BrochureDownloadForm } from "./download-broucher"
// import BrochureForm from "./brochure-form"
import { BrochureDownloadForm } from "./download-broucher"
import Image from "next/image"
// import useCounter from "@/app/hooks/use-counter"
// import { Card } from "@/components/ui/card"
// import { Typewriter } from "./typewriter"

// interface CounterStatProps {
//   end: number
//   label: string
//   delay?: number
// }

// function CounterStat({ end, label, delay = 0 }: CounterStatProps) {
//   const { count, observerRef } = useCounter({ end, delay })

//   return (
//     <motion.div
//       ref={observerRef}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: delay / 2000, duration: 0.6 }}
//       className="flex flex-col items-center"
//     >
//       <p className="text-3xl font-bold text-primary mb-1">{count}+</p>
//       <p className="text-sm text-muted-foreground">{label}</p>
//     </motion.div>
//   )
// }

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

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Network nodes
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = []

    // Create nodes
    for (let i = 0; i < 80; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 1.5,
        color: getRandomColor(),
      })
    }

    function getRandomColor() {
      const colors = [
        "rgba(0, 220, 255, 0.7)", // Cyan
        "rgba(147, 51, 234, 0.7)", // Purple
        "rgba(59, 130, 246, 0.7)", // Blue
        "rgba(16, 185, 129, 0.7)", // Green
        "rgba(245, 158, 21, 0.7)", // Amber
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Draw blockchain network
    function drawNetwork() {
      if (!canvas || !context) return

      context.clearRect(0, 0, canvas.width, canvas.height)

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        context.beginPath()
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        context.fillStyle = node.color
        context.fill()
      })

      // Draw connections between nodes
      context.lineWidth = 0.3
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            context.beginPath()
            context.moveTo(nodes[i].x, nodes[i].y)
            context.lineTo(nodes[j].x, nodes[j].y)

            // Gradient line based on node colors
            const gradient = context.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            gradient.addColorStop(0, nodes[i].color)
            gradient.addColorStop(1, nodes[j].color)

            context.strokeStyle = gradient
            context.globalAlpha = 1 - distance / 150
            context.stroke()
            context.globalAlpha = 1
          }
        }
      }

      // Draw blockchain elements
      drawBlockchainElements(context, canvas)

      animationRef.current = requestAnimationFrame(drawNetwork)
    }

    // Draw blockchain elements
    function drawBlockchainElements(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      const time = Date.now() * 0.001

      // Draw floating blocks
      for (let i = 0; i < 7; i++) {
        const x = canvas.width * (0.15 + i * 0.12) + Math.sin(time + i) * 40
        const y = canvas.height * 0.5 + Math.cos(time * 0.7 + i) * 60

        // Block
        ctx.fillStyle = `rgba(59, 130, 246, ${0.2 + Math.sin(time + i) * 0.1})`
        ctx.strokeStyle = "rgba(147, 51, 234, 0.5)"
        ctx.lineWidth = 1.5

        ctx.beginPath()
        ctx.rect(x - 25, y - 20, 50, 40)
        ctx.fill()
        ctx.stroke()

        // Connection line to next block
        if (i < 6) {
          const nextX = canvas.width * (0.15 + (i + 1) * 0.12) + Math.sin(time + i + 1) * 40
          const nextY = canvas.height * 0.5 + Math.cos(time * 0.7 + i + 1) * 60

          ctx.beginPath()
          ctx.moveTo(x + 25, y)
          ctx.lineTo(nextX - 25, nextY)
          ctx.strokeStyle = "rgba(16, 185, 129, 0.6)"
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }

      // Draw data packets moving along connections
      for (let i = 0; i < 6; i++) {
        const progress = (time * 0.4 + i * 0.2) % 1
        const startX = canvas.width * (0.15 + i * 0.12) + Math.sin(time + i) * 40 + 25
        const startY = canvas.height * 0.5 + Math.cos(time * 0.7 + i) * 60
        const endX = canvas.width * (0.15 + (i + 1) * 0.12) + Math.sin(time + i + 1) * 40 - 25
        const endY = canvas.height * 0.5 + Math.cos(time * 0.7 + i + 1) * 60

        const x = startX + (endX - startX) * progress
        const y = startY + (endY - startY) * progress

        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(245, 158, 21, 0.9)"
        ctx.fill()

        // Glow effect
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(245, 158, 21, 0.3)"
        ctx.fill()
      }
    }

    drawNetwork()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  // function setBrochureOpen(arg0: boolean): void {
  //   throw new Error("Function not implemented.")
  // }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gray-950">
      {/* Network and blockchain visualization */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-gray-950"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
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
              20 – 21 August 2025, Johannesburg, South Global
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ButtonLink
              href="/sponsor"
              // variant="primary"
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            >
              Sponsorship Options
            </ButtonLink>
            <ButtonLink
              href="/book-now"
              // variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border-0"
            >
              Buy Tickets
            </ButtonLink>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-300"
              onClick={() => setBrochureOpen(true)}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </motion.div>
          <BrochureDownloadForm open={brochureOpen} onOpenChange={setBrochureOpen} />

          {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="max-w-3xl mx-auto p-6 shadow-lg rounded-2xl bg-white/80 backdrop-blur-sm border-slate-700 ">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center "
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
                }}
              >
                <CounterStat end={500} label="Attendees" delay={0} />
                <CounterStat end={35} label="Speakers" delay={200} />
                <CounterStat end={12} label="Industry Sessions" delay={400} />
                <CounterStat end={15} label="Hours of Networking" delay={600} />
              </motion.div>
            </Card>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}

