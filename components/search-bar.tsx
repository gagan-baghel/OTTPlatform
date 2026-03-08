"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface SearchBarProps {
  onSearch?: (query: string) => void
  placeholder?: string
  className?: string
}

export default function SearchBar({ onSearch, placeholder = "Search...", className }: SearchBarProps) {
  const isMobile = useMobile()
  const [isExpanded, setIsExpanded] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    } else if (e.key === "Escape") {
      setIsExpanded(false)
    }
  }

  const clearSearch = () => {
    setQuery("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  useEffect(() => {
    if (isMobile) {
      setIsExpanded(true)
    }
  }, [isMobile])

  return (
    <div
      className={cn(
        "relative flex items-center transition-all duration-300",
        isExpanded ? "w-full md:w-64" : "w-10",
        className,
      )}
    >
      {isExpanded ? (
        <>
          <Input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pr-16 bg-gray-900/50 border-gray-700"
          />
          <div className="absolute right-0 flex">
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-gray-400 hover:text-white"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 text-gray-400 hover:text-white"
              onClick={handleSearch}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 text-gray-400 hover:text-white"
          onClick={() => setIsExpanded(true)}
        >
          <Search className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
