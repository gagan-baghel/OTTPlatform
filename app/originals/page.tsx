import Image from "next/image"
import Link from "next/link"
import { Play, ChevronRight, Award, Clock, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import OriginalShowcase from "@/components/original-showcase"

export default function OriginalsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative h-[62vh] w-full overflow-hidden md:h-[70vh]">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Featured Original"
            fill
            className="object-cover"
            priority
          />

          <div className="relative z-20 flex flex-col justify-end h-full px-4 md:px-8 pb-12 max-w-7xl mx-auto">
            <Badge className="mb-4 bg-purple-600 hover:bg-purple-700 w-fit">CINEVERSE ORIGINAL</Badge>
            <h1 className="mb-4 max-w-3xl text-3xl md:text-6xl font-bold">Echoes of Tomorrow</h1>
            <p className="mb-6 max-w-2xl text-base text-gray-300 md:text-xl">
              A mind-bending journey through time and consciousness that challenges everything you know about reality.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="h-4 w-4 mr-1" /> 8 Episodes
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Calendar className="h-4 w-4 mr-1" /> 2023
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Star className="h-4 w-4 mr-1 text-yellow-500" /> 4.9
              </div>
              <Badge variant="outline" className="text-xs">
                Sci-Fi
              </Badge>
              <Badge variant="outline" className="text-xs">
                Drama
              </Badge>
              <Badge variant="outline" className="text-xs">
                Mystery
              </Badge>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <Button className="w-full bg-white text-black hover:bg-white/90 sm:w-auto">
                <Play className="h-4 w-4 mr-2" /> Watch Now
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">Add to Watchlist</Button>
            </div>
          </div>
        </section>

        {/* Originals Navigation */}
        <section className="py-8 border-b border-white/10">
          <div className="px-4 md:px-8 max-w-7xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-0 w-full justify-start bg-gray-900/50">
                <TabsTrigger value="all">All Originals</TabsTrigger>
                <TabsTrigger value="series">Series</TabsTrigger>
                <TabsTrigger value="films">Films</TabsTrigger>
                <TabsTrigger value="documentaries">Documentaries</TabsTrigger>
                <TabsTrigger value="coming-soon">Coming Soon</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Featured Originals */}
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-2xl md:text-3xl font-bold">Award-Winning Originals</h2>
            <Link href="/originals/awards" className="text-sm text-purple-400 hover:text-purple-300 flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardWinningOriginals.map((original) => (
              <div
                key={original.id}
                className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-70"></div>
                <Image
                  src={original.image || "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&h=800&auto=format&fit=crop"}
                  alt={original.title}
                  width={600}
                  height={800}
                  className="w-full aspect-[3/4] object-cover"
                />

                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center bg-purple-600 rounded-full px-3 py-1 text-xs font-medium">
                    <Award className="h-3 w-3 mr-1" /> {original.award}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold mb-1">{original.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{original.description}</p>
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white">
                    <Play className="h-4 w-4 mr-2" /> Watch
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Original Showcase */}
        <OriginalShowcase original={showcasedOriginal} className="py-16 bg-gradient-to-b from-purple-900/20 to-black" />

        {/* Behind The Scenes */}
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Behind The Scenes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {behindTheScenes.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/30 transition-colors"></div>
                <Image
                  src={item.image || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&h=450&auto=format&fit=crop"}
                  alt={item.title}
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full">
                    <Play className="h-5 w-5" />
                  </Button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Originals */}
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-2xl md:text-3xl font-bold">Coming Soon</h2>
            <Link
              href="/originals/coming-soon"
              className="text-sm text-purple-400 hover:text-purple-300 flex items-center"
            >
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {upcomingOriginals.map((original) => (
              <div
                key={original.id}
                className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-70"></div>
                <Image
                  src={original.image || "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=400&h=600&auto=format&fit=crop"}
                  alt={original.title}
                  width={400}
                  height={600}
                  className="w-full aspect-[2/3] object-cover"
                />

                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-purple-600 rounded-full px-3 py-1 text-xs font-medium">{original.releaseDate}</div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-lg font-bold mb-1">{original.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{original.description}</p>
                  <Button size="sm" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                    Remind Me
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Creator Spotlight */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Creator Spotlight</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=600&auto=format&fit=crop"
                  alt="Creator Spotlight"
                  width={600}
                  height={600}
                  className="w-full aspect-square object-cover"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Sophia Chen</h3>
                <p className="text-gray-300">
                  Award-winning director and visionary behind "Echoes of Tomorrow" and "The Silent Revolution"
                </p>
                <p className="text-gray-300">
                  "I believe in stories that challenge our perception of reality and push the boundaries of what's
                  possible in visual storytelling. With CINEVERSE, I've found a platform that truly values creative
                  freedom and bold narratives."
                </p>
                <div className="pt-4">
                  <h4 className="text-lg font-semibold mb-3">Notable Works</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-purple-900/50 hover:bg-purple-900/70">Echoes of Tomorrow</Badge>
                    <Badge className="bg-purple-900/50 hover:bg-purple-900/70">The Silent Revolution</Badge>
                    <Badge className="bg-purple-900/50 hover:bg-purple-900/70">Quantum Dreams</Badge>
                    <Badge className="bg-purple-900/50 hover:bg-purple-900/70">Beyond Reality</Badge>
                  </div>
                </div>
                <Button className="mt-4">View Full Profile</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Sample data
const awardWinningOriginals = [
  {
    id: 1,
    title: "The Silent Revolution",
    description: "In a world where speaking is forbidden, a group of rebels finds a new way to communicate.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&h=800&auto=format&fit=crop",
    award: "Best Drama Series",
  },
  {
    id: 2,
    title: "Quantum Dreams",
    description: "A physicist discovers how to enter people's dreams, but at what cost to reality?",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&h=800&auto=format&fit=crop",
    award: "Best Cinematography",
  },
  {
    id: 3,
    title: "The Last Light",
    description: "As the sun begins to die, humanity must find a new home among the stars.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&h=800&auto=format&fit=crop",
    award: "Best Visual Effects",
  },
]

const showcasedOriginal = {
  title: "Beyond the Horizon",
  tagline: "The journey begins where the map ends",
  description:
    "An epic space odyssey that explores the furthest reaches of human potential and the mysteries of the universe. When the crew of the Artemis discovers an anomaly at the edge of our solar system, they embark on a journey that will challenge everything they thought they knew about reality.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&h=1080&auto=format&fit=crop",
  releaseDate: "All episodes streaming now",
  duration: "10 Episodes",
  starring: ["Emma Stone", "John Cho", "Lupita Nyong'o", "Oscar Isaac", "Zendaya"],
  creators: ["Sophia Chen", "Michael Rodriguez"],
  genres: ["Sci-Fi", "Adventure", "Drama"],
  rating: 4.9,
}

const behindTheScenes = [
  {
    id: 1,
    title: "Creating the World of 'Beyond the Horizon'",
    description: "Go behind the scenes with the production design team to see how they built entire galaxies.",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&h=450&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Director's Commentary: The Silent Revolution",
    description: "Sophia Chen breaks down key scenes and shares her vision for this groundbreaking series.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&h=450&auto=format&fit=crop",
  },
]

const upcomingOriginals = [
  {
    id: 1,
    title: "Whispers in the Dark",
    description: "A psychological thriller that blurs the line between reality and paranoia.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=400&h=600&auto=format&fit=crop",
    releaseDate: "June 15",
  },
  {
    id: 2,
    title: "The Last Guardian",
    description: "An ancient protector must train a reluctant heir before time runs out.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&h=600&auto=format&fit=crop",
    releaseDate: "July 22",
  },
  {
    id: 3,
    title: "Neon Dreams",
    description: "In a cyberpunk future, dreams are the new currency—and they're running out.",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=400&h=600&auto=format&fit=crop",
    releaseDate: "August 10",
  },
  {
    id: 4,
    title: "The Forgotten City",
    description: "An archaeologist discovers a lost civilization with technology beyond our understanding.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=600&auto=format&fit=crop",
    releaseDate: "September 5",
  },
]
