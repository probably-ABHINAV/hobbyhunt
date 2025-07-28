"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  Share2,
  Video,
  Star,
  Zap,
  Music,
  Palette,
  Code,
  Camera,
  Dumbbell,
  BookOpen,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

const eventTypes = [
  { name: "All", count: 24, active: true },
  { name: "Workshops", count: 8, active: false },
  { name: "Challenges", count: 6, active: false },
  { name: "Meetups", count: 5, active: false },
  { name: "Competitions", count: 3, active: false },
  { name: "Webinars", count: 2, active: false },
]

const events = [
  {
    id: 1,
    title: "Digital Art Challenge: Character Design",
    description:
      "Create an original character design in 7 days. Get feedback from professional artists and win amazing prizes!",
    type: "Challenge",
    category: "Digital Art",
    icon: Palette,
    color: "from-pink-500 to-purple-600",
    bg: "bg-pink-50",
    date: "Dec 15, 2024",
    time: "All Day",
    duration: "7 days",
    location: "Online",
    participants: 156,
    maxParticipants: 200,
    price: "Free",
    difficulty: "All Levels",
    host: {
      name: "Sarah Chen",
      avatar: "SC",
      title: "Digital Art Mentor",
    },
    tags: ["Character Design", "Digital Art", "Competition", "Prizes"],
    featured: true,
    isLive: false,
  },
  {
    id: 2,
    title: "Guitar Jam Session: Acoustic Night",
    description:
      "Join fellow guitar enthusiasts for an evening of acoustic music. Share your favorite songs and learn from others!",
    type: "Meetup",
    category: "Music",
    icon: Music,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    date: "Dec 18, 2024",
    time: "7:00 PM PST",
    duration: "2 hours",
    location: "Virtual Room",
    participants: 23,
    maxParticipants: 30,
    price: "Free",
    difficulty: "Intermediate",
    host: {
      name: "Marcus Rodriguez",
      avatar: "MR",
      title: "Guitar Instructor",
    },
    tags: ["Acoustic Guitar", "Jam Session", "Community", "Live Music"],
    featured: false,
    isLive: false,
  },
  {
    id: 3,
    title: "React Masterclass: Building Modern UIs",
    description:
      "Learn advanced React patterns and build a complete application from scratch. Perfect for intermediate developers.",
    type: "Workshop",
    category: "Coding",
    icon: Code,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    date: "Dec 20, 2024",
    time: "2:00 PM EST",
    duration: "4 hours",
    location: "Online",
    participants: 45,
    maxParticipants: 50,
    price: "$29",
    difficulty: "Intermediate",
    host: {
      name: "Emma Thompson",
      avatar: "ET",
      title: "Senior Developer",
    },
    tags: ["React", "JavaScript", "Frontend", "Hands-on"],
    featured: true,
    isLive: false,
  },
  {
    id: 4,
    title: "Photography Walk: Golden Hour Magic",
    description:
      "Explore the city during golden hour and learn professional photography techniques. Bring your camera and creativity!",
    type: "Meetup",
    category: "Photography",
    icon: Camera,
    color: "from-orange-500 to-red-600",
    bg: "bg-orange-50",
    date: "Dec 22, 2024",
    time: "5:30 PM PST",
    duration: "3 hours",
    location: "Central Park, NYC",
    participants: 12,
    maxParticipants: 15,
    price: "Free",
    difficulty: "All Levels",
    host: {
      name: "David Kim",
      avatar: "DK",
      title: "Professional Photographer",
    },
    tags: ["Golden Hour", "Street Photography", "Outdoor", "NYC"],
    featured: false,
    isLive: false,
  },
  {
    id: 5,
    title: "30-Day Fitness Challenge Kickoff",
    description:
      "Start your fitness journey with our comprehensive 30-day challenge. Daily workouts, nutrition tips, and community support!",
    type: "Challenge",
    category: "Fitness",
    icon: Dumbbell,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    date: "Jan 1, 2025",
    time: "9:00 AM PST",
    duration: "30 days",
    location: "Online + Local Gyms",
    participants: 89,
    maxParticipants: 100,
    price: "$19",
    difficulty: "All Levels",
    host: {
      name: "Lisa Anderson",
      avatar: "LA",
      title: "Fitness Coach",
    },
    tags: ["30-Day Challenge", "Fitness", "Nutrition", "Community"],
    featured: true,
    isLive: false,
  },
  {
    id: 6,
    title: "Creative Writing Workshop: Short Stories",
    description:
      "Develop your storytelling skills in this interactive workshop. Write, share, and get feedback on your short stories.",
    type: "Workshop",
    category: "Writing",
    icon: BookOpen,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    date: "Dec 25, 2024",
    time: "1:00 PM EST",
    duration: "3 hours",
    location: "Online",
    participants: 18,
    maxParticipants: 25,
    price: "$15",
    difficulty: "Beginner",
    host: {
      name: "James Wilson",
      avatar: "JW",
      title: "Published Author",
    },
    tags: ["Short Stories", "Creative Writing", "Feedback", "Publishing"],
    featured: false,
    isLive: false,
  },
]

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All")

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <Navigation />
      <section className="relative bg-white/80 backdrop-blur-xl border-b border-violet-100 shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hobby Events 🎉
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join workshops, challenges, and meetups with fellow hobby enthusiasts. Learn new skills, make friends, and
              showcase your talents in our vibrant community events.
            </p>
          </div>

          {/* Search and Filters */}
          <div
            className="flex flex-col md:flex-row gap-6 items-center justify-center animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search events..."
                className="pl-12 w-80 h-12 rounded-2xl border-2 border-violet-200 focus:border-violet-400 bg-white/80 backdrop-blur-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              className="h-12 px-6 rounded-2xl border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      <div className="relative container mx-auto px-4 py-8">
        {/* Event Types */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((type, index) => (
              <Button
                key={type.name}
                variant={selectedType === type.name ? "default" : "outline"}
                className={`px-6 py-3 rounded-2xl border-2 transform hover:scale-105 transition-all duration-300 animate-fade-in-up ${
                  selectedType === type.name
                    ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                    : "border-violet-200 hover:border-violet-400 hover:bg-violet-50 bg-transparent"
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
                onClick={() => setSelectedType(type.name)}
              >
                {type.name}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${
                    selectedType === type.name ? "bg-white/20 text-white" : "bg-violet-100 text-violet-700"
                  }`}
                >
                  {type.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Featured Events ⭐
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events
              .filter((event) => event.featured)
              .map((event, index) => (
                <Card
                  key={event.id}
                  className={`${event.bg} border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fade-in-up group cursor-pointer ring-2 ring-orange-200`}
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                      >
                        <event.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 animate-pulse">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-10 h-10 rounded-xl hover:bg-white/50 transform hover:scale-110 transition-all duration-300"
                        >
                          <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 mb-2">
                      {event.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-violet-500" />
                          <span className="text-gray-600">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-600">{event.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-emerald-500" />
                          <span className="text-gray-600">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-orange-500" />
                          <span className="text-gray-600">
                            {event.participants}/{event.maxParticipants}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-6">
                      <Avatar className="w-10 h-10 ring-2 ring-white shadow-lg">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className={`bg-gradient-to-br ${event.color} text-white font-bold`}>
                          {event.host.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-800">{event.host.name}</p>
                        <p className="text-sm text-gray-600">{event.host.title}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                          {event.price}
                        </span>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${
                          event.difficulty === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : event.difficulty === "Intermediate"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {event.difficulty}
                      </Badge>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                      size="sm"
                    >
                      <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Join Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Events */}
        <div className="animate-fade-in-up" style={{ animationDelay: "1200ms" }}>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            All Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card
                key={event.id}
                className={`${event.bg} border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fade-in-up group cursor-pointer`}
                style={{ animationDelay: `${1400 + index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <event.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-white/80 text-gray-700 font-bold px-3 py-1">
                        {event.type}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-10 h-10 rounded-xl hover:bg-white/50 transform hover:scale-110 transition-all duration-300"
                      >
                        <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-500" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 mb-2">
                    {event.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-violet-500" />
                        <span className="text-gray-600">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600">{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-emerald-500" />
                        <span className="text-gray-600">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-600">
                          {event.participants}/{event.maxParticipants}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="w-10 h-10 ring-2 ring-white shadow-lg">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className={`bg-gradient-to-br ${event.color} text-white font-bold`}>
                        {event.host.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800">{event.host.name}</p>
                      <p className="text-sm text-gray-600">{event.host.title}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-violet-100 text-violet-700 text-xs animate-fade-in-up"
                        style={{ animationDelay: `${1600 + index * 100 + tagIndex * 50}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        {event.price}
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${
                        event.difficulty === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : event.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {event.difficulty}
                    </Badge>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                      size="sm"
                    >
                      <Calendar className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Join
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 rounded-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                    >
                      <Video className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "2000ms" }}>
          <Button
            variant="outline"
            size="lg"
            className="px-12 py-6 rounded-2xl border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
          >
            Load More Events
          </Button>
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
