"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check, ArrowRight, Award, Users, Zap, Globe, Megaphone, Calendar, Sparkles, Loader2 } from 'lucide-react'
import ButtonLink from "@/components/ui/button-link"
import { useState, useRef, useEffect } from "react"

export default function BecomeSponsorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [showThankYou, setShowThankYou] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // Reset thank you message after timeout
  useEffect(() => {
    let timer: NodeJS.Timeout
    
    if (showThankYou) {
      timer = setTimeout(() => {
        setShowThankYou(false)
      }, 10000)
    }
    
    return () => {
      clearTimeout(timer)
    }
  }, [showThankYou])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus("idle")

    try {
      const formData = new FormData(e.currentTarget)
      const formValues = Object.fromEntries(formData.entries())

      const response = await fetch("/api/sponsor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        setFormStatus("success")
        // Reset form using the form reference
        formRef.current?.reset()
        setShowThankYou(true)
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-100/50 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gray-100/50 rounded-full blur-3xl"
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
            backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl mx-auto">
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Become a <span className="text-black">Sponsor</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join leading organizations in shaping the future of fintech through our exclusive sponsorship
              opportunities.
            </p>
          </motion.div>

          {/* Hero section with animation */}
          <motion.div variants={item} className="relative overflow-hidden rounded-xl p-8 md:p-12 mb-16 bg-gray-100">
            {/* Dynamic background with animated gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              {/* Animated circles */}
              <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 15,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl"
                animate={{
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 12,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/4 w-64 h-64 bg-gray-300/30 rounded-full blur-3xl"
                animate={{
                  x: [0, 40, 0],
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 18,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Animated grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto text-black">
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-6"
                animate={{
                  textShadow: ["0 0 5px rgba(0,0,0,0.1)", "0 0 15px rgba(0,0,0,0.2)", "0 0 5px rgba(0,0,0,0.1)"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                }}
              >
                Elevate Your Brand at the Premier Fintech Event
              </motion.h2>
              <p className="text-lg text-gray-700 mb-8">
                Connect with industry leaders, showcase your solutions, and position your brand at the forefront of
                fintech innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonLink
                  href="#packages"
                  // variant="default"
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 shadow-lg transition-all duration-300"
                >
                  View Sponsorship Packages
                </ButtonLink>
                <ButtonLink
                  href="#apply"
                  variant="outline"
                  size="lg"
                  className="border-black text-black hover:bg-gray-100 transition-all duration-300"
                >
                  Apply Now
                </ButtonLink>
              </div>
            </div>
          </motion.div>

          {/* Benefits section */}
          <motion.div variants={item} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">
              Why Sponsor the Fintech Pioneer Awards?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden relative hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Connect with Decision Makers</h3>
                  <p className="text-gray-700">
                    Network with 500+ C-suite executives, directors, and key decision makers from across the fintech
                    ecosystem.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden relative hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Enhance Brand Visibility</h3>
                  <p className="text-gray-700">
                    Showcase your brand to a targeted audience of fintech professionals, investors, and industry
                    leaders.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden relative hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Megaphone className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Thought Leadership</h3>
                  <p className="text-gray-700">
                    Position your company as an industry leader through speaking opportunities and content
                    collaboration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Sponsorship packages */}
          <motion.div variants={item} id="packages" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">Sponsorship Packages</h2>

            <Tabs defaultValue="platinum" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-gray-100 border border-gray-200 p-1">
                <TabsTrigger
                  value="platinum"
                  className="data-[state=active]:bg-black data-[state=active]:text-white text-gray-700 hover:text-black"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Platinum
                </TabsTrigger>
                <TabsTrigger
                  value="gold"
                  className="data-[state=active]:bg-black data-[state=active]:text-white text-gray-700 hover:text-black"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Gold
                </TabsTrigger>
                <TabsTrigger
                  value="silver"
                  className="data-[state=active]:bg-black data-[state=active]:text-white text-gray-700 hover:text-black"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Silver
                </TabsTrigger>
              </TabsList>

              <TabsContent value="platinum">
                <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden relative">
                  <CardHeader className="bg-black text-white rounded-t-lg">
                    <div className="flex justify-between items-center">
                      <CardTitle>Platinum Sponsor</CardTitle>
                      <Award className="h-6 w-6" />
                    </div>
                    <CardDescription className="text-gray-300">
                      Premium visibility and maximum engagement
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Keynote speaking opportunity (20 minutes)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Premium exhibition space (6x3m)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">10 complimentary event passes</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Logo on main stage backdrop and all event materials</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Full-page ad in event program</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Sponsored email to attendee database</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Social media promotion (5 dedicated posts)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Access to VIP networking events</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">
                          Attendee list with contact information (subject to privacy consent)
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <ButtonLink
                        href="#apply"
                        // variant="default"
                        size="lg"
                        className="bg-black text-white hover:bg-gray-800 shadow-lg transition-all duration-300"
                      >
                        Apply for Platinum Sponsorship
                      </ButtonLink>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gold">
                <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden relative">
                  <CardHeader className="bg-gray-800 text-white rounded-t-lg">
                    <div className="flex justify-between items-center">
                      <CardTitle>Gold Sponsor</CardTitle>
                      <Award className="h-6 w-6" />
                    </div>
                    <CardDescription className="text-gray-300">
                      Enhanced visibility and engagement opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Panel participation opportunity</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Exhibition space (3x3m)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">6 complimentary event passes</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Logo on event website and printed materials</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Half-page ad in event program</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Social media promotion (3 dedicated posts)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">
                          Attendee list with contact information (subject to privacy consent)
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <ButtonLink
                        href="#apply"
                        // variant="default"
                        size="lg"
                        className="bg-gray-800 text-white hover:bg-gray-700 shadow-lg transition-all duration-300"
                      >
                        Apply for Gold Sponsorship
                      </ButtonLink>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="silver">
                <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden relative">
                  <CardHeader className="bg-gray-600 text-white rounded-t-lg">
                    <div className="flex justify-between items-center">
                      <CardTitle>Silver Sponsor</CardTitle>
                      <Award className="h-6 w-6" />
                    </div>
                    <CardDescription className="text-gray-300">Solid presence with essential benefits</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Exhibition space (2x2m)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">3 complimentary event passes</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Logo on event website</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Quarter-page ad in event program</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 mt-0.5" />
                        <p className="text-gray-700">Social media promotion (1 dedicated post)</p>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <ButtonLink
                        href="#apply"
                        // variant="default"
                        size="lg"
                        className="bg-gray-600 text-white hover:bg-gray-500 shadow-lg transition-all duration-300"
                      >
                        Apply for Silver Sponsorship
                      </ButtonLink>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Additional opportunities */}
          <motion.div variants={item} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">
              Additional Sponsorship Opportunities
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-black mr-2" />
                    <h3 className="text-xl font-semibold text-black">Networking Reception Sponsor</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Host the official networking reception with branded signage, custom cocktails, and speaking
                    opportunity.
                  </p>
                  <ButtonLink
                    href="#apply"
                    variant="outline"
                    size="sm"
                    className="border-black text-black hover:bg-gray-100 transition-all duration-300"
                  >
                    Inquire About This Opportunity
                  </ButtonLink>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-5 w-5 text-black mr-2" />
                    <h3 className="text-xl font-semibold text-black">Awards Ceremony Sponsor</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Exclusive branding at the awards ceremony, opportunity to present an award, and recognition in all
                    awards materials.
                  </p>
                  <ButtonLink
                    href="#apply"
                    variant="outline"
                    size="sm"
                    className="border-black text-black hover:bg-gray-100 transition-all duration-300"
                  >
                    Inquire About This Opportunity
                  </ButtonLink>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-5 w-5 text-black mr-2" />
                    <h3 className="text-xl font-semibold text-black">Innovation Lab Sponsor</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Brand the innovation showcase area where startups and new technologies are featured.
                  </p>
                  <ButtonLink
                    href="#apply"
                    variant="outline"
                    size="sm"
                    className="border-black text-black hover:bg-gray-100 transition-all duration-300"
                  >
                    Inquire About This Opportunity
                  </ButtonLink>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 text-black mr-2" />
                    <h3 className="text-xl font-semibold text-black">VIP Lounge Sponsor</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Exclusive branding in the VIP lounge area with opportunity to host private meetings with key
                    attendees.
                  </p>
                  <ButtonLink
                    href="#apply"
                    variant="outline"
                    size="sm"
                    className="border-black text-black hover:bg-gray-100 transition-all duration-300"
                  >
                    Inquire About This Opportunity
                  </ButtonLink>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Application form */}
          <motion.div variants={item} id="apply" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">Apply for Sponsorship</h2>

            <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <CardContent className="p-8 relative">
                {showThankYou ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8 max-w-2xl mx-auto"
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
                    <h3 className="text-2xl font-bold mb-4 text-black">Application Submitted!</h3>
                    <p className="text-gray-700 mb-6">
                      Thank you for your interest in sponsoring the Global Fintech Fest & Awards! Our team will review your application and contact you shortly to discuss the next steps.
                    </p>
                    <div className="text-sm text-gray-500">
                      This message will disappear in a few seconds...
                    </div>
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
                ) : (
                  <form className="space-y-4 max-w-2xl mx-auto" onSubmit={handleSubmit} ref={formRef}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1 text-black">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1 text-black">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1 text-black">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="job" className="block text-sm font-medium mb-1 text-black">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          id="job"
                          name="job"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1 text-black">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="package" className="block text-sm font-medium mb-1 text-black">
                          Sponsorship Package *
                        </label>
                        <select
                          id="package"
                          name="package"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black focus:border-black focus:ring-black"
                          required
                        >
                          <option value="">Select a package</option>
                          <option value="platinum">Platinum Sponsor</option>
                          <option value="gold">Gold Sponsor</option>
                          <option value="silver">Silver Sponsor</option>
                          <option value="reception">Networking Reception Sponsor</option>
                          <option value="awards">Awards Ceremony Sponsor</option>
                          <option value="innovation">Innovation Lab Sponsor</option>
                          <option value="vip">VIP Lounge Sponsor</option>
                          <option value="custom">Custom Package</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="goals" className="block text-sm font-medium mb-1 text-black">
                        Sponsorship Goals
                      </label>
                      <textarea
                        id="goals"
                        name="goals"
                        rows={3}
                        className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                        placeholder="What are your main objectives for sponsoring this event?"
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1 text-black">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                        placeholder="Any specific requirements or questions?"
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-md shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <motion.span
                            initial={{ opacity: 1 }}
                            whileHover={{
                              opacity: [1, 0.8, 1],
                              transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                            }}
                          >
                            Submit Sponsorship Application
                          </motion.span>
                        )}
                      </button>
                      {formStatus === "success" && !showThankYou && (
                        <p className="mt-4 text-green-500 text-center">
                          Thank you! Your application has been submitted successfully.
                        </p>
                      )}
                      {formStatus === "error" && (
                        <p className="mt-4 text-red-500 text-center">
                          Oops! There was an error submitting your application. Please try again.
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Testimonials or past sponsors */}
          <motion.div variants={item} className="mt-16 text-center">
            <p className="text-lg font-medium mb-4 text-gray-700">Have questions about sponsorship opportunities?</p>
            <ButtonLink
              href="/contact"
              variant="outline"
              size="lg"
              className="gap-2 border-black text-black hover:bg-gray-100 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
