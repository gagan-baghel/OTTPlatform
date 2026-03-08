import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 text-white">
      <div className="cinematic-panel max-w-lg p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">404</p>
        <h1 className="mt-3 text-3xl md:text-4xl">Page not found</h1>
        <p className="mt-3 text-slate-300">The scene you are looking for does not exist in this cut.</p>
        <Link href="/" className="mt-6 inline-block">
          <Button className="rounded-full bg-rose-600 px-6 text-white hover:bg-rose-500">Back to Home</Button>
        </Link>
      </div>
    </main>
  )
}
