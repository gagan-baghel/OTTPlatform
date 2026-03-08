"use client"

import { Button } from "@/components/ui/button"

interface EmojiPickerProps {
  onSelect: (emoji: string) => void
}

export default function EmojiPicker({ onSelect }: EmojiPickerProps) {
  const emojis = [
    "😀",
    "😂",
    "😍",
    "🥰",
    "😎",
    "🤔",
    "😮",
    "😢",
    "😡",
    "👍",
    "👏",
    "🙌",
    "🔥",
    "❤️",
    "💯",
    "✨",
    "🎉",
    "🍿",
    "🎬",
    "🎭",
  ]

  return (
    <div className="rounded-lg bg-gray-800 p-2 shadow-lg">
      <div className="grid grid-cols-8 gap-1 sm:grid-cols-10">
        {emojis.map((emoji, index) => (
          <Button key={index} variant="ghost" className="h-8 w-8 p-0 hover:bg-gray-700" onClick={() => onSelect(emoji)}>
            {emoji}
          </Button>
        ))}
      </div>
    </div>
  )
}
