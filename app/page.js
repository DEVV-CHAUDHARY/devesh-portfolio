"use client";

import { useMemo, useState } from "react";

const github = "https://github.com/DEVV-CHAUDHARY";
const linkedin = "https://www.linkedin.com/in/deveshsingh-ai";
const email = "devesh8979276150@gmail.com";

const projects = [
  {
    title: "DecodeLabs Python Internship",
    label: "INTERNSHIP WORK",
    category: "Python",
    description:
      "A collection of Python projects completed during the DecodeLabs internship, covering practical programming fundamentals and problem-solving.",
    tags: ["Python", "Functions", "Loops", "Problem Solving"],
    repo: "https://github.com/DEVV-CHAUDHARY/DecodeLabs-Python-Internship",
    live: null,
    featured: true,
    visual: "python",
  },
  {
    title: "Scientific Calculator",
    label: "DESKTOP APPLICATION",
    category: "Java",
    description:
      "A modern Java Swing scientific calculator with advanced mathematical functions, calculation history and a professional interface.",
    tags: ["Java", "Swing", "OOP", "GUI"],
    repo: "https://github.com/DEVV-CHAUDHARY/scientific-calculator-java",
    live: null,
    featured: true,
    visual: "calculator",
  },
  {
    title: "Nature Power Healthcare",
    label: "WEB PROJECT",
    category: "Web",
    description:
      "A responsive healthcare website project with product-focused content, deployment-ready structure and a dedicated product section.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    repo: "https://github.com/DEVV-CHAUDHARY/NATUREPOWERHEALTHCARE.IN",
    live: "https://naturepowerhealthcare-in.vercel.app",
    featured: true,
    visual: "health",
  },
  {
    title: "DEVSTORE",
    label: "WEB PROJECT",
    category: "Web",
    description:
      "A front-end store experience built as a practical web development project with a deployed Vercel version.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/DEVV-CHAUDHARY/DEVSTORE",
    live: "https://devstore-drax1.vercel.app",
    featured: false,
    visual: "store",
  },
  {
    title: "FABLE.CO.IN",
    label: "WEB PROJECT",
    category: "Web",
    description:
      "A website implementation project maintained as a public GitHub repository with a live Vercel deployment.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/DEVV-CHAUDHARY/FABLE.CO.IN",
    live: "https://fable-co-in.vercel.app",
    featured: false,
    visual: "fable",
  },
  {
    title: "SSR Hrikala Website",
    label: "NEXT.JS PROJECT",
    category: "Web",
    description:
      "A Next.js website project with a modern application structure, public assets and Vercel deployment.",
    tags: ["Next.js", "TypeScript", "React"],
    repo: "https://github.com/DEVV-CHAUDHARY/ssrhrikala-website",
    live: "https://ssrhrikala-website.vercel.app",
    featured: false,
    visual: "next",
  },
  {
    title: "Packers & Movers Landing Page",
    label: "LANDING PAGE",
    category: "Web",
    description:
      "A focused landing-page project built with HTML, CSS and JavaScript for a service-oriented web experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/DEVV-CHAUDHARY/packers-movers-landing-page",
    live: null,
    featured: false,
    visual: "landing",
  },
  {
    title: "Calculator Java",
    label: "JAVA PROJECT",
    category: "Java",
    description:
      "A menu-driven Java calculator supporting core arithmetic operations, calculation history, history clearing and division-by-zero handling.",
    tags: ["Java", "Logic", "History", "Error Handling"],
    repo: "https://github.com/DEVV-CHAUDHARY/Calculator-java",
    live: null,
    featured: false,
    visual: "calculator",
  },
];

const skills = [
  { name: "Python", group: "Data & Programming", level: "Core" },
  { name: "SQL", group: "Data & Programming", level: "Core" },
  { name: "Power BI", group: "Data & Programming", level: "Core" },
  { name: "NumPy", group: "Data & Programming", level: "Core" },
  { name: "Data Analytics", group: "Data & Programming", level: "Focus" },
  { name: "Machine Learning", group: "AI & ML", level: "Learning" },
  { name: "Generative AI", group: "AI & ML", level: "Focus" },
  { name: "Git & GitHub", group: "Tools", level: "Core" },
  { name: "HTML / CSS / JavaScript", group: "Web", level: "Working" },
  { name: "Java", group: "Programming", level: "Working" },
  { name: "DBMS", group: "Foundations", level: "Working" },
];

