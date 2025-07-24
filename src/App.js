import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Code, Database, Server, Monitor, ChevronDown, ExternalLink, Calendar, Award, Briefcase, GraduationCap, Sparkles, Zap, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = ['Software Developer', 'Full Stack Engineer', 'Microservices Architect', 'Cloud Enthusiast'];
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    
    const type = () => {
      const currentRoleText = roles[currentRole];
      
      if (isTyping) {
        if (typedText.length < currentRoleText.length) {
          setTypedText(currentRoleText.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), pauseTime);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }
      }
    };
    
    const timer = setTimeout(type, isTyping ? typeSpeed : deleteSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isTyping, currentRole, roles]);

  const skills = {
    languages: ['Java', 'C', 'C++', 'HTML', 'CSS', 'TypeScript', 'Python', 'SQL'],
    technologies: ['Spring Boot', 'Hibernate', 'REST APIs', 'Microservices', 'Angular', 'Bootstrap'],
    tools: ['MySQL', 'PostgreSQL', 'Postman', 'Git', 'Docker', 'Excel', 'PowerPoint'],
    platforms: ['IntelliJ', 'VS Code', 'Eclipse', 'GitHub', 'GitLab', 'Gitea', 'Jupyter Notebook', 'Azure DevOps']
  };

  const projects = [
    {
      title: 'Online Banking Application',
      period: 'Apr 2024 - Dec 2024',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
      description: 'Designed microservices architecture with Spring Cloud, implemented OAuth2 security, and utilized Docker & Kubernetes for scalability.',
      highlights: ['Microservices Architecture', 'Spring Cloud Config', 'OAuth2 Security', 'Docker & Kubernetes'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smart Contact Manager',
      period: 'June 2023 - Aug 2023',
      tech: ['React.js', 'Spring Boot', 'REST APIs', 'MySQL'],
      description: 'Full-stack application with user authentication, role-based access control, and optimized CRUD operations.',
      highlights: ['User Authentication', 'Role-based Access', 'Optimized Database Queries', 'Dynamic UI Updates'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Smart Irrigation & Worm Detection',
      period: 'June 2022 - May 2023',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'C++', 'Raspberry Pi'],
      description: 'IoT-based irrigation system with CNN-powered pest detection for efficient water management and crop protection.',
      highlights: ['IoT Integration', 'CNN for Pest Detection', 'Automated Irrigation', 'Real-time Monitoring'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const experiences = [
    {
      company: 'Jio Platforms Limited',
      role: 'Software Development Engineer-I',
      period: 'Jan 2024 - July 2025',
      location: 'Navi Mumbai, Maharashtra',
      achievements: [
        'Developed full-stack features for Domain Analytics module using Angular, Java, and Spring Boot',
        'Built 20+ responsive Angular components with real-time data integration, increasing user engagement by 30%',
        'Engineered 15+ scalable microservices with Spring Security OAuth2, reducing unauthorized access by 40%',
        'Worked in 10-member Agile team achieving 95% on-time delivery rate'
      ]
    },
    {
      company: 'Pie Infocom Pvt Ltd',
      role: 'Java Developer Intern',
      period: 'Nov 2021 - Dec 2021',
      location: 'Mumbai, Maharashtra',
      achievements: [
        'Developed RESTful APIs using Spring Boot for microservices communication',
        'Designed scalable microservices architecture with Spring Data JPA and Hibernate',
        'Containerized services using Docker and optimized backend logic',
        'Improved system efficiency by 20% and reduced response time'
      ]
    }
  ];

  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute animate-float-${i % 4 + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          {i % 3 === 0 ? (
            <Sparkles className="w-4 h-4 text-blue-400/30" />
          ) : i % 3 === 1 ? (
            <Star className="w-3 h-3 text-purple-400/30" />
          ) : (
            <Zap className="w-3 h-3 text-pink-400/30" />
          )}
        </div>
      ))}
    </div>
  );

  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        >
          <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"></div>
        </div>
      ))}
    </div>
  );

  const WaveAnimation = () => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg
        className="relative block w-full h-20"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-current text-blue-500/10 animate-wave"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="fill-current text-purple-500/10 animate-wave-slow"
        />
      </svg>
    </div>
  );

  const ScrollIndicator = () => (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
        <ChevronDown className="w-4 h-4 text-white/50 animate-pulse" />
      </div>
    </div>
  );

  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        },
        { threshold: 0.5 }
      );
      
      if (countRef.current) observer.observe(countRef.current);
      return () => observer.disconnect();
    }, [end, duration]);
    
    return <span ref={countRef}>{count}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-90deg); }
        }
        @keyframes particle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        @keyframes wave {
          0% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(-25px) translateY(-5px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        @keyframes wave-slow {
          0% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(25px) translateY(5px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scroll-indicator {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(20px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.3); }
        }
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 5s ease-in-out infinite; }
        .animate-particle { animation: particle linear infinite; }
        .animate-wave { animation: wave 3s ease-in-out infinite; }
        .animate-wave-slow { animation: wave-slow 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-scroll-indicator { animation: scroll-indicator 2s ease-in-out infinite; }
        .animate-gradient { animation: gradient-shift 3s ease infinite; background-size: 200% 200%; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .text-shimmer {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
      
      <ParticleBackground />
      <FloatingElements />
      
      {/* Enhanced mouse follower with trail */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-150 animate-pulse-glow"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />
      <div 
        className="fixed w-12 h-12 border-2 border-blue-400/30 rounded-full pointer-events-none z-40 transition-all duration-300"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
      />

      {/* Navigation with glass morphism */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold text-shimmer animate-pulse">
              SK
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-300 transition-all duration-300 relative group transform hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500"></span>
                  <span className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-blue-400/0 to-purple-500/0 group-hover:from-blue-400/10 group-hover:to-purple-500/10 rounded transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" ref={heroRef}>
        <WaveAnimation />
        
        <div className={`text-center z-10 transition-all duration-2000 px-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center text-5xl md:text-6xl font-bold shadow-2xl animate-pulse-glow transform hover:scale-110 transition-all duration-500 animate-gradient">
              <span className="text-white drop-shadow-2xl">SK</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-shimmer transform hover:scale-105 transition-all duration-500 leading-tight">
            Shreyas Kaldate
          </h1>
          
          <div className="h-12 md:h-16 flex items-center justify-center mb-6">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
              {typedText}
              <span className="animate-pulse text-blue-400">|</span>
            </p>
          </div>
          
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed transform hover:scale-105 transition-all duration-300 px-4">
            Full-stack developer specializing in microservices architecture, cloud platforms, and modern web technologies. 
            Currently pursuing MS in Computer Science at NYU.
          </p>
          
          <div className="flex justify-center space-x-4 md:space-x-6 mb-8">
            {[
              { icon: Mail, href: "mailto:sk12898@nyu.edu", color: "from-blue-500 to-cyan-500" },
              { icon: Linkedin, href: "#", color: "from-purple-500 to-pink-500" },
              { icon: Github, href: "#", color: "from-gray-500 to-slate-600" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a 
                key={index}
                href={href} 
                className={`p-3 md:p-4 bg-gradient-to-r ${color} rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-125 hover:rotate-12 animate-pulse-glow`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
  <a
    href="/Shreyas Kaldate-Resume-2025.pdf"
    download
    className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-110 shadow-2xl animate-gradient hover:animate-pulse-glow group text-center"
  >
    <span className="flex items-center justify-center space-x-2">
      <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
      <span className="text-sm md:text-base">Download Resume</span>
    </span>
  </a>

  <a
    href="#about"
    className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-500 transform hover:scale-110 backdrop-blur-sm text-center text-sm md:text-base"
  >
    Learn More
  </a>
</div>

        </div>
        <ScrollIndicator />
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-shimmer animate-gradient">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 transform hover:scale-105 transition-all duration-500">
              <p className="text-lg text-gray-300 leading-relaxed animate-fade-in">
                I'm a passionate software developer with expertise in full-stack development, microservices architecture, 
                and cloud technologies. Currently pursuing my Master's degree at NYU while building scalable solutions 
                at Jio Platforms Limited.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-110 hover:rotate-2 group animate-pulse-glow">
                  <GraduationCap className="w-8 h-8 text-blue-400 mb-3 group-hover:animate-bounce" />
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-gray-400">MS Computer Science @ NYU</p>
                  <p className="text-sm text-gray-400">BE Computer Engineering</p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/10 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-110 hover:-rotate-2 group animate-pulse-glow">
                  <MapPin className="w-8 h-8 text-purple-400 mb-3 group-hover:animate-bounce" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-gray-400">New York, NY</p>
                  <p className="text-sm text-gray-400">+91 9324389863</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 p-8 rounded-2xl backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-500 animate-gradient hover:animate-pulse-glow">
              <h3 className="text-2xl font-semibold mb-6 text-center text-shimmer">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center group">
                  <span className="group-hover:text-blue-300 transition-colors">Years of Experience</span>
                  <span className="text-blue-400 font-bold text-2xl">
                    <AnimatedCounter end={2} suffix="+" />
                  </span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="group-hover:text-purple-300 transition-colors">Projects Completed</span>
                  <span className="text-purple-400 font-bold text-2xl">
                    <AnimatedCounter end={2} suffix="+" />
                  </span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="group-hover:text-green-300 transition-colors">Technologies Mastered</span>
                  <span className="text-green-400 font-bold text-2xl">
                    <AnimatedCounter end={15} suffix="+" />
                  </span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="group-hover:text-yellow-300 transition-colors">Current GPA</span>
                  <span className="text-yellow-400 font-bold text-2xl">3.67/4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 bg-black/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-shimmer animate-gradient">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-700 transform hover:scale-105 hover:rotate-1 group animate-gradient animate-pulse-glow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="transform group-hover:scale-105 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2 group-hover:text-blue-300">{exp.role}</h3>
                    <h4 className="text-xl text-purple-400 mb-2 group-hover:text-purple-300">{exp.company}</h4>
                    <p className="text-gray-400 flex items-center group-hover:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-400 mt-4 md:mt-0 group-hover:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="grid gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start group/item hover:transform hover:translate-x-2 transition-all duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:animate-pulse group-hover/item:scale-150"></div>
                      <p className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-shimmer animate-gradient">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-700 transform hover:scale-110 hover:rotate-3 group animate-pulse-glow`}>
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl ${project.color}"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors transform group-hover:scale-105">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:animate-bounce transition-colors" />
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 group-hover:animate-spin transition-all" />
                    {project.period}
                  </p>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-white transition-colors">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-400/30 hover:bg-blue-600/40 hover:scale-110 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-sm group/highlight hover:translate-x-2 transition-all duration-300">
                        <Award className="w-3 h-3 text-purple-400 mr-2 group-hover/highlight:animate-spin" />
                        <span className="text-gray-400 group-hover/highlight:text-white">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-black/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-shimmer animate-gradient">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 p-6 rounded-2xl backdrop-blur-lg border border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 transform hover:scale-105 hover:rotate-2 group animate-pulse-glow">
              <Code className="w-8 h-8 text-blue-400 mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold mb-4 text-blue-400 group-hover:text-blue-300">Languages</h3>
              <div className="space-y-3">
                {skills.languages.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between group/skill">
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors">{skill}</span>
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 hover:animate-pulse" 
                        style={{width: `${85 + Math.random() * 15}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/10 to-purple-800/10 p-6 rounded-2xl backdrop-blur-lg border border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-105 hover:-rotate-2 group animate-pulse-glow">
              <Server className="w-8 h-8 text-purple-400 mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold mb-4 text-purple-400 group-hover:text-purple-300">Technologies</h3>
              <div className="space-y-3">
                {skills.technologies.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between group/skill">
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors">{skill}</span>
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-1000 hover:animate-pulse" 
                        style={{width: `${80 + Math.random() * 20}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/10 to-green-800/10 p-6 rounded-2xl backdrop-blur-lg border border-green-400/20 hover:border-green-400/60 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group animate-pulse-glow">
              <Database className="w-8 h-8 text-green-400 mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold mb-4 text-green-400 group-hover:text-green-300">Tools</h3>
              <div className="space-y-3">
                {skills.tools.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between group/skill">
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors">{skill}</span>
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 hover:animate-pulse" 
                        style={{width: `${75 + Math.random() * 25}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-600/10 to-orange-800/10 p-6 rounded-2xl backdrop-blur-lg border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group animate-pulse-glow">
              <Monitor className="w-8 h-8 text-yellow-400 mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400 group-hover:text-yellow-300">Platforms</h3>
              <div className="space-y-3">
                {skills.platforms.slice(0, 6).map((skill, i) => (
                  <div key={i} className="flex items-center justify-between group/skill">
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors">{skill}</span>
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full transition-all duration-1000 hover:animate-pulse" 
                        style={{width: `${80 + Math.random() * 20}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-8 text-shimmer animate-gradient">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto text-center transform hover:scale-105 transition-all duration-300">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can create something amazing together.
          </p>
          
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:sk12898@nyu.edu" className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-500 group transform hover:scale-105 hover:rotate-1 animate-pulse-glow">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-blue-300 text-center">Email</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors text-center text-sm">sk12898@nyu.edu</p>
            </a>
            
            <a href="tel:+919324389863" className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/10 hover:border-purple-400/50 transition-all duration-500 group transform hover:scale-105 hover:-rotate-1 animate-pulse-glow">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-purple-300 text-center">Phone</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors text-center text-sm">+91 9324389863</p>
            </a>
            
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/10 hover:border-green-400/50 transition-all duration-500 group transform hover:scale-105 hover:rotate-1 animate-pulse-glow">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-green-300 text-center">Location</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors text-center text-sm">New York, NY</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-blue-400/30 transition-all duration-500 animate-gradient">
            <h3 className="text-2xl font-bold text-center mb-8 text-shimmer">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-blue-300 transition-colors">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-white placeholder-gray-400 transition-all duration-300 hover:border-white/40 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-300 transition-colors">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 text-white placeholder-gray-400 transition-all duration-300 hover:border-white/40 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-green-300 transition-colors">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 text-white placeholder-gray-400 transition-all duration-300 hover:border-white/40 backdrop-blur-sm"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-yellow-300 transition-colors">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 text-white placeholder-gray-400 transition-all duration-300 hover:border-white/40 backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello!"
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-110 shadow-2xl animate-gradient hover:animate-pulse-glow group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Send Message</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                
                <button
                  type="reset"
                  className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm"
                >
                  Clear Form
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-center text-gray-400 text-sm">
                I typically respond within 24 hours. Looking forward to hearing from you! 
                <span className="animate-pulse">✨</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4 transform hover:scale-105 transition-all duration-300">
            © 2025 Shreyas Kaldate. Built with React and lots of ☕
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#", delay: "0s" },
              { icon: Linkedin, href: "#", delay: "0.1s" },
              { icon: Mail, href: "mailto:sk12898@nyu.edu", delay: "0.2s" }
            ].map(({ icon: Icon, href, delay }, index) => (
              <a 
                key={index}
                href={href} 
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                style={{ animationDelay: delay }}
              >
                <Icon className="w-6 h-6 hover:animate-bounce" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;