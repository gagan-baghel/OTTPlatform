import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Play, Sparkles, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContentCarousel from "@/components/content-carousel"
import Header from "@/components/header"
import Footer from "@/components/footer"

const stats = [
  { label: "Active Viewers", value: "4.8M+", icon: Users },
  { label: "Cineverse Originals", value: "230+", icon: Sparkles },
  { label: "Average Viewer Rating", value: "4.9", icon: Star },
]

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden text-white">
      <Header />

      <main>
        <section className="relative isolate min-h-[98vh] overflow-hidden px-4 pb-14 pt-32 md:px-8 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(225,29,72,0.35),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.35),transparent_32%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-rose-300" /> Reimagined OTT Experience
              </p>

              <h1 className="max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-7xl">
                Cinema-Grade Streaming.
                <span className="block text-gradient-brand">Built for Story Lovers.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Discover bold originals, live watch parties, and cinematic curation in one beautifully crafted streaming
                ecosystem.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" className="rounded-full bg-rose-600 px-7 text-white hover:bg-rose-500">
                  <Play className="mr-2 h-4 w-4" /> Start Watching
                </Button>
                <Link href="/plans">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full border-white/30 bg-black/30 text-white hover:bg-white/10 sm:w-auto"
                  >
                    Explore Plans <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="cinematic-panel p-4">
                    <item.icon className="h-4 w-4 text-rose-300" />
                    <p className="mt-2 text-2xl">{item.value}</p>
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-float rounded-3xl border border-white/20 bg-black/45 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <Image
                src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=900&h=720&auto=format&fit=crop"
                alt="Cineverse cinematic preview - Echoes of Tomorrow"
                width={900}
                height={720}
                priority
                className="h-auto w-full rounded-2xl object-cover"
              />

              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/20 bg-slate-950/85 p-4 backdrop-blur-xl md:block">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Now Streaming</p>
                <p className="mt-1 text-sm">Echoes of Tomorrow: Final Episode</p>
                <p className="mt-1 text-xs text-rose-300">Live reactions from 12.4k viewers</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto mt-3 max-w-7xl space-y-16 px-4 md:px-8">
          <ContentCarousel title="Trending Tonight" items={trendingItems} />
          <ContentCarousel title="Cineverse Originals" items={exclusiveItems} />
          <ContentCarousel title="Watch Together Picks" items={socialItems} />
        </section>

        <section className="mx-auto mt-20 grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-8">
          <article className="cinematic-panel p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl">Built for Every Screen</h2>
            <p className="mt-3 max-w-lg text-slate-300">
              From smartphones to TV walls, CINEVERSE adapts beautifully with a responsive interface and frictionless
              playback.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-slate-200">
              {[
                "4K adaptive streaming",
                "Synced watch parties",
                "Offline downloads",
                "Personalized discover feeds",
              ].map((feature) => (
                <li key={feature} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>

          <article className="cinematic-panel p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl">Download the App</h2>
            <p className="mt-3 max-w-lg text-slate-300">
              Start on web, continue on mobile, and keep your watchlist synced across every device.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="rounded-xl border border-white/20 bg-white/5 p-2 transition hover:bg-white/10" aria-label="Download on App Store">
                <Image src="/apple-icon.png" alt="App Store" width={48} height={48} className="h-12 w-12 rounded-lg" />
              </button>
              <button className="rounded-xl border border-white/20 bg-white/5 p-2 transition hover:bg-white/10" aria-label="Get it on Play Store">
                <Image src="/playstore.png" alt="Play Store" width={120} height={48} className="h-12 w-auto" />
              </button>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-20 max-w-5xl px-4 pb-10 text-center md:px-8">
          <h2 className="text-3xl sm:text-5xl">Ready to Make Streaming Feel Cinematic Again?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Join millions discovering stories that feel handcrafted, immersive, and worth watching together.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full bg-rose-600 px-7 text-white hover:bg-rose-500">
              Start Free Trial
            </Button>
            <Link href="/discover">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-white/30 bg-black/30 text-white hover:bg-white/10 sm:w-auto"
              >
                Explore Library
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const trendingItems = [
  {
    id: 1,
    title: "The Last Horizon",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Sci-Fi",
  },
  {
    id: 2,
    title: "Midnight in Paris",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Romance",
  },
  {
    id: 3,
    title: "The Silent Echo",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Thriller",
  },
  {
    id: 4,
    title: "Beyond the Clouds",
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Drama",
  },
  {
    id: 5,
    title: "Eternal Sunshine",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Drama",
  },
  {
    id: 6,
    title: "The Dark Knight",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Action",
  },
]

const exclusiveItems = [
  {
    id: 1,
    title: "Nebula Rising",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Sci-Fi",
  },
  {
    id: 2,
    title: "The Lost City",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Adventure",
  },
  {
    id: 3,
    title: "Whispers in the Dark",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Horror",
  },
  {
    id: 4,
    title: "Eternal Love",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Romance",
  },
  {
    id: 5,
    title: "The Last Stand",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Action",
  },
  {
    id: 6,
    title: "Broken Mirrors",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Drama",
  },
]

const socialItems = [
  {
    id: 1,
    title: "Game Night",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Comedy",
  },
  {
    id: 2,
    title: "The Hangover",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Comedy",
  },
  {
    id: 3,
    title: "Friends Reunion",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Special",
  },
  {
    id: 4,
    title: "Movie Marathon",
    image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Collection",
  },
  {
    id: 5,
    title: "Karaoke Night",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Musical",
  },
  {
    id: 6,
    title: "Quiz Show",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=600&h=400&auto=format&fit=crop",
    category: "Game Show",
  },
]
