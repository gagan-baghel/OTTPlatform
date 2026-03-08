import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StoryCardProps {
  title: string
  description: string
  image: string
}

export default function StoryCard({ title, description, image }: StoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 transition duration-300 hover:-translate-y-1 hover:border-white/25">
      <div className="overflow-hidden">
        <Image
          src={
            image ||
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&h=400&auto=format&fit=crop"
          }
          alt={title}
          width={600}
          height={400}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
        <Button variant="ghost" className="mt-3 h-auto p-0 text-rose-300 hover:text-rose-200">
          Read Story <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </article>
  )
}
