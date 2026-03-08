"use client"

import { useState } from "react"
import { User, Settings, LogOut, Bell, BookmarkIcon, History, Heart, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface UserProfileDropdownProps {
  username?: string
  avatarSrc?: string
  notificationCount?: number
}

export default function UserProfileDropdown({
  username = "User",
  avatarSrc = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop",
  notificationCount = 3,
}: UserProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0" aria-label="Open profile menu">
          <Avatar className="h-10 w-10 border-2 border-transparent hover:border-purple-500 transition-colors">
            <AvatarImage
              src={
                avatarSrc ||
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop"
              }
              alt={username}
            />
            <AvatarFallback>{username.charAt(0)}</AvatarFallback>
          </Avatar>
          {notificationCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-600">
              {notificationCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-white/15 bg-slate-950 text-slate-100" align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{username}</p>
            <p className="text-xs text-slate-400">Premium Member</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className="mr-2 h-4 w-4" />
            <span>Notifications</span>
            {notificationCount > 0 && (
              <Badge className="ml-auto h-5 min-w-5 flex items-center justify-center p-0 text-xs bg-red-500">
                {notificationCount}
              </Badge>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BookmarkIcon className="mr-2 h-4 w-4" />
            <span>Watchlist</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <History className="mr-2 h-4 w-4" />
            <span>Watch History</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heart className="mr-2 h-4 w-4" />
            <span>Favorites</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help & Support</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
