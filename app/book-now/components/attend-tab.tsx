"use client"

import { motion } from "framer-motion"
// import { CheckCircle2 } from "lucide-react"
import { RegistrationForm } from "./registration-form"

interface AttendTabProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any
}

export function AttendTab({ item }: AttendTabProps) {
  return (
    <div className="space-y-6">
      <motion.h2 variants={item} className="text-2xl font-bold mb-6 text-gray-800">
        Register to Attend
      </motion.h2>

      <motion.div
        variants={item}
        className="bg-gray-50 backdrop-blur-md p-8 rounded-lg mb-8 border border-gray-200 shadow-sm"
      >
        <RegistrationForm />
      </motion.div>

      <motion.div variants={item} className="grid md:grid-cols-3 gap-6">
        {/* <div className="bg-white backdrop-blur-md p-6 rounded-lg border border-gray-200 hover:border-black/30 transition-all duration-300 hover:shadow-lg shadow-sm">
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
        </div> */}

        {/* <div className="bg-gray-100 backdrop-blur-md p-6 rounded-lg border border-black/30 relative hover:shadow-lg shadow-md">
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
        </div> */}

        {/* <div className="bg-white backdrop-blur-md p-6 rounded-lg border border-gray-200 hover:border-black/30 transition-all duration-300 hover:shadow-lg shadow-sm">
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
        </div> */}
      </motion.div>
    </div>
  )
}

