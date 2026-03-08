import Image from "next/image"
import { Play, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface RecentlyWatchedItem {
  id: string
  title: string
  image: string
  progress: number
  remainingTime: string
  episode?: string
}

interface RecentlyWatchedProps {
  items?: RecentlyWatchedItem[]
  className?: string
}

export default function RecentlyWatched({ items = [], className }: RecentlyWatchedProps) {
  const watchedItems = items.length > 0 ? items : sampleRecentlyWatched

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg font-bold md:text-xl">Continue Watching</h3>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
        {watchedItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="relative aspect-[2/3]">
              <Image
                src={
                  item.image ||
                  "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&h=600&auto=format&fit=crop"
                }
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h4 className="mb-1 line-clamp-1 text-sm font-medium">{item.title}</h4>
              {item.episode && <p className="text-xs text-gray-300 mb-2">{item.episode}</p>}
              <Progress value={item.progress} className="h-1 mb-2" />
              <div className="flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> {item.remainingTime} left
                </div>
                <Button
                  size="sm"
                  className="h-7 bg-white px-2 text-black opacity-100 transition-opacity hover:bg-white/90 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <Play className="h-3 w-3 mr-1" /> Resume
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Sample data
const sampleRecentlyWatched: RecentlyWatchedItem[] = [
  {
    id: "1",
    title: "The Silent Revolution",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=400&h=600&auto=format&fit=crop",
    progress: 65,
    remainingTime: "15m",
    episode: "S1:E4 - The Uprising",
  },
  {
    id: "2",
    title: "Beyond the Horizon",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&h=600&auto=format&fit=crop",
    progress: 30,
    remainingTime: "1h 35m",
  },
  {
    id: "3",
    title: "Quantum Dreams",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=400&h=600&auto=format&fit=crop",
    progress: 80,
    remainingTime: "22m",
    episode: "S2:E7 - Parallel",
  },
  {
    id: "4",
    title: "The Last Light",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&h=600&auto=format&fit=crop",
    progress: 45,
    remainingTime: "1h 10m",
  },
  {
    id: "5",
    title: "Echoes of Tomorrow",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=400&h=600&auto=format&fit=crop",
    progress: 15,
    remainingTime: "1h 50m",
    episode: "S1:E1 - Pilot",
  },
]
