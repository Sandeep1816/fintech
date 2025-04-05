"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { ContactForm } from "./contact-form"

interface ContactTabProps {
  item: any
}

export function ContactTab({ item }: ContactTabProps) {
  return (
    <div className="space-y-6">
      <motion.h2 variants={item} className="text-2xl font-bold mb-6 text-gray-800">
        Contact Us
      </motion.h2>

      <motion.div variants={item} className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-black">Get in Touch</h3>
          <p className="text-gray-700 mb-6">
            Have questions about the Global FinTech Fest & Awards? Our team is here to help. Reach out to us using the
            contact form or the information provided.
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
          <ContactForm />
        </div>
      </motion.div>
    </div>
  )
}

