"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Loader2, Sparkles } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ThankYouMessage } from "./thank-you-message"

export function RegistrationForm() {
  const [isSubmittingRegistration, setIsSubmittingRegistration] = useState(false)
  const [registrationStatus, setRegistrationStatus] = useState<"idle" | "success" | "error">("idle")
  const [registrationError, setRegistrationError] = useState("")
  const [showRegistrationThankYou, setShowRegistrationThankYou] = useState(false)
  const registrationFormRef = useRef<HTMLFormElement>(null)

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

  if (showRegistrationThankYou) {
    return (
      <ThankYouMessage
        title="Registration Successful!"
        message="Thank you for registering for the Global Fintech Fest & Awards! We've sent a confirmation email with all the details you'll need."
      />
    )
  }

  return (
    <>
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

      <h3 className="text-xl font-semibold mb-6 text-center text-black flex items-center justify-center">
        <Sparkles className="w-5 h-5 mr-2 text-black" />
        Secure Your Spot
      </h3>

      <form className="space-y-4 max-w-md mx-auto" onSubmit={handleRegistrationSubmit} ref={registrationFormRef}>
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
  )
}

