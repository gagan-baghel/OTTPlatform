import Image from "next/image"
import { Globe, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
}

export default function TeamMember({ name, role, bio, image }: TeamMemberProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/12 bg-slate-950/55 transition duration-300 hover:-translate-y-1 hover:border-white/25">
      <div className="relative overflow-hidden">
        <Image
          src={
            image ||
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&h=400&auto=format&fit=crop"
          }
          alt={name}
          width={400}
          height={400}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>

      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-xl">{name}</h3>
          <p className="text-sm text-rose-300">{role}</p>
        </div>

        <p className="text-sm leading-6 text-slate-300">{bio}</p>

        <div className="flex gap-2 pt-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" aria-label={`${name} on X`}>
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" aria-label={`${name} on LinkedIn`}>
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" aria-label={`${name} website`}>
            <Globe className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  )
}
