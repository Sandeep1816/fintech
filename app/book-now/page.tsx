"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Sparkles, Calendar, CheckCircle2, Loader2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function BookNowPage() {
  // Form states
  const [isSubmittingRegistration, setIsSubmittingRegistration] = useState(false)
  const [registrationStatus, setRegistrationStatus] = useState<"idle" | "success" | "error">("idle")
  const [registrationError, setRegistrationError] = useState("")
  const [showRegistrationThankYou, setShowRegistrationThankYou] = useState(false)

  const [isSubmittingContact, setIsSubmittingContact] = useState(false)
  const [contactStatus, setContactStatus] = useState<"idle" | "success" | "error">("idle")
  const [contactError, setContactError] = useState("")
  const [showContactThankYou, setShowContactThankYou] = useState(false)

  // Form refs for resetting
  const registrationFormRef = useRef<HTMLFormElement>(null)
  const contactFormRef = useRef<HTMLFormElement>(null)

  // Reset thank you messages after timeout
  useEffect(() => {
    let registrationTimer: NodeJS.Timeout
    let contactTimer: NodeJS.Timeout

    if (showRegistrationThankYou) {
      registrationTimer = setTimeout(() => {
        setShowRegistrationThankYou(false)
      }, 10000)
    }

    if (showContactThankYou) {
      contactTimer = setTimeout(() => {
        setShowContactThankYou(false)
      }, 10000)
    }

    return () => {
      clearTimeout(registrationTimer)
      clearTimeout(contactTimer)
    }
  }, [showRegistrationThankYou, showContactThankYou])

  // Animation variants
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

  // Handle registration form submission
  const handleRegistrationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmittingRegistration(true)
    setRegistrationStatus("idle")
    setRegistrationError("")

    try {
      const formData = new FormData(e.currentTarget)
      const formValues = Object.fromEntries(formData.entries())

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })

      const data = await response.json()

      if (response.ok) {
        setRegistrationStatus("success")
        registrationFormRef.current?.reset()
        setShowRegistrationThankYou(true)
      } else {
        setRegistrationStatus("error")
        setRegistrationError(data.error || "Failed to register. Please try again.")
      }
    } catch (error) {
      console.error("Registration error:", error)
      setRegistrationStatus("error")
      setRegistrationError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmittingRegistration(false)
    }
  }

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmittingContact(true)
    setContactStatus("idle")
    setContactError("")

    try {
      const formData = new FormData(e.currentTarget)
      const formValues = Object.fromEntries(formData.entries())

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })

      const data = await response.json()

      if (response.ok) {
        setContactStatus("success")
        contactFormRef.current?.reset()
        setShowContactThankYou(true)
      } else {
        setContactStatus("error")
        setContactError(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setContactStatus("error")
      setContactError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmittingContact(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16">
      {/* Animated background elements */}
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto">
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book <span className="text-black">Now</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </motion.div>

          <Tabs defaultValue="attend" className="mb-12">
            <TabsList className="grid grid-cols-2 mb-8 bg-gray-100 border border-gray-200 p-1">
              <TabsTrigger
                value="attend"
                className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-700 hover:text-black"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Attend
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-700 hover:text-black"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </TabsTrigger>
            </TabsList>

            <TabsContent value="attend" className="space-y-6">
              <motion.h2 variants={item} className="text-2xl font-bold mb-6 text-gray-800">
                Register to Attend
              </motion.h2>

              {registrationStatus === "success" && !showRegistrationThankYou && (
                <Alert className="bg-green-50 border-green-200 text-green-800 mb-6">
                  <AlertDescription>
                    Thank you for registering! We&apos;ve sent a confirmation email with details about the event.
                  </AlertDescription>
                </Alert>
              )}

              {registrationStatus === "error" && (
                <Alert className="bg-red-50 border-red-200 text-red-800 mb-6">
                  <AlertDescription>{registrationError}</AlertDescription>
                </Alert>
              )}

              <motion.div
                variants={item}
                className="bg-gray-50 backdrop-blur-md p-8 rounded-lg mb-8 border border-gray-200 shadow-sm"
              >
                {showRegistrationThankYou ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
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
                    <h3 className="text-2xl font-bold mb-4 text-black">Registration Successful!</h3>
                    <p className="text-gray-700 mb-6 max-w-md mx-auto">
                      Thank you for registering for the Global Fintech Fest & Awards! We&apos;ve sent a confirmation email with all the details you&apos;ll need.
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
                  <>
                    <h3 className="text-xl font-semibold mb-6 text-center text-black flex items-center justify-center">
                      <Sparkles className="w-5 h-5 mr-2 text-black" />
                      Secure Your Spot
                    </h3>

                    <form
                      className="space-y-4 max-w-md mx-auto"
                      onSubmit={handleRegistrationSubmit}
                      ref={registrationFormRef}
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-800">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-800">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1 text-gray-800">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="job" className="block text-sm font-medium mb-1 text-gray-800">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          id="job"
                          name="job"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-800">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="ticket" className="block text-sm font-medium mb-1 text-gray-800">
                          Ticket Type *
                        </label>
                        <select
                          id="ticket"
                          name="ticket"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black focus:border-black focus:ring-black/20"
                          required
                        >
                          <option value="">Select a ticket type</option>
                          <option value="standard">Standard Pass</option>
                          <option value="premium">Premium Pass</option>
                          <option value="vip">VIP Pass</option>
                        </select>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-black text-white py-2 rounded-md shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                          disabled={isSubmittingRegistration}
                        >
                          {isSubmittingRegistration ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <motion.span
                              initial={{ opacity: 1 }}
                              whileHover={{
                                opacity: [1, 0.8, 1],
                                transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                              }}
                            >
                              Register Now
                            </motion.span>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>

              <motion.div variants={item} className="grid md:grid-cols-3 gap-6">
                <div className="bg-white backdrop-blur-md p-6 rounded-lg border border-gray-200 hover:border-black/30 transition-all duration-300 hover:shadow-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-black">Standard Pass</h3>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Access to all sessions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Networking opportunities
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Lunch and refreshments
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Digital event materials
                    </li>
                  </ul>
                  <div className="text-center text-xl font-bold text-black">$299</div>
                </div>

                <div className="bg-gray-100 backdrop-blur-md p-6 rounded-lg border border-black/30 relative hover:shadow-lg shadow-md">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold py-1 px-3 rounded-full">
                    MOST POPULAR
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-black">Premium Pass</h3>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      All Standard Pass benefits
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Priority seating
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Exclusive networking event
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      1-on-1 meeting scheduler
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Awards dinner access
                    </li>
                  </ul>
                  <div className="text-center text-xl font-bold text-black">$599</div>
                </div>

                <div className="bg-white backdrop-blur-md p-6 rounded-lg border border-gray-200 hover:border-black/30 transition-all duration-300 hover:shadow-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-black">VIP Pass</h3>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      All Premium Pass benefits
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      VIP lounge access
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Speaker dinner invitation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Exclusive workshop access
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Recorded sessions access
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Personalized agenda support
                    </li>
                  </ul>
                  <div className="text-center text-xl font-bold text-black">$999</div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <motion.h2 variants={item} className="text-2xl font-bold mb-6 text-gray-800">
                Contact Us
              </motion.h2>

              {contactStatus === "success" && !showContactThankYou && (
                <Alert className="bg-green-50 border-green-200 text-green-800 mb-6">
                  <AlertDescription>
                    Thank you for your message! We&apos;ll get back to you as soon as possible.
                  </AlertDescription>
                </Alert>
              )}

              {contactStatus === "error" && (
                <Alert className="bg-red-50 border-red-200 text-red-800 mb-6">
                  <AlertDescription>{contactError}</AlertDescription>
                </Alert>
              )}

              <motion.div variants={item} className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-black">Get in Touch</h3>
                  <p className="text-gray-700 mb-6">
                    Have questions about the Global FinTech Fest & Awards? Our team is here to help. Reach out to us
                    using the contact form or the information provided.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                          <Mail className="h-5 w-5 text-black" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-black">Email Us</p>
                        <a
                          href="mailto:info@Globalfintechfest.com"
                          className="text-sm text-gray-700 hover:text-black transition-colors"
                        >
                          info@Globalfintechfest.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                          <Phone className="h-5 w-5 text-black" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-black">Call Us</p>
                        <a href="tel:+27123456789" className="text-sm text-gray-700 hover:text-black transition-colors">
                          +27 12 345 6789
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-medium mb-2 text-black">Event Location</h4>
                    <p className="text-sm text-gray-700">
                      Johannesburg, South Global
                      <br />
                      Venue details to be announced
                    </p>
                  </div>
                </div>

                <div>
                  {showContactThankYou ? (
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
                      <h3 className="text-2xl font-bold mb-4 text-black">Message Sent!</h3>
                      <p className="text-gray-700 mb-6">
                        Thank you for contacting us. We&apos;ve received your message and will get back to you as soon as possible.
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
                    <form
                      className="space-y-4 bg-gray-50 backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-sm"
                      onSubmit={handleContactSubmit}
                      ref={contactFormRef}
                    >
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium mb-1 text-gray-800">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium mb-1 text-gray-800">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-subject" className="block text-sm font-medium mb-1 text-gray-800">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="contact-subject"
                          name="subject"
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium mb-1 text-gray-800">
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                          required
                        ></textarea>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-black text-white py-2 rounded-md shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                          disabled={isSubmittingContact}
                        >
                          {isSubmittingContact ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <motion.span
                              initial={{ opacity: 1 }}
                              whileHover={{
                                opacity: [1, 0.8, 1],
                                transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                              }}
                            >
                              Send Message
                            </motion.span>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
