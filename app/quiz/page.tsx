"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Sparkles, Trophy, Target, Zap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

const questions = [
  {
    id: 1,
    question: "What's your age group?",
    options: [
      { value: "8-12", label: "8-12 years old", emoji: "🧒" },
      { value: "13-17", label: "13-17 years old", emoji: "🧑‍🎓" },
      { value: "18-25", label: "18-25 years old", emoji: "🧑‍💼" },
      { value: "26-30", label: "26-30 years old", emoji: "👨‍💻" },
    ],
  },
  {
    id: 2,
    question: "How do you prefer to learn new things?",
    options: [
      { value: "visual", label: "Watching videos and demonstrations", emoji: "👀" },
      { value: "hands-on", label: "Learning by doing and practicing", emoji: "🙌" },
      { value: "reading", label: "Reading guides and tutorials", emoji: "📚" },
      { value: "social", label: "Learning with others in groups", emoji: "👥" },
    ],
  },
  {
    id: 3,
    question: "What's your current mood?",
    options: [
      { value: "energetic", label: "Energetic and ready for action", emoji: "⚡" },
      { value: "calm", label: "Calm and looking for relaxation", emoji: "🧘" },
      { value: "creative", label: "Creative and inspired", emoji: "🎨" },
      { value: "curious", label: "Curious and eager to explore", emoji: "🔍" },
    ],
  },
  {
    id: 4,
    question: "How much time can you dedicate daily?",
    options: [
      { value: "15min", label: "15-30 minutes", emoji: "⏰" },
      { value: "30min", label: "30-60 minutes", emoji: "⏱️" },
      { value: "1hour", label: "1-2 hours", emoji: "🕐" },
      { value: "flexible", label: "Flexible, depends on the day", emoji: "🔄" },
    ],
  },
  {
    id: 5,
    question: "Do you prefer working alone or with others?",
    options: [
      { value: "alone", label: "I love working independently", emoji: "🧑‍💻" },
      { value: "small-group", label: "Small groups (2-4 people)", emoji: "👥" },
      { value: "large-group", label: "Large groups and communities", emoji: "👫" },
      { value: "both", label: "I enjoy both solo and group activities", emoji: "🤝" },
    ],
  },
]

const hobbyResults = [
  {
    name: "Digital Art",
    description: "Express your creativity through digital painting, illustration, and design",
    match: 95,
    color: "from-pink-500 via-purple-500 to-violet-600",
    icon: "🎨",
    features: ["Daily drawing challenges", "Color theory lessons", "Digital tools mastery"],
  },
  {
    name: "Guitar Playing",
    description: "Learn to play your favorite songs and create beautiful music",
    match: 88,
    color: "from-blue-500 via-indigo-500 to-purple-600",
    icon: "🎸",
    features: ["Chord progressions", "Song tutorials", "Music theory basics"],
  },
  {
    name: "Photography",
    description: "Capture the world around you and develop your artistic eye",
    match: 82,
    color: "from-emerald-500 via-teal-500 to-cyan-600",
    icon: "📸",
    features: ["Composition techniques", "Lighting mastery", "Photo editing skills"],
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value: string) => {
    setSelectedOption(value)
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: value,
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedOption(answers[questions[currentQuestion + 1]?.id] || "")
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
      setSelectedOption(answers[questions[currentQuestion - 1]?.id] || "")
    }
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 py-8 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce-gentle">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Perfect Hobby Matches! 🎉
            </h1>
            <p className="text-xl text-gray-600">Based on your answers, here are the hobbies that suit you best:</p>
          </div>

          <div className="grid gap-8 mb-12">
            {hobbyResults.map((hobby, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-6">
                      <div className="text-6xl animate-bounce-gentle" style={{ animationDelay: `${index * 500}ms` }}>
                        {hobby.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-3 text-gray-800">{hobby.name}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{hobby.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-5xl font-bold bg-gradient-to-r ${hobby.color} bg-clip-text text-transparent animate-pulse`}
                      >
                        {hobby.match}%
                      </div>
                      <p className="text-sm text-gray-500 font-medium">Match Score</p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${hobby.color} transition-all duration-1000 ease-out animate-pulse`}
                      style={{
                        width: `${hobby.match}%`,
                        animationDelay: `${index * 300}ms`,
                      }}
                    ></div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {hobby.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl animate-fade-in-up"
                        style={{ animationDelay: `${index * 200 + featureIndex * 100}ms` }}
                      >
                        <Zap className="w-4 h-4 text-violet-500" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600 hover:from-violet-600 hover:via-purple-700 hover:to-pink-700 text-xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mr-6 group"
            >
              <Sparkles className="mr-3 w-6 h-6 group-hover:animate-spin" />
              Start My Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-8 rounded-2xl border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/quiz">
                <Target className="mr-3 w-6 h-6" />
                Retake Quiz
              </Link>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 py-8 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative container mx-auto max-w-3xl">
        <Navigation />
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Hobby Discovery Quiz ✨
          </h1>
          <p className="text-xl text-gray-600">
            Answer a few questions to find hobbies that match your personality and interests
          </p>
        </div>

        {/* Progress */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span className="font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="font-medium">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card
          className="mb-12 border-0 shadow-2xl bg-white/80 backdrop-blur-sm animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedOption} onValueChange={handleAnswer} className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={option.value}
                  className={`flex items-center space-x-4 p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg animate-fade-in-up ${
                    selectedOption === option.value
                      ? "border-violet-400 bg-gradient-to-r from-violet-50 to-purple-50 shadow-lg scale-105"
                      : "border-gray-200 hover:border-violet-200 hover:bg-violet-50/50"
                  }`}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="text-3xl animate-bounce-gentle" style={{ animationDelay: `${index * 200}ms` }}>
                    {option.emoji}
                  </div>
                  <RadioGroupItem value={option.value} id={option.value} className="border-2" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer text-lg font-medium text-gray-700">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <Button
            variant="outline"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="px-8 py-6 rounded-2xl border-2 border-gray-200 hover:border-violet-400 hover:bg-violet-50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>
          <Button
            onClick={nextQuestion}
            disabled={!selectedOption}
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {currentQuestion === questions.length - 1 ? (
              <>
                <Trophy className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                Get Results
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
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
            transform: translateY(-5px);
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
