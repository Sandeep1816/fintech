"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ThankYouMessage } from "./thank-you-message"

export function AgendaForm() {
  const [isSubmittingAgenda, setIsSubmittingAgenda] = useState(false)
  const [agendaStatus, setAgendaStatus] = useState<"idle" | "success" | "error">("idle")
  const [agendaError, setAgendaError] = useState("")
  const [showAgendaThankYou, setShowAgendaThankYou] = useState(false)
  const agendaFormRef = useRef<HTMLFormElement>(null)

  const handleAgendaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmittingAgenda(true)
    setAgendaStatus("idle")
    setAgendaError("")

    try {
      const formData = new FormData(e.currentTarget)
      const formEntries = Array.from(formData.entries())

      // Handle multiple checkbox selections for interests
      const interestsValues = formEntries.filter((entry) => entry[0] === "interests").map((entry) => entry[1])

      // Create a base form values object with single values
      const baseFormValues: Record<string, string> = Object.fromEntries(
        formEntries
          .filter((entry, index, self) => index === self.findIndex((e) => e[0] === entry[0]))
          .map(([key, value]) => [key, typeof value === "string" ? value : ""])
      )
      

      // Create the final form values object with proper typing
      const formValues: Record<string, string | string[]> = {
        ...baseFormValues,
      }

      // Add interests array back to form values
      if (interestsValues.length > 0) {
        formValues.interests = interestsValues as string[]
      }

      // Handle multiple select values
      if (baseFormValues.session_preference) {
        const sessionPreferences = formData.getAll("session_preference") as string[]
        formValues.session_preference = sessionPreferences
      }

      const response = await fetch("/api/agenda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })

      const data = await response.json()

      if (response.ok) {
        setAgendaStatus("success")
        agendaFormRef.current?.reset()
        setShowAgendaThankYou(true)
      
        // Hide thank you message and show form again after 10 seconds
        setTimeout(() => {
          setShowAgendaThankYou(false)
        }, 10000)
      }
       else {
        setAgendaStatus("error")
        setAgendaError(data.error || "Failed to submit agenda preferences. Please try again.")
      }
    } catch (error) {
      console.error("Agenda form error:", error)
      setAgendaStatus("error")
      setAgendaError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmittingAgenda(false)
    }
  }

  if (showAgendaThankYou) {
    return (
      <ThankYouMessage
        title="Preferences Saved!"
        message="Thank you for sharing your agenda preferences. We'll use this information to enhance your event experience."
      />
    )
  }

  return (
    <>
      {agendaStatus === "success" && !showAgendaThankYou && (
        <Alert className="bg-green-50 border-green-200 text-green-800 mb-6">
          <AlertDescription>
            Thank you for submitting your agenda preferences! We&apos;ll use this to personalize your experience.
          </AlertDescription>
        </Alert>
      )}

      {agendaStatus === "error" && (
        <Alert className="bg-red-50 border-red-200 text-red-800 mb-6">
          <AlertDescription>{agendaError}</AlertDescription>
        </Alert>
      )}

      <form
        className="bg-gray-50 backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-sm"
        onSubmit={handleAgendaSubmit}
        ref={agendaFormRef}
      >
        <h3 className="text-xl font-semibold mb-4 text-black">Personalize Your Experience</h3>
        <p className="text-sm text-gray-700 mb-6">
          Let us know your interests to help us customize your agenda and recommend relevant sessions.
        </p>

        <div className="space-y-4">
          <div>
            <label htmlFor="agenda-name" className="block text-sm font-medium mb-1 text-gray-800">
              Full Name *
            </label>
            <input
              type="text"
              id="agenda-name"
              name="name"
              className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
              required
            />
          </div>

          <div>
            <label htmlFor="agenda-email" className="block text-sm font-medium mb-1 text-gray-800">
              Email *
            </label>
            <input
              type="email"
              id="agenda-email"
              name="email"
              className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800">Primary Interests *</label>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interest-fintech"
                  name="interests"
                  value="FinTech Innovations"
                  className="h-4 w-4 text-black focus:ring-black/20 border-gray-300 rounded"
                />
                <label htmlFor="interest-fintech" className="ml-2 text-sm text-gray-700">
                  FinTech Innovations
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interest-blockchain"
                  name="interests"
                  value="Blockchain"
                  className="h-4 w-4 text-black focus:ring-black/20 border-gray-300 rounded"
                />
                <label htmlFor="interest-blockchain" className="ml-2 text-sm text-gray-700">
                  Blockchain
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interest-banking"
                  name="interests"
                  value="Digital Banking"
                  className="h-4 w-4 text-black focus:ring-black/20 border-gray-300 rounded"
                />
                <label htmlFor="interest-banking" className="ml-2 text-sm text-gray-700">
                  Digital Banking
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interest-payments"
                  name="interests"
                  value="Payments"
                  className="h-4 w-4 text-black focus:ring-black/20 border-gray-300 rounded"
                />
                <label htmlFor="interest-payments" className="ml-2 text-sm text-gray-700">
                  Payments
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interest-regtech"
                  name="interests"
                  value="RegTech"
                  className="h-4 w-4 text-black focus:ring-black/20 border-gray-300 rounded"
                />
                <label htmlFor="interest-regtech" className="ml-2 text-sm text-gray-700">
                  RegTech
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interest-insurtech"
                  name="interests"
                  value="InsurTech"
                  className="h-4 w-4 text-black focus:ring-black/20 border-gray-300 rounded"
                />
                <label htmlFor="interest-insurtech" className="ml-2 text-sm text-gray-700">
                  InsurTech
                </label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="session-pref" className="block text-sm font-medium mb-1 text-gray-800">
              Preferred Session Types *
            </label>
            <select
              id="session-pref"
              name="session_preference"
              className="w-full p-2 bg-white border border-gray-300 rounded-md text-black focus:border-black focus:ring-black/20"
              required
              multiple
            >
              <option value="keynotes">Keynote Presentations</option>
              <option value="panels">Panel Discussions</option>
              {/* <option value="workshops">Hands-on Workshops</option> */}
              <option value="networking">Networking Sessions</option>
              <option value="case-studies">Case Studies</option>
              <option value="roundtables">Roundtable Discussions</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple options</p>
          </div>
          <div>
            <label htmlFor="networking-goals" className="block text-sm font-medium mb-1 text-gray-800">
              Networking Goals
            </label>
            <textarea
              id="networking-goals"
              name="networking_goals"
              rows={3}
              className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
              placeholder="Who would you like to connect with at the event?"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
              disabled={isSubmittingAgenda}
            >
              {isSubmittingAgenda ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving Preferences...
                </>
              ) : (
                <motion.span
                  initial={{ opacity: 1 }}
                  whileHover={{
                    opacity: [1, 0.8, 1],
                    transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                  }}
                >
                  Save My Preferences
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

