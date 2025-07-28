"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Trophy,
  Flame,
  Target,
  Users,
  BookOpen,
  MessageCircle,
  Play,
  Camera,
  CheckCircle,
  Star,
  Calendar,
  Zap,
  Heart,
  Sparkles,
  TrendingUp,
  Clock,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <Navigation />

      <div className="relative container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Hobby Plan */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 animate-fade-in-up">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Your Digital Art Journey
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Week 2: Color Theory & Shading</h3>
                    <p className="text-gray-600">5 of 7 tasks completed</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 shadow-lg animate-pulse">
                    <Flame className="w-4 h-4 mr-2" />
                    15 day streak
                  </Badge>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>71%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-1000 ease-out animate-pulse"
                      style={{ width: "71%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { text: "Learn about warm vs cool colors", completed: true },
                    { text: "Practice basic shading techniques", completed: true },
                    { text: "Create a color palette study", completed: false },
                    { text: "Watch lighting tutorial", completed: true },
                    { text: "Submit daily sketch", completed: true },
                    { text: "Join community critique session", completed: false },
                  ].map((task, index) => (
                    <div
                      key={index}
                      className={`flex items-center text-sm p-3 rounded-xl transition-all duration-300 animate-fade-in-up ${
                        task.completed
                          ? "bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200"
                          : "bg-gray-50 border border-gray-200 hover:border-violet-200"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {task.completed ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 animate-bounce-gentle" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3"></div>
                      )}
                      <span className={task.completed ? "text-emerald-700 font-medium" : "text-gray-600"}>
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Today's Challenge */}
            <Card
              className="border-0 border-l-4 border-l-purple-500 shadow-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg animate-bounce-gentle">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Today's Challenge
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce-gentle">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Create a Mood Board</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Collect 5-8 images that inspire you and arrange them into a digital mood board. Focus on color
                      harmony and emotional impact.
                    </p>
                    <div className="flex items-center space-x-4">
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                        <Zap className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                        Start Challenge
                      </Button>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        30-45 minutes
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card
              className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-violet-600" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: Trophy,
                      color: "from-yellow-400 to-orange-500",
                      text: 'Earned "Consistency Champion" badge',
                      time: "2 hours ago",
                    },
                    {
                      icon: MessageCircle,
                      color: "from-blue-400 to-cyan-500",
                      text: "New message from mentor Alex",
                      time: "5 hours ago",
                    },
                    {
                      icon: Heart,
                      color: "from-pink-400 to-rose-500",
                      text: "Emma liked your sketch submission",
                      time: "1 day ago",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-violet-50 transition-all duration-300 animate-fade-in-up group"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}
                      >
                        <activity.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{activity.text}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Streak & Stats */}
            <Card
              className="border-0 shadow-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <CardHeader>
                <CardTitle className="text-center text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-6xl mb-4 animate-bounce-gentle">🔥</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    15
                  </div>
                  <div className="text-gray-600 font-medium">Day Streak</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white/50 rounded-2xl">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                      127
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Total Points</div>
                  </div>
                  <div className="p-4 bg-white/50 rounded-2xl">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                      8
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Badges Earned</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Buddy Mode */}
            <Card
              className="border-0 shadow-2xl bg-gradient-to-br from-cyan-50 to-blue-50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "800ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="w-6 h-6 mr-3 text-cyan-600" />
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Buddy Mode
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-12 h-12 ring-2 ring-cyan-200">
                    <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold">
                      EM
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-gray-800">Emma (Photography)</p>
                    <p className="text-sm text-gray-600">Combined 28-day streak! 🔥</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-2 border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Sparkles className="mr-2 w-4 h-4" />
                  Send Cheer 🎉
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card
              className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "1000ms" }}
            >
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { icon: BookOpen, text: "Browse Resources", color: "hover:bg-violet-50 hover:border-violet-200" },
                  { icon: MessageCircle, text: "Ask Mentor", color: "hover:bg-blue-50 hover:border-blue-200" },
                  { icon: Calendar, text: "Find Events", color: "hover:bg-emerald-50 hover:border-emerald-200" },
                  { icon: Play, text: "Surprise Me", color: "hover:bg-pink-50 hover:border-pink-200" },
                ].map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={`w-full justify-start border-2 border-gray-200 ${action.color} transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                    style={{ animationDelay: `${1200 + index * 100}ms` }}
                  >
                    <action.icon className="w-4 h-4 mr-3" />
                    {action.text}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Leaderboard Preview */}
            <Card
              className="border-0 shadow-2xl bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "1200ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Trophy className="w-6 h-6 mr-3 text-yellow-600" />
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Weekly Leaderboard
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { rank: 1, name: "Alex M.", points: 245, color: "text-yellow-600", bg: "bg-yellow-50" },
                    { rank: 2, name: "Jordan K.", points: 198, color: "text-gray-500", bg: "bg-gray-50" },
                    { rank: 3, name: "You", points: 127, color: "text-blue-600", bg: "bg-blue-50", isUser: true },
                  ].map((player, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 animate-fade-in-up ${player.bg} ${player.isUser ? "ring-2 ring-blue-200 transform scale-105" : ""}`}
                      style={{ animationDelay: `${1400 + index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`text-lg font-bold ${player.color}`}>{player.rank}.</span>
                        <span className={`font-medium ${player.isUser ? "text-blue-800" : "text-gray-800"}`}>
                          {player.name}
                        </span>
                      </div>
                      <span className={`font-bold ${player.color}`}>{player.points} pts</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-6 border-2 border-yellow-200 hover:border-yellow-400 hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Trophy className="mr-2 w-4 h-4" />
                  View Full Leaderboard
                </Button>
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
            transform: translateY(-8px);
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
