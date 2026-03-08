import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="min-h-screen px-4 pb-12 pt-24 md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-5 w-full max-w-2xl" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-64 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    </main>
  )
}
