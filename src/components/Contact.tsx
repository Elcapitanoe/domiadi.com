import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Server, 
  Monitor, 
  Send, 
  MapPin, 
  Clock,
  MessageCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'mail@domiadi.com',
      href: 'mailto:mail@domiadi.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Available Worldwide',
      href: null
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      href: null
    }
  ];

  const socialLinks = [
    { href: 'https://github.com/elcapitanoe', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/domiadiwijaya', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://cloud.domiadi.com', icon: Server, label: 'Cloud Server' },
    { href: 'https://status.domiadi.com', icon: Monitor, label: 'Status Monitor' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Domi,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:mail@domiadi.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Connect</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to discuss your next project or explore innovative technology solutions? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-blue-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-slate-300 mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or ask me anything..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-300 mb-8">
                I'm always excited to discuss new opportunities, share insights about technology, 
                or help with your next innovative project.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                      <info.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-slate-300">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

           /* { Social Links }
            <div>
              <h4 className="text-white font-medium mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:rotate-3 group"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div> */
			
            {/* Status Links */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/20">
              <h4 className="text-white font-medium mb-4">System Status</h4>
              <div className="space-y-3">
                <a 
                  href="https://cloud.domiadi.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Server className="w-4 h-4" />
                  <span>Cloud Services</span>
                </a>
                <a 
                  href="https://status.domiadi.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Monitor className="w-4 h-4" />
                  <span>Status Monitor</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};