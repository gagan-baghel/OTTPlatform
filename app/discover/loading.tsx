import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="min-h-screen px-4 pb-12 pt-24 md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Skeleton className="h-10 w-56" />
          <div className="flex w-full gap-3 md:w-auto">
            <Skeleton className="h-10 flex-1 md:w-64" />
            <Skeleton className="h-10 w-28" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="aspect-[2/3] w-full rounded-xl" />
          ))}
        </div>
      </div>
    </main>
  )
}
