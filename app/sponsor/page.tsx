"use client"

import { motion } from "framer-motion"
import ButtonLink from "@/components/ui/button-link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, MessageSquare, Users, Zap, ArrowRight, Briefcase, Globe } from "lucide-react"

export default function SponsorPage() {
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
    <div className="pt-24 pb-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto">
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Spons<span className="text-black">or</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </motion.div>

          {/* Hero section with main CTA buttons */}
          <motion.div variants={item} className="bg-gray-100 p-8 md:p-12 rounded-xl mb-16 border border-gray-300">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Showcase Your Brand at Global&apos;s Premier Fintech Event
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect with industry leaders, showcase your solutions, and position your brand at the forefront of
                fintech innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="gap-2 bg-black hover:bg-gray-800 text-white"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="/sponsor-info"
                  variant="secondary"
                  size="lg"
                  className="bg-gray-700 hover:bg-gray-800 text-white"
                >
                  Find out More
                </ButtonLink>
                <ButtonLink
                  href="/become-sponsor"
                  variant="outline"
                  size="lg"
                  className="border-black text-black hover:bg-gray-100"
                >
                  Become a Sponsor
                </ButtonLink>
              </div>
            </div>
          </motion.div>

          <Tabs defaultValue="why-sponsor" className="mb-12">
            <TabsList className="grid grid-cols-3 mb-8 bg-gray-200">
              <TabsTrigger value="why-sponsor" className="data-[state=active]:bg-black data-[state=active]:text-white">
                Why Sponsor
              </TabsTrigger>
              <TabsTrigger value="our-sponsors" className="data-[state=active]:bg-black data-[state=active]:text-white">
                Our Sponsors
              </TabsTrigger>
              <TabsTrigger value="reserve" className="data-[state=active]:bg-black data-[state=active]:text-white">
                Reserve Your Spot
              </TabsTrigger>
            </TabsList>

            <TabsContent value="why-sponsor" className="space-y-6">
              <h2 className="text-2xl font-bold text-black">Why Sponsor</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sponsoring the Global FinTech Fest & Awards offers a prime opportunity to enhance brand visibility,
                attract high-quality leads, and engage with top decision-makers in the banking and fintech sector.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <Card className="bg-white border border-gray-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Brand Visibility</h3>
                    <p className="text-gray-600">
                      Position your brand in front of 500+ industry leaders and decision-makers.
                    </p>
                    <ButtonLink
                      href="/contact"
                      variant="outline"
                      size="sm"
                      className="mt-4 border-black text-black hover:bg-gray-100"
                    >
                      Learn More
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Lead Generation</h3>
                    <p className="text-gray-600">
                      Connect with qualified prospects and generate high-quality leads for your business.
                    </p>
                    <ButtonLink
                      href="/contact"
                      variant="outline"
                      size="sm"
                      className="mt-4 border-black text-black hover:bg-gray-100"
                    >
                      Learn More
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Thought Leadership</h3>
                    <p className="text-gray-600">
                      Showcase your expertise and position your company as an industry leader.
                    </p>
                    <ButtonLink
                      href="/contact"
                      variant="outline"
                      size="sm"
                      className="mt-4 border-black text-black hover:bg-gray-100"
                    >
                      Learn More
                    </ButtonLink>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mt-10">
                Share the stage with industry leaders and engage a senior audience eager for expert insights, strategic
                partnerships, and cutting-edge solutions. Whether through keynote speeches or interactive workshops, we
                provide the platform to amplify your voice—whether your focus is thought leadership, brand visibility,
                lead generation, or showcasing innovation.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <Card className="bg-white border border-gray-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-black">What&apos;s in it for you?</h3>
                    <p className="text-gray-600 mb-4">
                      We provide fully customizable sponsorship packages with dynamic formats to effectively deliver
                      your message. Choose from:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Keynote sessions</li>
                      <li>• Interviews</li>
                      <li>• Pitch stages</li>
                      <li>• Panel discussions</li>
                      <li>• Case studies</li>
                      <li>• Workshops</li>
                      <li>• Interactive exhibitions</li>
                      <li>• Networking opportunities</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      Pre-arranged 1-2-1 meetings with key buyers ensure you connect with the right decision-makers on
                      the day.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-black">Why It&apos;s Worth It?</h3>
                    <p className="text-gray-600 mb-4">
                      Nothing beats the impact of face-to-face interactions with potential clients. Many of our partners
                      find that these in-person connections lead to:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="mr-4 mt-1 text-black">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-black">Valuable conversations</p>
                          <p className="text-sm text-gray-600">Direct engagement with decision-makers</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="mr-4 mt-1 text-black">
                          <Zap className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-black">High-quality leads</p>
                          <p className="text-sm text-gray-600">Connect with qualified prospects</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="mr-4 mt-1 text-black">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-black">Thought leadership</p>
                          <p className="text-sm text-gray-600">Position yourself as a key authority</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mt-10 ">
                <h3 className="text-xl font-semibold mb-6 text-black">Who You&apos;ll Connect With?</h3>
                <p className="text-gray-600 mb-6">
                  Top executives and decision-makers, including C-suite leaders, VPs, Directors, and Heads of:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">Strategy</div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">Technology</div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">
                    Transformation
                  </div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">Operations</div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">Product</div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">Innovation</div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">Payments</div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">Lending</div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">Data</div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">
                    Customer Experience
                  </div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">IT</div>
                  <div className="bg-gray-200 p-3 rounded text-sm text-center border border-gray-300">Digital</div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-black">Extend Your Reach Beyond the Conference</h3>
                <p className="text-gray-600 mb-6">
                  Our integrated campaigns run year-round, helping you stay connected with your target audience through
                  diverse, multi-channel formats that foster engagement, generate leads, and boost brand visibility.
                </p>
                <p className="text-gray-600 mb-8">
                  The Global Fintech Fest team is dedicated to collaborating with you at every stage, crafting tailored,
                  high-impact marketing solutions that keep your prospects engaged long after the event.
                </p>

                <div className="bg-gray-800 text-white p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Request Sponsorship Options</h3>
                  <p className="mb-6">
                    I&apos;d love to learn more about your business and tailor a sponsorship package that aligns with
                    your goals. Let&apos;s connect!
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-black" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Tarannum S</p>
                      <p className="text-sm">Project Director</p>
                      <a href="mailto:tarannum.s@tasconmedia.com" className="text-sm underline">
                        tarannum.s@tasconmedia.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="our-sponsors" className="space-y-6">
              <h2 className="text-2xl font-bold text-black">Our Sponsors</h2>
              <div className="bg-gray-100 p-8 rounded-lg text-center border border-gray-300">
                <h3 className="text-xl font-semibold mb-6 text-black">Sponsors To Be Announced</h3>
                <p className="text-gray-600 mb-8">
                  Our sponsor lineup for Global FinTech Fest & Awards 2025 will be announced soon. Check back later for
                  updates or contact us to learn about sponsorship opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ButtonLink href="/contact" variant="primary" className="bg-black hover:bg-gray-800 text-white">
                    Get in touch
                  </ButtonLink>
                  <ButtonLink
                    href="/sponsor-info"
                    variant="secondary"
                    className="bg-gray-700 hover:bg-gray-800 text-white"
                  >
                    Find out More
                  </ButtonLink>
                  <ButtonLink
                    href="/become-sponsor"
                    variant="outline"
                    className="border-black text-black hover:bg-gray-100"
                  >
                    Become a Sponsor
                  </ButtonLink>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reserve" className="space-y-6">
              <h2 className="text-2xl font-bold text-black">Reserve Your Spot</h2>
              <div className="bg-gray-100 p-8 rounded-lg border border-gray-300">
                <h3 className="text-xl font-semibold mb-6 text-center text-black">
                  Let&apos;s Connect on Sponsorship Opportunities
                </h3>
                <p className="text-center text-gray-600 mb-8">
                  Discover how we can maximize your impact at Global FinTech Fest & Awards. Our team is here to help you
                  make the most of your participation. Be part of shaping the future of banking and fintech—reach out
                  today!
                </p>

                <form className="space-y-4 max-w-md mx-auto">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-black">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-black">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1 text-black">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="job" className="block text-sm font-medium mb-1 text-black">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="job"
                      className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1 text-black">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-black">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors font-medium"
                    >
                      I am ready to speak
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center">
                  <h4 className="font-medium mb-2 text-black">Request Sponsorship Options</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    I&apos;d love to learn more about your business and tailor a sponsorship package that aligns with
                    your goals. Let&apos;s connect!
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-black" />
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-black">Tarannum S</p>
                      <p className="text-sm text-gray-600">Project Director</p>
                      <a href="mailto:tarannum.s@tasconmedia.com" className="text-sm text-black">
                        tarannum.s@tasconmedia.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

