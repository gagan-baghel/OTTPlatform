import type React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Device {
  name: string
  supported: boolean
}

interface DeviceCategory {
  category: string
  icon: React.ReactNode
  devices: Device[]
}

interface DeviceCompatibilityProps {
  devices: DeviceCategory[]
}

export default function DeviceCompatibility({ devices }: DeviceCompatibilityProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
      {devices.map((category, index) => (
        <div key={index} className="rounded-xl border border-white/10 bg-gray-900/30 p-4 md:p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-purple-900/50 rounded-full p-2">{category.icon}</div>
            <h3 className="text-lg font-bold md:text-xl">{category.category}</h3>
          </div>

          <ul className="space-y-3">
            {category.devices.map((device, deviceIndex) => (
              <li
                key={deviceIndex}
                className={cn(
                  "flex items-center justify-between rounded-md p-2 text-sm md:text-base",
                  device.supported ? "bg-gray-800/50" : "bg-gray-800/20 text-gray-500",
                )}
              >
                <span>{device.name}</span>
                {device.supported && <Check className="h-4 w-4 text-green-500" />}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
