"use client"

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  title: string
  price: number
  description: string
  features: PricingFeature[]
  cta: string
  popular?: boolean
  selected?: boolean
  onSelect?: () => void
  billingCycle?: "monthly" | "yearly"
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  cta,
  popular = false,
  selected = false,
  onSelect,
  billingCycle = "monthly",
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "relative rounded-2xl border p-6 transition-all duration-300",
        selected
          ? "border-rose-500/80 bg-gradient-to-b from-rose-500/20 via-indigo-500/15 to-black/50 shadow-[0_20px_60px_rgba(225,29,72,0.2)]"
          : "border-white/12 bg-slate-950/45 hover:border-white/25",
      )}
      onClick={onSelect}
    >
      {popular && (
        <span className="absolute right-3 top-3 rounded-full border border-rose-300/30 bg-rose-500/30 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-rose-100">
          MOST POPULAR
        </span>
      )}

      <h3 className="text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-4xl font-semibold tracking-tight">${price.toFixed(2)}</span>
        {price > 0 && <span className="pb-1 text-sm text-slate-400">/{billingCycle === "monthly" ? "mo" : "yr"}</span>}
      </div>

      {price > 0 && billingCycle === "yearly" && <p className="mt-2 text-xs text-rose-300">Save 20% annually</p>}

      <Button
        className={cn(
          "mt-6 w-full rounded-xl",
          selected ? "bg-rose-600 text-white hover:bg-rose-500" : "bg-white/10 text-white hover:bg-white/20",
        )}
        onClick={(event) => {
          event.stopPropagation()
          onSelect?.()
        }}
      >
        {cta}
      </Button>

      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={`${feature.text}-${index}`} className="flex items-start gap-2">
            {feature.included ? (
              <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
            ) : (
              <X className="mt-0.5 h-4 w-4 text-slate-500" />
            )}
            <span className={feature.included ? "text-sm text-slate-200" : "text-sm text-slate-500"}>{feature.text}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
