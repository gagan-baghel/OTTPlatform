"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface FilterOption {
  id: string
  label: string
}

interface FilterCategory {
  id: string
  name: string
  options: FilterOption[]
}

interface FilterSystemProps {
  categories: FilterCategory[]
  onFilterChange?: (selectedFilters: Record<string, string[]>) => void
  className?: string
}

export default function FilterSystem({ categories, onFilterChange, className }: FilterSystemProps) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [isOpen, setIsOpen] = useState(false)

  const handleFilterChange = (categoryId: string, optionId: string, checked: boolean) => {
    setSelectedFilters((prev) => {
      const categoryFilters = prev[categoryId] || []
      let newCategoryFilters: string[]

      if (checked) {
        newCategoryFilters = [...categoryFilters, optionId]
      } else {
        newCategoryFilters = categoryFilters.filter((id) => id !== optionId)
      }

      const newFilters = {
        ...prev,
        [categoryId]: newCategoryFilters,
      }

      if (onFilterChange) {
        onFilterChange(newFilters)
      }

      return newFilters
    })
  }

  const clearFilters = () => {
    setSelectedFilters({})
    if (onFilterChange) {
      onFilterChange({})
    }
  }

  const clearCategoryFilters = (categoryId: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev }
      delete newFilters[categoryId]

      if (onFilterChange) {
        onFilterChange(newFilters)
      }

      return newFilters
    })
  }

  const totalFiltersSelected = Object.values(selectedFilters).reduce((total, filters) => total + filters.length, 0)

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            {totalFiltersSelected > 0 && (
              <Badge className="ml-1 bg-purple-600 hover:bg-purple-700 h-5 min-w-5 flex items-center justify-center p-0 text-xs">
                {totalFiltersSelected}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[min(22rem,calc(100vw-2rem))] p-0" align="start">
          <div className="flex items-center justify-between border-b p-3">
            <h3 className="font-semibold">Filters</h3>
            {totalFiltersSelected > 0 && (
              <Button variant="ghost" size="sm" className="h-8 px-2 text-sm" onClick={clearFilters}>
                Clear all
              </Button>
            )}
          </div>
          <div className="max-h-[60vh] overflow-auto">
            {categories.map((category) => {
              const categoryFilters = selectedFilters[category.id] || []
              return (
                <div key={category.id} className="border-b last:border-0">
                  <div className="flex items-center justify-between p-3">
                    <h4 className="text-sm font-medium">{category.name}</h4>
                    {categoryFilters.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 px-2 text-xs"
                        onClick={() => clearCategoryFilters(category.id)}
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-2 p-3 pt-0">
                    {category.options.map((option) => {
                      const isChecked = categoryFilters.includes(option.id)
                      return (
                        <div key={option.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`${category.id}-${option.id}`}
                            checked={isChecked}
                            onCheckedChange={(checked) =>
                              handleFilterChange(category.id, option.id, checked as boolean)
                            }
                          />
                          <Label htmlFor={`${category.id}-${option.id}`} className="text-sm cursor-pointer">
                            {option.label}
                          </Label>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </PopoverContent>
      </Popover>

      {/* Display active filters */}
      {totalFiltersSelected > 0 && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(selectedFilters).map(([categoryId, optionIds]) => {
            if (optionIds.length === 0) return null
            const category = categories.find((c) => c.id === categoryId)
            if (!category) return null

            return optionIds.map((optionId) => {
              const option = category.options.find((o) => o.id === optionId)
              if (!option) return null

              return (
                <Badge
                  key={`${categoryId}-${optionId}`}
                  className="bg-gray-800 hover:bg-gray-700 pl-2 pr-1 py-1 h-7 flex items-center gap-1"
                >
                  <span className="text-xs text-gray-400">{category.name}:</span>
                  <span className="text-xs">{option.label}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 p-0 ml-1 text-gray-400 hover:text-white hover:bg-transparent"
                    onClick={() => handleFilterChange(categoryId, optionId, false)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )
            })
          })}
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs text-gray-400 hover:text-white"
            onClick={clearFilters}
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  )
}
