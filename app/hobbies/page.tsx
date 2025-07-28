"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  Heart,
  Play,
  Music,
  Palette,
  Code,
  Camera,
  Dumbbell,
  BookOpen,
  Gamepad2,
  Utensils,
  Zap,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

const categories = [
  { name: "All", count: 156, active: true },
  { name: "Creative", count: 45, active: false },
  { name: "Physical", count: 32, active: false },
  { name: "Mental", count: 28, active: false },
  { name: "Social", count: 24, active: false },
  { name: "Technical", count: 27, active: false },
]

const hobbies = [
  {
    id: 1,
    name: "Digital Art",
    description: "Create stunning digital artwork using modern tools and techniques",
    icon: Palette,
    color: "from-pink-500 via-purple-500 to-violet-600",
    bg: "bg-pink-50",
    category: "Creative",
    difficulty: "Beginner",
    timeCommitment: "30-60 min/day",
    popularity: 4.8,
    students: "12.5K",
    trending: true,
    features: ["Digital painting", "Illustration", "Character design", "Color theory"],
  },
  {
    id: 2,
    name: "Guitar Playing",
    description: "Learn to play acoustic and electric guitar with structured lessons",
    icon: Music,
    color: "from-blue-500 via-indigo-500 to-purple-600",
    bg: "bg-blue-50",
    category: "Creative",
    difficulty: "Beginner",
    timeCommitment: "45-90 min/day",
    popularity: 4.9,
    students: "18.2K",
    trending: true,
    features: ["Chord progressions", "Fingerpicking", "Music theory", "Song covers"],
  },
  {
    id: 3,
    name: "Photography",
    description: "Capture the world through your lens with professional techniques",
    icon: Camera,
    color: "from-emerald-500 via-teal-500 to-cyan-600",
    bg: "bg-emerald-50",
    category: "Creative",
    difficulty: "Intermediate",
    timeCommitment: "60-120 min/day",
    popularity: 4.7,
    students: "9.8K",
    trending: false,
    features: ["Composition", "Lighting", "Post-processing", "Portrait photography"],
  },
  {
    id: 4,
    name: "Web Development",
    description: "Build modern websites and web applications from scratch",
    icon: Code,
    color: "from-orange-500 via-red-500 to-pink-600",
    bg: "bg-orange-50",
    category: "Technical",
    difficulty: "Intermediate",
    timeCommitment: "90-180 min/day",
    popularity: 4.6,
    students: "15.3K",
    trending: true,
    features: ["HTML/CSS", "JavaScript", "React", "Backend development"],
  },
  {
    id: 5,
    name: "Fitness Training",
    description: "Build strength, endurance, and overall health with structured workouts",
    icon: Dumbbell,
    color: "from-green-500 via-emerald-500 to-teal-600",
    bg: "bg-green-50",
    category: "Physical",
    difficulty: "Beginner",
    timeCommitment: "45-75 min/day",
    popularity: 4.5,
    students: "22.1K",
    trending: false,
    features: ["Strength training", "Cardio", "Flexibility", "Nutrition guidance"],
  },
  {
    id: 6,
    name: "Creative Writing",
    description: "Express yourself through stories, poetry, and creative narratives",
    icon: BookOpen,
    color: "from-violet-500 via-purple-500 to-pink-600",
    bg: "bg-violet-50",
    category: "Creative",
    difficulty: "Beginner",
    timeCommitment: "30-60 min/day",
    popularity: 4.4,
    students: "8.7K",
    trending: false,
    features: ["Storytelling", "Character development", "Poetry", "Publishing"],
  },
  {
    id: 7,
    name: "Game Development",
    description: "Create your own video games using modern game engines",
    icon: Gamepad2,
    color: "from-cyan-500 via-blue-500 to-indigo-600",
    bg: "bg-cyan-50",
    category: "Technical",
    difficulty: "Advanced",
    timeCommitment: "120-240 min/day",
    popularity: 4.3,
    students: "6.2K",
    trending: true,
    features: ["Unity/Unreal", "Game design", "Programming", "3D modeling"],
  },
  {
    id: 8,
    name: "Cooking",
    description: "Master culinary arts from basic techniques to gourmet dishes",
    icon: Utensils,
    color: "from-yellow-500 via-orange-500 to-red-600",
    bg: "bg-yellow-50",
    category: "Social",
    difficulty: "Beginner",
    timeCommitment: "60-90 min/day",
    popularity: 4.6,
    students: "14.9K",
    trending: false,
    features: ["Basic techniques", "International cuisine", "Baking", "Meal planning"],
  },
]

export default function HobbiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

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
              Explore Hobbies ✨
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your next passion from our curated collection of hobbies. Each one comes with structured learning
              paths, expert mentors, and a supportive community.
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
                placeholder="Search hobbies..."
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
        {/* Categories */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className={`px-6 py-3 rounded-2xl border-2 transform hover:scale-105 transition-all duration-300 animate-fade-in-up ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                    : "border-violet-200 hover:border-violet-400 hover:bg-violet-50 bg-transparent"
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${
                    selectedCategory === category.name ? "bg-white/20 text-white" : "bg-violet-100 text-violet-700"
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <Card
              key={hobby.id}
              className={`${hobby.bg} border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fade-in-up group cursor-pointer`}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${hobby.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    <hobby.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {hobby.trending && (
                      <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 animate-pulse">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 rounded-xl hover:bg-white/50 transform hover:scale-110 transition-all duration-300"
                    >
                      <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {hobby.name}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">{hobby.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Difficulty:</span>
                    <Badge
                      variant="secondary"
                      className={`${
                        hobby.difficulty === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : hobby.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {hobby.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Time:</span>
                    <span className="font-medium text-gray-700">{hobby.timeCommitment}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Students:</span>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-700">{hobby.students}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium text-gray-700">{hobby.popularity}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">What you'll learn:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {hobby.features.slice(0, 4).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-xs text-gray-600 animate-fade-in-up"
                        style={{ animationDelay: `${1000 + index * 100 + featureIndex * 50}ms` }}
                      >
                        <Zap className="w-3 h-3 text-violet-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                    size="sm"
                  >
                    <Play className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Start Learning
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 rounded-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "1200ms" }}>
          <Button
            variant="outline"
            size="lg"
            className="px-12 py-6 rounded-2xl border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
          >
            Load More Hobbies
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
