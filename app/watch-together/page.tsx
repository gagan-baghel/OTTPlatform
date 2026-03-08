"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Users, Plus, Calendar, Clock, Search, Heart, MessageCircle, Share2, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WatchPartyRoom from "@/components/watch-party-room"
import EmojiPicker from "@/components/emoji-picker"

export default function WatchTogetherPage() {
  const [activeTab, setActiveTab] = useState("discover")
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji)
    setShowEmojiPicker(false)
    // In a real app, this would send the emoji to the watch party
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative h-[56vh] w-full overflow-hidden md:h-[60vh]">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Watch Together"
            fill
            className="object-cover"
            priority
          />

          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 md:px-8 text-center">
            <h1 className="mb-6 text-3xl md:text-6xl font-bold">Watch Together</h1>
            <p className="mb-8 max-w-2xl text-base text-gray-300 md:text-xl">
              Social streaming redefined. Host virtual screenings, create shared watchlists, and experience stories
              together in real-time.
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white sm:w-auto">
                <Users className="h-5 w-5 mr-2" /> Create Watch Party
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Play className="h-5 w-5 mr-2" /> Join Existing Party
              </Button>
            </div>
          </div>
        </section>

        {/* Watch Together Navigation */}
        <section className="py-8 border-b border-white/10">
          <div className="px-4 md:px-8 max-w-7xl mx-auto">
            <Tabs defaultValue="discover" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="mb-0 w-full justify-start bg-gray-900/50">
                <TabsTrigger value="discover">Discover Parties</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="friends">Friends' Parties</TabsTrigger>
                <TabsTrigger value="watchlist">Shared Watchlists</TabsTrigger>
                <TabsTrigger value="history">Watch History</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {activeTab === "discover" && (
          <>
            {/* Featured Watch Party */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Watch Party</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <WatchPartyRoom
                    title="The Silent Revolution - Season Finale"
                    host="Movie Buffs Club"
                    viewers={142}
                    status="live"
                  />
                </div>

                <div className="rounded-lg border border-white/10 bg-gray-900/30 p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-4">Live Chat</h3>
                  <ScrollArea className="h-[300px] mb-4">
                    <div className="space-y-4">
                      {chatMessages.map((message, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={message.avatar || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop"} alt={message.username} />
                            <AvatarFallback>{message.username.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">{message.username}</span>
                              <span className="text-xs text-gray-400">{message.time}</span>
                            </div>
                            <p className="text-sm text-gray-300">{message.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                      <Smile className="h-5 w-5" />
                    </Button>
                    <Input placeholder="Type a message..." className="flex-1 bg-gray-800/50" />
                    <Button className="px-3 sm:px-4">Send</Button>
                  </div>

                  {showEmojiPicker && (
                    <div className="mt-2">
                      <EmojiPicker onSelect={handleEmojiSelect} />
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Trending Watch Parties */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Trending Watch Parties</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingWatchParties.map((party) => (
                  <div
                    key={party.id}
                    className="bg-gray-900/30 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                  >
                    <div className="relative">
                      <Image
                        src={party.image || "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&h=338&auto=format&fit=crop"}
                        alt={party.title}
                        width={600}
                        height={338}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge
                          className={
                            party.status === "live"
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-purple-600 hover:bg-purple-700"
                          }
                        >
                          {party.status === "live" ? "LIVE" : party.startTime}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2 flex items-center bg-black/70 rounded-full px-2 py-1">
                        <Users className="h-3 w-3 mr-1" />
                        <span className="text-xs">{party.viewers}</span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">{party.title}</h3>
                      <p className="text-sm text-gray-400 mb-3">Hosted by {party.host}</p>
                      <Button className="w-full" size="sm">
                        {party.status === "live" ? "Join Now" : "Set Reminder"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === "scheduled" && (
          <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <h2 className="text-2xl md:text-3xl font-bold">Your Scheduled Parties</h2>
              <Button className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" /> Schedule New
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {scheduledParties.map((party) => (
                <div
                  key={party.id}
                  className="bg-gray-900/30 rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center"
                >
                  <Image
                    src={party.image || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=200&h=113&auto=format&fit=crop"}
                    alt={party.title}
                    width={200}
                    height={113}
                    className="rounded-md aspect-video object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{party.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> {party.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" /> {party.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" /> {party.invitees} invitees
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm">Manage</Button>
                    <Button size="sm" variant="outline">
                      Share
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "friends" && (
          <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <h2 className="text-2xl md:text-3xl font-bold">Friends' Watch Parties</h2>
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search friends" className="w-full border-gray-700 bg-gray-900/50 pl-9 sm:w-[220px]" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {friendsParties.map((party) => (
                <div
                  key={party.id}
                  className="bg-gray-900/30 rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={party.hostAvatar || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop"} alt={party.host} />
                    <AvatarFallback>{party.host.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{party.host}</h3>
                      <Badge
                        className={
                          party.status === "live" ? "bg-red-600 hover:bg-red-700" : "bg-purple-600 hover:bg-purple-700"
                        }
                      >
                        {party.status === "live" ? "LIVE NOW" : party.startTime}
                      </Badge>
                    </div>
                    <p className="text-gray-300">{party.title}</p>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                      <Users className="h-3 w-3" /> {party.viewers} viewers
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm">{party.status === "live" ? "Join Now" : "Get Notified"}</Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "watchlist" && (
          <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <h2 className="text-2xl md:text-3xl font-bold">Shared Watchlists</h2>
              <Button className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" /> Create New Watchlist
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sharedWatchlists.map((watchlist) => (
                <div key={watchlist.id} className="bg-gray-900/30 rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-800">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">{watchlist.name}</h3>
                      <Badge className="bg-gray-700">{watchlist.items} items</Badge>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Shared with {watchlist.sharedWith} people</p>
                  </div>

                  <div className="p-4">
                    <div className="flex gap-2 mb-4">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      {watchlist.sharedWith > 2 && (
                        <div className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                          +{watchlist.sharedWith - 2}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {watchlist.topItems.map((item, index) => (
                        <Image
                          key={index}
                          src={item || "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=80&h=120&auto=format&fit=crop"}
                          alt="Watchlist item"
                          width={80}
                          height={120}
                          className="rounded-md w-16 h-24 object-cover"
                        />
                      ))}
                      {watchlist.items > 4 && (
                        <div className="w-16 h-24 rounded-md bg-gray-800 flex items-center justify-center text-sm">
                          +{watchlist.items - 4}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1">
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Schedule
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "history" && (
          <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Watch History</h2>

            <div className="space-y-6">
              {watchHistory.map((item) => (
                <div key={item.id} className="bg-gray-900/30 rounded-lg p-4 flex flex-col sm:flex-row gap-4">
                  <Image
                    src={item.image || "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=160&h=90&auto=format&fit=crop"}
                    alt={item.title}
                    width={160}
                    height={90}
                    className="rounded-md aspect-video object-cover sm:w-40"
                  />

                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <h3 className="font-bold">{item.title}</h3>
                      <Badge className="bg-gray-700">{item.date}</Badge>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Watched with {item.watchedWith}</p>
                    <div className="flex gap-2 mt-3">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      {item.watchedWithCount > 2 && (
                        <div className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                          +{item.watchedWithCount - 2}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex sm:flex-col gap-2 sm:justify-center">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* How It Works */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">How Watch Together Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/30 rounded-lg p-6 text-center">
                <div className="bg-purple-600 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Schedule</h3>
                <p className="text-gray-300">
                  Pick a title, set a date and time, and invite friends to join your watch party.
                </p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 text-center">
                <div className="bg-purple-600 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Watch</h3>
                <p className="text-gray-300">Enjoy synchronized playback with perfect timing across all devices.</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 text-center">
                <div className="bg-purple-600 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Interact</h3>
                <p className="text-gray-300">Chat, react with emojis, and share your thoughts in real-time.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Start Your First Watch Party
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Sample data
const chatMessages = [
  {
    username: "MovieFan42",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop",
    text: "I can't believe that plot twist! Did anyone see that coming?",
    time: "2m ago",
  },
  {
    username: "FilmBuff",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop",
    text: "I had a feeling something was up when they showed that scene in the lab",
    time: "1m ago",
  },
  {
    username: "CinemaLover",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&h=100&auto=format&fit=crop",
    text: "The cinematography in this episode is absolutely stunning",
    time: "1m ago",
  },
  {
    username: "SciFiGuy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    text: "This reminds me of that scene from Blade Runner",
    time: "Just now",
  },
  {
    username: "DirectorFan",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
    text: "Sophia Chen's direction is incredible here",
    time: "Just now",
  },
]

const trendingWatchParties = [
  {
    id: 1,
    title: "The Silent Revolution - Season Finale",
    host: "Movie Buffs Club",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&h=338&auto=format&fit=crop",
    status: "live",
    viewers: 142,
    startTime: "",
  },
  {
    id: 2,
    title: "Beyond the Horizon - Episode 5 Rewatch",
    host: "Sci-Fi Lovers",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&h=338&auto=format&fit=crop",
    status: "live",
    viewers: 87,
    startTime: "",
  },
  {
    id: 3,
    title: "Quantum Dreams - First Watch",
    host: "Mind Benders Group",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&h=338&auto=format&fit=crop",
    status: "scheduled",
    viewers: 56,
    startTime: "Tomorrow, 8PM",
  },
  {
    id: 4,
    title: "The Last Light - Director's Commentary",
    host: "Film Analysis Club",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&h=338&auto=format&fit=crop",
    status: "scheduled",
    viewers: 34,
    startTime: "Sat, 7PM",
  },
  {
    id: 5,
    title: "Neon Dreams - Premiere Party",
    host: "Cyberpunk Fans",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=600&h=338&auto=format&fit=crop",
    status: "scheduled",
    viewers: 112,
    startTime: "Aug 10, 9PM",
  },
  {
    id: 6,
    title: "Echoes of Tomorrow - Marathon",
    host: "Binge Watchers",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&h=338&auto=format&fit=crop",
    status: "scheduled",
    viewers: 78,
    startTime: "Sun, 2PM",
  },
]

const scheduledParties = [
  {
    id: 1,
    title: "Quantum Dreams - First Watch Party",
    date: "Tomorrow",
    time: "8:00 PM",
    invitees: 12,
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=200&h=113&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "90s Nostalgia Night - Pulp Fiction",
    date: "Saturday, May 10",
    time: "7:30 PM",
    invitees: 8,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=200&h=113&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Horror Movie Night - The Silent Echo",
    date: "Friday, May 16",
    time: "10:00 PM",
    invitees: 5,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=200&h=113&auto=format&fit=crop",
  },
]

const friendsParties = [
  {
    id: 1,
    host: "Alex Johnson",
    hostAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop",
    title: "Watching: The Silent Revolution - Season Finale",
    status: "live",
    viewers: 8,
    startTime: "",
  },
  {
    id: 2,
    host: "Samantha Lee",
    hostAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    title: "Watching: Beyond the Horizon - Episode 3",
    status: "live",
    viewers: 4,
    startTime: "",
  },
  {
    id: 3,
    host: "Michael Rodriguez",
    hostAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
    title: "Scheduled: Quantum Dreams - First Watch",
    status: "scheduled",
    viewers: 12,
    startTime: "Tomorrow, 8PM",
  },
  {
    id: 4,
    host: "Emma Wilson",
    hostAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop",
    title: "Scheduled: 90s Movie Night",
    status: "scheduled",
    viewers: 6,
    startTime: "Saturday, 7PM",
  },
]

const sharedWatchlists = [
  {
    id: 1,
    name: "Must-Watch Sci-Fi",
    items: 12,
    sharedWith: 5,
    topItems: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=80&h=120&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Movie Night Picks",
    items: 8,
    sharedWith: 3,
    topItems: [
      "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=80&h=120&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Award Winners",
    items: 15,
    sharedWith: 7,
    topItems: [
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=80&h=120&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Weekend Binges",
    items: 6,
    sharedWith: 2,
    topItems: [
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=80&h=120&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=80&h=120&auto=format&fit=crop",
    ],
  },
]

const watchHistory = [
  {
    id: 1,
    title: "The Silent Revolution - Season Finale",
    date: "Yesterday",
    watchedWith: "Movie Buffs Club",
    watchedWithCount: 8,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=160&h=90&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Beyond the Horizon - Episode 5",
    date: "Last week",
    watchedWith: "Alex and 3 others",
    watchedWithCount: 4,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=160&h=90&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Quantum Dreams - Pilot",
    date: "2 weeks ago",
    watchedWith: "Sci-Fi Lovers",
    watchedWithCount: 12,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=160&h=90&auto=format&fit=crop",
  },
]
