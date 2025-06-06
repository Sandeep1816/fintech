"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function StartupNexus() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/startup-nexus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setMessage("Thank you! We've received your request.");
      setFormData({ name: "", email: "" });
      setShowForm(false);

      setTimeout(() => {
        setShowForm(true);
        setMessage("");
      }, 20000);
    } else {
      setMessage(data.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="py-16 bg-white mt-20">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="show" className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Startup <span className="text-gray-600">Nexus</span>
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Global FinTech Summit & Awards 2025
                  <br />
                  28 – 29 August 2025 | Johannesburg, South Africa
                </p>

                <motion.div
                  className="mt-8 bg-gray-200 p-8 rounded-lg shadow-lg max-w-lg mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-black">Get More Info</h3>

                  {showForm ? (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name *"
                          className="w-full p-3 border border-gray-300 rounded-md text-black text-base"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Business Email *"
                          className="w-full p-3 border border-gray-300 rounded-md text-black text-base"
                          required
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-all text-base"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <p className="text-center text-green-600 text-lg">{message}</p>
                  )}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-black">
                A Launchpad for Start-up and Scale-Up Growth
              </h3>
              <p className="text-gray-700 mb-6 text-base">
                This dedicated hub is built to accelerate the success of start-ups and scale-ups, featuring a dynamic stage, exclusive networking space, and high-impact deal booths.
              </p>
              <p className="text-gray-700 mb-6 text-base">
                Startup Nexus unites the entire start-up and scale-up ecosystem under one roof, offering an unmatched platform for growth and collaboration. Whether you&apos;re seeking funding, expansion opportunities, or strategic partnerships, this is the place to make it happen.
              </p>

              <div className="bg-gray-200 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-black">WHO YOU&apos;LL CONNECT WITH</h3>
                <p className="text-gray-700 mb-6 text-base">
                  Meet venture capitalists, corporate investors, accelerators, banking partnership leaders, startup founders, and entrepreneurs.
                </p>
                <p className="text-gray-700 mb-6 text-base">
                  This isn&apos;t just an event—it&apos;s a springboard for your ambitions. The stage is set, key players are coming together, and the possibilities are endless. Will you be there to seize the moment?
                </p>

                <div>
                  <h4 className="font-medium mb-2 text-black text-lg">Exclusive VC & Investor Passes</h4>
                  <p className="text-sm text-gray-700 mb-6">
                    Are you a venture capitalist or investor? We&apos;re offering a limited number of complimentary passes for our VC and investor community to experience Startup Nexus.
                  </p>
                  <p className="text-sm text-gray-700 mb-6">
                    For more details, contact{" "}
                    <a href="mailto:tarannum.s@tasconmedia.com" className="text-blue-600 underline">
                      tarannum.s@tasconmedia.com
                    </a>
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {/* <ButtonLink
                      href="/complementary-pass"
                      variant="outline"
                      size="sm"
                      className="border-black text-black hover:bg-gray-200"
                    >
                      Apply For Your Complimentary Pass
                    </ButtonLink> */}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
