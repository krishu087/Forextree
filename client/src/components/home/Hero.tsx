import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero = ({
  title = "Master Forex Trading with Professional Tools",
  description = "Access advanced calculators, compare prop trading firms, and stay updated with the latest market news.",
  ctaText = "Explore Tools",
  ctaLink = "/calculator"
}: HeroProps) => {
  return (
    <section className="hero-gradient px-6 py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 animate-slide-up">
                {title.split(' ').map((word, i) => 
                  i % 3 === 1 ? (
                    <span key={i} className="text-yellow-400"> {word} </span>
                  ) : (
                    <span key={i}>{i > 0 ? ' ' : ''}{word}</span>
                  )
                )}
              </h1>
              <p 
                className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up" 
                style={{ animationDelay: '100ms' }}
              >
                {description}
              </p>
            </div>
            
            <div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-slide-up" 
              style={{ animationDelay: '200ms' }}
            >
              <Button variant="glow" size="lg" asChild>
                <Link href={ctaLink}>
                  <a className="flex items-center gap-2">
                    {ctaText}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Link>
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
            
            <div 
              className="pt-6 flex items-center justify-center lg:justify-start gap-8 animate-slide-up" 
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex -space-x-3">
                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-[#121212]"/>
                <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-[#121212]"/>
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-[#121212]"/>
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-[#121212]"/>
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-semibold text-[#121212] border-2 border-[#121212]">
                  +10K
                </div>
              </div>
              <p className="text-sm text-gray-300">Traders trust our platform</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 float-animation">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-3xl opacity-30"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Forex trading dashboard" 
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Professional Tools</h3>
                      <p className="text-gray-300">For Serious Forex Traders</p>
                    </div>
                    <Button variant="default" size="icon">
                      <ArrowRight className="h-6 w-6 text-black" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
