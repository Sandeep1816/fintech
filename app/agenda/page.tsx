import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

// Define proper TypeScript interfaces for our session types
interface BaseSession {
  time: string
  title: string
  type: string
  location: string
  description?: string // Make description optional for all session types
}

interface SpeakerSession extends BaseSession {
  speaker: string
}

interface BreakoutSession extends BaseSession {
  sessions: {
    title: string
    location: string
    track: string
  }[]
}

// Union type for all possible session types
type Session = BaseSession | SpeakerSession | BreakoutSession

export default function AgendaPage() {
  const day1Sessions: Session[] = [
    {
      time: "08:00 - 09:00",
      title: "Registration & Networking Breakfast",
      type: "break",
      location: "Main Hall",
    },
    {
      time: "09:00 - 09:30",
      title: "Opening Keynote: The Future of Finance",
      type: "keynote",
      speaker: "To be announced",
      location: "Main Stage",
    },
    {
      time: "09:30 - 20:30",
      title: "Panel: Digital Transformation in Banking",
      type: "panel",
      description:
        "Leading experts discuss the evolution of digital banking and its impact on traditional institutions.",
      location: "Main Stage",
    },
    {
      time: "20:30 - 21:00",
      title: "Networking Break",
      type: "break",
      location: "Exhibition Area",
    },
    {
      time: "21:00 - 12:00",
      title: "Breakout Sessions",
      type: "breakout",
      location: "Multiple Rooms",
      sessions: [
        {
          title: "Open Banking & APIs",
          location: "Room A",
          track: "Technology",
        },
        {
          title: "Future of Payments",
          location: "Room B",
          track: "Innovation",
        },
        {
          title: "RegTech Solutions",
          location: "Room C",
          track: "Compliance",
        },
      ],
    },
    {
      time: "12:00 - 13:30",
      title: "Lunch & Networking",
      type: "break",
      location: "Dining Hall",
    },
    {
      time: "13:30 - 14:30",
      title: "Startup Showcase",
      type: "special",
      description: "Innovative startups present their cutting-edge solutions",
      location: "Innovation Stage",
    },
    {
      time: "14:30 - 15:30",
      title: "Panel: The Rise of Embedded Finance",
      type: "panel",
      location: "Main Stage",
    },
    {
      time: "15:30 - 16:00",
      title: "Afternoon Break",
      type: "break",
      location: "Exhibition Area",
    },
    {
      time: "16:00 - 17:00",
      title: "Closing Keynote: Day 1",
      type: "keynote",
      speaker: "To be announced",
      location: "Main Stage",
    },
    {
      time: "19:00 - 22:00",
      title: "Networking Reception",
      type: "special",
      location: "Venue Rooftop",
    },
  ]

  const day2Sessions: Session[] = [
    {
      time: "08:30 - 09:00",
      title: "Welcome Coffee",
      type: "break",
      location: "Main Hall",
    },
    {
      time: "09:00 - 20:00",
      title: "Keynote: AI in Financial Services",
      type: "keynote",
      speaker: "To be announced",
      location: "Main Stage",
    },
    {
      time: "20:00 - 21:00",
      title: "Panel: Blockchain & Digital Assets",
      type: "panel",
      location: "Main Stage",
    },
    {
      time: "21:00 - 21:30",
      title: "Networking Break",
      type: "break",
      location: "Exhibition Area",
    },
    {
      time: "21:30 - 12:30",
      title: "Breakout Sessions",
      type: "breakout",
      location: "Multiple Rooms",
      sessions: [
        {
          title: "Cybersecurity in Finance",
          location: "Room A",
          track: "Security",
        },
        {
          title: "ESG & Sustainable Finance",
          location: "Room B",
          track: "Sustainability",
        },
        {
          title: "Digital Identity Solutions",
          location: "Room C",
          track: "Technology",
        },
      ],
    },
    {
      time: "12:30 - 14:00",
      title: "Lunch & Networking",
      type: "break",
      location: "Dining Hall",
    },
    {
      time: "14:00 - 15:00",
      title: "VC Panel: Investment Trends",
      type: "panel",
      location: "Main Stage",
    },
    {
      time: "15:00 - 16:00",
      title: "Fintech Pioneer Awards Ceremony",
      type: "special",
      location: "Main Stage",
    },
    {
      time: "16:00 - 16:30",
      title: "Closing Remarks",
      type: "keynote",
      location: "Main Stage",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto text-center md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl text-black">
            Event <span className="text-black">Agenda</span>
          </h1>
          <div className="w-20 h-1 bg-black mx-auto"></div>
          <p className="max-w-3xl mx-auto mb-8 text-lg mt-8 text-gray-800">
            Two days of insights, innovation, and networking with fintech leaders
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="bg-transparent border-black text-black hover:bg-gray-100">
              Download Agenda
            </Button>
            <Button variant="outline" className="bg-transparent border-black text-black hover:bg-gray-100">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-12 bg-white text-black">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-6 md:grid-cols-4">
            <Card className="bg-white text-black border-gray-200 shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <Calendar className="w-8 h-8 text-black" />
                <div>
                  <h3 className="font-semibold">Date</h3>
                  <p className="text-sm text-gray-600">20-21 July 2025</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white text-black border-gray-200 shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <Clock className="w-8 h-8 text-black" />
                <div>
                  <h3 className="font-semibold">Time</h3>
                  <p className="text-sm text-gray-600">08:00 - 17:00</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white text-black border-gray-200 shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <MapPin className="w-8 h-8 text-black" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-gray-600">Johannesburg, SA</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white text-black border-gray-200 shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <Users className="w-8 h-8 text-black" />
                <div>
                  <h3 className="font-semibold">Attendees</h3>
                  <p className="text-sm text-gray-600">500+ Expected</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Day 1 Agenda */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <h2 className="mb-8 text-2xl font-bold text-center text-black">Day 1 - July 20, 2025</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {day1Sessions.map((session, index) => (
              <Card
                key={index}
                className={session.type === "break" ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200"}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="w-full md:w-1/4">
                      <p className="font-semibold text-black">{session.time}</p>
                      <p className="text-sm text-gray-600">{session.location}</p>
                    </div>
                    <div className="w-full md:w-3/4">
                      <h3 className="text-lg font-semibold text-black">{session.title}</h3>
                      {"speaker" in session && <p className="mt-1 text-sm text-gray-600">Speaker: {session.speaker}</p>}
                      {session.description && <p className="mt-2 text-sm text-gray-600">{session.description}</p>}
                      {"sessions" in session && session.sessions && (
                        <div className="mt-4 space-y-3">
                          {session.sessions.map((breakout, idx) => (
                            <div key={idx} className="p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                              <p className="font-medium text-black">{breakout.title}</p>
                              <p className="text-sm text-gray-600">
                                {breakout.location} • {breakout.track} Track
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Day 2 Agenda */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <h2 className="mb-8 text-2xl font-bold text-center text-black">Day 2 - July 21, 2025</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {day2Sessions.map((session, index) => (
              <Card
                key={index}
                className={session.type === "break" ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200"}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="w-full md:w-1/4">
                      <p className="font-semibold text-black">{session.time}</p>
                      <p className="text-sm text-gray-600">{session.location}</p>
                    </div>
                    <div className="w-full md:w-3/4">
                      <h3 className="text-lg font-semibold text-black">{session.title}</h3>
                      {"speaker" in session && <p className="mt-1 text-sm text-gray-600">Speaker: {session.speaker}</p>}
                      {session.description && <p className="mt-2 text-sm text-gray-600">{session.description}</p>}
                      {"sessions" in session && session.sessions && (
                        <div className="mt-4 space-y-3">
                          {session.sessions.map((breakout, idx) => (
                            <div key={idx} className="p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                              <p className="font-medium text-black">{breakout.title}</p>
                              <p className="text-sm text-gray-600">
                                {breakout.location} • {breakout.track} Track
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container px-4 mx-auto text-center md:px-6">
          <h2 className="mb-4 text-2xl font-bold text-black">Ready to Join Us?</h2>
          <p className="mb-8 text-gray-600">Secure your spot at the Global Fintech Summit 2025</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-now">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-medium">
                Book Now
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-gray-100">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

