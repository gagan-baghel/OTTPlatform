"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import SearchBar from "@/components/search-bar"
import UserProfileDropdown from "@/components/user-profile-dropdown"
import NotificationSystem from "@/components/notification-system"

const navLinks = [
  { href: "/discover", label: "Discover" },
  { href: "/originals", label: "Originals" },
  { href: "/watch-together", label: "Watch Together" },
  { href: "/plans", label: "Plans" },
  { href: "/studio", label: "Studio" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", onEscape)
    return () => window.removeEventListener("keydown", onEscape)
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 px-3 md:px-8 transition-all duration-300",
        scrolled ? "py-3" : "py-4",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-3 py-2 md:px-5 md:py-2.5",
          scrolled
            ? "border-white/15 bg-slate-950/70 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-white/10 bg-slate-950/40 backdrop-blur-lg",
        )}
      >
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/" className="group flex items-center gap-2" aria-label="CINEVERSE home">
            <span className="overflow-hidden rounded-full border border-white/40 bg-white/90 p-1 shadow-[0_0_18px_rgba(255,255,255,0.45)]">
              <Image src="/logo.png" alt="CINEVERSE logo" width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
            </span>
            <span className="hidden text-base font-semibold tracking-wide sm:inline md:text-xl">
              <span className="text-gradient-brand">CINEVERSE</span>
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-200/85 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 md:gap-2">
          <SearchBar className="hidden md:flex" />
          <div className="hidden md:block">
            <NotificationSystem />
          </div>
          <div className="hidden md:block">
            <UserProfileDropdown />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl md:hidden">
          <div className="mb-3 flex items-center justify-end gap-2 border-b border-white/10 pb-3">
            <NotificationSystem />
            <UserProfileDropdown />
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-sm text-slate-100/90 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
