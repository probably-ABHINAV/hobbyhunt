"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Play,
  Pause,
  Heart,
  Search,
  Volume2,
  Shuffle,
  Repeat,
  SkipBack,
  SkipForward,
  Waves,
  TreePine,
  Sun,
  Moon,
  Zap,
  Brain,
  Headphones,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

const categories = [
  { name: "Nature", icon: TreePine, color: "from-emerald-400 to-green-600", bg: "bg-emerald-50", count: 24 },
  { name: "Meditation", icon: Brain, color: "from-purple-400 to-violet-600", bg: "bg-purple-50", count: 18 },
  { name: "Focus", icon: Zap, color: "from-blue-400 to-cyan-600", bg: "bg-blue-50", count: 15 },
  { name: "Sleep", icon: Moon, color: "from-indigo-400 to-purple-600", bg: "bg-indigo-50", count: 12 },
  { name: "Energy", icon: Sun, color: "from-orange-400 to-red-600", bg: "bg-orange-50", count: 20 },
  { name: "Ocean", icon: Waves, color: "from-cyan-400 to-teal-600", bg: "bg-cyan-50", count: 16 },
]

const tracks = [
  {
    id: 1,
    title: "Forest Rain",
    category: "Nature",
    duration: "45:00",
    plays: "12.5K",
    mood: "Calm",
    isPlaying: false,
    isFavorite: true,
    color: "from-emerald-400 to-green-600",
  },
  {
    id: 2,
    title: "Ocean Waves",
    category: "Nature",
    duration: "60:00",
    plays: "8.2K",
    mood: "Relaxing",
    isPlaying: true,
    isFavorite: false,
    color: "from-cyan-400 to-teal-600",
  },
  {
    id: 3,
    title: "Morning Meditation",
    category: "Meditation",
    duration: "15:00",
    plays: "15.1K",
    mood: "Peaceful",
    isPlaying: false,
    isFavorite: true,
    color: "from-purple-400 to-violet-600",
  },
  {
    id: 4,
    title: "Lo-Fi Study Beats",
    category: "Focus",
    duration: "120:00",
    plays: "25.3K",
    mood: "Focused",
    isPlaying: false,
    isFavorite: false,
    color: "from-blue-400 to-cyan-600",
  },
  {
    id: 5,
    title: "Deep Sleep Stories",
    category: "Sleep",
    duration: "30:00",
    plays: "9.7K",
    mood: "Sleepy",
    isPlaying: false,
    isFavorite: true,
    color: "from-indigo-400 to-purple-600",
  },
  {
    id: 6,
    title: "Motivational Boost",
    category: "Energy",
    duration: "10:00",
    plays: "18.9K",
    mood: "Energized",
    isPlaying: false,
    isFavorite: false,
    color: "from-orange-400 to-red-600",
  },
]

const moods = [
  { emoji: "😰", text: "Anxious", color: "hover:bg-red-50 hover:border-red-200" },
  { emoji: "😴", text: "Tired", color: "hover:bg-indigo-50 hover:border-indigo-200" },
  { emoji: "😤", text: "Stressed", color: "hover:bg-orange-50 hover:border-orange-200" },
  { emoji: "🤔", text: "Unfocused", color: "hover:bg-blue-50 hover:border-blue-200" },
  { emoji: "😢", text: "Sad", color: "hover:bg-purple-50 hover:border-purple-200" },
  { emoji: "😊", text: "Happy", color: "hover:bg-yellow-50 hover:border-yellow-200" },
]

