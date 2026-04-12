import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Portfolio Data
  const personalInfo = {
    name: "Samarth Gajghate",
    age: "19",
    email: "samarthgajghate@gmail.com",
    phone: "77698 15303",
    location: "Nagpur, Maharashtra, India"
  };

  const skills = {
    languages: {
      icon: "💻",
      title: "Programming Languages",
      items: ["Python", "JavaScript", "C", "C++"]
    },
    frontend: {
      icon: "🎨",
      title: "Frontend Development",
      items: ["React", "HTML5", "CSS3", "Responsive Design"]
    },
    tools: {
      icon: "🛠️",
      title: "Tools & Technologies",
      items: ["Git", "VS Code", "Linux", "Node.js"]
    },
    concepts: {
      icon: "🧠",
      title: "Core Concepts",
      items: ["OOP", "Data Structures", "Algorithms", "Web APIs"]
    }
  };

  const experience = [
    {
      year: "2024 - 2025",
      title: "Software Development Intern",
      company: "SSIT.ltd",
      description: "Gained hands-on experience in full-stack development, working on real-world projects. Collaborated with senior developers to build scalable web applications and learned industry best practices in software engineering."
    },
    {
      year: "2023 - 2024",
      title: "Frontend Developer",
      company: "Freelance Projects",
      description: "Developed responsive websites and web applications for various clients. Specialized in creating modern, user-friendly interfaces using React and contemporary design principles."
    },
    {
      year: "2022 - 2023",
      title: "Programming Foundation",
      company: "Self-Learning",
      description: "Started programming journey with C and C++. Built strong foundation in computer science fundamentals including data structures, algorithms, and object-oriented programming."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product management, and payment integration. Built with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and team collaboration features. Implemented drag-and-drop functionality and notifications.",
      tech: ["React", "JavaScript", "CSS3", "Local Storage"]
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application displaying real-time weather data with beautiful visualizations. Features include location search and 7-day forecasts.",
      tech: ["React", "API Integration", "Chart.js"]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills with modern animations and responsive design. Features smooth scrolling and interactive elements.",
      tech: ["React", "Framer Motion", "CSS3"]
    },
    {
      title: "Code Snippet Manager",
      description: "Application for organizing and managing code snippets with syntax highlighting and categorization features.",
      tech: ["JavaScript", "Python", "HTML/CSS"]
    },
    {
      title: "Blog Platform",
      description: "Content management system for creating and publishing blog posts with markdown support and commenting functionality.",
      tech: ["React", "Node.js", "MongoDB"]
    }
  ];

  // Typewriter effect hook
  const useTypewriter = (text, speed = 100) => {
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prev => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      
      return () => clearInterval(timer);
    }, [text, speed]);
    
    return displayText;
  };

  const typedName = useTypewriter(personalInfo.name, 150);

  // Parallax effect for hero section
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            SG
          </motion.div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <motion.div 
            className="geometric-shape shape-1"
            style={{ y: y1 }}
          />
          <motion.div 
            className="geometric-shape shape-2"
            style={{ y: y2 }}
          />
          <div className="geometric-shape shape-3" />
        </div>
        
        <motion.div 
          className="hero-content"
          style={{ opacity }}
        >
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Software Developer & Problem Solver
          </motion.p>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {typedName}
            <span style={{ opacity: 0.5 }}>|</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Crafting elegant solutions through code. Specialized in building 
            modern web applications with cutting-edge technologies.
          </motion.p>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Year Experience</span>
            </div>
          </motion.div>

          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn-primary">Get In Touch</button>
            </motion.a>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn-secondary">View Projects</button>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-container">
          <div className="section-header fade-in">
            <p className="section-label">Introduction</p>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-grid">
            <motion.div 
              className="about-content slide-in-left"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="about-text">
                I am a passionate software developer with a strong foundation in programming 
                and web development. Currently at {personalInfo.age} years old, I've dedicated 
                myself to mastering modern technologies and creating impactful digital solutions.
              </p>
              <p className="about-text">
                My journey in software development began with C programming and has evolved 
                to encompass full-stack web development. I thrive on solving complex problems 
                and continuously expanding my technical expertise.
              </p>

              <div className="personal-info">
                <motion.div 
                  className="info-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="info-label">Email:</span>
                  <span className="info-value">{personalInfo.email}</span>
                </motion.div>
                <motion.div 
                  className="info-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="info-label">Phone:</span>
                  <span className="info-value">{personalInfo.phone}</span>
                </motion.div>
                <motion.div 
                  className="info-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="info-label">Location:</span>
                  <span className="info-value">{personalInfo.location}</span>
                </motion.div>
                <motion.div 
                  className="info-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="info-label">Age:</span>
                  <span className="info-value">{personalInfo.age} Years</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="profile-visual slide-in-right"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="initials"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                SG
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-container">
          <div className="section-header fade-in">
            <p className="section-label">Expertise</p>
            <h2 className="section-title">Technical Skills</h2>
          </div>

          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {Object.entries(skills).map(([key, category], index) => (
              <motion.div
                key={key}
                className="skill-category fade-in"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
                <div className="skill-tags">
                  {category.items.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="skill-tag"
                      whileHover={{ y: -3, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-container">
          <div className="section-header fade-in">
            <p className="section-label">Journey</p>
            <h2 className="section-title">Professional Experience</h2>
          </div>

          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item slide-in-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div 
                  className="timeline-content"
                  whileHover={{ x: 10, borderLeftWidth: "8px" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="timeline-year">{exp.year}</p>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-description">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-container">
          <div className="section-header fade-in">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="skill-category fade-in"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <div className="category-icon">📁</div>
                <h3 className="category-title">{project.title}</h3>
                <p className="about-text" style={{ marginTop: '1rem' }}>
                  {project.description}
                </p>
                <div className="skill-tags" style={{ marginTop: '1rem' }}>
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="skill-tag"
                      whileHover={{ y: -3, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-container">
          <div className="section-header fade-in">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Contact Me</h2>
          </div>

          <div className="contact-grid">
            <motion.div 
              className="contact-info slide-in-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10, borderColor: "var(--accent-gold)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>{personalInfo.email}</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 10, borderColor: "var(--accent-gold)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>{personalInfo.phone}</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 10, borderColor: "var(--accent-gold)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>{personalInfo.location}</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 10, borderColor: "var(--accent-gold)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <h3>Available For</h3>
                  <p>Freelance & Full-time Opportunities</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="contact-form-wrapper slide-in-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <motion.input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <motion.input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <motion.input
                    type="text"
                    id="subject"
                    placeholder="Project Inquiry"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <motion.textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="footer-text">
            © 2026 <span className="footer-highlight">Samarth Gajghate</span> — 
            Crafted with passion and precision
          </p>
          <p className="footer-text" style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
            Built with React, Framer Motion, and Modern Web Technologies
          </p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;