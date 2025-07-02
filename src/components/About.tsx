import React from 'react';
import { Code, Server, Zap, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technology Innovation',
      description: 'Exploring cutting-edge technologies and implementing innovative solutions that solve real-world problems.'
    },
    {
      icon: Server,
      title: 'HomeLab Infrastructure',
      description: 'Building and maintaining sophisticated home laboratory environments for continuous learning and experimentation.'
    },
    {
      icon: Zap,
      title: 'Automation Expert',
      description: 'Passionate about automating processes and creating efficient workflows that enhance productivity and reliability.'
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'Committed to sharing knowledge and contributing to the tech community through open-source projects and collaboration.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A dedicated technology enthusiast with a passion for innovation, infrastructure, and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Welcome to my digital space! I'm Domi Adiwijaya, a passionate technologist who thrives at the intersection 
              of innovation and practical implementation. My journey in technology is driven by an insatiable curiosity 
              and a desire to build systems that make a difference.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              From designing robust HomeLab infrastructures to exploring emerging technologies, I believe in the power 
              of hands-on learning and continuous experimentation. My approach combines theoretical knowledge with 
              practical experience to create solutions that are both innovative and reliable.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not tinkering with new technologies or optimizing systems, you'll find me sharing insights 
              with the community, contributing to open-source projects, and helping others navigate their own 
              technological journeys.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Facts</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Tech & HomeLab Enthusiast</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Infrastructure Automation Specialist</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Open Source Contributor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Continuous Learning Advocate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-slate-800/30 p-6 rounded-2xl backdrop-blur-sm border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="mb-4">
                <highlight.icon className="w-8 h-8 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};