export default function SoundSpacePage() {
  const [currentTrack, setCurrentTrack] = useState(tracks.find((t) => t.isPlaying) || tracks[0])
  const [isPlaying, setIsPlaying] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const selectTrack = (track: (typeof tracks)[0]) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <Navigation />
      <section className="relative bg-white/80 backdrop-blur-xl border-b border-indigo-100 shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl animate-bounce-gentle">
                  <Headphones className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  SoundSpace ✨
                </h1>
              </div>
              <p className="text-xl text-gray-600 ml-16">Your personal audio therapy room</p>
            </div>
            <div className="flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search tracks..."
                  className="pl-12 w-80 h-12 rounded-2xl border-2 border-indigo-200 focus:border-indigo-400 bg-white/80 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="h-12 px-6 rounded-2xl border-2 border-pink-200 hover:border-pink-400 hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Heart className="w-5 h-5 mr-2" />
                Favorites
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {categories.map((category, index) => (
                  <div
                    key={category.name}
                    className={`flex items-center justify-between p-4 rounded-2xl ${category.bg} border-2 border-transparent hover:border-opacity-50 cursor-pointer transform hover:scale-105 transition-all duration-300 group animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-800">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="bg-white/80 text-gray-700 font-bold px-3 py-1">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Mood Quick Access */}
            <Card
              className="mt-8 border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  How are you feeling?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {moods.map((mood, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className={`justify-start border-2 border-gray-200 ${mood.color} transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                      style={{ animationDelay: `${800 + index * 100}ms` }}
                    >
                      <span className="text-lg mr-2">{mood.emoji}</span>
                      {mood.text}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Now Playing */}
            <Card
              className="mb-8 border-0 shadow-3xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white overflow-hidden animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/50 via-purple-600/50 to-pink-600/50 animate-pulse"></div>
              <CardContent className="relative p-10">
                <div className="flex items-center space-x-8">
                  <div className="w-32 h-32 bg-white/20 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce-gentle">
                    <Waves className="w-16 h-16 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-3">{currentTrack.title}</h2>
                    <p className="text-white/90 text-lg mb-6">
                      {currentTrack.category} • {currentTrack.duration} • {currentTrack.plays} plays
                    </p>
                    <div className="flex items-center space-x-6">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-14 h-14 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                      >
                        <SkipBack className="w-6 h-6" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        onClick={togglePlay}
                        className="w-20 h-20 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
                      >
                        {isPlaying ? (
                          <Pause className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <Play className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                        )}
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-14 h-14 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                      >
                        <SkipForward className="w-6 h-6" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-14 h-14 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                      >
                        <Shuffle className="w-6 h-6" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-14 h-14 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                      >
                        <Repeat className="w-6 h-6" />
                      </Button>
                      <div className="flex items-center space-x-4 ml-auto">
                        <Volume2 className="w-6 h-6" />
                        <div className="w-32 h-2 bg-white/30 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-white rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Track List */}
            <Card
              className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  All Tracks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tracks.map((track, index) => (
                    <div
                      key={track.id}
                      className={`flex items-center space-x-6 p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg animate-fade-in-up ${
                        currentTrack.id === track.id
                          ? "border-indigo-400 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-lg scale-105"
                          : "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50"
                      }`}
                      style={{ animationDelay: `${800 + index * 100}ms` }}
                      onClick={() => selectTrack(track)}
                    >
                      <Button
                        variant="ghost"
                        size="lg"
                        className="w-16 h-16 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (currentTrack.id === track.id) {
                            togglePlay()
                          } else {
                            selectTrack(track)
                          }
                        }}
                      >
                        {currentTrack.id === track.id && isPlaying ? (
                          <Pause className="w-6 h-6" />
                        ) : (
                          <Play className="w-6 h-6" />
                        )}
                      </Button>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{track.title}</h3>
                        <div className="flex items-center space-x-6 text-gray-600">
                          <span className="font-medium">{track.category}</span>
                          <span>•</span>
                          <span>{track.duration}</span>
                          <span>•</span>
                          <span>{track.plays} plays</span>
                        </div>
                      </div>

                      <Badge
                        variant="secondary"
                        className={`px-4 py-2 font-bold text-white bg-gradient-to-r ${track.color} shadow-lg`}
                      >
                        {track.mood}
                      </Badge>

                      <Button
                        variant="ghost"
                        size="lg"
                        className="w-12 h-12 rounded-2xl hover:bg-pink-50 transform hover:scale-110 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          // Toggle favorite logic here
                        }}
                      >
                        <Heart
                          className={`w-6 h-6 ${track.isFavorite ? "fill-pink-500 text-pink-500" : "text-gray-400"}`}
                        />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
