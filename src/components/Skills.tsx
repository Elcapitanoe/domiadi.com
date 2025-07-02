import React from 'react';
import { 
  Cloud, 
  Database, 
  Shield, 
  Cpu, 
  Network, 
  HardDrive, 
  Terminal, 
  Globe,
  Wifi,
  Lock,
  Activity,
  Layers
} from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Infrastructure & Cloud',
      icon: Cloud,
      skills: [
        { name: 'Virtualization', level: 90, icon: Layers },
        { name: 'Container Orchestration', level: 85, icon: Database },
        { name: 'Cloud Platforms', level: 80, icon: Globe },
        { name: 'Network Design', level: 88, icon: Network }
      ]
    },
    {
      title: 'System Administration',
      icon: Terminal,
      skills: [
        { name: 'Linux Administration', level: 92, icon: Terminal },
        { name: 'Automation Scripts', level: 87, icon: Cpu },
        { name: 'Storage Solutions', level: 83, icon: HardDrive },
        { name: 'Monitoring & Logging', level: 85, icon: Activity }
      ]
    },
    {
      title: 'Security & Networking',
      icon: Shield,
      skills: [
        { name: 'Network Security', level: 86, icon: Lock },
        { name: 'Firewall Management', level: 84, icon: Shield },
        { name: 'VPN Setup', level: 88, icon: Wifi },
        { name: 'Access Control', level: 82, icon: Lock }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Expertise</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning infrastructure, automation, and cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                        <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          transform: `translateX(-${100 - skill.level}%)`,
                          animation: `slideIn 1.5s ease-out ${skillIndex * 0.2}s forwards`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, 
              and methodologies to stay at the forefront of innovation and deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};