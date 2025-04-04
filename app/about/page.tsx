"use client"

import { motion } from "framer-motion"
import ButtonLink from "@/components/ui/button-link"
import { Download } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BrochureDownloadForm } from "@/components/download-broucher"

export default function AboutPage() {
  const [brochureOpen, setBrochureOpen] = useState(false)
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
    <div className="pt-24 pb-16  bg-white">
      <div className="container mx-auto px-4">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto">
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Abo<span className="text-black">ut</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto "></div>
          </motion.div>

          <Tabs defaultValue="overview" className="mb-12">
            <div className="relative mb-8 overflow-hidden">
              <div className="overflow-x-auto pb-3">
                <TabsList className="inline-flex w-max min-w-full bg-gray-100">
                  <TabsTrigger className="px-4 py-2 text-sm whitespace-nowrap" value="overview">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger className="px-4 py-2 text-sm whitespace-nowrap" value="discussion">
                    Discussion Points
                  </TabsTrigger>
                  <TabsTrigger className="px-4 py-2 text-sm whitespace-nowrap" value="expect">
                    What to Expect
                  </TabsTrigger>
                  <TabsTrigger className="px-4 py-2 text-sm whitespace-nowrap" value="board">
                    Advisory Board
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <TabsContent value="overview" className="space-y-6">
              <motion.h2
                className="text-3xl font-bold text-gray-800 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Overview
              </motion.h2>

              <motion.p
                className="text-lg text-gray-800 leading-relaxed text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Global FinTech Fest & Awards SA 2025 sets the agenda for the future of banking and Fintech in South
                Global. The Global FinTech Fest & Awards 2025 is poised to be a landmark event, bringing together
                industry leaders, innovators, and policymakers to shape the future of banking and fintech. As the
                financial technology landscape continues to evolve at a rapid pace, the summit will focus on key trends,
                challenges, and opportunities that will define the next era of fintech.
              </motion.p>

              {/* <div className="flex justify-center mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <ButtonLink
                    className="bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-900"
                    href="/download-brochure"
                    variant="primary"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </ButtonLink>
                </motion.div>
              </div> */}
            </TabsContent>

            <TabsContent value="discussion" className="space-y-6">
              <motion.h2
                className="text-3xl font-bold text-gray-800 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Discussion Points <span className="text-gray-500">at a Glance</span>
              </motion.h2>

              <div className="space-y-8">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Digital Transformation in Banking</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Open Banking and APIs: Exploring how open banking frameworks and APIs are enabling greater
                      collaboration between traditional banks and fintech startups.
                    </li>
                    <li>
                      Cloud-Native Banking: The shift toward cloud-based infrastructure to enhance scalability,
                      security, and innovation.
                    </li>
                    <li>
                      AI and Machine Learning: Leveraging AI for personalized banking experiences, fraud detection, and
                      risk management.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">The Rise of Embedded Finance</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Seamless Integration: How embedded finance is becoming a core component of non-financial
                      platforms, from e-commerce to healthcare.
                    </li>
                    <li>
                      Partnership Models: Collaboration between fintechs, banks, and tech giants to deliver financial
                      services within everyday apps and platforms.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Payments Innovation</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Real-Time Payments: The global adoption of real-time payment systems and their impact on
                      cross-border transactions.
                    </li>
                    <li>
                      CBDCs and Digital Currencies: Central Bank Digital Currencies (CBDCs) and their role in the future
                      of payments.
                    </li>
                    <li>
                      Cryptocurrency and Blockchain: The integration of crypto payments into mainstream financial
                      systems and the regulatory challenges involved.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Financial Inclusion</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Digital Identity Solutions: Using fintech to provide secure digital identities for underserved populations.
                    </li>
                    <li>
                      Microfinance and Neobanks: The role of neobanks and microfinance institutions in expanding access to financial services.
                    </li>
                    <li>
                      AI-Driven Credit Scoring: Innovative approaches to credit assessment for individuals and SMEs with limited credit history.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Regulation and Compliance</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Global Regulatory Frameworks: Harmonizing regulations across borders to foster innovation while ensuring consumer protection.
                    </li>
                    <li>
                      Anti-Money Laundering (AML) and Fraud Prevention: Advanced technologies for combating financial crime in a digital-first world.
                    </li>
                    <li>
                      Sustainability and ESG Compliance: Aligning fintech innovations with environmental, social, and governance (ESG) goals.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Sustainability and Green Fintech</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Carbon Footprint Tracking: Fintech solutions that help consumers and businesses monitor and reduce their carbon emissions.
                    </li>
                    <li>
                      Green Investments: Platforms that facilitate investments in sustainable projects and companies.
                    </li>
                    <li>
                      Climate Risk Management: Tools for assessing and mitigating climate-related financial risks.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Emerging Technologies</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Quantum Computing: Exploring the potential of quantum computing to revolutionize financial modeling and security.
                    </li>
                    <li>
                      Metaverse and Virtual Economies: The role of fintech in enabling transactions and financial services within virtual worlds.
                    </li>
                    <li>
                      IoT and Smart Devices: The convergence of IoT and fintech for seamless, device-driven payments and banking.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Cybersecurity and Data Privacy</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Zero-Trust Architectures: Enhancing security in a world of increasing cyber threats.
                    </li>
                    <li>
                      Data Localization and Sovereignty: Navigating the complexities of data privacy regulations across different jurisdictions.
                    </li>
                    <li>
                      Biometric Authentication: The future of secure and user-friendly authentication methods.
                    </li>
                  </ul>
                </motion.div>

                {/* <div className="flex justify-center mt-8">
                  <ButtonLink
                    className="bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-900"
                    href="/download-brochure"
                    variant="primary"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </ButtonLink>
                </div> */}
              </div>
            </TabsContent>

            <TabsContent value="expect" className="space-y-6">
              <motion.h2
                className="text-3xl font-bold text-center text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                What to Expect <span className="text-gray-500">in 2025</span>
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <motion.div
                  className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">World-Class Insights</h3>
                  <p className="text-gray-600">
                    Step into the spotlight with us and explore a meticulously crafted agenda packed with insights on
                    the most pressing topics shaping the future of banking and fintech. Dive into groundbreaking
                    discussions on lending innovation, Digital ID, financial crime prevention, AI-driven operations, and
                    more.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Global Landscape</h3>
                  <p className="text-gray-600">
                    We bring together the entire banking, fintech, and payments ecosystem in one place—uniting industry
                    giants, emerging challengers, key regulators, policymakers, BigTech leaders, and innovative wallet
                    disruptors.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Elite Executive Arena</h3>
                  <p className="text-gray-600">
                    Global FinTech Fest & Awards connects you with visionary leaders, featuring C-suite speakers from
                    leading banks, insurance companies, and top fintech firms across South Global.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Startup Nexus</h3>
                  <p className="text-gray-600">
                    Dive into our Startup Nexus, a dynamic space crafted to unite groundbreaking start-ups, visionary
                    VCs, and top investors for two transformative days.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Dynamic Leadership Conversations</h3>
                  <p className="text-gray-600">
                    Global FinTech Fest & Awards fuels the discussions that shape the future of the commercial world. Engage in one-on-one meetings, 
                    interactive discussions, focused roundtables, and structured networking opportunities with an audience where 75% hold C-Level, 
                    Director, VP, or Head positions within the Banking and Fintech sector.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-black">Fintech Pioneer Awards</h3>
                  <p className="text-gray-600">
                    Step into the spotlight at the Fintech Pioneer Awards—celebrating the bold visionaries and groundbreaking innovations 
                    transforming the future of finance. Join us to honour the trailblazers redefining the industry and shaping tomorrow&apos;s 
                    financial landscape. Be inspired, be recognized, and be part of the revolution!
                  </p>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="board" className="space-y-6">
              <motion.h2
                className="text-3xl font-bold text-gray-800 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Advisory <span className="text-gray-500">Board</span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-800 leading-relaxed text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our advisory board members will be announced soon. Stay tuned for updates on the industry leaders who
                will be guiding the direction of the Global FinTech Fest & Awards 2025.
              </motion.p>

              {/* <div className="flex justify-center mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <ButtonLink
                    className="bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-900"
                    href="/download-brochure"
                    variant="primary"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </ButtonLink>
                </motion.div>
              </div> */}
            </TabsContent>
          </Tabs>

          <motion.div variants={item} className="mt-12 p-8 rounded-lg bg-gray-600 shadow-xl">
            <motion.h2
              className="text-2xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Key Takeaways
            </motion.h2>

            <motion.p
              className="text-lg text-white/90 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The Global FinTech Fest & Awards 2025 will underscore the importance of collaboration, innovation, and
              inclusivity in shaping the future of banking and payments. As the industry continues to break new ground,
              the summit will serve as a platform for stakeholders to align on a shared vision for a more connected,
              secure, and sustainable financial ecosystem.
            </motion.p>

            <motion.p
              className="text-lg text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Stay tuned for groundbreaking announcements, product launches, and strategic partnerships that will emerge
              from this pivotal event!
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hover:scale-105 transition-all duration-300"
              >
                <Button
                  className="bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-900"
                  // href="/download-brochure"
                  onClick={()=>setBrochureOpen(true)}
                  // variant="primary"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </motion.div>
              <BrochureDownloadForm open={brochureOpen} onOpenChange={setBrochureOpen} />
              

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hover:scale-105 transition-all duration-300"
              >
                <ButtonLink
                  className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-lg shadow-md hover:from-gray-900 hover:to-gray-800"
                  href="/attend"
                  variant="secondary"
                >
                  Attend as a Delegate
                </ButtonLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hover:scale-105 transition-all duration-300"
              >
                <ButtonLink
                  className="border-gray-800 text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 hover:text-white"
                  href="/sponsor"
                  variant="outline"
                >
                  Become a Sponsor
                </ButtonLink>
              </motion.div>
            </div>
          </motion.div>

          </motion.div>
          </div>
          </div>)}