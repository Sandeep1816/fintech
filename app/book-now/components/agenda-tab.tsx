"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Download, MapPin } from "lucide-react"
import { AgendaForm } from "./agenda-form"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BrochureDownloadForm } from "@/components/download-broucher"

interface AgendaTabProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any
}

export function AgendaTab({ item }: AgendaTabProps) {
    const [brochureOpen, setBrochureOpen] = useState(false)
  return (
    <div className="space-y-6">
      <motion.h2 variants={item} className="text-2xl font-bold mb-6 text-gray-800">
        Event Agenda & Preferences
      </motion.h2>

      <motion.div variants={item} className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-black">Event Details</h3>

          <div className="bg-gray-50 backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
            <div className="flex items-start mb-4">
              <div className="mr-4">
                <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-black" />
                </div>
              </div>
              <div>
                <p className="font-medium text-black">Date & Time</p>
                <p className="text-sm text-gray-700">
                  October 15-17, 2024
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <div className="mr-4">
                <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-black" />
                </div>
              </div>
              <div>
                <p className="font-medium text-black">Location</p>
                <p className="text-sm text-gray-700">
                  Johannesburg Convention Center
                  <br />1 Convention Square, Johannesburg, South Africa
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-black" />
                </div>
              </div>
              <div>
                <p className="font-medium text-black">Schedule Highlights</p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Keynote presentations</li>
                  <li>Panel discussions</li>
                  <li>Networking sessions</li>
                  <li>
                  Fintech Pioneer Awards</li>
                  <li>Statup Nexus
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-medium mb-3 text-black">Download Full Agenda</h4>
            <p className="text-sm text-gray-700 mb-4">
              Get the complete schedule with all sessions, speakers, and timings.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-black text-white hover:bg-gray-700 hover:text-white"
              onClick={() => setBrochureOpen(true)}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
            <BrochureDownloadForm open={brochureOpen} onOpenChange={setBrochureOpen} />

          </div>
        </div>

        <div>
          <AgendaForm />
        </div>
      </motion.div>

      {/* <motion.div
        variants={item}
        className="bg-white backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-sm mt-8"
      >
        <h3 className="text-xl font-semibold mb-4 text-black">Sample Agenda</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Main Stage
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Breakout Sessions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">09:00 - 10:00</td>
                <td className="px-6 py-4 text-sm text-gray-500">Opening Keynote: The Future of FinTech</td>
                <td className="px-6 py-4 text-sm text-gray-500">Registration & Networking Breakfast</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10:00 - 11:00</td>
                <td className="px-6 py-4 text-sm text-gray-500">Panel: Digital Transformation in Banking</td>
                <td className="px-6 py-4 text-sm text-gray-500">Workshop: Blockchain Fundamentals</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">11:00 - 11:30</td>
                <td className="px-6 py-4 text-sm text-gray-500" colSpan={2}>
                  Networking Break
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">11:30 - 12:30</td>
                <td className="px-6 py-4 text-sm text-gray-500">Fireside Chat: AI in Financial Services</td>
                <td className="px-6 py-4 text-sm text-gray-500">Roundtable: Regulatory Challenges</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">12:30 - 14:00</td>
                <td className="px-6 py-4 text-sm text-gray-500" colSpan={2}>
                  Lunch & Networking
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div> */}
    </div>
  )
}

