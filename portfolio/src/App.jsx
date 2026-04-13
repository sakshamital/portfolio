import "./App.css"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"

function App() {
  const profilePhoto = `${import.meta.env.BASE_URL}profile.jpeg`

  /* ==================== STATE & REFS ==================== */

  const [scrolled, setScrolled] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorDotX = useSpring(cursorX, { stiffness: 500, damping: 28 })
  const cursorDotY = useSpring(cursorY, { stiffness: 500, damping: 28 })

  /* ==================== SCROLL HANDLER ==================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ==================== CURSOR HANDLER ==================== */

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX - 3)
      cursorY.set(e.clientY - 3)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorX, cursorY])

  /* ==================== PERSONAL DATA ==================== */

  const personalInfo = {
    name: "Saksham Ital",
    age: 18,
    mobile: "+91 9370638940",
    email: "sakshamital705@gmail.com",
    location: "Nagpur, Maharashtra, India",
    title: "Full Stack Developer & Cybersecurity Enthusiast",
    bio: "Passionate 18-year-old developer with expertise in full-stack development and cybersecurity. Completed professional internship at DEVSYNC.PVT.LTD, specializing in modern web technologies and ethical hacking. Committed to building secure, scalable applications while continuously expanding knowledge in emerging technologies."
  }

  /* ==================== SKILLS DATA ==================== */

  const skills = [
    {
      name: "Python",
      icon: "🐍",
      level: "Advanced",
      description: "Backend development, automation, AI/ML, data analysis",
      color: "#00ffff"
    },
    {
      name: "JavaScript",
      icon: "⚡",
      level: "Advanced",
      description: "ES6+, async programming, modern frameworks",
      color: "#ff00ff"
    },
    {
      name: "C Programming",
      icon: "💻",
      level: "Intermediate",
      description: "Systems programming, data structures, algorithms",
      color: "#ffff00"
    },
    {
      name: "React",
      icon: "⚛️",
      level: "Advanced",
      description: "Hooks, Context API, state management, modern patterns",
      color: "#00ff88"
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: "Advanced",
      description: "Express, REST APIs, authentication, middleware",
      color: "#00ffff"
    },
    {
      name: "HTML & CSS",
      icon: "🎨",
      level: "Expert",
      description: "Responsive design, animations, flexbox/grid",
      color: "#ff00ff"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      level: "Intermediate",
      description: "NoSQL databases, aggregation, indexing",
      color: "#b026ff"
    },
    {
      name: "Cybersecurity",
      icon: "🔒",
      level: "Intermediate",
      description: "Penetration testing, network security, encryption",
      color: "#ff6600"
    },
    {
      name: "Ethical Hacking",
      icon: "🎯",
      level: "Beginner-Intermediate",
      description: "Vulnerability assessment, security audits, tools",
      color: "#ff0066"
    },
    {
      name: "Git & GitHub",
      icon: "🔧",
      level: "Advanced",
      description: "Version control, collaboration, CI/CD workflows",
      color: "#00ffff"
    },
    {
      name: "Linux",
      icon: "🐧",
      level: "Intermediate",
      description: "Command line, bash scripting, system administration",
      color: "#ffff00"
    },
    {
      name: "C++",
      icon: "➕",
      level: "Intermediate",
      description: "OOP, STL, competitive programming",
      color: "#00ff88"
    }
  ]

  /* ==================== PROJECTS DATA ==================== */

  const projects = [
    {
      number: "01",
      title: "Scam Detection System",
      description: "Advanced AI-powered system designed to detect and prevent Telegram scam messages using machine learning algorithms. Implements natural language processing and pattern recognition to identify fraudulent content with high accuracy.",
      tags: ["Python", "AI/ML", "NLP", "TensorFlow", "API Integration"],
      technologies: "Built with Python, TensorFlow for ML models, and integrated with Telegram Bot API for real-time scanning.",
      link: "#",
      gradient: "linear-gradient(135deg, #00ffff, #ff00ff)"
    },
    {
      number: "02",
      title: "Professional React Portfolio",
      description: "Modern, fully responsive portfolio website featuring advanced animations, glassmorphism design, and smooth user experience. Showcases projects and skills with an engaging visual presentation.",
      tags: ["React", "Framer Motion", "CSS3", "Responsive Design"],
      technologies: "Developed using React 18, Framer Motion for animations, and modern CSS techniques including Grid and Flexbox.",
      link: "#",
      gradient: "linear-gradient(135deg, #ff00ff, #ffff00)"
    },
    {
      number: "03",
      title: "Secure Chat Application",
      description: "End-to-end encrypted messaging platform ensuring complete privacy and security. Features include real-time messaging, file sharing, and military-grade encryption protocols.",
      tags: ["Node.js", "Socket.io", "Encryption", "React", "MongoDB"],
      technologies: "Backend built with Node.js and Express, Socket.io for real-time communication, AES-256 encryption, MongoDB for data storage.",
      link: "#",
      gradient: "linear-gradient(135deg, #ffff00, #00ffff)"
    },
    {
      number: "04",
      title: "AI Automation Tool",
      description: "Intelligent automation system leveraging Python and AI to streamline repetitive tasks, improve workflow efficiency, and enhance productivity through smart decision-making algorithms.",
      tags: ["Python", "AI", "Automation", "Machine Learning", "APIs"],
      technologies: "Powered by Python with scikit-learn, custom ML models, and integration with multiple third-party APIs for extended functionality.",
      link: "#",
      gradient: "linear-gradient(135deg, #b026ff, #00ff88)"
    },
    {
      number: "05",
      title: "Vulnerability Scanner",
      description: "Comprehensive cybersecurity tool designed to scan web applications for common vulnerabilities including SQL injection, XSS, and CSRF. Generates detailed security reports with remediation recommendations.",
      tags: ["Python", "Security", "Web Scraping", "Ethical Hacking"],
      technologies: "Built with Python, BeautifulSoup for parsing, custom vulnerability detection algorithms, and automated reporting system.",
      link: "#",
      gradient: "linear-gradient(135deg, #ff0066, #ff6600)"
    },
    {
      number: "06",
      title: "Full-Stack E-Commerce Platform",
      description: "Complete e-commerce solution with user authentication, product management, shopping cart, payment integration, and admin dashboard. Scalable architecture supporting thousands of concurrent users.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      technologies: "MERN stack implementation with Redux for state management, JWT authentication, Stripe payment gateway, and responsive Material-UI design.",
      link: "#",
      gradient: "linear-gradient(135deg, #00ffff, #b026ff)"
    }
  ]

  /* ==================== EXPERIENCE DATA ==================== */

  const experience = [
    {
      year: "2025",
      title: "Full Stack Development Internship",
      company: "DEVSYNC.PVT.LTD",
      description: "Completed comprehensive full-stack development internship focusing on modern web technologies. Contributed to multiple client projects, implemented responsive UI components, developed RESTful APIs, and collaborated with senior developers in agile environment. Gained hands-on experience with React, Node.js, MongoDB, and deployment workflows.",
      skills: ["React", "Node.js", "MongoDB", "REST APIs", "Git", "Agile"]
    },
    {
      year: "2024",
      title: "Advanced Web Development",
      company: "Self-Learning & Projects",
      description: "Transitioned from basic web technologies to advanced full-stack development. Mastered React ecosystem including hooks, context API, and state management. Built multiple production-ready applications with focus on performance optimization, security best practices, and modern UI/UX design patterns.",
      skills: ["React", "JavaScript ES6+", "Node.js", "Express", "Databases"]
    },
    {
      year: "2023",
      title: "Programming Fundamentals & Cybersecurity",
      company: "Academic & Self-Study",
      description: "Began programming journey with C language, learning fundamental concepts including data structures, algorithms, and problem-solving techniques. Simultaneously developed interest in cybersecurity and ethical hacking, studying networking basics, security principles, and common vulnerabilities.",
      skills: ["C Programming", "Data Structures", "Algorithms", "Cybersecurity Basics"]
    },
    {
      year: "2022-2023",
      title: "Introduction to Technology",
      company: "Academic Foundation",
      description: "Established strong foundation in computer science principles, including computer architecture, operating systems, and basic programming logic. Explored various technology domains to identify areas of interest, leading to specialization in web development and cybersecurity.",
      skills: ["Computer Fundamentals", "Logic Building", "Problem Solving"]
    }
  ]

  /* ==================== CERTIFICATIONS DATA ==================== */

  const certifications = [
    {
      title: "Full Stack Development",
      issuer: "DEVSYNC.PVT.LTD",
      year: "2025",
      description: "Professional internship certification covering React, Node.js, MongoDB"
    },
    {
      title: "Ethical Hacking Basics",
      issuer: "Self-Study & Online Courses",
      year: "2024",
      description: "Comprehensive cybersecurity training with hands-on labs"
    },
    {
      title: "React Advanced Patterns",
      issuer: "Online Learning Platform",
      year: "2024",
      description: "Advanced React development techniques and best practices"
    },
    {
      title: "Python Programming",
      issuer: "Academic & Online Courses",
      year: "2023",
      description: "Comprehensive Python programming and automation"
    }
  ]

  /* ==================== ACHIEVEMENTS DATA ==================== */

  const achievements = [
    "🏆 Completed Full-Stack Internship at DEVSYNC.PVT.LTD",
    "💻 Built 6+ Production-Ready Web Applications",
    "🔒 Developed Security Tools for Vulnerability Assessment",
    "⚡ Proficient in 5+ Programming Languages",
    "🎯 Active Contributor to Open Source Projects",
    "📚 Continuous Learner in Cybersecurity & Web3"
  ]

  /* ==================== ANIMATION VARIANTS ==================== */

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const slideInFromTop = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  /* ==================== GENERATE PARTICLES ==================== */

  const generateParticles = (count) => {
    return [...Array(count)].map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      tx: (Math.random() - 0.5) * 200,
      type: ['cyan', 'magenta', 'yellow'][Math.floor(Math.random() * 3)]
    }))
  }

  const particles = generateParticles(30)

  /* ==================== COMPONENT ==================== */

  return (
    <div className="container">

      {/* ==================== CUSTOM CURSOR ==================== */}
      
      <motion.div 
        className="custom-cursor"
        style={{
          left: cursorPos.x - 10,
          top: cursorPos.y - 10
        }}
        animate={{
          scale: cursorVariant === "hover" ? 1.5 : 1
        }}
      />
      
      <motion.div 
        className="custom-cursor-dot"
        style={{
          left: cursorDotX,
          top: cursorDotY
        }}
      />

      {/* ==================== ANIMATED BACKGROUND ==================== */}
      
      <div className="animated-background" />

      {/* ==================== PARTICLE CONTAINER ==================== */}
      
      <div className="particle-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`particle particle-${particle.type}`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              '--tx': `${particle.tx}px`
            }}
          />
        ))}
      </div>

      {/* ==================== MORPHING SHAPES ==================== */}
      
      <div className="morphing-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* ==================== PROGRESS BAR ==================== */}
      
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #00ffff, #ff00ff, #ffff00)',
          transformOrigin: '0%',
          zIndex: 9999
        }}
      />

      {/* ==================== NAVBAR ==================== */}

      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="logo"
          data-text="SAKSHAM"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setCursorVariant("hover")}
          onHoverEnd={() => setCursorVariant("default")}
        >
          SAKSHAM
        </motion.div>

        <div className="nav-links">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setCursorVariant("hover")}
              onHoverEnd={() => setCursorVariant("default")}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="menu-toggle">
          <span />
          <span />
          <span />
        </div>
      </motion.nav>

      {/* ==================== HERO SECTION ==================== */}

      <section id="home" className="hero">
  <div className="hero-content">

    {/* 🔥 ADD YOUR IMAGE HERE */}
    <motion.img
      src={profilePhoto}
      alt="Saksham Ital"
      className="profile-image"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-greeting"
          >
            Welcome to My Digital Universe
          </motion.p>

          <motion.h1
            className="hero-title"
            data-text={personalInfo.name.toUpperCase()}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="glitch-text" data-text={personalInfo.name.toUpperCase()}>
              {personalInfo.name.toUpperCase()}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-subtitle"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-description"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="hero-buttons"
          >
            <motion.button
              className="hero-btn hero-btn-primary"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setCursorVariant("hover")}
              onHoverEnd={() => setCursorVariant("default")}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
            </motion.button>

            <motion.button
              className="hero-btn hero-btn-secondary"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setCursorVariant("hover")}
              onHoverEnd={() => setCursorVariant("default")}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="scroll-indicator-line" />
        </motion.div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}

      <section id="about">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Get to know more about my background, skills, and passion for technology
          </motion.p>
        </div>

        <div className="about-content">

  {/* LEFT SIDE - TEXT */}
  <motion.div 
    className="about-text glass-card"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInLeft}
  >
    <p>
