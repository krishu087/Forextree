import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <div className="min-h-screen bg-[#1a1625] bg-gradient-to-br from-[#2d1f3f] via-[#1a1625] to-[#2d1f3f] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#2d1f3f]/50 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center text-white/70">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>krishanapanjre2003@gmail.com</span>
                </div>

                <div className="flex items-center text-white/70">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91 989397077</span>
                </div>

                <div className="flex items-center text-white/70">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>11 Malviya Nagar , Indore</span>
                </div>

                <div className="flex items-center text-white/70">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>Mon-Fri: 9:00 AM - 5:00 PM EST</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white/70 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#2d1f3f]/50 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6">Send us a Message</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1a1625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-[#1a1625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1a1625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                  placeholder="Message subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  Message
                </label>
                <textarea
                  className="w-full bg-[#1a1625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500/50 h-32"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
