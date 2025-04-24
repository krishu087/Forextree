import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/api/placeholder/100/100',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: '/api/placeholder/100/100',
    },
    {
      name: 'Emma Williams',
      role: 'Product Manager',
      image: '/api/placeholder/100/100',
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1625] bg-gradient-to-br from-[#2d1f3f] via-[#1a1625] to-[#2d1f3f]">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-white mb-4">About Us</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We're passionate about helping traders succeed through innovative prop firm solutions
              and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#2d1f3f]/50 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
              <p className="text-white/70">
                To become the world's most trusted platform for prop trading, empowering traders globally.
              </p>
            </div>

            <div className="bg-[#2d1f3f]/50 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-white/70">
                Providing traders with the capital, tools, and support they need to achieve financial success.
              </p>
            </div>

            <div className="bg-[#2d1f3f]/50 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
              <p className="text-white/70">
                Transparency, integrity, and innovation in everything we do.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-8">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-[#2d1f3f]/50 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-white/70">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