Hello! I'm Saksham Ital, an 18-year-old passionate Full Stack Developer and Cybersecurity Enthusiast based in Nagpur, Maharashtra. My journey into technology began with a curiosity about how things work, which quickly evolved into a deep passion for building innovative and impactful solutions.
</p>

<p style={{ marginTop: "15px" }}>
I recently completed a professional internship at DEVSYNC.PVT.LTD, where I gained hands-on experience in full-stack development. During this time, I worked on real-world projects and collaborated with experienced developers, which strengthened my understanding of modern web technologies and industry best practices.
</p>

<p style={{ marginTop: "15px" }}>
My technical expertise includes Python, JavaScript, C, and C++, along with modern frameworks like React and Node.js. I also have a strong interest in cybersecurity and ethical hacking, continuously learning about security vulnerabilities, penetration testing, and secure coding practices.
</p>

<p style={{ marginTop: "15px" }}>
I believe in continuous learning and staying updated with emerging technologies. When I'm not coding, I enjoy exploring new frameworks, contributing to open-source projects, and keeping up with the latest trends in cybersecurity. My goal is to build secure, scalable, and user-friendly applications that create a meaningful impact.
</p>
    {/* your about text here */}
  </motion.div>

  {/* RIGHT SIDE - PERSONAL INFO */}
  <motion.div
    className="about-info"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={staggerContainer}
  >
   {[
            { icon: "👤", label: "Name", value: personalInfo.name },
            { icon: "🎂", label: "Age", value: `${personalInfo.age} Years` },
            { icon: "📍", label: "Location", value: personalInfo.location },
            { icon: "📧", label: "Email", value: personalInfo.email },
            { icon: "📱", label: "Mobile", value: personalInfo.mobile },
            { icon: "💼", label: "Internship", value: "DEVSYNC.PVT.LTD" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="info-card"
              variants={fadeInRight}
              whileHover={{ scale: 1.02, x: 10 }}
              onHoverStart={() => setCursorVariant("hover")}
              onHoverEnd={() => setCursorVariant("default")}
            >
              <div className="info-icon">{item.icon}</div>
              <div className="info-content">
                <h4>{item.label}</h4>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}
  </motion.div>


          
        </div>

      
        
        

        {/* ==================== ACHIEVEMENTS ==================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          style={{ marginTop: '80px' }}
        >
          <h3 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Key Achievements
          </h3>
          
          <motion.div 
            className="achievement-grid"
            variants={staggerContainer}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-badge"
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setCursorVariant("hover")}
                onHoverEnd={() => setCursorVariant("default")}
              >
                <div className="achievement-content">{achievement}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== SKILLS SECTION ==================== */}

      <section id="skills">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            A comprehensive showcase of my technical expertise and proficiency levels
          </motion.p>
        </div>

        <motion.div 
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                y: -15
              }}
              transition={{ type: "spring", stiffness: 300 }}
              onHoverStart={() => setCursorVariant("hover")}
              onHoverEnd={() => setCursorVariant("default")}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.level}</div>
              <div className="skill-description">{skill.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ==================== CERTIFICATIONS ==================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          style={{ marginTop: '100px' }}
        >
          <h3 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Certifications & Training
          </h3>
          
          <motion.div 
            className="projects-grid"
            variants={staggerContainer}
            style={{ marginTop: '50px' }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-card"
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -10 }}
                onHoverStart={() => setCursorVariant("hover")}
                onHoverEnd={() => setCursorVariant("default")}
                style={{ padding: '40px', textAlign: 'center' }}
              >
                <h3 style={{ 
                  fontSize: '24px', 
                  marginBottom: '15px',
                  background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {cert.title}
                </h3>
                <h4 style={{ 
                  color: '#ff00ff', 
                  marginBottom: '10px',
                  fontSize: '16px'
                }}>
                  {cert.issuer}
                </h4>
                <p style={{ 
                  fontSize: '14px', 
                  marginBottom: '15px',
                  color: '#00ffff'
                }}>
                  Year: {cert.year}
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}

      <section id="projects">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            A showcase of my best work demonstrating technical skills and innovation
          </motion.p>
        </div>

        <motion.div 
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={scaleIn}
              whileHover={{
                scale: 1.03,
                y: -20,
                rotateX: 2,
                rotateY: 2
              }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setCursorVariant("hover")}
              onHoverEnd={() => setCursorVariant("default")}
            >
              <div className="project-number">{project.number}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="project-tag"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <p className="project-tech">{project.technologies}</p>

              <motion.button
                className="project-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.link, '_blank')}
              >
                View Project
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==================== EXPERIENCE SECTION ==================== */}

      <section id="experience">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Journey & Experience
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            My professional journey and learning milestones in technology
          </motion.p>
        </div>

        <div className="timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              <div className="timeline-dot" />
              
              <motion.div 
                className="timeline-content"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setCursorVariant("hover")}
                onHoverEnd={() => setCursorVariant("default")}
              >
                <div className="timeline-year">{exp.year}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                
                <div className="project-tags" style={{ marginTop: '20px' }}>
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="project-tag"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}

      <section id="contact">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </motion.p>
        </div>

        <div className="contact-container">
          <motion.div 
            className="contact-info-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {[
              { icon: "📧", label: "Email", value: personalInfo.email },
              { icon: "📱", label: "Mobile", value: personalInfo.mobile },
              { icon: "📍", label: "Location", value: personalInfo.location }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="contact-card"
                variants={fadeInLeft}
                whileHover={{ x: 15 }}
                onHoverStart={() => setCursorVariant("hover")}
                onHoverEnd={() => setCursorVariant("default")}
              >
                <div className="contact-icon-wrapper">{contact.icon}</div>
                <div className="contact-details">
                  <h4>{contact.label}</h4>
                  <p>{contact.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form 
            className="contact-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for your message! I will get back to you soon.')
            }}
          >
            <div className="form-group">
              <motion.input
                type="text"
                placeholder="Your Name"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <motion.input
                type="email"
                placeholder="Your Email"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <motion.input
                type="tel"
                placeholder="Your Mobile"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <motion.input
                type="text"
                placeholder="Subject"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <motion.textarea
                placeholder="Your Message"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              className="send-btn"
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onHoverStart={() => setCursorVariant("hover")}
              onHoverEnd={() => setCursorVariant("default")}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}

      <footer className="footer">
        <div className="footer-content">
          <motion.div 
            className="social-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
  { icon: "🐙", link: "https://github.com/sakshamital" },
  { icon: "💼", link: "https://www.linkedin.com/in/saksham-ital-86452b317?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: "📱", link: "https://wa.me/919370638940" }
].map((item, index) => (
  <motion.a
    key={index}
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    whileHover={{ scale: 1.1, rotate: 10, y: -10 }}
    whileTap={{ scale: 0.9 }}
    onHoverStart={() => setCursorVariant("hover")}
    onHoverEnd={() => setCursorVariant("default")}
  >
    <span>{item.icon}</span>
  </motion.a>
))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            © 2026 {personalInfo.name} — Crafted with ❤️ and React
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            All Rights Reserved | Full Stack Developer & Cybersecurity Enthusiast
          </motion.p>
        </div>
      </footer>
    </div>
  )
}

export default App