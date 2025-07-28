"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Target,
  Trophy,
  Heart,
  Music,
  Palette,
  Code,
  Camera,
  Dumbbell,
  BookOpen,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"
import Link from "next/link"

const hobbies = [
  { name: "Music", icon: Music, color: "from-violet-400 to-purple-600", bg: "bg-violet-50" },
  { name: "Art", icon: Palette, color: "from-pink-400 to-rose-600", bg: "bg-pink-50" },
  { name: "Coding", icon: Code, color: "from-blue-400 to-cyan-600", bg: "bg-blue-50" },
  { name: "Photography", icon: Camera, color: "from-emerald-400 to-teal-600", bg: "bg-emerald-50" },
  { name: "Fitness", icon: Dumbbell, color: "from-orange-400 to-red-600", bg: "bg-orange-50" },
  { name: "Reading", icon: BookOpen, color: "from-indigo-400 to-blue-600", bg: "bg-indigo-50" },
]

const testimonials = [
  {
    name: "Sarah, 16",
    text: "HobbyHunt helped me discover my love for digital art. I've been creating for 3 months now!",
    hobby: "Digital Art",
    streak: "45 days",
    avatar: "S",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "Marcus, 22",
    text: "The guitar lessons and daily challenges kept me motivated. I can finally play my favorite songs!",
    hobby: "Guitar",
    streak: "78 days",
    avatar: "M",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Emma, 19",
    text: "Found my coding mentor through HobbyHunt. Now I'm building my first app!",
    hobby: "Web Development",
    streak: "32 days",
    avatar: "E",
    color: "from-emerald-500 to-teal-600",
  },
]

const features = [
  {
    icon: Target,
    title: "Discover",
    description: "Take our fun personality quiz to find hobbies that match your interests and goals.",
    color: "from-violet-500 to-purple-600",
    delay: "0ms",
  },
  {
    icon: BookOpen,
    title: "Plan",
    description: "Get a personalized weekly roadmap with daily challenges and learning resources.",
    color: "from-blue-500 to-cyan-600",
    delay: "200ms",
  },
  {
    icon: Trophy,
    title: "Grow",
    description: "Build habits with daily practice, earn badges, and connect with mentors and friends.",
    color: "from-emerald-500 to-teal-600",
    delay: "400ms",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-rose-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative border-b bg-white/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              HobbyHunt
            </span>
          </div>
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

      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="animate-fade-in-up">
            <Badge className="mb-8 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Star className="w-4 h-4 mr-2" />
              Join 10,000+ Happy Hobbyists
            </Badge>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Find a Hobby.
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-pink-600 via-rose-600 to-orange-600 bg-clip-text text-transparent animate-gradient"
                style={{ animationDelay: "1s" }}
              >
                Build a Habit.
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent animate-gradient"
                style={{ animationDelay: "2s" }}
              >
                Boost Your Well-being.
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover personalized hobbies matched to your personality and goals. Learn with daily challenges, connect
              with mentors, and join a supportive community.
            </p>
          </div>

          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600 hover:from-violet-600 hover:via-purple-700 hover:to-pink-700 text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <Link href="/quiz">
                <Zap className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                Take the Quiz
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 rounded-2xl border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transition-all duration-300 transform hover:scale-105 bg-transparent"
              asChild
            >
              <Link href="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Three simple steps to start your hobby journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center group animate-fade-in-up hover:animate-bounce-gentle"
                style={{ animationDelay: feature.delay }}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobby Preview Grid */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Explore Popular Hobbies
            </h2>
            <p className="text-xl text-gray-600">Discover what sparks your interest</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {hobbies.map((hobby, index) => (
              <Card
                key={hobby.name}
                className={`${hobby.bg} border-0 hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:scale-110 hover:-rotate-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${hobby.color} flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <hobby.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 animate-pulse"></div>
                  </div>
                  <h3 className="font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {hobby.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 px-8 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Link href="/hobbies">
                View All Hobbies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">Real people, real transformations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.hobby}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 shadow-lg">
                    <Zap className="w-4 h-4 mr-2" />
                    {testimonial.streak} streak
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 via-purple-600/50 to-pink-600/50 animate-pulse"></div>

        <div className="relative container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-8">Ready to Start Your Hobby Journey?</h2>
            <p className="text-2xl mb-12 opacity-90 leading-relaxed">
              Join thousands of people who've discovered their passion and built lasting habits with HobbyHunt.
            </p>
          </div>

          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center"
            style={{ animationDelay: "300ms" }}
          >
            <Button
              size="lg"
              className="bg-white text-violet-600 hover:bg-gray-100 text-xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <Link href="/quiz">
                <Sparkles className="mr-3 w-6 h-6 group-hover:animate-spin" />
                Take the Quiz Now
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-violet-600 text-xl px-12 py-8 rounded-2xl bg-transparent transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">HobbyHunt</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Helping people discover hobbies and build lasting habits for better well-being.
              </p>
            </div>

            {[
              {
                title: "Platform",
                links: [
                  { name: "Explore Hobbies", href: "/hobbies" },
                  { name: "Find Mentors", href: "/mentors" },
                  { name: "Events", href: "/events" },
                  { name: "Community", href: "/community" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "Blog", href: "/blog" },
                  { name: "Help Center", href: "/help" },
                  { name: "About Us", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Connect",
                links: [
                  { name: "Twitter", href: "https://twitter.com" },
                  { name: "Instagram", href: "https://instagram.com" },
                  { name: "Discord", href: "https://discord.com" },
                  { name: "Newsletter", href: "/newsletter" },
                ],
              },
            ].map((section, index) => (
              <div
                key={section.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <h4 className="font-bold mb-6 text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 animate-fade-in-up"
            style={{ animationDelay: "1000ms" }}
          >
            <p>&copy; 2024 HobbyHunt. All rights reserved. Made with ❤️ for hobby enthusiasts.</p>
          </div>
        </div>
      </footer>

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

        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-gentle:hover {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