const experience = [
  {
    company: "DecodeLabs",
    role: "Python Developer",
    date: "Jul 2026 — Present",
    detail:
      "Working on Python programming tasks and practical assignments while strengthening clean coding, debugging, Git/GitHub and problem-solving skills.",
    current: true,
  },
  {
    company: "Sysslan IT Solutions",
    role: "Web Development Intern",
    date: "Jun 2026 — Jul 2026",
    detail:
      "Developed responsive websites using HTML, CSS and JavaScript, with a focus on UI, user experience and performance.",
  },
  {
    company: "ConnektX",
    role: "Campus Ambassador",
    date: "Dec 2025 — Jun 2026",
    detail:
      "Supported platform awareness and campus engagement while developing communication and leadership skills.",
  },
  {
    company: "Internshala",
    role: "Campus Ambassador",
    date: "Oct 2025 — Dec 2025",
    detail: "Represented the platform in a student-focused campus ambassador role.",
  },
];

const certifications = [
  "Generative AI Skills",
  "Digital Marketing Fundamentals",
  "Generative AI",
  "Power BI Workshop",
  "AI Tools & ChatGPT Workshop",
];

function ProjectVisual({ type }) {
  if (type === "python") {
    return (
      <div className="visual-terminal">
        <div className="terminal-bar"><i /><i /><i /></div>
        <div className="terminal-code">
          <span>def</span> solve_problem():<br />
          &nbsp;&nbsp;data = <b>load()</b><br />
          &nbsp;&nbsp;result = analyze(data)<br />
          &nbsp;&nbsp;<em>return</em> result
        </div>
      </div>
    );
  }

  if (type === "calculator") {
    return (
      <div className="visual-calculator">
        <div className="calc-display">42.857</div>
        <div className="calc-grid">
          {["sin", "cos", "√", "÷", "7", "8", "9", "×", "4", "5", "6", "−"].map((x) => <span key={x}>{x}</span>)}
        </div>
      </div>
    );
  }

  if (type === "health") {
    return (
      <div className="visual-health">
        <div className="health-top"><span>Nature Power</span><b>+</b></div>
        <div className="health-wave" />
        <div className="health-card"><strong>Natural care</strong><small>Product collection</small></div>
      </div>
    );
  }

  if (type === "store") {
    return <div className="visual-store"><div /><div /><div /></div>;
  }

  if (type === "next") {
    return <div className="visual-next"><b>Next.js</b><span>Application</span><i>→</i></div>;
  }

  if (type === "fable") {
    return <div className="visual-fable"><span>FABLE</span><small>digital experience</small></div>;
  }

  return <div className="visual-landing"><b>MOVE</b><span>SMARTER</span><small>service landing page</small></div>;
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  );

  return (
    <main>
      <header className="site-header">
        <nav className="navbar container">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">D</span>
            <span>Devesh<span className="brand-dot">.</span></span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>

          <a className="nav-cta" href={linkedin} target="_blank" rel="noreferrer">Let's Connect <span>↗</span></a>

          <button className="menu-button" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </nav>

        {menuOpen && (
          <div className="mobile-nav">
            {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="hero">
        <div className="hero-noise" />
        <div className="hero-glow glow-left" />
        <div className="hero-glow glow-right" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability"><span /> Open to internships & opportunities</div>
            <p className="eyebrow">DATA ANALYTICS · AI/ML · PYTHON</p>
            <h1>Building with data.<br /><span>Learning with purpose.</span></h1>
            <p className="hero-description">
              I&apos;m Devesh Singh, a BCA student and aspiring Data Analyst & AI/ML Engineer. I build practical projects with Python, SQL, Power BI and modern web technologies while continuously growing toward data and AI.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">Explore My Work <span>↓</span></a>
              <a className="secondary-btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            </div>

            <div className="hero-meta">
              <a href={github} target="_blank" rel="noreferrer"><span>GitHub</span> @DEVV-CHAUDHARY ↗</a>
              <a href={`mailto:${email}`}><span>Email</span> {email}</a>
            </div>
          </div>

          <div className="hero-profile">
            <div className="profile-ring ring-a" />
            <div className="profile-ring ring-b" />
            <div className="profile-card">
              <div className="profile-topline"><span>DESIGN · BUILD · LEARN</span><b>2026</b></div>
              <div className="profile-image-wrap"><img src="/profile.jpg" alt="Devesh Singh" /></div>
              <div className="profile-bottomline"><strong>Devesh Singh</strong><span>Mathura, India</span></div>
            </div>
            <div className="floating-chip chip-one">Python</div>
            <div className="floating-chip chip-two">Data Analytics</div>
            <div className="floating-chip chip-three">AI / ML</div>
          </div>
        </div>

        <div className="hero-scroll"><span>Scroll to explore</span><b>↓</b></div>
      </section>

      <section id="about" className="section about-section container">
        <div className="section-intro"><span className="section-index">01</span><p>ABOUT ME</p></div>
        <div className="about-grid">
          <h2>I like turning<br /><span>curiosity into projects.</span></h2>
          <div className="about-copy">
            <p>I&apos;m currently pursuing a Bachelor&apos;s in Computer Applications (Computer Science) at Rajiv Academy for Technology and Management.</p>
            <p>My focus is Data Analytics and AI/ML. I learn by building: from Python internship work and Java applications to deployed web projects. I&apos;m looking for opportunities where I can contribute, learn from experienced teams and keep growing into a strong data & AI professional.</p>
            <div className="about-facts">
              <div><span>Education</span><strong>BCA · Computer Science</strong></div>
              <div><span>Focus</span><strong>Data Analytics + AI/ML</strong></div>
              <div><span>Based in</span><strong>Mathura, Uttar Pradesh</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-intro"><span className="section-index">02</span><p>SKILLSET</p></div>
          <div className="section-title-row"><h2>Tools I&apos;m building with.</h2><p>Focused on a practical stack that supports analytics, AI/ML and software projects.</p></div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div><span>{skill.group}</span><h3>{skill.name}</h3></div>
                <b>{skill.level}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section container">
        <div className="section-intro"><span className="section-index">03</span><p>SELECTED WORK</p></div>
        <div className="section-title-row projects-title"><h2>Projects that prove the learning.</h2><a href={github} target="_blank" rel="noreferrer">View all on GitHub ↗</a></div>

        <div className="filter-row" role="tablist" aria-label="Project filters">
          {["All", "Python", "Java", "Web"].map((item) => (
            <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article className={project.featured ? "project-card featured" : "project-card"} key={project.title}>
              <div className="project-visual"><ProjectVisual type={project.visual} /><span className="project-count">{String(index + 1).padStart(2, "0")}</span></div>
              <div className="project-body">
                <div className="project-label">{project.label}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={project.repo} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live Demo <span>↗</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="container">
          <div className="section-intro"><span className="section-index">04</span><p>EXPERIENCE</p></div>
          <div className="section-title-row"><h2>Where I&apos;ve been learning.</h2><p>Every role has added a different layer: programming, web development, communication and professional discipline.</p></div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <div className="timeline-heading"><h3>{item.role}</h3>{item.current && <span>Current</span>}</div>
                  <strong>{item.company}</strong>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section credentials-section container">
        <div className="section-intro"><span className="section-index">05</span><p>CREDENTIALS</p></div>
        <div className="credentials-grid">
          <div className="education-card">
            <p>EDUCATION</p>
            <h2>Bachelor&apos;s in Computer Application</h2>
            <strong>Computer Science</strong>
            <span>Rajiv Academy for Technology and Management · Jul 2025 — Jul 2028</span>
          </div>
          <div className="cert-card">
            <p>CERTIFICATIONS & WORKSHOPS</p>
            <div>{certifications.map((cert) => <span key={cert}>{cert}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div className="contact-kicker">06 · LET&apos;S CONNECT</div>
          <h2>Have an opportunity?<br /><span>Let&apos;s talk.</span></h2>
          <p>I&apos;m actively looking for Data Analyst, AI/ML, Python Developer and Business Intelligence internship opportunities.</p>
          <div className="contact-actions">
            <a className="primary-btn" href={`mailto:${email}`}>Send me an email <span>↗</span></a>
            <a className="secondary-btn" href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a>
          </div>
          <div className="contact-links"><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={`mailto:${email}`}>{email}</a></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner"><span>© 2026 Devesh Singh</span><span>Built for the next opportunity.</span></div>
      </footer>
    </main>
  );
}
