"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles } from "lucide-react"

export function Navigation() {
  return (
    <header className="relative border-b bg-white/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-ping"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            HobbyHunt
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Explore Hobbies", href: "/hobbies" },
            { name: "Meet Mentors", href: "/mentors" },
            { name: "Events", href: "/events" },
            { name: "Blog", href: "/blog" },
          ].map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-gray-600 hover:text-gray-900 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" asChild className="hover:bg-violet-50 transition-all duration-300">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/quiz">
              Take Quiz
              <Sparkles className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
