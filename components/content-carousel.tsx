"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Info, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ContentItem {
  id: number
  title: string
  image: string
  category: string
}

interface ContentCarouselProps {
  title: string
  items: ContentItem[]
  className?: string
}

export default function ContentCarousel({ title, items, className }: ContentCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(-1)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollByAmount = (distance: number) => {
    carouselRef.current?.scrollBy({ left: distance, behavior: "smooth" })
  }

  return (
    <section className={cn("relative", className)}>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl">{title}</h2>

        <div className="hidden gap-2 md:flex">
          <Button
            variant="outline"
            size="icon"
            className="border-white/20 bg-black/30 hover:bg-white/10"
            onClick={() => scrollByAmount(-360)}
            aria-label={`Scroll ${title} left`}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-white/20 bg-black/30 hover:bg-white/10"
            onClick={() => scrollByAmount(360)}
            aria-label={`Scroll ${title} right`}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div ref={carouselRef} className="scrollbar-hide flex snap-x gap-4 overflow-x-auto pb-2 pr-3 md:gap-5">
        {items.map((item, index) => (
          <article
            key={item.id}
            className={cn(
              "group relative h-[170px] w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 sm:h-[185px] sm:w-[300px] md:h-[205px] md:w-[340px]",
              activeIndex === index && "scale-[1.02] border-white/25",
            )}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(-1)}
          >
            <Image
              src={
                item.image ||
                "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=680&h=410&auto=format&fit=crop"
              }
              alt={item.title}
              width={680}
              height={410}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-flex rounded-full border border-white/20 bg-black/40 px-2 py-0.5 text-xs text-slate-200">
                {item.category}
              </span>
              <h3 className="mt-2 text-lg leading-tight">{item.title}</h3>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <Button size="sm" className="pointer-events-auto rounded-full bg-rose-600 text-white hover:bg-rose-500">
                <Play className="mr-1 h-4 w-4" /> Play
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="pointer-events-auto rounded-full border-white/40 bg-black/40 text-white hover:bg-white/10"
              >
                <Info className="mr-1 h-4 w-4" /> Info
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
