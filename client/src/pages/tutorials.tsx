import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Play, Clock, Star, ChevronRight, Youtube, BookOpen, Filter } from "lucide-react";
import { fadeIn, slideUp, staggerContainer, slideInFromLeft } from "@/lib/animations";

export default function Tutorials() {
  const [filterCategory, setFilterCategory] = useState("all");
  
  const youtubeVideos = [
    {
      id: 1,
      title: "Forex Trading for Beginners",
      channel: "ForexSignals TV",
      thumbnail: "https://img.youtube.com/vi/R7GhJ0FRJmU/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=R7GhJ0FRJmU",
      description: "A complete guide to Forex trading for beginners.",
      duration: "45:22",
      category: "beginner"
    },
    {
      id: 2,
      title: "Understanding Candlestick Patterns",
      channel: "TraderNick",
      thumbnail: "https://img.youtube.com/vi/jmoOrgMiehU/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=jmoOrgMiehU",
      description: "Learn how to read and interpret candlestick patterns.",
      duration: "32:45",
      category: "beginner"
    },
    {
      id: 3,
      title: "Advanced Price Action Strategy",
      channel: "Urban Forex",
      thumbnail: "https://img.youtube.com/vi/qHEj4ssv_h8/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=qHEj4ssv_h8", 
      description: "Master price action trading with these advanced techniques.",
      duration: "58:10",
      category: "advanced"
    },
    {
      id: 4,
      title: "Prop Firm Trading Strategy",
      channel: "The Trading Channel",
      thumbnail: "https://img.youtube.com/vi/YFqJ_sM_BVw/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=YFqJ_sM_BVw",
      description: "Strategies for passing prop firm challenges and becoming profitable.",
      duration: "1:02:34",
      category: "prop-firms"
    },
    {
      id: 5,
      title: "Risk Management for Forex Traders",
      channel: "Rayner Teo",
      thumbnail: "https://img.youtube.com/vi/VXjyvBg7cXM/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=VXjyvBg7cXM",
      description: "Learn proper risk management techniques for consistent profits.",
      duration: "26:17",
      category: "intermediate"
    },
    {
      id: 6,
      title: "Technical Analysis Masterclass",
      channel: "The Secret Mindset",
      thumbnail: "https://img.youtube.com/vi/Jd1JVF7Oy_A/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=Jd1JVF7Oy_A",
      description: "Complete technical analysis guide for Forex traders.",
      duration: "1:21:45",
      category: "intermediate"
    }
  ];

  const freeCourses = [
    {
      id: 1,
      title: "Forex Fundamentals",
      description: "Master the basics of Forex trading with this comprehensive course.",
      lessons: 12,
      duration: "3 hours",
      level: "Beginner",
      rating: 4.7,
      students: 15420,
      category: "beginner"
    },
    {
      id: 2,
      title: "Chart Pattern Recognition",
      description: "Learn to identify and trade profitable chart patterns.",
      lessons: 8,
      duration: "2.5 hours",
      level: "Intermediate",
      rating: 4.5,
      students: 8745,
      category: "intermediate"
    },
    {
      id: 3,
      title: "Advanced Price Action",
      description: "Take your trading to the next level with advanced price action strategies.",
      lessons: 15,
      duration: "5 hours",
      level: "Advanced",
      rating: 4.9,
      students: 6238,
      category: "advanced"
    },
    {
      id: 4,
      title: "Proprietary Firm Challenge Guide",
      description: "Step-by-step guide to passing prop firm challenges.",
      lessons: 10,
      duration: "4 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 12350,
      category: "prop-firms"
    }
  ];

  const filteredVideos = filterCategory === "all" 
    ? youtubeVideos 
    : youtubeVideos.filter(video => video.category === filterCategory);

  const filteredCourses = filterCategory === "all"
    ? freeCourses
    : freeCourses.filter(course => course.category === filterCategory);

  return (
    <div className="min-h-screen bg-[#1a1625] bg-gradient-to-br from-[#2d1f3f] via-[#1a1625] to-[#2d1f3f]">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Free Trading Education</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Learn Forex trading with our collection of free courses and tutorials.
              No sign-up required, start learning right away.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={() => setFilterCategory("all")}
                className={`px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                  filterCategory === "all" 
                    ? "bg-yellow-500 text-black font-medium" 
                    : "bg-[#2d1f3f]/50 text-white hover:bg-[#2d1f3f] border border-white/10"
                }`}
              >
                <Filter className="w-4 h-4" />
                All
              </button>
              <button 
                onClick={() => setFilterCategory("beginner")}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  filterCategory === "beginner" 
                    ? "bg-yellow-500 text-black font-medium" 
                    : "bg-[#2d1f3f]/50 text-white hover:bg-[#2d1f3f] border border-white/10"
                }`}
              >
                Beginner
              </button>
              <button 
                onClick={() => setFilterCategory("intermediate")}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  filterCategory === "intermediate" 
                    ? "bg-yellow-500 text-black font-medium" 
                    : "bg-[#2d1f3f]/50 text-white hover:bg-[#2d1f3f] border border-white/10"
                }`}
              >
                Intermediate
              </button>
              <button 
                onClick={() => setFilterCategory("advanced")}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  filterCategory === "advanced" 
                    ? "bg-yellow-500 text-black font-medium" 
                    : "bg-[#2d1f3f]/50 text-white hover:bg-[#2d1f3f] border border-white/10"
                }`}
              >
                Advanced
              </button>
              <button 
                onClick={() => setFilterCategory("prop-firms")}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  filterCategory === "prop-firms" 
                    ? "bg-yellow-500 text-black font-medium" 
                    : "bg-[#2d1f3f]/50 text-white hover:bg-[#2d1f3f] border border-white/10"
                }`}
              >
                Prop Firms
              </button>
            </div>
          </motion.div>
          
          {/* Free Courses Section */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Free Courses</h2>
              <Link href="#">
                <a className="text-yellow-400 flex items-center hover:text-yellow-300 transition-colors">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Link>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
            >
              {filteredCourses.map((course, index) => (
                <motion.div 
                  key={course.id}
                  className="bg-[#2d1f3f]/40 rounded-xl border border-white/10 overflow-hidden hover:border-yellow-400/30 transition-all duration-300 shadow-lg group"
                  variants={slideUp}
                >
                  <div className="relative h-48 bg-gradient-to-br from-yellow-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-500/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-8 w-8 text-black" />
                    </div>
                    <div className="absolute top-3 right-3 bg-black/40 text-white text-xs py-1 px-2 rounded-full backdrop-blur-sm">
                      {course.level}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-yellow-500 text-black text-xs py-1 px-2 rounded-full font-medium">
                      Free
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">{course.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{course.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-500"}`}
                            fill={i < Math.floor(course.rating) ? "currentColor" : "none"}
                          />
                        ))}
                        <span className="text-white/60 text-xs ml-1">{course.rating}</span>
                      </div>
                      <span className="text-white/60 text-xs">{course.students.toLocaleString()} students</span>
                    </div>
                    
                    <div className="flex justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center text-white/60 text-xs">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center text-white/60 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 py-2 rounded-lg bg-[#1a1625] border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-300">
                      Start Learning
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* YouTube Videos Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">YouTube Tutorials</h2>
              <Link href="#">
                <a className="text-yellow-400 flex items-center hover:text-yellow-300 transition-colors">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Link>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {filteredVideos.map((video, index) => (
                <motion.a 
                  key={video.id}
                  href={video.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#2d1f3f]/40 rounded-xl border border-white/10 overflow-hidden hover:border-yellow-400/30 transition-all duration-300 shadow-lg group"
                  variants={slideInFromLeft}
                  custom={index * 0.1}
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-yellow-500/80 flex items-center justify-center">
                        <Play className="h-8 w-8 text-black" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs py-1 px-2 rounded-md backdrop-blur-sm flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">{video.title}</h3>
                    <p className="text-white/60 text-sm mb-3">{video.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#ff0000] flex items-center justify-center mr-2">
                          <Youtube className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white/70 text-sm">{video.channel}</span>
                      </div>
                      <div className="text-yellow-400 text-xs rounded-md bg-yellow-400/10 py-1 px-2">
                        Watch Now
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}