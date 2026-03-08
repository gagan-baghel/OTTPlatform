import Image from "next/image"
import { Play, ArrowRight, Quote, Film, Users, Lightbulb, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamMember from "@/components/team-member"
import StoryCard from "@/components/story-card"

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1920&auto=format&fit=crop"
            alt="Inside the Studio"
            fill
            className="object-cover"
            priority
          />

          <div className="relative z-20 flex flex-col justify-center h-full px-4 md:px-8 max-w-7xl mx-auto">
            <Badge className="mb-4 bg-purple-600 hover:bg-purple-700 w-fit">INSIDE THE STUDIO</Badge>
            <h1 className="mb-6 max-w-3xl text-3xl md:text-6xl font-bold">What We Stand For</h1>
            <p className="mb-8 max-w-2xl text-base text-gray-300 md:text-xl">
              A bold manifesto about our global vision, inclusivity in storytelling, and commitment to fresh voices.
              Cinema was never meant to be ordinary.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 sm:w-auto">
                <Play className="h-5 w-5 mr-2" /> Watch Our Story
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Meet The Team
              </Button>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Manifesto</h2>
                <div className="space-y-5 text-base text-gray-300 md:text-lg">
                  <p>
                    We believe that stories are the most powerful force in human culture. They shape our understanding
                    of the world, connect us across boundaries, and help us imagine new possibilities.
                  </p>
                  <p>
                    At CINEVERSE, we're committed to amplifying diverse voices and perspectives. We believe that the
                    best stories come from authentic experiences, and that everyone deserves to see themselves
                    represented on screen.
                  </p>
                  <p>
                    We're not just another streaming platform. We're a home for bold, innovative storytelling that
                    pushes boundaries and challenges conventions. We support creators who take risks and explore new
                    territories.
                  </p>
                  <p>
                    Our mission is to create a space where art and technology converge to deliver immersive, emotional
                    experiences that stay with you long after the credits roll.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&auto=format&fit=crop"
                    width={600}
                    height={600}
                    alt="Our Vision"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/30 rounded-lg p-8 text-center">
              <div className="bg-purple-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Film className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Artistic Integrity</h3>
              <p className="text-gray-300">
                We believe in preserving the creative vision of filmmakers and storytellers. We don't compromise on
                quality or artistic expression.
              </p>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-8 text-center">
              <div className="bg-purple-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Inclusive Representation</h3>
              <p className="text-gray-300">
                We're committed to amplifying diverse voices and perspectives, ensuring that everyone sees themselves
                represented in the stories we tell.
              </p>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-8 text-center">
              <div className="bg-purple-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We push the boundaries of storytelling through technology, creating immersive experiences that engage
                all the senses.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamMember
                name="Elena Rodriguez"
                role="Founder & CEO"
                bio="Former studio executive with a passion for independent cinema and emerging voices."
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
              />
              <TeamMember
                name="Marcus Chen"
                role="Chief Content Officer"
                bio="Award-winning producer who believes in the power of stories to change perspectives."
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
              />
              <TeamMember
                name="Aisha Johnson"
                role="Head of Original Content"
                bio="Filmmaker and advocate for diverse representation in media and entertainment."
                image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop"
              />
              <TeamMember
                name="David Kim"
                role="Chief Technology Officer"
                bio="Tech innovator focused on creating immersive viewing experiences through cutting-edge technology."
                image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
              />
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View Full Team
              </Button>
            </div>
          </div>
        </section>

        {/* Creator Testimonials */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Creator Voices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creatorTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/30 rounded-lg p-8 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-purple-500 opacity-50" />
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={
                      testimonial.image ||
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&h=120&auto=format&fit=crop"
                    }
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Impact Stories</h2>

            <Tabs defaultValue="diversity" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="w-full justify-start bg-gray-900/50">
                  <TabsTrigger value="diversity">Diversity & Inclusion</TabsTrigger>
                  <TabsTrigger value="emerging">Emerging Filmmakers</TabsTrigger>
                  <TabsTrigger value="technology">Technology Innovation</TabsTrigger>
                  <TabsTrigger value="community">Community Initiatives</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="diversity">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StoryCard
                    title="Voices Unheard"
                    description="How our inclusive casting initiative is changing representation in media."
                    image="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop"
                  />
                  <StoryCard
                    title="Beyond Borders"
                    description="Supporting international storytellers and bringing global perspectives to audiences."
                    image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop"
                  />
                  <StoryCard
                    title="Accessibility First"
                    description="Our commitment to making content accessible to viewers with disabilities."
                    image="https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=600&auto=format&fit=crop"
                  />
                </div>
              </TabsContent>

              <TabsContent value="emerging">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StoryCard
                    title="New Voices Program"
                    description="How we're funding first-time directors and writers from underrepresented backgrounds."
                    image="https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=600&auto=format&fit=crop"
                  />
                  <StoryCard
                    title="From Short to Feature"
                    description="The journey of three short film directors who developed their first features with us."
                    image="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&auto=format&fit=crop"
                  />
                  <StoryCard
                    title="Film School Partnerships"
                    description="Our collaboration with film schools to discover and nurture emerging talent."
                    image="https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=600&auto=format&fit=crop"
                  />
                </div>
              </TabsContent>

              <TabsContent value="technology">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StoryCard
                    title="Immersive Storytelling"
                    description="Pushing the boundaries of narrative with VR and interactive experiences."
                    image="https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=600&auto=format&fit=crop"
                  />
                  <StoryCard
                    title="Virtual Production"
                    description="Building immersive digital environments using cutting-edge LED stages to revolutionize filming."
                    image="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=600&auto=format&fit=crop"
                  />
                  <StoryCard
                    title="Sustainable Production"
                    description="Reducing our carbon footprint through innovative technology and practices."
                    image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop"
                  />
                </div>
              </TabsContent>

              <TabsContent value="community">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StoryCard
                    title="Cinema for All"
                    description="Our program bringing film screenings to underserved communities."
                    image="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop"
                  />
                  <StoryCard
                    title="Youth Filmmakers"
                    description="Mentoring the next generation of storytellers through workshops and competitions."
                    image="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?q=80&w=600&auto=format&fit=crop"
                  />
                  <StoryCard
                    title="Global Film Festivals"
                    description="Supporting independent film festivals around the world to celebrate diverse voices."
                    image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Creator Submission */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a Story to Tell?</h2>
                <p className="mb-6 text-base text-gray-300 md:text-lg">
                  We're always looking for fresh voices and compelling stories. If you're a filmmaker, writer, or
                  creator with a vision, we want to hear from you.
                </p>
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  <Upload className="h-5 w-5 mr-2" /> Submit Your Project
                </Button>
              </div>

              <div className="space-y-4">
                <div className="bg-black/40 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="font-bold mb-2">What We're Looking For</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 text-purple-400 shrink-0 mt-0.5" />
                      <span>Original, bold stories that challenge conventions</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 text-purple-400 shrink-0 mt-0.5" />
                      <span>Diverse perspectives and underrepresented voices</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 text-purple-400 shrink-0 mt-0.5" />
                      <span>Innovative approaches to visual storytelling</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 text-purple-400 shrink-0 mt-0.5" />
                      <span>Stories with global appeal and cultural significance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Picks */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Staff Picks</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffPicks.map((pick, index) => (
              <div
                key={index}
                className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-70"></div>
                <Image
                  src={
                    pick.image ||
                    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&h=600&auto=format&fit=crop"
                  }
                  alt={pick.title}
                  width={400}
                  height={600}
                  className="w-full aspect-[2/3] object-cover"
                />

                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-purple-600">Staff Pick</Badge>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <p className="text-sm text-gray-300 mb-1">Picked by {pick.staff}</p>
                  <h3 className="text-lg font-bold mb-1">{pick.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{pick.reason}</p>
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white">
                    <Play className="h-4 w-4 mr-2" /> Watch
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Creative Community</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Stories shape us. They connect, heal, and ignite us. On this platform, the screen is just the beginning.
              Welcome to where every frame matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Start Watching
              </Button>
              <Button size="lg" variant="outline">
                Learn More About Our Mission
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Sample data
const creatorTestimonials = [
  {
    name: "Sophia Chen",
    role: "Director, 'Echoes of Tomorrow'",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&auto=format&fit=crop",
    quote:
      "Working with CINEVERSE has been transformative for my career. They gave me complete creative freedom and the resources to bring my vision to life. They truly value artistic integrity and bold storytelling.",
  },
  {
    name: "James Wilson",
    role: "Writer, 'The Silent Revolution'",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120&auto=format&fit=crop",
    quote:
      "As a first-time writer, I never thought my story would find a home. CINEVERSE not only believed in my script but helped me develop it into something even more powerful than I imagined.",
  },
  {
    name: "Mei Lin",
    role: "Producer, 'Beyond the Horizon'",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop",
    quote:
      "The team at CINEVERSE understands that great stories come from everywhere. Their commitment to diverse voices and perspectives is not just talk—they put real resources behind it.",
  },
  {
    name: "Carlos Mendez",
    role: "Director, 'Quantum Dreams'",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=120&auto=format&fit=crop",
    quote:
      "The technology and creative support CINEVERSE provides is unmatched. They helped me push the boundaries of visual storytelling in ways I didn't think were possible for an independent filmmaker.",
  },
]

const staffPicks = [
  {
    title: "The Silent Revolution",
    staff: "Elena Rodriguez, CEO",
    reason: "A powerful exploration of communication and resistance in a dystopian world.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&h=600&auto=format&fit=crop",
  },
  {
    title: "Beyond the Horizon",
    staff: "Marcus Chen, CCO",
    reason: "Visually stunning and emotionally resonant sci-fi at its best.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&h=600&auto=format&fit=crop",
  },
  {
    title: "Whispers in the Dark",
    staff: "Aisha Johnson, Head of Originals",
    reason: "A psychological thriller that keeps you guessing until the very end.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=400&h=600&auto=format&fit=crop",
  },
  {
    title: "The Last Light",
    staff: "David Kim, CTO",
    reason: "Groundbreaking visual effects in service of a deeply human story.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&h=600&auto=format&fit=crop",
  },
]
