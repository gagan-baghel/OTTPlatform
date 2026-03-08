"use client"

import { useState } from "react"
import { Check, X, HelpCircle, Tv, Smartphone, Laptop, Tablet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingCard from "@/components/pricing-card"
import DeviceCompatibility from "@/components/device-compatibility"

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [selectedPlan, setSelectedPlan] = useState<"free" | "premium" | "family">("premium")

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>
          <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Plans & Access</h1>
            <p className="text-base md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your cinematic journey. Upgrade, downgrade, or cancel anytime.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base">
              <span className={billingCycle === "monthly" ? "text-white" : "text-gray-400"}>Monthly</span>
              <Switch
                checked={billingCycle === "yearly"}
                onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
              />
              <span className={billingCycle === "yearly" ? "text-white" : "text-gray-400"}>
                Yearly <span className="text-purple-400">(Save 20%)</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <PricingCard
                title="Free"
                price={0}
                description="Basic access with limited features"
                features={[
                  { text: "Standard definition streaming", included: true },
                  { text: "Watch on one device at a time", included: true },
                  { text: "Limited content library", included: true },
                  { text: "Ad-supported viewing", included: true },
                  { text: "No downloads", included: false },
                  { text: "No exclusive originals", included: false },
                ]}
                cta="Get Started"
                popular={false}
                selected={selectedPlan === "free"}
                onSelect={() => setSelectedPlan("free")}
              />

              <PricingCard
                title="Premium"
                price={billingCycle === "monthly" ? 12.99 : 124.99}
                description="Perfect for individual cinephiles"
                features={[
                  { text: "4K Ultra HD streaming", included: true },
                  { text: "Watch on two devices at a time", included: true },
                  { text: "Full content library", included: true },
                  { text: "Ad-free viewing", included: true },
                  { text: "Download for offline viewing", included: true },
                  { text: "Access to all originals", included: true },
                ]}
                cta="Start Free Trial"
                popular={true}
                selected={selectedPlan === "premium"}
                onSelect={() => setSelectedPlan("premium")}
                billingCycle={billingCycle}
              />

              <PricingCard
                title="Family"
                price={billingCycle === "monthly" ? 19.99 : 191.99}
                description="Share the experience with your family"
                features={[
                  { text: "4K Ultra HD streaming", included: true },
                  { text: "Watch on up to five devices", included: true },
                  { text: "Full content library", included: true },
                  { text: "Ad-free viewing", included: true },
                  { text: "Download for offline viewing", included: true },
                  { text: "Access to all originals", included: true },
                  { text: "Create up to 6 profiles", included: true },
                ]}
                cta="Start Free Trial"
                popular={false}
                selected={selectedPlan === "family"}
                onSelect={() => setSelectedPlan("family")}
                billingCycle={billingCycle}
              />
            </div>
          </div>

          <div className="mt-16 rounded-xl border border-white/10 bg-gray-900/30 p-4 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Plan Comparison</h2>

            <div className="overflow-x-auto">
              <table className="min-w-[640px] w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 px-2 md:px-4">Features</th>
                    <th className="text-center py-4 px-2 md:px-4">Free</th>
                    <th className="text-center py-4 px-2 md:px-4 bg-purple-900/20">Premium</th>
                    <th className="text-center py-4 px-2 md:px-4">Family</th>
                  </tr>
                </thead>
                <tbody>
                  {planFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-4 px-2 md:px-4 flex items-center">
                        {feature.name}
                        {feature.tooltip && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                                  <HelpCircle className="h-4 w-4 text-gray-400" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </td>
                      <td className="text-center py-4 px-2 md:px-4">
                        {feature.free ? (
                          typeof feature.free === "string" ? (
                            feature.free
                          ) : (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          )
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-2 md:px-4 bg-purple-900/20">
                        {feature.premium ? (
                          typeof feature.premium === "string" ? (
                            feature.premium
                          ) : (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          )
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-2 md:px-4">
                        {feature.family ? (
                          typeof feature.family === "string" ? (
                            feature.family
                          ) : (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          )
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Device Compatibility */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Watch Anywhere, Anytime</h2>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="w-full justify-start bg-gray-900/50">
                  <TabsTrigger value="all">All Devices</TabsTrigger>
                  <TabsTrigger value="tv">TV</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile</TabsTrigger>
                  <TabsTrigger value="web">Web</TabsTrigger>
                  <TabsTrigger value="tablet">Tablet</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <DeviceCompatibility devices={allDevices} />
              </TabsContent>

              <TabsContent value="tv">
                <DeviceCompatibility devices={tvDevices} />
              </TabsContent>

              <TabsContent value="mobile">
                <DeviceCompatibility devices={mobileDevices} />
              </TabsContent>

              <TabsContent value="web">
                <DeviceCompatibility devices={webDevices} />
              </TabsContent>

              <TabsContent value="tablet">
                <DeviceCompatibility devices={tabletDevices} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Trial Countdown */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 text-center md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Free Trial Today</h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the full power of CINEVERSE with a 14-day free trial. Cancel anytime before the trial ends and
              you won't be charged.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Sample data
const planFeatures = [
  {
    name: "Video Quality",
    free: "SD (480p)",
    premium: "4K + HDR",
    family: "4K + HDR",
  },
  {
    name: "Simultaneous Streams",
    free: "1",
    premium: "2",
    family: "5",
  },
  {
    name: "Ad-Free Experience",
    free: false,
    premium: true,
    family: true,
  },
  {
    name: "Downloads for Offline",
    tooltip: "Download content to watch offline on mobile devices",
    free: false,
    premium: true,
    family: true,
  },
  {
    name: "Access to Originals",
    free: "Limited",
    premium: true,
    family: true,
  },
  {
    name: "New Releases",
    free: "Delayed",
    premium: "Immediate",
    family: "Immediate",
  },
  {
    name: "User Profiles",
    free: "1",
    premium: "2",
    family: "6",
  },
  {
    name: "Watch Parties",
    tooltip: "Host virtual screenings with friends",
    free: "Join Only",
    premium: "Host up to 5",
    family: "Host up to 10",
  },
  {
    name: "Spatial Audio",
    free: false,
    premium: true,
    family: true,
  },
]

const allDevices = [
  {
    category: "TV",
    icon: <Tv className="h-8 w-8" />,
    devices: [
      { name: "Samsung Smart TV", supported: true },
      { name: "LG Smart TV", supported: true },
      { name: "Apple TV", supported: true },
      { name: "Amazon Fire TV", supported: true },
      { name: "Roku", supported: true },
      { name: "Android TV", supported: true },
      { name: "Chromecast", supported: true },
      { name: "PlayStation 5", supported: true },
      { name: "Xbox Series X/S", supported: true },
    ],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-8 w-8" />,
    devices: [
      { name: "iPhone", supported: true },
      { name: "iPad", supported: true },
      { name: "Android Phone", supported: true },
      { name: "Android Tablet", supported: true },
    ],
  },
  {
    category: "Web",
    icon: <Laptop className="h-8 w-8" />,
    devices: [
      { name: "Chrome", supported: true },
      { name: "Safari", supported: true },
      { name: "Firefox", supported: true },
      { name: "Edge", supported: true },
    ],
  },
  {
    category: "Other",
    icon: <Tablet className="h-8 w-8" />,
    devices: [
      { name: "Smart Projector", supported: true },
      { name: "Smart Display", supported: true },
      { name: "VR Headset", supported: true },
    ],
  },
]

const tvDevices = [
  {
    category: "TV",
    icon: <Tv className="h-8 w-8" />,
    devices: [
      { name: "Samsung Smart TV", supported: true },
      { name: "LG Smart TV", supported: true },
      { name: "Apple TV", supported: true },
      { name: "Amazon Fire TV", supported: true },
      { name: "Roku", supported: true },
      { name: "Android TV", supported: true },
      { name: "Chromecast", supported: true },
      { name: "PlayStation 5", supported: true },
      { name: "Xbox Series X/S", supported: true },
    ],
  },
]

const mobileDevices = [
  {
    category: "Mobile",
    icon: <Smartphone className="h-8 w-8" />,
    devices: [
      { name: "iPhone", supported: true },
      { name: "Android Phone", supported: true },
    ],
  },
]

const webDevices = [
  {
    category: "Web",
    icon: <Laptop className="h-8 w-8" />,
    devices: [
      { name: "Chrome", supported: true },
      { name: "Safari", supported: true },
      { name: "Firefox", supported: true },
      { name: "Edge", supported: true },
    ],
  },
]

const tabletDevices = [
  {
    category: "Tablet",
    icon: <Tablet className="h-8 w-8" />,
    devices: [
      { name: "iPad", supported: true },
      { name: "Android Tablet", supported: true },
      { name: "Windows Tablet", supported: true },
    ],
  },
]

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. If you cancel during your free trial period, you won't be charged. If you cancel after your trial or during a paid subscription, you'll continue to have access until the end of your billing period.",
  },
  {
    question: "How many devices can I watch on simultaneously?",
    answer:
      "The number of devices you can watch on simultaneously depends on your plan. Free allows 1 device, Premium allows 2 devices, and Family allows up to 5 devices at the same time.",
  },
  {
    question: "Can I download content to watch offline?",
    answer:
      "Yes, with Premium and Family plans, you can download content to watch offline on mobile devices. This feature is not available with the Free plan.",
  },
  {
    question: "Are there any commitments or contracts?",
    answer:
      "No, there are no long-term commitments or contracts. All plans are subscription-based and can be canceled at any time.",
  },
  {
    question: "How do I host a Watch Party?",
    answer:
      "With Premium and Family plans, you can host Watch Parties by selecting a title, clicking the 'Watch Together' button, and inviting friends via email or by sharing a link. Free plan users can join Watch Parties but cannot host them.",
  },
  {
    question: "What devices can I watch on?",
    answer:
      "CINEVERSE is available on a wide range of devices including smart TVs, streaming media players, game consoles, smartphones, tablets, and computers. Check our device compatibility section for more details.",
  },
]
