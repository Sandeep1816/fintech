"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Sparkles, Users, Speech } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  bio: z.string().min(10, { message: "Bio is required" }).max(500, { message: "Bio cannot exceed 500 words" }),
  topicTitle: z.string().min(5, { message: "Topic title is required" }),
  topicDescription: z
    .string()
    .min(10, { message: "Topic description is required" })
    .max(500, { message: "Topic description cannot exceed 500 words" }),
  previousExperience: z.string().optional(),
  linkedIn: z.string().optional(),
  twitter: z.string().optional(),
  heardAbout: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function SpeakersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("speakers")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      bio: "",
      topicTitle: "",
      topicDescription: "",
      previousExperience: "",
      linkedIn: "",
      twitter: "",
      heardAbout: "",
    },
  })

  function onSubmit(data: FormValues) {
    console.log(data)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Hero Section */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-100 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5 z-0"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-300"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [null, Math.random() * 20 - 10 + "%"],
                opacity: [null, Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container px-4 mx-auto text-center md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl bg-clip-text text-black">
              Speak<span className="text-black">ers</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto "></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-8 text-lg text-gray-700 mt-6"
          >
            Connect with industry leaders and innovators shaping the future of fintech
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center p-1 bg-gray-200 backdrop-blur-sm rounded-md border border-blue-700/50"
          >
            <button
              className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 flex items-center gap-2 ${
                activeTab === "speakers"
                  ? "bg-gradient-to-r from-gray-800 to-black text-white shadow-lg shadow-gray-400/20"
                  : "text-gray-600 hover:text-white hover:bg-blue-800/70"
              }`}
              onClick={() => setActiveTab("speakers")}
            >
              <Users className="w-4 h-4" />
              Speakers
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 flex items-center gap-2 ${
                activeTab === "apply"
                  ? "bg-gradient-to-r from-gray-800 to-black text-white shadow-lg shadow-gray-400/20"
                  : "text-gray-600 hover:text-white hover:bg-blue-800/70"
              }`}
              onClick={() => setActiveTab("apply")}
            >
              <Speech className="w-4 h-4" />
              Apply to Speak
            </button>
          </motion.div>
        </div>
      </motion.section>

      {activeTab === "speakers" ? (
        <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 variants={fadeIn} className="mb-8 text-2xl font-bold text-gray-600">
                Featured Speakers
              </motion.h2>
              <motion.div
                variants={fadeIn}
                className="p-8 mb-8 bg-gray-100 backdrop-blur-md rounded-lg shadow-xl border border-gray-300 hover:shadow-cyan-500/10 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              >
                {/* <div className="relative mx-auto mb-6 w-32 h-32">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Speakers Coming Soon"
                    width={120}
                    height={120}
                    className="relative mx-auto rounded-full border-4 border-blue-800 p-1"
                  />
                </div> */}
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">Speakers To Be Announced</h3>
                <p className="mb-6 text-gray-700">
                  We&apos;re in the process of confirming our lineup of industry-leading speakers for the Global Fintech
                  Summit 2025. Check back soon for updates or follow us on social media for speaker announcements.
                </p>
                <p className="mb-6 text-gray-700">
                  Are you an industry expert interested in speaking at the Global Fintech Summit? We&apos;re looking for
                  thought leaders to share insights on digital transformation, embedded finance, payments innovation,
                  and more.
                </p>
                <Button
                  onClick={() => setActiveTab("apply")}
                  className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-black text-white border-none shadow-lg shadow-gray-400/20 hover:shadow-gray-400/40 transition-all duration-300"
                >
                  <Speech className="w-4 h-4 mr-2" />
                  Apply to Speak
                </Button>
              </motion.div>

              <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
                {/* These will be populated when speakers are announced */}
                {/* Placeholder for future speakers */}
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="hidden">
                      <Card>
                        <CardContent className="p-6 text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                            <Image
                              src="/placeholder.svg?height=128&width=128"
                              alt="Speaker"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="mb-1 text-xl font-semibold">Speaker Name</h3>
                          <p className="mb-3 text-sm text-gray-500">Job Title, Company</p>
                          <p className="mb-4 text-sm text-gray-700">Speaker bio and description will appear here.</p>
                          <div className="flex justify-center space-x-3">
                            <Link href="#" className="text-gray-500 hover:text-primary">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-primary">
                              <span className="sr-only">Twitter</span>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </motion.section>
      ) : (
        <motion.section initial="hidden" animate="visible" variants={fadeIn} className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeIn} className="mb-8 text-2xl font-bold text-center text-gray-600">
                Apply to Speak
              </motion.h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 text-center bg-gray-100 backdrop-blur-md rounded-lg shadow-xl border border-gray-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h3 className="mb-4 text-2xl font-bold text-white">Application Submitted!</h3>
                    <p className="mb-6 text-gray-700">
                      Thank you for your interest in speaking at the Global Fintech Summit 2025. Our team will review
                      your application and contact you if there&apos;s a match with our program.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-black text-white border-none shadow-lg shadow-gray-400/20 hover:shadow-gray-400/40 transition-all duration-300"
                    >
                      Submit Another Application
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  variants={fadeIn}
                  className="bg-gray-100 backdrop-blur-md rounded-lg shadow-xl border border-gray-300 overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <p className="mb-6 text-gray-700">
                      Share your expertise with an audience of fintech leaders, innovators, and decision-makers.
                      Complete the form below to be considered for a speaking opportunity at the Global Fintech Summit
                      2025.
                    </p>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <motion.div
                          className="space-y-4 p-4 rounded-lg bg-gray-100 border border-gray-300"
                          variants={fadeIn}
                        >
                          <h3 className="text-xl font-semibold text-gray-700 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
                            Personal Information
                          </h3>

                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-600">Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Doe"
                                    {...field}
                                    className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-600">Email Address</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="john.doe@example.com"
                                    {...field}
                                    className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />

                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-600">Company/Organization</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Company name"
                                      {...field}
                                      className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="jobTitle"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-600">Job Title</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Your position"
                                      {...field}
                                      className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-600">Professional Bio</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Please provide a brief professional biography (max 500 words)"
                                    className="min-h-[100px] bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div
                          className="space-y-4 p-4 rounded-lg bg-gray-100 border border-gray-300"
                          variants={fadeIn}
                        >
                          <h3 className="text-xl font-semibold text-gray-700 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
                            Speaking Proposal
                          </h3>

                          <FormField
                            control={form.control}
                            name="topicTitle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-600">Proposed Topic Title</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter the title of your proposed talk"
                                    {...field}
                                    className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="topicDescription"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-600">Topic Description</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Please describe your topic and why it would be valuable for our audience (max 500 words)"
                                    className="min-h-[100px] bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="previousExperience"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-600">Previous Speaking Experience</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Please share any relevant speaking experience, including events, webinars, or panels"
                                    className="min-h-[100px] bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div
                          className="space-y-4 p-4 rounded-lg bg-gray-100 border border-gray-300"
                          variants={fadeIn}
                        >
                          <h3 className="text-xl font-semibold text-gray-700 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
                            Additional Information
                          </h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="linkedIn"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-600">LinkedIn Profile URL</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="https://linkedin.com/in/yourprofile"
                                      {...field}
                                      className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="twitter"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-600">Twitter/X Handle</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="@yourhandle"
                                      {...field}
                                      className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="heardAbout"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-600">
                                  How did you hear about this speaking opportunity?
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Email, social media, colleague, etc."
                                    {...field}
                                    className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-gray-800 focus:ring-gray-800/20"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div className="pt-4 text-center" variants={fadeIn}>
                          <p className="mb-4 text-sm text-gray-700">
                            Our team will review your application and contact you if there&apos;s a match with our
                            program.
                          </p>
                          <Button
                            type="submit"
                            size="lg"
                            className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-black text-white border-none shadow-lg shadow-gray-400/20 hover:shadow-gray-400/40 transition-all duration-300"
                          >
                            <motion.span
                              initial={{ opacity: 1 }}
                              whileHover={{
                                opacity: [1, 0.8, 1],
                                transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                              }}
                            >
                              Submit Application
                            </motion.span>
                          </Button>
                        </motion.div>
                      </form>
                    </Form>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  )
}

