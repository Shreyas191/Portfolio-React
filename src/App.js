import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Code, Database, Server, Monitor, ChevronDown, ExternalLink, Calendar, Award, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = ['Software Developer', 'Full Stack Engineer', 'Microservices'];

  // Simple typewriter effect
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
      url: 'https://github.com/Shreyas191/Online-Banking-Application'
    },
    {
      title: 'Smart Contact Manager',
      period: 'June 2023 - Aug 2023',
      tech: ['React.js', 'Spring Boot', 'REST APIs', 'MySQL'],
      description: 'Full-stack application with user authentication, role-based access control, and optimized CRUD operations.',
      highlights: ['User Authentication', 'Role-based Access', 'Optimized Database Queries', 'Dynamic UI Updates'],
      url: 'https://github.com/Shreyas191/Smart-Contact-Manager'
    },
    {
      title: 'Smart Irrigation & Worm Detection',
      period: 'June 2022 - May 2023',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'C++', 'Raspberry Pi'],
      description: 'IoT-based irrigation system with CNN-powered pest detection for efficient water management and crop protection.',
      highlights: ['IoT Integration', 'CNN for Pest Detection', 'Automated Irrigation', 'Real-time Monitoring'],
      url: 'https://github.com/Shreyas191/Smart-Irrigation-and-Worm-Detection'
    },
    {
      title: 'Discount Coupon APIs',
      period: 'Sept 2024 - Oct 2024',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'Hibernate', 'Spring Data JPA', 'RabbitMQ'],
      description: 'Developed RESTful APIs for an Online Shopping Portal to handle product browsing, cart management, order processing, and user authentication, ensuring secure transactions and scalable integration.',
      highlights: ['RESTful API Design', 'Cart & Order Management', 'Secure Transactions', 'Database Integration with Hibernate', 'Event-driven Messaging with RabbitMQ'],
      url: 'https://github.com/Shreyas191/E-Commerce-APIs'
    },
    {
      title: 'Online Gym Portal',
      period: 'Nov 2024 - Feb 2025',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      description: 'Built a digital platform enabling users to access personalized fitness plans, track workout progress, and participate in live or recorded sessions. The system supports both trainers and fitness enthusiasts with comprehensive tools for achieving fitness goals.',
      highlights: ['Personalized Fitness Plans', 'Workout Tracking', 'Live & Recorded Sessions', 'Trainer & User Portal', 'Full-stack Development with Angular & Spring Boot'],
      url: 'https://github.com/Shreyas191/Online-Gym-Portal'
    }


  ];

  const experiences = [
    {
      company: 'Jio Platforms Limited',
      role: 'Software Development Engineer-I',
      period: 'Jan 2024 - July 2025',
      location: 'Navi Mumbai, Maharashtra',
      achievements: [
        "Developed full-stack features for Jio CloudXp's Domain Analytics module using Angular, Java, and Spring Boot",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">SK</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-4 max-w-4xl">
          <div className="mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-white shadow-lg">
              <img
                src="/sk1.jpg"  
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800">
            Shreyas Kaldate
          </h1>
          
          <div className="h-12 flex items-center justify-center mb-6">
            <p className="text-xl md:text-2xl text-blue-600 font-medium">
              {typedText}
              <span className="animate-pulse text-blue-500">|</span>
            </p>
          </div>
          
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer specializing in microservices architecture, cloud platforms, and modern web technologies. 
            Currently pursuing MS in Computer Science at NYU.
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            {[
              { icon: Mail, href: "mailto:shreyaskaldate23@gmail.com", color: "bg-blue-100 hover:bg-blue-200 text-blue-600" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shreyaskaldate/", color: "bg-indigo-100 hover:bg-indigo-200 text-indigo-600" },
              { icon: Github, href: "https://github.com/Shreyas191", color: "bg-gray-100 hover:bg-gray-200 text-gray-700" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a 
                key={index}
                href={href} 
                className={`p-3 rounded-full transition-all duration-200 hover:scale-105 ${color}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/Shreyas_Resume_Updated-2025.pdf"
              download
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <a
              href="#about"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate software developer with expertise in full-stack development, microservices architecture, and cloud technologies. Currently pursuing my Master's degree in Computer Science at NYU while working on building scalable and impactful solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-shadow duration-200">
                  <GraduationCap className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2 text-gray-800">Education</h3>
                  <p className="text-sm text-gray-600">MS Computer Science @ NYU</p>
                  <p className="text-sm text-gray-600">BE Computer Engineering</p>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow duration-200">
                  <MapPin className="w-8 h-8 text-indigo-600 mb-3" />
                  <h3 className="font-semibold mb-2 text-gray-800">Location</h3>
                  <p className="text-sm text-gray-600">New York, NY</p>
                  <p className="text-sm text-gray-600">+1 (551) 424-8886</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Years of Experience</span>
                  <span className="text-blue-600 font-bold text-2xl">2+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projects Completed</span>
                  <span className="text-indigo-600 font-bold text-2xl">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Technologies Mastered</span>
                  <span className="text-green-600 font-bold text-2xl">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Current GPA</span>
                  <span className="text-yellow-600 font-bold text-2xl">3.95/4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Work Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-indigo-600 mb-2">{exp.company}</h4>
                    <p className="text-gray-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500 mt-4 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="grid gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    </a>
                  )}
                </div>
                
                <p className="text-sm text-gray-500 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.period}
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <Award className="w-3 h-3 text-indigo-500 mr-2" />
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-blue-700">Languages</h3>
              <div className="space-y-3">
                {skills.languages.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-16 h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full" 
                        style={{width: `${85 + Math.random() * 15}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
              <Server className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-indigo-700">Technologies</h3>
              <div className="space-y-3">
                {skills.technologies.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-500 rounded-full" 
                        style={{width: `${80 + Math.random() * 20}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <Database className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-green-700">Tools</h3>
              <div className="space-y-3">
                {skills.tools.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-16 h-2 bg-green-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full" 
                        style={{width: `${75 + Math.random() * 25}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <Monitor className="w-8 h-8 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-700">Platforms</h3>
              <div className="space-y-3">
                {skills.platforms.slice(0, 6).map((skill, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-16 h-2 bg-yellow-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-500 rounded-full" 
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Let's Work Together</h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-center">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can create something amazing together.
          </p>
          
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:sk12898@nyu.edu" className="bg-blue-50 p-6 rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-200 text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-gray-800">Email</h3>
              <p className="text-gray-600 text-sm">sk12898@nyu.edu</p>
            </a>
            
            <a href="tel:+919324389863" className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 hover:shadow-md transition-shadow duration-200 text-center">
              <Phone className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-gray-800">Phone</h3>
              <p className="text-gray-600 text-sm">+1 (551) 424-8886</p>
            </a>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-gray-800">Location</h3>
              <p className="text-gray-600 text-sm">New York, NY</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Send Me a Message</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello!"
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  onClick={() => alert('Contact form demo - Please use email link above to reach out!')}
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
                
                <button
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => {
                    const inputs = document.querySelectorAll('input, textarea');
                    inputs.forEach(input => input.value = '');
                  }}
                >
                  Clear Form
                </button>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-300">
              <p className="text-center text-gray-600 text-sm">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Shreyas Kaldate. Built with React and lots of ☕
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "mailto:sk12898@nyu.edu" }
            ].map(({ icon: Icon, href }, index) => (
              <a 
                key={index}
                href={href} 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
