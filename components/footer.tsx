import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const footerColumns = [
  {
    title: "Explore",
    links: [
      { href: "/discover", label: "Discover" },
      { href: "/originals", label: "Originals" },
      { href: "/watch-together", label: "Watch Together" },
      { href: "/plans", label: "Plans" },
      { href: "/studio", label: "Studio" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/help", label: "Help Center" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
      { href: "/devices", label: "Supported Devices" },
      { href: "/accessibility", label: "Accessibility" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms" },
      { href: "/privacy", label: "Privacy" },
      { href: "/cookies", label: "Cookie Preferences" },
      { href: "/corporate", label: "Corporate" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-black/55 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_100%,rgba(244,63,94,0.3),transparent_30%),radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.3),transparent_26%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:px-8">
        <div>
          <h3 className="text-xl font-semibold tracking-wide">CINEVERSE</h3>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Premium streaming for people who care about stories. Discover originals, join live watch parties, and
            experience cinema with community.
          </p>

          <div className="mt-5 flex gap-2">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "X" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className="rounded-full border border-white/15 bg-white/5 p-2 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">{column.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-slate-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-white/10 px-4 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} CINEVERSE. All rights reserved.</p>
        <p className="animate-credits-roll whitespace-nowrap">Director of Experience: You • Produced by CINEVERSE Studios • Stories Worth Rewatching</p>
      </div>
    </footer>
  )
}
