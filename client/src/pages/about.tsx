import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft, slideUp, staggerContainer } from "@/lib/animations";

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Emma Williams',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    }
  ];

  return (
    <div className="min-h-screen hero-gradient">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">About Us</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We're passionate about helping traders succeed through innovative prop firm solutions
              and cutting-edge technology.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-[#2d1f3f]/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 shadow-lg"
              variants={slideUp}
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Our Vision</h3>
              <p className="text-white/70">
                To become the world's most trusted platform for prop trading, empowering traders globally 
                to achieve financial independence through skill-based trading opportunities.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#2d1f3f]/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 shadow-lg"
              variants={slideUp}
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Our Mission</h3>
              <p className="text-white/70">
                Providing traders with the capital, tools, and support they need to achieve financial success
                while maintaining the highest standards of transparency and integrity in all our operations.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#2d1f3f]/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 shadow-lg"
              variants={slideUp}
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Our Values</h3>
              <p className="text-white/70">
                Transparency, integrity, and innovation in everything we do. We believe in fair opportunities
                for all traders and continuous improvement of our platform and services.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-white mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index} 
                  className="bg-[#2d1f3f]/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col items-center hover:border-yellow-400/30 transition-all duration-300 shadow-lg"
                  variants={slideInFromLeft}
                  custom={index * 0.2}
                >
                  <div className="relative mb-6 group">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-28 h-28 rounded-full object-cover border-2 border-yellow-400/50"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-yellow-400/80 mb-4">{member.role}</p>
                  <p className="text-white/60 text-sm">
                    Passionate about helping traders succeed in the global forex markets.
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#2d1f3f]/70 p-10 rounded-xl border border-white/10 backdrop-blur-md text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Join Our Community</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Become part of a growing community of traders who are leveraging our platform to achieve their 
              financial goals and trading ambitions.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full text-black font-medium hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 shadow-lg">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}