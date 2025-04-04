"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail,  MapPin, Clock, MessageSquare, Calendar, Users, Sparkles, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, type FormEvent } from "react"
// import { useToast } from "@/hooks/use-toast"
import { toast } from "sonner";


export default function ContactPage() {
  // const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    inquiry: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        inquiry: "",
        message: "",
      })

      // Show thank you message
      setShowThankYou(true)

      // Set timer to hide thank you message after 10 seconds
      setTimeout(() => {
        setShowThankYou(false)
      }, 10000)

      toast(
       "Message sent successfully!.We'll get back to you as soon as possible"
      )
    } catch (error) {
      console.error("Error submitting form:", error)
      toast( "Error sending message. Please try again later")
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
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl mx-auto ">
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-black">Touch</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Have questions about Global Fintech Fest & Awards? Our team is here to help you.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div variants={item} className="grid md:grid-cols-3 gap-6 mb-16 ml-50">
            <Card className="bg-white backdrop-blur-md border-gray-200 overflow-hidden relative hover:shadow-lg shadow-sm transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-lg"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">Email Us</h3>
                <p className="text-gray-700 mb-4">Our team will respond within 24 hours</p>
                <a
                  href="mailto:info@Globalfintechfest.com"
                  className="text-gray-700 hover:text-black hover:underline font-medium transition-colors"
                >
                  proptechsales@maxpo.ae
                </a>
              </CardContent>
            </Card>
{/* 
            <Card className="bg-white backdrop-blur-md border-gray-200 overflow-hidden relative hover:shadow-lg shadow-sm transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-lg"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">Call Us</h3>
                <p className="text-gray-700 mb-4">Monday to Friday, 9am - 5pm SAST</p>
                <a
                  href="tel:+27123456789"
                  className="text-gray-700 hover:text-black hover:underline font-medium transition-colors"
                >
                  +27 12 345 6789
                </a>
              </CardContent>
            </Card> */}

            <Card className="bg-white backdrop-blur-md border-gray-200 overflow-hidden relative hover:shadow-lg shadow-sm transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-lg"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">Event Location</h3>
                <p className="text-gray-700 mb-4">Johannesburg, South Global</p>
                <p className="text-sm text-gray-600">Venue details to be announced</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact form and info */}
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact form */}
            <motion.div variants={item} className="md:col-span-3">
              <Card className="bg-white backdrop-blur-md border-gray-200 overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
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
                      <h2 className="text-2xl font-bold mb-4 text-black">Thank You!</h2>
                      <p className="text-gray-700 mb-6">
                        Your message has been sent successfully. We appreciate your interest and will get back to you as
                        soon as possible.
                      </p>
                      <div className="text-sm text-gray-500">This message will disappear in a few seconds...</div>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-black flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-black" />
                        Send Us a Message
                      </h2>

                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-800">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full p-2 bg-white border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20`}
                              required
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-800">
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full p-2 bg-white border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20`}
                              required
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-800">
                            Subject *
                          </label>
                          <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`w-full p-2 bg-white border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20`}
                            required
                          />
                          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                        </div>

                        <div>
                          <label htmlFor="inquiry" className="block text-sm font-medium mb-1 text-gray-800">
                            Type of Inquiry
                          </label>
                          <select
                            id="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                            className="w-full p-2 bg-white border border-gray-300 rounded-md text-black focus:border-black focus:ring-black/20"
                          >
                            <option value="">Select an option</option>
                            <option value="general">General Information</option>
                            <option value="sponsorship">Sponsorship</option>
                            <option value="speaking">Speaking Opportunity</option>
                            <option value="registration">Registration</option>
                            <option value="media">Media Inquiry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-800">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full p-2 bg-white border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20`}
                            required
                          ></textarea>
                          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <div className="pt-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-black text-white py-3 rounded-md shadow-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
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
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={item} className="md:col-span-2">
              <div className="space-y-6 bg-gray-50 backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-black">Office Hours</h3>
                      <p className="text-sm text-gray-700">
                        Monday - Friday: 9:00 AM - 5:00 PM SAST
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-black">Event Dates</h3>
                      <p className="text-sm text-gray-700">
                        20 - 21 August 2025
                        <br />
                        Johannesburg, South Global
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-black">Media Inquiries</h3>
                      <p className="text-sm text-gray-700">
                        For press and media inquiries, please contact:
                        <br />
                        <a
                          href="mailto:media@Globalfintechfest.com"
                          className="text-gray-700 hover:text-black hover:underline transition-colors"
                        >
                          media@Globalfintechfest.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-black">Sponsorship Inquiries</h3>
                      <p className="text-sm text-gray-700">
                        For sponsorship opportunities, please contact:
                        <br />
                        <a
                          href="mailto:sponsors@Globalfintechfest.com"
                          className="text-gray-700 hover:text-black hover:underline transition-colors"
                        >
                          sponsors@Globalfintechfest.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-medium mb-4 text-black">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://twitter.com"
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ section */}
          <motion.div variants={item} className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-black">Frequently Asked Questions</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white backdrop-blur-md border-gray-200 hover:border-black/30 transition-all duration-300 hover:shadow-lg shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-black">When and where is the event?</h3>
                  <p className="text-gray-700">
                    Global Fintech Fest & Awards will take place on July 10-11, 2025, in Johannesburg, South Global. The
                    exact venue will be announced closer to the event date.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white backdrop-blur-md border-gray-200 hover:border-black/30 transition-all duration-300 hover:shadow-lg shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-black">How can I register for the event?</h3>
                  <p className="text-gray-700">
                    You can register for the event through our Book Now page. Early bird tickets will be available soon.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white backdrop-blur-md border-gray-200 hover:border-black/30 transition-all duration-300 hover:shadow-lg shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-black">How can I become a sponsor?</h3>
                  <p className="text-gray-700">
                    Please visit our Become a Sponsor page to view our sponsorship packages and submit an application,
                    or contact us directly at sponsors@Globalfintechfest.com.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white backdrop-blur-md border-gray-200 hover:border-black/30 transition-all duration-300 hover:shadow-lg shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-black">How can I apply to be a speaker?</h3>
                  <p className="text-gray-700">
                    We welcome speaker applications from industry experts. Please visit our Speakers page to submit your
                    application.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                className="border-black/50 text-black hover:bg-black/10 hover:border-black transition-all duration-300"
              >
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

