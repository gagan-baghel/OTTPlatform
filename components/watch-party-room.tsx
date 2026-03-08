"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Maximize,
  MessageCircle,
  Pause,
  Play,
  Settings,
  SkipBack,
  SkipForward,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface WatchPartyRoomProps {
  title: string
  host: string
  viewers: number
  status: "live" | "scheduled"
}

export default function WatchPartyRoom({ title, host, viewers, status }: WatchPartyRoomProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(35)
  const [volume, setVolume] = useState(80)

  return (
    <article className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/65">
      <div className="relative aspect-video">
        <Image
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1280&h=720&auto=format&fit=crop"
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

        {status === "live" && (
          <div className="absolute right-4 top-4 z-10">
            <Badge className="bg-red-600 text-white hover:bg-red-500">LIVE</Badge>
          </div>
        )}

        <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/65 px-2.5 py-1 text-xs">
          <Users className="h-3.5 w-3.5" />
          {viewers} watching
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="icon"
            className="h-16 w-16 rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-lg hover:bg-white/30"
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="h-7 w-7" /> : <Play className="ml-0.5 h-7 w-7" />}
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
          <div className="mb-2 flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/15" aria-label="Play or pause">
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/15" aria-label="Back 10 seconds">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/15" aria-label="Forward 10 seconds">
              <SkipForward className="h-4 w-4" />
            </Button>
            <div className="ml-1 flex-1">
              <Slider value={[progress]} max={100} step={1} onValueChange={(value) => setProgress(value[0])} />
            </div>
            <span className="text-xs text-slate-300 md:text-sm">1:24 / 4:02</span>
          </div>

          <div className="flex items-center justify-end gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/15"
              aria-label={isMuted ? "Unmute" : "Mute"}
              onClick={() => setIsMuted((prev) => !prev)}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <div className="hidden w-24 md:block">
              <Slider
                value={[volume]}
                max={100}
                step={1}
                onValueChange={(value) => setVolume(value[0])}
                disabled={isMuted}
              />
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/15" aria-label="Chat">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/15" aria-label="Settings">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/15" aria-label="Fullscreen">
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-1 p-4">
        <h3 className="text-xl">{title}</h3>
        <p className="text-sm text-slate-400">Hosted by {host}</p>
      </div>
    </article>
  )
}
