import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, ExternalLink, Menu, X, Brain, Code, Database, Cpu, FileText, Award, Briefcase, GraduationCap, MapPin, Phone, Globe, Terminal } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "AI Medical Diagnosis Thing",
      description: "Making computers understand skin diseases using fancy AI models. Basically teaching machines to be doctors (kinda).",
      tech: ["Python", "Deep Learning", "VLMs", "XAI"],
      category: "Thesis Project",
      period: "Nov 2025 - Now",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Production AI Stuff",
      description: "Built real AI systems that actually work in production. Turns out making AI work outside notebooks is hard!",
      tech: ["Python", "ML", "AI Integration"],
      category: "Work",
      period: "Mar - Jul 2025",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      title: "Deep Learning Adventures",
      description: "Optimizing neural networks and making them faster. Because nobody likes waiting for models to train.",
      tech: ["PyTorch", "TensorFlow", "Optimization"],
      category: "Research",
      period: "2024",
      icon: <Code className="w-5 h-5" />,
    }
  ];

  const skills = [
    { name: "Machine Learning", level: 95 },
    { name: "Deep Learning", level: 92 },
    { name: "Python", level: 90 },
    { name: "Data Processing", level: 88 },
    { name: "Computer Vision", level: 85 },
    { name: "AI Development", level: 87 }
  ];

  const experience = [
    {
      role: "AI Research Developer",
      company: "University of Muhammadiyah Jember",
      period: "Nov 2025 - Present",
      achievements: [
        "Teaching computers to diagnose skin diseases",
        "Playing with Vision-Language Models (they're cool!)",
        "Making AI explainable because 'trust me bro' doesn't work in healthcare"
      ]
    },
    {
      role: "AI / Software Engineer",
      company: "Braincore.id",
      period: "Mar 2025 - Jul 2025",
      achievements: [
        "Shipped AI features that people actually use",
        "Learned that production code is very different from Jupyter notebooks",
        "Worked with awesome people and didn't break production (much)"
      ]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const fullName = "Fahreza Rizky Pradana";
const [typedName, setTypedName] = useState("");
const [showCursor, setShowCursor] = useState(true);

useEffect(() => {
  let index = 0;

  const typingInterval = setInterval(() => {
    setTypedName(fullName.slice(0, index + 1));
    index++;

    if (index === fullName.length) {
      clearInterval(typingInterval);
    }
  }, 100); // kecepatan mengetik (ms)

  const cursorInterval = setInterval(() => {
    setShowCursor((prev) => !prev);
  }, 500);

  return () => {
    clearInterval(typingInterval);
    clearInterval(cursorInterval);
  };
}, []);

const roles = [
  "Software Engineer",
  "Web Developer",
  "AI Engineer",
  "Computer Vision Engineer"
];

const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
const [displayedRole, setDisplayedRole] = useState("");
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentRole = roles[currentRoleIndex];
  let typingSpeed = isDeleting ? 50 : 100;

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      // Typing
      setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));

      if (displayedRole === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200); // pause sebelum hapus
      }
    } else {
      // Deleting
      setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));

      if (displayedRole === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, typingSpeed);

  return () => clearTimeout(timeout);
}, [displayedRole, isDeleting, currentRoleIndex]);


  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: floatDelayed 7s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
      `}</style>

      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      {/* Animated gradient orb that follows mouse */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 blur-3xl transition-all duration-1000 pointer-events-none"
        style={{
          left: `${mousePos.x - 192}px`,
          top: `${mousePos.y - 192}px`,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-sm font-bold">
                F
              </div> */}
              <span className="font-medium">reza_lnc</span>
            </div>
            
            <div className="hidden md:flex gap-8">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="text-slate-300 hover:text-white transition-colors text-sm capitalize"
                >
                  {section}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="block w-full text-left text-slate-300 hover:text-white transition py-2 capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 backdrop-blur-xl border border-white/10 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-slate-300">Down to collaborate!</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Fahreza Rizky Pradana
              </h1>

              
              <h2 className="text-2xl md:text-3xl font-medium mb-6 font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  {displayedRole}
                </span>
                <span className="text-blue-400 ml-1 animate-pulse">|</span>
              </h2>

              
              <p className="text-slate-400 mb-8 leading-relaxed">
                Basically I teach computers to think 🤖. Been playing with neural networks 
                and deep learning for 3+ years. Love building stuff that actually works, 
                not just cool demos.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="px-3 py-1.5 rounded-lg bg-slate-800/30 backdrop-blur-xl border border-white/10 text-sm text-slate-300 hover:scale-105 transition-transform">
                  📍 Jember, Indonesia
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-slate-800/30 backdrop-blur-xl border border-white/10 text-sm text-slate-300 hover:scale-105 transition-transform">
                  🌐 Remote friendly
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-white text-slate-950 rounded-xl font-medium hover:bg-slate-100 hover:scale-105 transition-all"
                >
                  Let's chat
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-xl font-medium hover:bg-slate-800/80 hover:scale-105 transition-all"
                >
                  Check my work
                </button>
              </div>
            </div>

            {/* Right Content - Floating Cards */}
            <div className="hidden md:block relative h-96">
              <div className="absolute top-0 right-0 w-56 bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300 animate-float">
                <Brain className="w-10 h-10 text-blue-400 mb-3" />
                <p className="text-sm font-medium text-white mb-1">Deep Learning</p>
                <p className="text-xs text-slate-400">Making neural nets go brrr</p>
              </div>

              <div className="absolute bottom-0 left-0 w-56 bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300 animate-float-delayed">
                <Terminal className="w-10 h-10 text-violet-400 mb-3" />
                <p className="text-sm font-medium text-white mb-1">Development</p>
                <p className="text-xs text-slate-400">Code that doesn't crash (hopefully)</p>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 shadow-2xl z-10 hover:scale-105 transition-transform duration-300 animate-float-slow">
                <Code className="w-10 h-10 text-emerald-400 mb-3" />
                <p className="text-sm font-medium text-white mb-1">Computer Vision</p>
                <p className="text-xs text-slate-400">Teaching computers to see</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-3 text-white">A bit about me</h2>
          <p className="text-slate-400 mb-8">The stuff you might wanna know</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">School stuff</h3>
              </div>
              <p className="text-slate-300 mb-1 font-medium">Computer Science</p>
              <p className="text-slate-400 text-sm mb-3">University of Muhammadiyah Jember</p>
              <p className="text-slate-400 text-sm mb-4">Majoring in AI & Software Tech</p>
              <div className="p-3 bg-slate-700/30 rounded-xl border border-white/5">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Currently working on: Teaching AI to diagnose skin diseases using fancy vision-language models 🔬
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold">What I'm into</h3>
              </div>
              <div className="space-y-2">
                <div className="p-2.5 bg-slate-700/30 rounded-lg border border-white/5 hover:bg-slate-700/50 transition-colors">
                  <p className="text-sm text-slate-300">🤖 Making AI actually useful</p>
                </div>
                <div className="p-2.5 bg-slate-700/30 rounded-lg border border-white/5 hover:bg-slate-700/50 transition-colors">
                  <p className="text-sm text-slate-300">🧠 Deep Learning magic</p>
                </div>
                <div className="p-2.5 bg-slate-700/30 rounded-lg border border-white/5 hover:bg-slate-700/50 transition-colors">
                  <p className="text-sm text-slate-300">👁️ Computer Vision stuff</p>
                </div>
                <div className="p-2.5 bg-slate-700/30 rounded-lg border border-white/5 hover:bg-slate-700/50 transition-colors">
                  <p className="text-sm text-slate-300">📊 Data wrangling</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-xs text-slate-400">Languages: Indonesian, English (and Python lol)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-3 text-white">Where I've been</h2>
          <p className="text-slate-400 mb-8">My journey so far</p>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all hover:scale-[1.01] group"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                    <p className="text-slate-300 text-sm mb-1">{exp.company}</p>
                    <p className="text-slate-500 text-xs">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-14">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400 text-sm hover:text-slate-300 transition-colors">
                      <span className="text-blue-400 mt-0.5">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-3 text-white">Cool stuff I built</h2>
          <p className="text-slate-400 mb-8">Projects that didn't explode (yet)</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all group hover:scale-105 cursor-pointer"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center group-hover:rotate-12 transition-transform">
                    {project.icon}
                  </div>
                  <span className="text-2xl">{project.emoji}</span>
                  <span className="text-xs px-2.5 py-1 bg-slate-700/50 rounded-lg text-slate-300 border border-white/10">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-base font-semibold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-xs mb-3 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700/30 text-slate-300 text-xs rounded-md border border-white/5 hover:bg-slate-700/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-xs text-slate-500">{project.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-3 text-white">My toolkit</h2>
          <p className="text-slate-400 mb-8">Tech I work with daily</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 hover:border-blue-500/30 transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-sm group-hover:text-blue-400 transition-colors">{skill.name}</span>
                  <span className="text-blue-400 font-medium text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Git'].map((tech, i) => (
              <div 
                key={i} 
                className="bg-slate-800/30 backdrop-blur-2xl rounded-xl p-3 border border-white/10 text-center hover:border-white/20 hover:scale-105 transition-all cursor-default"
                style={{
                  animation: `popIn 0.5s ease-out ${i * 0.05}s both`
                }}
              >
                <span className="text-sm text-slate-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-3 text-white">Hit me up!</h2>
          <p className="text-slate-400 mb-10">
            Let's build something cool together. Coffee's on me ☕
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <a 
              href="mailto:rizkyfahreza937@gmail.com" 
              className="bg-slate-800/30 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 hover:border-blue-500/50 transition-all group hover:scale-105"
            >
              <Mail className="w-6 h-6 mb-3 text-blue-400 group-hover:animate-bounce" />
              <p className="text-xs text-slate-500 mb-1">Email me</p>
              <p className="text-white text-sm font-medium">rizkyfahreza937@gmail.com</p>
            </a>
            
            <a 
              href="https://www.instagram.com/reza_lnc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/30 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 hover:border-pink-500/50 transition-all group hover:scale-105"
            >
              <Instagram className="w-6 h-6 mb-3 text-pink-400 group-hover:animate-bounce" />
              <p className="text-xs text-slate-500 mb-1">Follow on Instagram</p>
              <p className="text-white text-sm font-medium">@reza_lnc</p>
            </a>


            
            <a 
              href="https://share.google/7MLsI2bszg1zzBo29" 
              className="bg-slate-800/30 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 hover:border-emerald-500/50 transition-all group hover:scale-105"
            >
              <MapPin className="w-6 h-6 mb-3 text-emerald-400 group-hover:animate-bounce" />
              <p className="text-xs text-slate-500 mb-1">Location</p>
              <p className="text-white text-sm font-medium">Jember, East Java</p>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/thefool2507" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-slate-800/30 backdrop-blur-2xl rounded-xl border border-white/10 hover:border-white/20 transition-all flex items-center justify-center hover:scale-110 hover:rotate-12"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/fahrezarizkypradana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-slate-800/30 backdrop-blur-2xl rounded-xl border border-white/10 hover:border-white/20 transition-all flex items-center justify-center hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-slate-500 text-sm">© 2026 Fahreza Rizky Pradana • Built with and lots of coffee</p>
        </div>
      </footer>
    </div>
  );
}