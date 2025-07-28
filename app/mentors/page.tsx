"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  Star,
  MessageCircle,
  Calendar,
  Award,
  Users,
  Clock,
  Heart,
  Zap,
  Globe,
  CheckCircle,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

const specialties = [
  { name: "All", count: 89, active: true },
  { name: "Digital Art", count: 15, active: false },
  { name: "Music", count: 12, active: false },
  { name: "Coding", count: 18, active: false },
  { name: "Photography", count: 8, active: false },
  { name: "Fitness", count: 11, active: false },
  { name: "Writing", count: 7, active: false },
]

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Digital Art Specialist",
    avatar: "SC",
    specialty: "Digital Art",
    experience: "8 years",
    rating: 4.9,
    reviews: 127,
    students: 450,
    hourlyRate: 45,
    languages: ["English", "Mandarin"],
    timezone: "PST",
    responseTime: "< 2 hours",
    isOnline: true,
    verified: true,
    color: "from-pink-500 to-purple-600",
    skills: ["Digital Painting", "Character Design", "Color Theory", "Adobe Creative Suite"],
    bio: "Professional digital artist with 8+ years of experience in game and film industry. Specialized in character design and concept art.",
    achievements: ["Adobe Certified Expert", "500+ Students Mentored", "Industry Professional"],
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Guitar & Music Theory",
    avatar: "MR",
    specialty: "Music",
    experience: "12 years",
    rating: 4.8,
    reviews: 203,
    students: 680,
    hourlyRate: 55,
    languages: ["English", "Spanish"],
    timezone: "EST",
    responseTime: "< 1 hour",
    isOnline: true,
    verified: true,
    color: "from-blue-500 to-indigo-600",
    skills: ["Classical Guitar", "Jazz", "Music Theory", "Songwriting"],
    bio: "Berklee graduate and professional musician. Performed with major orchestras and taught at music conservatories.",
    achievements: ["Berklee Graduate", "Professional Performer", "1000+ Students"],
  },
  {
    id: 3,
    name: "Emma Thompson",
    title: "Full-Stack Developer",
    avatar: "ET",
    specialty: "Coding",
    experience: "10 years",
    rating: 4.9,
    reviews: 156,
    students: 320,
    hourlyRate: 75,
    languages: ["English"],
    timezone: "GMT",
    responseTime: "< 3 hours",
    isOnline: false,
    verified: true,
    color: "from-emerald-500 to-teal-600",
    skills: ["React", "Node.js", "Python", "System Design"],
    bio: "Senior software engineer at tech unicorn. Passionate about teaching modern web development and best practices.",
    achievements: ["FAANG Experience", "Open Source Contributor", "Tech Lead"],
  },
  {
    id: 4,
    name: "David Kim",
    title: "Photography & Visual Arts",
    avatar: "DK",
    specialty: "Photography",
    experience: "15 years",
    rating: 4.7,
    reviews: 89,
    students: 240,
    hourlyRate: 60,
    languages: ["English", "Korean"],
    timezone: "PST",
    responseTime: "< 4 hours",
    isOnline: true,
    verified: true,
    color: "from-orange-500 to-red-600",
    skills: ["Portrait Photography", "Landscape", "Photo Editing", "Studio Lighting"],
    bio: "Award-winning photographer featured in National Geographic. Specializes in portrait and landscape photography.",
    achievements: ["National Geographic", "Award Winner", "Gallery Exhibitions"],
  },
  {
    id: 5,
    name: "Lisa Anderson",
    title: "Fitness & Wellness Coach",
    avatar: "LA",
    specialty: "Fitness",
    experience: "6 years",
    rating: 4.8,
    reviews: 94,
    students: 380,
    hourlyRate: 40,
    languages: ["English"],
    timezone: "CST",
    responseTime: "< 2 hours",
    isOnline: true,
    verified: true,
    color: "from-green-500 to-emerald-600",
    skills: ["Strength Training", "Yoga", "Nutrition", "Mental Wellness"],
    bio: "Certified personal trainer and wellness coach. Helps people build sustainable fitness habits and improve overall health.",
    achievements: ["NASM Certified", "Yoga Alliance RYT", "Nutrition Specialist"],
  },
  {
    id: 6,
    name: "James Wilson",
    title: "Creative Writing Mentor",
    avatar: "JW",
    specialty: "Writing",
    experience: "20 years",
    rating: 4.9,
    reviews: 67,
    students: 180,
    hourlyRate: 50,
    languages: ["English"],
    timezone: "EST",
    responseTime: "< 6 hours",
    isOnline: false,
    verified: true,
    color: "from-violet-500 to-purple-600",
    skills: ["Fiction Writing", "Poetry", "Publishing", "Creative Process"],
    bio: "Published author of 5 novels and poetry collections. MFA graduate and former university creative writing professor.",
    achievements: ["Published Author", "MFA Graduate", "University Professor"],
  },
]

