"use client"

import type React from "react"

import { useState } from "react"
import { Bell, X, Check, Clock, Star, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Notification {
  id: string
  type: "system" | "social" | "content"
  title: string
  message: string
  time: string
  read: boolean
  action?: string
  icon?: React.ReactNode
  avatar?: string
  username?: string
}

interface NotificationSystemProps {
  initialNotifications?: Notification[]
}

export default function NotificationSystem({ initialNotifications = [] }: NotificationSystemProps) {
  const [notifications, setNotifications] = useState<Notification[]>(
    initialNotifications.length > 0 ? initialNotifications : sampleNotifications,
  )
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const unreadCount = notifications.filter((n) => !n.read).length

  const filteredNotifications = activeTab === "all" ? notifications : notifications.filter((n) => n.type === activeTab)

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const getIcon = (notification: Notification) => {
    if (notification.icon) return notification.icon

    switch (notification.type) {
      case "system":
        return <Bell className="h-4 w-4 text-blue-500" />
      case "social":
        return <User className="h-4 w-4 text-green-500" />
      case "content":
        return <Star className="h-4 w-4 text-yellow-500" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-600">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 border-white/15 bg-slate-950 p-0 text-slate-100" align="end">
        <div className="flex items-center justify-between border-b border-white/10 p-3">
          <h3 className="font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-8 px-2 text-sm text-slate-200 hover:text-white" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid h-auto w-full grid-cols-3 rounded-none border-b border-white/10 bg-transparent p-0">
            <TabsTrigger
              value="all"
              className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-purple-500 py-2"
            >
              All
              {unreadCount > 0 && (
                <Badge className="ml-1 flex h-5 min-w-5 items-center justify-center bg-slate-500 p-0 text-xs hover:bg-slate-400">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="social"
              className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-purple-500 py-2"
            >
              Social
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-purple-500 py-2"
            >
              Content
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="m-0">
            <ScrollArea className="max-h-[300px]">
              {filteredNotifications.length > 0 ? (
                <div className="divide-y divide-white/10">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "flex items-start p-3 transition-colors hover:bg-slate-900",
                        !notification.read && "bg-slate-900/70",
                      )}
                    >
                      {notification.avatar ? (
                        <Avatar className="h-8 w-8 mr-3 flex-shrink-0">
                          <AvatarImage
                            src={
                              notification.avatar ||
                              "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop"
                            }
                            alt={notification.username || ""}
                          />
                          <AvatarFallback>{notification.username?.charAt(0) || "U"}</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-800">
                          {getIcon(notification)}
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className={cn("text-sm font-medium text-slate-100", !notification.read && "font-semibold")}>
                              {notification.title}
                            </p>
                            <p className="mt-1 text-xs text-slate-300">{notification.message}</p>
                            {notification.action && (
                              <Button
                                variant="link"
                                size="sm"
                                className="mt-1 h-auto p-0 text-xs text-rose-300 hover:text-rose-200"
                              >
                                {notification.action}
                              </Button>
                            )}
                          </div>
                          <p className="whitespace-nowrap text-xs text-slate-400">
                            {notification.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 ml-2">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-slate-400 hover:text-slate-100"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-3 w-3" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-slate-400 hover:text-slate-100"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-sm text-slate-400">
                  No notifications to display
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="border-t border-white/10 p-2 text-center">
          <Button variant="ghost" size="sm" className="w-full text-sm text-slate-200 hover:text-white">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// Sample data
const sampleNotifications: Notification[] = [
  {
    id: "1",
    type: "content",
    title: "New Release",
    message: "The Silent Revolution Season 2 is now available",
    time: "Just now",
    read: false,
    action: "Watch Now",
    icon: <Star className="h-4 w-4 text-yellow-500" />,
  },
  {
    id: "2",
    type: "social",
    title: "Watch Party Invitation",
    message: "Alex invited you to watch Beyond the Horizon",
    time: "5m ago",
    read: false,
    action: "Join Now",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop",
    username: "Alex",
  },
  {
    id: "3",
    type: "system",
    title: "Account Update",
    message: "Your profile was updated successfully",
    time: "1h ago",
    read: true,
    icon: <Bell className="h-4 w-4 text-blue-500" />,
  },
  {
    id: "4",
    type: "social",
    title: "New Comment",
    message: "Emma commented on your watchlist",
    time: "3h ago",
    read: false,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop",
    username: "Emma",
  },
  {
    id: "5",
    type: "content",
    title: "Coming Soon",
    message: "Quantum Dreams premieres next week",
    time: "1d ago",
    read: true,
    action: "Set Reminder",
    icon: <Clock className="h-4 w-4 text-purple-500" />,
  },
  {
    id: "6",
    type: "social",
    title: "New Follower",
    message: "Michael started following you",
    time: "2d ago",
    read: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
    username: "Michael",
  },
]
