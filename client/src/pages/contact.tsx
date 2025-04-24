import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter } from "lucide-react";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form data submitted:', formData);
    alert('Thanks for reaching out! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#1a1625] bg-gradient-to-br from-[#2d1f3f] via-[#1a1625] to-[#2d1f3f] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Contact Us</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-[#2d1f3f]/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 shadow-lg"
              variants={slideUp}
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center text-white/80 group">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="group-hover:text-yellow-400/80 transition-colors duration-300">support@forextree.com</span>
                </div>

                <div className="flex items-center text-white/80 group">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="group-hover:text-yellow-400/80 transition-colors duration-300">+1 (555) 123-4567</span>
                </div>

                <div className="flex items-center text-white/80 group">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="group-hover:text-yellow-400/80 transition-colors duration-300">123 Trading Street, Financial District, NY 10004</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-[#2d1f3f]/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 shadow-lg"
              variants={slideUp}
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Connect With Us</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-[#1a1625] border border-white/10 flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-[#1a1625] border border-white/10 flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-[#2d1f3f]/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/70 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1625] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/70 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1625] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white/70 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1625] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/70 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#1a1625] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 shadow-lg"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}