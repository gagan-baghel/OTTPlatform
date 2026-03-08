import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Play, Clock, Star, Heart } from "lucide-react"
import FilterSystem from "@/components/filter-system"
import SearchBar from "@/components/search-bar"
import RecentlyWatched from "@/components/recently-watched"

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pb-16 pt-24 md:pt-28">
        <section className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h1 className="text-2xl md:text-4xl font-bold">Discover – Tailored for You</h1>

            <div className="flex w-full flex-col items-start gap-3 md:w-auto md:flex-row md:items-center">
              <SearchBar placeholder="Search titles, genres, actors..." className="w-full md:w-64" />
              <FilterSystem
                categories={[
                  {
                    id: "genre",
                    name: "Genre",
                    options: genres.map((genre) => ({ id: genre.toLowerCase().replace(/\s+/g, "-"), label: genre })),
                  },
                  {
                    id: "year",
                    name: "Year",
                    options: ["2023", "2022", "2021", "2020", "2019"].map((year) => ({ id: year, label: year })),
                  },
                  {
                    id: "rating",
                    name: "Rating",
                    options: ["5 Stars", "4+ Stars", "3+ Stars"].map((rating) => ({
                      id: rating.toLowerCase().replace(/\s+/g, "-"),
                      label: rating,
                    })),
                  },
                ]}
              />
            </div>
          </div>

          <RecentlyWatched className="mb-12" />

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 w-full justify-start bg-gray-900/50">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="mood">Mood</TabsTrigger>
              <TabsTrigger value="genre">Genre</TabsTrigger>
              <TabsTrigger value="language">Language</TabsTrigger>
              <TabsTrigger value="length">Length</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {discoverItems.map((item) => (
                  <DiscoverCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mood" className="mt-0">
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {moods.map((mood) => (
                  <Button
                    key={mood}
                    variant="outline"
                    className="h-10 rounded-full border-purple-500/50 px-3 text-xs sm:text-sm hover:border-purple-500 hover:bg-purple-950/30"
                  >
                    {mood}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {discoverItems.slice(0, 8).map((item) => (
                  <DiscoverCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="genre" className="mt-0">
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {genres.map((genre) => (
                  <Button
                    key={genre}
                    variant="outline"
                    className="h-10 rounded-full border-purple-500/50 px-3 text-xs sm:text-sm hover:border-purple-500 hover:bg-purple-950/30"
                  >
                    {genre}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {discoverItems.slice(4, 12).map((item) => (
                  <DiscoverCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="language" className="mt-0">
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {languages.map((language) => (
                  <Button
                    key={language}
                    variant="outline"
                    className="h-10 rounded-full border-purple-500/50 px-3 text-xs sm:text-sm hover:border-purple-500 hover:bg-purple-950/30"
                  >
                    {language}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {discoverItems.slice(2, 10).map((item) => (
                  <DiscoverCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="length" className="mt-0">
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {lengths.map((length) => (
                  <Button
                    key={length}
                    variant="outline"
                    className="h-10 rounded-full border-purple-500/50 px-3 text-xs sm:text-sm hover:border-purple-500 hover:bg-purple-950/30"
                  >
                    {length}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {discoverItems.slice(3, 11).map((item) => (
                  <DiscoverCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  )
}

interface DiscoverItem {
  id: number
  title: string
  image: string
  duration: string
  rating: number
  year: number
  genre: string
}

interface DiscoverCardProps {
  item: DiscoverItem
}

function DiscoverCard({ item }: DiscoverCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-70"></div>
      <Image
        src={item.image || "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=400&h=600&auto=format&fit=crop"}
        alt={item.title}
        width={400}
        height={600}
        className="w-full aspect-[2/3] object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-4">
        <div className="mb-1 flex items-center space-x-2 text-[11px] text-gray-300 sm:text-xs">
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" /> {item.duration}
          </span>
          <span className="flex items-center">
            <Star className="h-3 w-3 mr-1 text-yellow-500" /> {item.rating}
          </span>
          <span>{item.year}</span>
        </div>
        <h3 className="text-base font-medium sm:text-lg">{item.title}</h3>
        <p className="text-xs text-gray-300">{item.genre}</p>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
        <div className="flex space-x-2">
          <Button size="sm" className="h-8 rounded-full bg-white text-black hover:bg-white/90">
            <Play className="h-4 w-4 mr-1" /> Play
          </Button>
          <Button size="sm" variant="outline" className="h-8 rounded-full border-white text-white hover:bg-white/20">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Sample data
const discoverItems: DiscoverItem[] = [
  {
    id: 1,
    title: "The Last Horizon",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "2h 15m",
    rating: 4.8,
    year: 2023,
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "Midnight in Paris",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "1h 45m",
    rating: 4.5,
    year: 2022,
    genre: "Romance",
  },
  {
    id: 3,
    title: "The Silent Echo",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "2h 5m",
    rating: 4.7,
    year: 2023,
    genre: "Thriller",
  },
  {
    id: 4,
    title: "Beyond the Clouds",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "1h 55m",
    rating: 4.3,
    year: 2021,
    genre: "Drama",
  },
  {
    id: 5,
    title: "Eternal Sunshine",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "1h 50m",
    rating: 4.9,
    year: 2023,
    genre: "Drama",
  },
  {
    id: 6,
    title: "The Dark Knight",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "2h 30m",
    rating: 4.8,
    year: 2022,
    genre: "Action",
  },
  {
    id: 7,
    title: "Lost in Translation",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "1h 40m",
    rating: 4.6,
    year: 2023,
    genre: "Drama",
  },
  {
    id: 8,
    title: "The Grand Budapest",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "1h 40m",
    rating: 4.7,
    year: 2022,
    genre: "Comedy",
  },
  {
    id: 9,
    title: "Interstellar",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "2h 45m",
    rating: 4.9,
    year: 2021,
    genre: "Sci-Fi",
  },
  {
    id: 10,
    title: "La La Land",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "2h 5m",
    rating: 4.5,
    year: 2023,
    genre: "Musical",
  },
  {
    id: 11,
    title: "Inception",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "2h 25m",
    rating: 4.8,
    year: 2022,
    genre: "Sci-Fi",
  },
  {
    id: 12,
    title: "Parasite",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&h=600&auto=format&fit=crop",
    duration: "2h 10m",
    rating: 4.9,
    year: 2021,
    genre: "Thriller",
  },
]

const moods = [
  "Happy",
  "Sad",
  "Excited",
  "Relaxed",
  "Tense",
  "Romantic",
  "Nostalgic",
  "Inspired",
  "Mysterious",
  "Adventurous",
]
const genres = [
  "Action",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Horror",
  "Romance",
  "Thriller",
  "Documentary",
  "Animation",
  "Fantasy",
]
const languages = [
  "English",
  "Spanish",
  "French",
  "Korean",
  "Japanese",
  "Hindi",
  "German",
  "Italian",
  "Mandarin",
  "Portuguese",
]
const lengths = ["< 90 min", "90-120 min", "2-2.5 hours", "> 2.5 hours", "Mini-Series", "Series", "Short Film"]
