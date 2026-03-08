import Image from "next/image"
import { Calendar, Clock, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface OriginalShowcaseProps {
  original: {
    title: string
    tagline: string
    description: string
    image: string
    releaseDate: string
    duration: string
    starring: string[]
    creators: string[]
    genres: string[]
    rating: number
  }
  className?: string
}

export default function OriginalShowcase({ original, className }: OriginalShowcaseProps) {
  return (
    <section className={cn("w-full px-4 md:px-8", className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-5">
          <h2 className="text-3xl md:text-5xl">{original.title}</h2>
          <p className="text-lg italic text-rose-300 md:text-xl">{original.tagline}</p>
          <p className="max-w-xl text-slate-300">{original.description}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {original.duration}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {original.releaseDate}
            </span>
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400" />
              {original.rating}
            </span>
          </div>

          <div className="space-y-3">
            <MetadataChips title="Starring" values={original.starring} />
            <MetadataChips title="Created By" values={original.creators} />
            <MetadataChips title="Genres" values={original.genres} filled />
          </div>

          <Button className="mt-2 rounded-full bg-rose-600 px-6 text-white hover:bg-rose-500">
            <Play className="mr-2 h-4 w-4" /> Watch Now
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/60 p-2 shadow-[0_24px_80px_rgba(99,102,241,0.25)]">
          <Image
            src={
              original.image ||
              "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1920&h=1080&auto=format&fit=crop"
            }
            width={1920}
            height={1080}
            alt={original.title}
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function MetadataChips({
  title,
  values,
  filled = false,
}: {
  title: string
  values: string[]
  filled?: boolean
}) {
  return (
    <div>
      <h3 className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-400">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <Badge
            key={value}
            variant={filled ? "default" : "outline"}
            className={cn(
              "rounded-full px-3 py-1 text-xs",
              filled && "bg-rose-500/20 text-rose-100 hover:bg-rose-500/30",
            )}
          >
            {value}
          </Badge>
        ))}
      </div>
    </div>
  )
}
