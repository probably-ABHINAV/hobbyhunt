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
  Eye,
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  Star,
  MessageCircle,
  Zap,
  Lightbulb,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

const categories = [
  { name: "All", count: 48, active: true },
  { name: "Tips & Tricks", count: 12, active: false },
  { name: "Success Stories", count: 8, active: false },
  { name: "Tutorials", count: 15, active: false },
  { name: "Community", count: 7, active: false },
  { name: "Inspiration", count: 6, active: false },
]

const blogPosts = [
  {
    id: 1,
    title: "10 Digital Art Techniques Every Beginner Should Master",
    excerpt:
      "Discover the fundamental techniques that will transform your digital art journey. From basic brush control to advanced color theory, these skills will set you up for success.",
    content:
      "Digital art can seem overwhelming at first, but mastering these 10 fundamental techniques will give you a solid foundation...",
    category: "Tips & Tricks",
    author: {
      name: "Sarah Chen",
      avatar: "SC",
      title: "Digital Art Mentor",
    },
    publishDate: "Dec 10, 2024",
    readTime: "8 min read",
    views: "2.4K",
    likes: 156,
    comments: 23,
    featured: true,
    trending: true,
    color: "from-pink-500 to-purple-600",
    bg: "bg-pink-50",
    tags: ["Digital Art", "Beginner", "Techniques", "Tutorial"],
  },
  {
    id: 2,
    title: "From Zero to Guitar Hero: My 6-Month Journey",
    excerpt:
      "How I went from never touching a guitar to playing my favorite songs in just 6 months. The challenges, breakthroughs, and lessons learned along the way.",
    content:
      "Six months ago, I couldn't even hold a guitar properly. Today, I'm playing songs I never thought possible...",
    category: "Success Stories",
    author: {
      name: "Alex Johnson",
      avatar: "AJ",
      title: "Community Member",
    },
    publishDate: "Dec 8, 2024",
    readTime: "6 min read",
    views: "1.8K",
    likes: 89,
    comments: 34,
    featured: false,
    trending: true,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    tags: ["Guitar", "Success Story", "Journey", "Motivation"],
  },
  {
    id: 3,
    title: "Building Your First React App: A Complete Guide",
    excerpt:
      "Step-by-step tutorial for creating a modern React application. Perfect for developers transitioning from other frameworks or starting fresh.",
    content:
      "React has become the go-to library for building user interfaces. In this comprehensive guide, we'll build a complete app...",
    category: "Tutorials",
    author: {
      name: "Emma Thompson",
      avatar: "ET",
      title: "Senior Developer",
    },
    publishDate: "Dec 5, 2024",
    readTime: "12 min read",
    views: "3.2K",
    likes: 234,
    comments: 45,
    featured: true,
    trending: false,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    tags: ["React", "JavaScript", "Tutorial", "Web Development"],
  },
  {
    id: 4,
    title: "The Psychology of Habit Formation in Hobbies",
    excerpt:
      "Understanding the science behind building lasting hobby habits. Learn how to make your new interests stick and become part of your identity.",
    content:
      "Why do some people stick with their hobbies while others give up after a few weeks? The answer lies in psychology...",
    category: "Tips & Tricks",
    author: {
      name: "Dr. Michael Roberts",
      avatar: "MR",
      title: "Behavioral Psychologist",
    },
    publishDate: "Dec 3, 2024",
    readTime: "10 min read",
    views: "1.9K",
    likes: 167,
    comments: 28,
    featured: false,
    trending: true,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    tags: ["Psychology", "Habits", "Motivation", "Science"],
  },
  {
    id: 5,
    title: "Photography Composition: Rule of Thirds and Beyond",
    excerpt:
      "Master the fundamental composition techniques that will instantly improve your photography. From basic rules to creative breaking points.",
    content:
      "Great photography isn't just about having expensive equipment. Composition is the secret sauce that separates good photos from great ones...",
    category: "Tutorials",
    author: {
      name: "David Kim",
      avatar: "DK",
      title: "Professional Photographer",
    },
    publishDate: "Nov 30, 2024",
    readTime: "7 min read",
    views: "2.1K",
    likes: 143,
    comments: 19,
    featured: false,
    trending: false,
    color: "from-orange-500 to-red-600",
    bg: "bg-orange-50",
    tags: ["Photography", "Composition", "Techniques", "Visual Arts"],
  },
  {
    id: 6,
    title: "Building a Supportive Hobby Community",
    excerpt:
      "How our community members create lasting friendships and support networks through shared interests. Tips for connecting with like-minded people.",
    content: "One of the most rewarding aspects of pursuing hobbies is the community you build along the way...",
    category: "Community",
    author: {
      name: "Lisa Park",
      avatar: "LP",
      title: "Community Manager",
    },
    publishDate: "Nov 28, 2024",
    readTime: "5 min read",
    views: "1.5K",
    likes: 98,
    comments: 42,
    featured: false,
    trending: false,
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    tags: ["Community", "Friendship", "Support", "Connection"],
  },
]

export default function BlogPage() {
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
              HobbyHunt Blog 📝
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover tips, tutorials, success stories, and inspiration from our community of hobby enthusiasts and
              expert mentors.
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
                placeholder="Search articles..."
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

        {/* Featured Posts */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Featured Articles ⭐
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <Card
                  key={post.id}
                  className={`${post.bg} border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fade-in-up group cursor-pointer ring-2 ring-orange-200`}
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 animate-pulse">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                      <div className="flex items-center space-x-2">
                        {post.trending && (
                          <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1">
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

                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 mb-3 leading-tight">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>

                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="w-12 h-12 ring-2 ring-white shadow-lg">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className={`bg-gradient-to-br ${post.color} text-white font-bold`}>
                          {post.author.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-800">{post.author.name}</p>
                        <p className="text-sm text-gray-600">{post.author.title}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-violet-100 text-violet-700 text-xs animate-fade-in-up"
                          style={{ animationDelay: `${1200 + index * 100 + tagIndex * 50}ms` }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                      <BookOpen className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="animate-fade-in-up" style={{ animationDelay: "1400ms" }}>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className={`${post.bg} border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fade-in-up group cursor-pointer`}
                style={{ animationDelay: `${1600 + index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-white/80 text-gray-700 font-bold px-3 py-1">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      {post.trending && (
                        <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-2 py-1 text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Hot
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 rounded-xl hover:bg-white/50 transform hover:scale-110 transition-all duration-300"
                      >
                        <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-500" />
                      </Button>
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 mb-3 leading-tight">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="w-10 h-10 ring-2 ring-white shadow-lg">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className={`bg-gradient-to-br ${post.color} text-white font-bold`}>
                        {post.author.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{post.author.name}</p>
                      <p className="text-xs text-gray-600">{post.author.title}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.publishDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-violet-100 text-violet-700 text-xs animate-fade-in-up"
                        style={{ animationDelay: `${1800 + index * 100 + tagIndex * 50}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                    size="sm"
                  >
                    <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div
          className="mt-16 animate-fade-in-up bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center"
          style={{ animationDelay: "2200ms" }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Stay Inspired! 💡</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest tips, tutorials, and success stories delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email..."
                className="h-12 rounded-2xl border-2 border-white/20 bg-white/10 text-white placeholder:text-white/70 backdrop-blur-sm"
              />
              <Button className="bg-white text-violet-600 hover:bg-gray-100 h-12 px-8 rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "2400ms" }}>
          <Button
            variant="outline"
            size="lg"
            className="px-12 py-6 rounded-2xl border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
          >
            Load More Articles
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
