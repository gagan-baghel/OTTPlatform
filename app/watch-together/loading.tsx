import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="min-h-screen px-4 pb-12 pt-24 md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Skeleton className="h-52 w-full rounded-2xl md:h-72" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Skeleton className="h-[360px] w-full rounded-2xl lg:col-span-2" />
          <Skeleton className="h-[360px] w-full rounded-2xl" />
        </div>
      </div>
    </main>
  )
}