export default function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All")

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
              Meet Your Mentors 🌟
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with expert mentors who will guide you on your hobby journey. Get personalized feedback,
              structured learning paths, and one-on-one support.
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
                placeholder="Search mentors..."
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
        {/* Specialties */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="flex flex-wrap justify-center gap-4">
            {specialties.map((specialty, index) => (
              <Button
                key={specialty.name}
                variant={selectedSpecialty === specialty.name ? "default" : "outline"}
                className={`px-6 py-3 rounded-2xl border-2 transform hover:scale-105 transition-all duration-300 animate-fade-in-up ${
                  selectedSpecialty === specialty.name
                    ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                    : "border-violet-200 hover:border-violet-400 hover:bg-violet-50 bg-transparent"
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
                onClick={() => setSelectedSpecialty(specialty.name)}
              >
                {specialty.name}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${
                    selectedSpecialty === specialty.name ? "bg-white/20 text-white" : "bg-violet-100 text-violet-700"
                  }`}
                >
                  {specialty.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <Card
              key={mentor.id}
              className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fade-in-up group cursor-pointer bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <Avatar className="w-16 h-16 ring-4 ring-white shadow-xl">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className={`bg-gradient-to-br ${mentor.color} text-white font-bold text-lg`}>
                        {mentor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    {mentor.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full border-2 border-white animate-pulse"></div>
                    )}
                    {mentor.verified && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {mentor.name}
                    </h3>
                    <p className="text-gray-600 font-medium">{mentor.title}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-bold text-gray-700">{mentor.rating}</span>
                        <span className="text-sm text-gray-500">({mentor.reviews})</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${mentor.isOnline ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}
                      >
                        {mentor.isOnline ? "Online" : "Offline"}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 rounded-xl hover:bg-pink-50 transform hover:scale-110 transition-all duration-300"
                  >
                    <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500" />
                  </Button>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{mentor.bio}</p>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-violet-500" />
                    <span className="text-gray-600">{mentor.experience} exp</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600">{mentor.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-600">{mentor.responseTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600">{mentor.timezone}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Specializes in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-violet-100 text-violet-700 text-xs animate-fade-in-up"
                        style={{ animationDelay: `${1000 + index * 100 + skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Achievements:</h4>
                  <div className="space-y-2">
                    {mentor.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-center space-x-2 text-xs text-gray-600 animate-fade-in-up"
                        style={{ animationDelay: `${1200 + index * 100 + achievementIndex * 50}ms` }}
                      >
                        <Zap className="w-3 h-3 text-yellow-500" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                      ${mentor.hourlyRate}
                    </span>
                    <span className="text-sm text-gray-500">/hour</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Languages:</p>
                    <p className="text-sm font-medium text-gray-700">{mentor.languages.join(", ")}</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Message
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 rounded-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "1400ms" }}>
          <Button
            variant="outline"
            size="lg"
            className="px-12 py-6 rounded-2xl border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
          >
            Load More Mentors
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
