"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ThankYouMessage } from "./thank-you-message"

export function ContactForm() {
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)
  const [contactStatus, setContactStatus] = useState<"idle" | "success" | "error">("idle")
  const [contactError, setContactError] = useState("")
  const [showContactThankYou, setShowContactThankYou] = useState(false)
  const contactFormRef = useRef<HTMLFormElement>(null)

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

  if (showContactThankYou) {
    return (
      <ThankYouMessage
        title="Message Sent!"
        message="Thank you for contacting us. We've received your message and will get back to you as soon as possible."
      />
    )
  }

  return (
    <>
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
    </>
  )
}

