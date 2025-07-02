import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Server, Monitor } from 'lucide-react';

export const Hero: React.FC = () => {
  const socialLinks = [
    { href: 'https://github.com/elcapitanoe', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/domiadiwijaya', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:mail@domiadi.com', icon: Mail, label: 'Email' },
    { href: 'https://cloud.domiadi.com', icon: Server, label: 'Cloud Server' },
    { href: 'https://status.domiadi.com', icon: Monitor, label: 'Status Monitor' },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/Elcapitanoe/DA-Portfolio/master/images/domi-circle.png"
                alt="Domi Adiwijaya"
                className="w-40 h-40 rounded-full border-4 border-slate-600 shadow-2xl animate-float"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/160x160/64748b/ffffff?text=DA';
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Domi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Adiwijaya</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              Tech & HomeLab Enthusiast
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about innovative technology solutions, infrastructure automation, 
              and creating robust HomeLab environments that push the boundaries of what's possible.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:rotate-3 group"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300 group"
            >
              <span>Discover More</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};