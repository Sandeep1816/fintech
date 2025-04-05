"use client"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, Mail } from "lucide-react"
import { AnimatedBackground } from "./components/animated-background"
import { PageHeader } from "./components/page-header"
import { AgendaTab } from "./components/agenda-tab"
import { AttendTab } from "./components/attend-tab"
import { ContactTab } from "./components/contact-tab"

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

export default function BookNowPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16">
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto">
          <PageHeader variants={item} />

          <Tabs defaultValue="agenda" className="mb-12">
            <TabsList className="grid grid-cols-3 mb-8 bg-gray-100 border border-gray-200 p-1">
              <TabsTrigger
                value="agenda"
                className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-700 hover:text-black"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agenda
              </TabsTrigger>
              <TabsTrigger
                value="attend"
                className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-700 hover:text-black"
              >
                <Users className="w-4 h-4 mr-2" />
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

            <TabsContent value="agenda">
              <AgendaTab item={item} />
            </TabsContent>

            <TabsContent value="attend">
              <AttendTab item={item} />
            </TabsContent>

            <TabsContent value="contact">
              <ContactTab item={item} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

