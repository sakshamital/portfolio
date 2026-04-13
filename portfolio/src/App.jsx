import "./App.css"
import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [cursorActive, setCursorActive] = useState(false)
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, cursorDotX = 0, cursorDotY = 0
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      cursorDotX += (mouseX - cursorDotX) * 0.25
      cursorDotY += (mouseY - cursorDotY) * 0.25

      if (cursorRef.current) cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      if (cursorDotRef.current) cursorDotRef.current.style.transform = `translate(${cursorDotX}px, ${cursorDotY}px)`
      requestAnimationFrame(animateCursor)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animateCursor()
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const personalInfo = {
    name: "Saksham Ital", age: 18, mobile: "+91 9370638940",
    email: "sakshamital705@gmail.com", location: "Nagpur, Maharashtra, India",
    title: "Full Stack Developer & Cybersecurity Enthusiast",
    bio: "Passionate 18-year-old developer with expertise in full-stack development and cybersecurity. Completed professional internship at DEVSYNC.PVT.LTD."
  }

  const skills = [
    { name: "Python", icon: "🐍", level: "Advanced", description: "Backend development, automation, AI/ML" },
    { name: "JavaScript", icon: "⚡", level: "Advanced", description: "ES6+, async programming" },
    { name: "C Programming", icon: "💻", level: "Intermediate", description: "Systems programming" },
    { name: "React", icon: "⚛️", level: "Advanced", description: "Hooks, Context API" },
    { name: "Node.js", icon: "🟢", level: "Advanced", description: "Express, REST APIs" },
    { name: "HTML & CSS", icon: "🎨", level: "Expert", description: "Responsive design" },
    { name: "MongoDB", icon: "🍃", level: "Intermediate", description: "NoSQL databases" },
    { name: "Cybersecurity", icon: "🔒", level: "Intermediate", description: "Penetration testing" },
    { name: "Ethical Hacking", icon: "🎯", level: "Beginner-Intermediate", description: "Security audits" },
    { name: "Git & GitHub", icon: "🔧", level: "Advanced", description: "Version control" },
    { name: "Linux", icon: "🐧", level: "Intermediate", description: "Command line" },
    { name: "C++", icon: "➕", level: "Intermediate", description: "OOP, STL" }
  ]

  const projects = [
    { number: "01", title: "Scam Detection System", 
      description: "Advanced AI-powered system using machine learning algorithms for Telegram scam detection.",
      tags: ["Python", "AI/ML", "NLP", "TensorFlow"],
      technologies: "Built with Python, TensorFlow, and Telegram Bot API." },
    { number: "02", title: "Professional React Portfolio",
      description: "Modern portfolio with advanced animations and glassmorphism design.",
      tags: ["React", "Framer Motion", "CSS3"],
      technologies: "Developed using React 18 and Framer Motion." },
    { number: "03", title: "Secure Chat Application",
      description: "End-to-end encrypted messaging platform with real-time communication.",
      tags: ["Node.js", "Socket.io", "React", "MongoDB"],
      technologies: "Built with MERN stack and AES-256 encryption." },
    { number: "04", title: "AI Automation Tool",
      description: "Intelligent automation system for workflow efficiency.",
      tags: ["Python", "AI", "Machine Learning"],
      technologies: "Powered by Python and scikit-learn." },
    { number: "05", title: "Vulnerability Scanner",
      description: "Cybersecurity tool for web application security assessment.",
      tags: ["Python", "Security", "Ethical Hacking"],
      technologies: "Custom vulnerability detection algorithms." },
    { number: "06", title: "E-Commerce Platform",
      description: "Full-stack e-commerce with payment integration.",
      tags: ["React", "Node.js", "Stripe", "JWT"],
      technologies: "MERN stack with Redux and Stripe." }
  ]

  const experience = [
    { year: "2025", title: "Full Stack Development Internship", company: "DEVSYNC.PVT.LTD",
      description: "Comprehensive full-stack development internship focusing on modern web technologies.",
      skills: ["React", "Node.js", "MongoDB", "Git"] },
    { year: "2024", title: "Advanced Web Development", company: "Self-Learning & Projects",
      description: "Mastered React ecosystem and built production-ready applications.",
      skills: ["React", "JavaScript ES6+", "Node.js"] },
    { year: "2023", title: "Programming Fundamentals", company: "Academic & Self-Study",
      description: "Learned C programming and cybersecurity basics.",
      skills: ["C Programming", "Cybersecurity"] },
    { year: "2022-2023", title: "Introduction to Technology", company: "Academic Foundation",
      description: "Established foundation in computer science principles.",
      skills: ["Computer Fundamentals", "Logic Building"] }
  ]

  const certifications = [
    { title: "Full Stack Development", issuer: "DEVSYNC.PVT.LTD", year: "2025", description: "Professional certification" },
    { title: "Ethical Hacking Basics", issuer: "Online Courses", year: "2024", description: "Cybersecurity training" },
    { title: "React Advanced Patterns", issuer: "Online Platform", year: "2024", description: "Advanced React" },
    { title: "Python Programming", issuer: "Online Courses", year: "2023", description: "Python automation" }
  ]

  const achievements = [
    "🏆 Completed Full-Stack Internship at DEVSYNC.PVT.LTD",
    "💻 Built 6+ Production-Ready Applications",
    "🔒 Developed Security Tools",
    "⚡ Proficient in 5+ Languages",
    "🎯 Open Source Contributor",
    "📚 Continuous Learner"
  ]

  const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  const fadeInLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }
  const fadeInRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const scaleIn = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }

  const particles = [...Array(30)].map((_, i) => ({
    id: i, size: Math.random() * 4 + 2, duration: Math.random() * 20 + 15,
    delay: Math.random() * 10, tx: (Math.random() - 0.5) * 200,
    type: ['cyan', 'magenta', 'yellow'][Math.floor(Math.random() * 3)]
  }))

  return (
    <div className="container">
      <div ref={cursorRef} className={`cursor ${cursorActive ? 'active' : ''}`} />
      <div ref={cursorDotRef} className={`cursor-dot ${cursorActive ? 'active' : ''}`} />
      <div className="animated-background" />
      <div className="particle-container">
        {particles.map((p) => (
          <div key={p.id} className={`particle particle-${p.type}`} style={{ 
            width: `${p.size}px`, height: `${p.size}px`, left: `${Math.random()*100}%`,
            animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s`, '--tx': `${p.tx}px` 
          }} />
        ))}
      </div>
      <div className="morphing-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
      <motion.div style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg, #00ffff, #ff00ff, #ffff00)', transformOrigin: '0%', zIndex: 9999 }} />

      <motion.nav className={`navbar ${scrolled ? 'scrolled' : ''}`} initial={{ y: -100 }} animate={{ y: 0 }}>
        <motion.div className="logo" whileHover={{ scale: 1.05 }} 
          onHoverStart={() => setCursorActive(true)} onHoverEnd={() => setCursorActive(false)}>SAKSHAM</motion.div>
        <div className="nav-links">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, i) => (
            <motion.a key={item} href={`#${item.toLowerCase()}`} initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.3 }} whileHover={{ y: -3 }}
              onHoverStart={() => setCursorActive(true)} onHoverEnd={() => setCursorActive(false)}>{item}</motion.a>
          ))}
        </div>
      </motion.nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} className="hero-greeting">Welcome to My Digital Universe</motion.p>
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}><span className="glitch-text" data-text={personalInfo.name.toUpperCase()}>
            {personalInfo.name.toUpperCase()}</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6 }} className="hero-subtitle">{personalInfo.title}</motion.p>
          <motion.div className="profile-image-container" initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} whileHover={{ scale: 1.05 }}
            onHoverStart={() => setCursorActive(true)} onHoverEnd={() => setCursorActive(false)}>
            <img src="/mnt/user-data/uploads/1776074845270_WhatsApp_Image_2026-04-06_at_11_20_18_PM.jpeg" 
              alt="Saksham Ital" className="profile-image" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1 }} className="hero-description">{personalInfo.bio}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.2 }} className="hero-buttons">
            <motion.button className="hero-btn hero-btn-primary" whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setCursorActive(true)} onHoverEnd={() => setCursorActive(false)}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              Explore Projects</motion.button>
            <motion.button className="hero-btn hero-btn-secondary" whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setCursorActive(true)} onHoverEnd={() => setCursorActive(false)}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch</motion.button>
          </motion.div>
        </div>
        <motion.div className="scroll-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
          transition={{ delay: 1.5 }}><div className="scroll-indicator-line" /></motion.div>
      </section>

      <section id="about">
        <div className="section-header">
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={fadeInUp}>About Me</motion.h2>
          <motion.p className="section-subtitle" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={fadeInUp}>Get to know more about my background and passion</motion.p>
        </div>
        <div className="about-content">
          <motion.div className="about-text glass-card" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={fadeInLeft}>
            <p>Hello! I'm <strong>Saksham Ital</strong>, an 18-year-old passionate full-stack developer from Nagpur, Maharashtra.</p>
            <p>I completed a professional internship at <strong>DEVSYNC.PVT.LTD</strong>, gaining hands-on experience in modern web technologies.</p>
            <p>My expertise spans <strong>Python, JavaScript, C, and C++</strong>, with specialized knowledge in React, Node.js, and <strong>cybersecurity</strong>.</p>
          </motion.div>
          <motion.div className="about-info-grid" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={staggerContainer}>
            {[
              { icon: "👤", label: "Name", value: personalInfo.name },
              { icon: "🎂", label: "Age", value: `${personalInfo.age} Years` },
              { icon: "📍", label: "Location", value: personalInfo.location },
              { icon: "📧", label: "Email", value: personalInfo.email },
              { icon: "📱", label: "Mobile", value: personalInfo.mobile },
              { icon: "💼", label: "Internship", value: "DEVSYNC.PVT.LTD" }
            ].map((item, i) => (
              <motion.div key={i} className="info-card" variants={fadeInRight} whileHover={{ scale: 1.02, x: 10 }}
                onHoverStart={() => setCursorActive(true)} onHoverEnd={() => setCursorActive(false)}>
                <div className="info-icon">{item.icon}</div>
                <div className="info-content"><h4>{item.label}</h4><p>{item.value}</p></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} 
          variants={fadeInUp} style={{ marginTop: '80px' }}>
          <h3 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Key Achievements</h3>
          <motion.div className="achievement-grid" variants={staggerContainer}>
            {achievements.map((achievement, i) => (
              <motion.div key={i} className="achievement-badge" variants={scaleIn} whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setCursorActive(true)} onHoverEnd={() => setCursorActive(false)}>
                <div className="achievement-content">{achievement}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="skills">
        <div className="section-header">
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={fadeInUp}>Technical Arsenal</motion.h2>
          <motion.p className="section-subtitle" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={fadeInUp}>Comprehensive showcase of my technical expertise</motion.p>
        </div>
        <motion.div className="skills-grid" initial="hidden" whileInView="visible" 
          viewport={{ once: true }} variants={staggerContainer}>
          {skills.map((skill, i) => (
            <motion.div key={i} className="skill-card" variants={scaleIn} 
              whileHover={{ scale: 1.05, y: -15 }} onHoverStart={() => setCursorActive(true)} 
              onHoverEnd={() => setCursorActive(false)}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.level}</div>
              <div className="skill-description">{skill.description}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} 
          variants={fadeInUp} style={{ marginTop: '100px' }}>
          <h3 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Certifications</h3>
          <motion.div className="projects-grid" variants={staggerContainer} style={{ marginTop: '50px' }}>
            {certifications.map((cert, i) => (
              <motion.div key={i} className="glass-card" variants={scaleIn} whileHover={{ scale: 1.03, y: -10 }}
                style={{ padding: '40px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{cert.title}</h3>
                <h4 style={{ color: '#ff00ff', marginBottom: '10px' }}>{cert.issuer}</h4>
                <p style={{ fontSize: '14px', marginBottom: '15px', color: '#00ffff' }}>Year: {cert.year}</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="projects">
        <div className="section-header">
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={fadeInUp}>Featured Projects</motion.h2>
          <motion.p className="section-subtitle" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={fadeInUp}>Showcase of my best work</motion.p>
        </div>
        <motion.div className="projects-grid" initial="hidden" whileInView="visible" 
          viewport={{ once: true }} variants={staggerContainer}>
          {projects.map((project, i) => (
            <motion.div key={i} className="project-card" variants={scaleIn} 
              whileHover={{ scale: 1.03, y: -20 }} onHoverStart={() => setCursorActive(true)} 
              onHoverEnd={() => setCursorActive(false)}>
              <div className="project-number">{project.number}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <motion.span key={j} className="project-tag" whileHover={{ scale: 1.1, y: -2 }}>{tag}</motion.span>
                ))}
              </div>
              <p className="project-tech">{project.technologies}</p>
              <motion.button className="project-btn" whileHover={{ scale: 1.05 }}>View Project</motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="experience">
        <div className="section-header">
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={fadeInUp}>Journey & Experience</motion.h2>
        </div>
        <div className="timeline">
          {experience.map((exp, i) => (
            <motion.div key={i} className="timeline-item" initial="hidden" whileInView="visible" 
              viewport={{ once: true }} variants={fadeInUp}>
              <div className="timeline-dot" />
              <motion.div className="timeline-content" whileHover={{ scale: 1.05 }}>
                <div className="timeline-year">{exp.year}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <div className="project-tags" style={{ marginTop: '20px' }}>
                  {exp.skills.map((skill, j) => (
                    <motion.span key={j} className="project-tag" whileHover={{ scale: 1.1, y: -2 }}>{skill}</motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="section-header">
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={fadeInUp}>Let's Connect</motion.h2>
        </div>
        <div className="contact-container">
          <motion.div className="contact-info-cards" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={staggerContainer}>
            {[
              { icon: "📧", label: "Email", value: personalInfo.email },
              { icon: "📱", label: "Mobile", value: personalInfo.mobile },
              { icon: "📍", label: "Location", value: personalInfo.location }
            ].map((contact, i) => (
              <motion.div key={i} className="contact-card" variants={fadeInLeft} whileHover={{ x: 15 }}>
                <div className="contact-icon-wrapper">{contact.icon}</div>
                <div className="contact-details"><h4>{contact.label}</h4><p>{contact.value}</p></div>
              </motion.div>
            ))}
          </motion.div>
          <motion.form className="contact-form" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={fadeInRight} 
            onSubmit={(e) => { e.preventDefault(); alert('Message sent!') }}>
            <div className="form-group"><motion.input type="text" placeholder="Your Name" required whileFocus={{ scale: 1.02 }} /></div>
            <div className="form-group"><motion.input type="email" placeholder="Your Email" required whileFocus={{ scale: 1.02 }} /></div>
            <div className="form-group"><motion.input type="tel" placeholder="Your Mobile" whileFocus={{ scale: 1.02 }} /></div>
            <div className="form-group"><motion.input type="text" placeholder="Subject" required whileFocus={{ scale: 1.02 }} /></div>
            <div className="form-group"><motion.textarea placeholder="Your Message" required whileFocus={{ scale: 1.02 }} /></div>
            <motion.button type="submit" className="send-btn" whileHover={{ scale: 1.03, y: -5 }}>Send Message</motion.button>
          </motion.form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <motion.div className="social-links" initial="hidden" whileInView="visible" 
            viewport={{ once: true }} variants={staggerContainer}>
            {['💼', '🐙', '🔗', '🐦', '📸'].map((icon, i) => (
              <motion.div key={i} className="social-link" variants={scaleIn} 
                whileHover={{ scale: 1.1, rotate: 10, y: -10 }}><span>{icon}</span></motion.div>
            ))}
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            © 2026 {personalInfo.name} — Crafted with ❤️ and React</motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            All Rights Reserved | Full Stack Developer & Cybersecurity Enthusiast</motion.p>
        </div>
      </footer>
    </div>
  )
}

export default App