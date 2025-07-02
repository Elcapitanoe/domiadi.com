import React from 'react';
import { 
  Server, 
  Cloud, 
  Shield, 
  Cog, 
  Monitor, 
  Database,
  ArrowRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'HomeLab Infrastructure',
      description: 'Design and implementation of sophisticated home laboratory environments for testing, development, and production workloads.',
      features: ['Hardware Selection', 'Network Architecture', 'Virtualization Setup', 'Storage Solutions']
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Setup',
      description: 'Seamless migration of services to cloud platforms with optimized architecture and cost-effective solutions.',
      features: ['Cloud Architecture', 'Migration Planning', 'Cost Optimization', 'Performance Tuning']
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Comprehensive security solutions including network protection, access control, and monitoring systems.',
      features: ['Network Security', 'Access Control', 'Firewall Configuration', 'Security Auditing']
    },
    {
      icon: Cog,
      title: 'Automation & Scripting',
      description: 'Custom automation solutions to streamline operations, reduce manual tasks, and improve system reliability.',
      features: ['Process Automation', 'Custom Scripts', 'CI/CD Pipelines', 'Infrastructure as Code']
    },
    {
      icon: Monitor,
      title: 'Monitoring & Alerting',
      description: 'Comprehensive monitoring solutions with real-time alerting and performance analytics for optimal system health.',
      features: ['System Monitoring', 'Performance Analytics', 'Alert Management', 'Dashboard Creation']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Robust data management solutions including backup strategies, disaster recovery, and data optimization.',
      features: ['Backup Solutions', 'Disaster Recovery', 'Data Migration', 'Storage Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Expertise</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your infrastructure and automation needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-slate-800/50">
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl w-fit group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-purple-400 transition-colors duration-300"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-blue-400 group-hover:text-white transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Custom Solutions Available
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Every project is unique. I work closely with clients to understand their specific requirements 
              and deliver tailored solutions that exceed expectations.
            </p>
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};