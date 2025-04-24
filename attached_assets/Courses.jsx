
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  {
    id: 1,
    name: "Forex Trading Basics",
    summary: "Learn the fundamentals of Forex trading with step-by-step guidance.",
    price: 99.99,
    rating: 5,
    image: "/course1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "Advanced Prop Firm Strategies",
    summary: "Master advanced strategies to succeed with proprietary trading firms.",
    price: 149.99,
    rating: 4.5,
    image: "/course2.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "Pip Calculator Mastery",
    summary: "Become an expert in using pip calculators for profitable trading.",
    price: 79.99,
    rating: 5,
    image: "/course3.jpg", // Replace with actual image path
  },
  {
    id: 4,
    name: "Risk Management Techniques",
    summary: "Effective techniques to manage risk and maximize your trading success.",
    price: 119.99,
    rating: 4.8,
    image: "/course4.jpg", // Replace with actual image path
  },
];

export default function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-7xl  text-yellow-500">Forex Resources</h2>
          <h1 className="text-2xl mt-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
            Providing You the Essentials
          </h1>
          <div className="text-white mt-5">★ FOREXTREE</div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="min-w-full p-6"
              >
                <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center min-h-[400px] max-w-md mx-auto w-full">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-56 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-semibold text-white text-center mb-4">{course.name}</h3>
                  <p className="text-gray-300 text-sm text-center mb-4 line-clamp-3">{course.summary}</p>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.round(course.rating) ? "text-yellow-400" : "text-gray-500"}`}
                      />
                    ))}
                    <span className="text-gray-400 text-xs ml-2">{course.rating}/5</span>
                  </div>
                  <p className="text-lg font-bold text-yellow-400 text-center mb-6">${course.price.toFixed(2)}</p>
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-2 rounded-lg font-medium hover:from-yellow-600 hover:to-amber-600 transition-all">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-amber-500 p-3 rounded-full text-white shadow-md hover:from-yellow-600 hover:to-amber-600 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-amber-500 p-3 rounded-full text-white shadow-md hover:from-yellow-600 hover:to-amber-600 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Navigation Indicators */}
          <div className="flex justify-center mt-4">
            {courses.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 mx-1 rounded-full ${i === currentIndex ? "bg-yellow-500" : "bg-gray-500"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
