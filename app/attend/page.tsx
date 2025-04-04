"use client"

import { motion } from "framer-motion"
import ButtonLink from "@/components/ui/button-link"
import {  Users, Network, Sparkles } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { toast } from "sonner";
// import { useState } from "react"
import BrochureForm from "@/components/Broucher-form"
// import FintechPioneerAwards from "@/components/finch-pioneer-awards"

export default function AttendPage() {
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
    <div className="pt-24 pb-16 bg-white mt-8">
      <div className="container mx-auto px-4">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto">
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Atte<span className="text-black">nd</span>
            </h1>
            <div className="w-20 h-1 mx-auto bg-black"></div>
          </motion.div>

          <Tabs defaultValue="why-attend" className="mb-12">
            <TabsList className="grid grid-cols-3 mb-8 mx-auto max-w-xl bg-gray-100">
              <TabsTrigger value="why-attend">Why Attend</TabsTrigger>
              <TabsTrigger value="brochure">Download Brochure</TabsTrigger>
              <TabsTrigger value="networking">Networking</TabsTrigger>
            </TabsList>

            <TabsContent value="why-attend" className="space-y-6">
              <motion.h2
                className="text-3xl font-bold text-center text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Why Attend <span className="text-gray-600">2025</span>
              </motion.h2>

              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                The Global FinTech Fest & Awards offers you the opportunity to network with the most prominent leaders
                and innovators in the industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-12">
                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-black p-4 rounded-lg transition-shadow duration-300"
                >
                  <ButtonLink
                    href="/download-brochure"
                    variant="primary"
                    className="bg-gray-800 text-white hover:bg-gray-900"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </ButtonLink>
                </motion.div> */}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-black p-4 rounded-lg transition-shadow duration-300"
                >
                  <ButtonLink href="/book-now" variant="secondary" className="bg-gray-600 text-white hover:bg-gray-700">
                    Attend as a Delegate
                  </ButtonLink>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 text-black">Unlock Global Insights and Expertise</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-4 mt-1 text-gray-600">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Industry-Leading Speakers</p>
                        <p className="text-sm text-gray-600">
                          Hear from top experts shaping the future of the industry. From CEOs to regulatory officials
                          and innovators.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1 text-gray-600">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Two Days of Dynamic Content</p>
                        <p className="text-sm text-gray-600">
                          Immerse yourself with engaging presentations, roundtables, and workshops on emerging risks,
                          digital transformation, and customer experience.
                        </p>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 text-black">Spark Transformative Connections</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-4 mt-1 text-gray-600">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Connect with Key Decision-Makers</p>
                        <p className="text-sm text-gray-600">
                          With 75% of attendees at the &apos;Head-of&apos;/Director level and above, the event offers
                          the ideal environment for impactful discussions.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1 text-gray-600">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Engage with a Diverse Network</p>
                        <p className="text-sm text-gray-600">
                          Meet industry leaders, from established banking and payments executives to innovative FinTech
                          disruptors.
                        </p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold mb-4 text-black">Stay Ahead in FinTech</h3>
                <p className="text-gray-700 mb-6">
                  Join the Industry&apos;s Top Leaders. Seize the opportunity to connect with key accounts and maintain
                  your competitive edge. Stay ahead—be part of the conversation and lead the way in innovation!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-black p-4 rounded-lg transition-shadow duration-300"
                >
                  <ButtonLink href="/book-now" variant="primary" className="bg-gray-800 text-white hover:bg-gray-900">
                    Register Now
                  </ButtonLink>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="brochure" className="space-y-6">
              <motion.h2
                className="text-3xl font-bold text-center text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Download <span className="text-gray-600">Brochure</span>
              </motion.h2>

              <div className="bg-gray-100 p-8 rounded-lg mt-6 shadow-xl">
                <motion.h3
                  className="text-2xl font-semibold mb-6 text-center text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Request Your Event Brochure
                </motion.h3>

              <BrochureForm/>
              </div>
            </TabsContent>

            <TabsContent value="networking" className="space-y-6">
              <motion.h2
                className="text-3xl font-bold text-center text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Network<span className="text-gray-600">ing</span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-700 leading-relaxed text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Network with the Top Innovators in Banking and Fintech
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-12">
                {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ButtonLink
                    className="bg-gray-800 text-white hover:bg-gray-900 py-3 px-6 rounded-lg shadow-md"
                    href="/download-brochure"
                    variant="primary"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </ButtonLink>
                </motion.div> */}

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ButtonLink href="/book-now" variant="secondary">
                    Attend as a Delegate
                  </ButtonLink>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ButtonLink href="/sponsor" variant="outline">
                    Become a Sponsor
                  </ButtonLink>
                </motion.div>
              </div>

              <motion.div
                className="bg-gray-100 p-8 rounded-lg shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.h3
                  className="text-2xl font-semibold mb-6 text-center text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Forge Meaningful Connections at Global FinTech Fest & Awards
                </motion.h3>

                <motion.p
                  className="text-center text-black mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Engage with peers, partners, and potential clients through a variety of structured and informal
                  networking opportunities designed to foster valuable relationships.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <h4 className="text-xl font-semibold mb-4 text-black">Build Meaningful Connections</h4>
                    <ul className="space-y-4 text-black">
                      <li className="flex">
                        <div className="mr-4 mt-1 text-primary">
                          <Network className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Connect with Industry Pioneers</p>
                          <p className="text-sm text-gray-600">
                            Meet Top Fintech Leaders: The Global FinTech Fest & Awards gathers 250+ attendees, including
                            C-suite executives and tech innovators.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="mr-4 mt-1 text-primary">
                          <Network className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Tailored 1-2-1 Meetings</p>
                          <p className="text-sm text-gray-600">
                            Our dedicated team ensures you connect with the right people. Schedule personalized meetings
                            with key decision-makers.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <h4 className="text-xl font-semibold mb-4 text-black">What Awaits You in Johannesburg?</h4>
                    <ul className="space-y-4 text-black">
                      <li className="flex">
                        <div className="mr-4 mt-1 text-primary">
                          <Network className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">15 Hours of Networking</p>
                          <p className="text-sm text-gray-600">
                            Over two days, immerse yourself in 15 hours of dedicated networking. Engage with industry
                            peers and build new connections.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="mr-4 mt-1 text-primary">
                          <Network className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">A Dynamic Exhibition Space</p>
                          <p className="text-sm text-gray-600">
                            Discover cutting-edge innovations and solutions in our bustling exhibition area. Connect
                            with leading providers.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* Fintech Pioneer Awards Section */}
      {/* <FintechPioneerAwards /> */}
    </div>
  )
}

