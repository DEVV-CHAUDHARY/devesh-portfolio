"use client";

import { useEffect, useState } from "react";

const skills = [
  ["Python", "Data, automation & scripting", "PY"],
  ["SQL", "Queries, joins & analysis", "SQL"],
  ["Data Analytics", "Insights & storytelling", "DA"],
  ["Power BI", "Dashboards & reporting", "BI"],
  ["Machine Learning", "Predictive modelling", "ML"],
  ["Generative AI", "AI workflows & tools", "AI"],
  ["Git & GitHub", "Version control & projects", "GH"],
  ["Web Development", "HTML, CSS & JavaScript", "WEB"],
];

const projects = [
  {
    number: "01",
    title: "AI Resume Analyzer",
    type: "AI / NLP",
    description:
      "An AI-focused resume analysis concept designed to evaluate ATS readiness, extract relevant skills and surface actionable improvements.",
    stack: ["Python", "AI", "NLP"],
    featured: true,
  },
  {
    number: "02",
    title: "Predictive Delinquency Analysis",
    type: "DATA ANALYTICS",
    description:
      "A data analytics project focused on identifying high-risk customer segments and turning raw data into decision-ready insights.",
    stack: ["Python", "SQL", "Analytics"],
    featured: true,
  },
  {
    number: "03",
    title: "AI Study Assistant",
    type: "GENERATIVE AI",
    description:
      "A practical AI assistant concept built around helping students organize learning, understand topics and prepare more effectively.",
    stack: ["Python", "GenAI", "Automation"],
    featured: false,
  },
  {
    number: "04",
    title: "Student Management System",
    type: "SOFTWARE",
    description:
      "A structured student management application demonstrating database-oriented thinking, CRUD workflows and clean application logic.",
    stack: ["Java", "DBMS", "SQL"],
    featured: false,
  },
  {
    number: "05",
    title: "Scientific Calculator",
    type: "JAVA",
    description:
      "An advanced calculator project with scientific operations and a focus on practical desktop application logic.",
    stack: ["Java", "OOP", "UI"],
    featured: false,
  },
  {
    number: "06",
    title: "Interview Prep AI",
    type: "AI / PRODUCT",
    description:
      "An AI interview preparation concept aimed at generating practice questions and helping candidates prepare with targeted feedback.",
    stack: ["AI", "Python", "Automation"],
    featured: false,
  },
];

const experience = [
  {
    year: "2026",
    title: "Python Programming Intern",
    company: "Decode Labs",
    description:
      "Worked through practical Python programming projects and strengthened problem-solving, programming and project presentation skills.",
  },
  {
    year: "2026",
    title: "Campus Ambassador",
    company: "Internshala",
    description:
      "Supported student outreach and awareness around learning and internship opportunities.",
  },
  {
    year: "2026",
    title: "Campus Ambassador",
    company: "ConnektX",
    description:
      "Contributed to student outreach, communication and networking activities.",
  },
];

const stats = [
  ["06+", "Projects"],
  ["08+", "Core skills"],
  ["03", "Experiences"],
  ["BCA", "Student"],
];

export default function Home() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <nav className="nav container">
          <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
            <span className="brand-mark">D</span>
            <span>Devesh<span className="cyan">.</span></span>
          </button>

          <div className="desktop-nav">
            {["home", "about", "skills", "projects", "experience", "contact"].map((id) => (
              <button key={id} className={active === id ? "nav-link active" : "nav-link"} onClick={() => goTo(id)}>
                {id}
              </button>
            ))}
          </div>

          <a className="nav-button" href="https://www.linkedin.com/in/devv-chaudharii" target="_blank" rel="noreferrer">
            Let&apos;s connect <span>↗</span>
          </a>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </nav>
        {menuOpen && (
          <div className="mobile-nav container">
            {["home", "about", "skills", "projects", "experience", "contact"].map((id) => (
              <button key={id} onClick={() => goTo(id)}>{id}</button>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="hero section-pad">
        <div className="hero-grid-pattern" />
        <div className="hero-glow glow-a" />
        <div className="hero-glow glow-b" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="status-pill"><span /> Open to internships & opportunities</div>
            <p className="eyebrow">DATA ANALYTICS × AI / ML</p>
            <h1>
              I turn <span className="gradient">data into decisions</span> and ideas into intelligent products.
            </h1>
            <p className="hero-lead">
              I&apos;m Devesh Singh, a BCA student building practical projects across Data Analytics, Python, Machine Learning and Generative AI.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => goTo("projects")}>Explore projects <span>↓</span></button>
              <a className="button ghost" href="https://github.com/DEVV-CHAUDHARY" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
            <div className="hero-proof">
              <span>Python</span><i /> <span>SQL</span><i /> <span>Analytics</span><i /> <span>AI / ML</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-ring ring-one" />
            <div className="visual-ring ring-two" />
            <div className="code-chip chip-one"><b>01</b> DATA</div>
            <div className="code-chip chip-two"><b>02</b> AI / ML</div>
            <div className="profile-frame">
              <div className="profile-topline"><span>DEVESH.S</span><span>●</span></div>
              <div className="image-wrap"><img src="/profile.jpg" alt="Devesh Singh" /></div>
              <div className="profile-footer"><span>BUILDING WITH DATA</span><span>2026</span></div>
            </div>
          </div>
        </div>
        <button className="scroll-hint" onClick={() => goTo("about")}>Scroll to explore <span>↓</span></button>
      </section>

      <section id="about" className="about section-pad">
        <div className="container two-col">
          <div>
            <p className="section-kicker">01 / ABOUT</p>
            <h2 className="section-title">Curious by nature.<br /><span className="muted">Builder by choice.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m currently pursuing a BCA and building my career around the intersection of data, automation and AI. My focus is not just learning tools — it&apos;s using them to solve practical problems and communicate the result clearly.
            </p>
            <p>
              I&apos;m especially interested in Data Analytics and AI/ML, while continuing to strengthen my software and web development foundations. I learn fastest by turning concepts into working projects.
            </p>
            <div className="about-meta"><span>Based in India</span><span>•</span><span>Available for internships</span></div>
          </div>
        </div>
        <div className="container stats-grid">
          {stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section id="skills" className="skills section-pad">
        <div className="container">
          <div className="section-head-row">
            <div><p className="section-kicker">02 / TOOLKIT</p><h2 className="section-title">Skills that turn ideas<br /><span className="muted">into working systems.</span></h2></div>
            <p className="section-note">A focused stack built around analytics, AI and practical software development.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([name, desc, icon]) => <article className="skill-card" key={name}><div className="skill-icon">{icon}</div><div><h3>{name}</h3><p>{desc}</p></div><span className="arrow">↗</span></article>)}
          </div>
        </div>
      </section>

      <section id="projects" className="projects section-pad">
        <div className="container">
          <div className="section-head-row projects-head">
            <div><p className="section-kicker">03 / SELECTED WORK</p><h2 className="section-title">Projects with a<br /><span className="muted">purpose behind them.</span></h2></div>
            <a className="text-link" href="https://github.com/DEVV-CHAUDHARY" target="_blank" rel="noreferrer">View GitHub <span>↗</span></a>
          </div>

          <div className="featured-projects">
            {projects.filter((p) => p.featured).map((project) => <article className="project-large" key={project.title}>
              <div className="project-art"><span className="project-orb" /><span className="project-grid" /><div className="project-code"><span>{"<"}</span><b>{project.number}</b><span>{"/>"}</span></div><span className="project-type">{project.type}</span></div>
              <div className="project-info"><div className="project-index">{project.number} / FEATURED</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="https://github.com/DEVV-CHAUDHARY" target="_blank" rel="noreferrer" className="project-link">View on GitHub <span>↗</span></a></div>
            </article>)}
          </div>

          <div className="project-list">
            {projects.filter((p) => !p.featured).map((project) => <article className="project-row" key={project.title}><span className="row-number">{project.number}</span><div className="row-main"><span>{project.type}</span><h3>{project.title}</h3></div><p>{project.description}</p><a href="https://github.com/DEVV-CHAUDHARY" target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>↗</a></article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="experience section-pad">
        <div className="container two-col">
          <div><p className="section-kicker">04 / EXPERIENCE</p><h2 className="section-title">Learning by<br /><span className="muted">doing the work.</span></h2><p className="section-note left-note">Every experience is another opportunity to turn classroom knowledge into practical skills.</p></div>
          <div className="timeline">{experience.map((item) => <article className="timeline-item" key={`${item.company}-${item.title}`}><span className="timeline-dot" /><div className="timeline-year">{item.year}</div><div><span className="role-type">{item.title}</span><h3>{item.company}</h3><p>{item.description}</p></div></article>)}</div>
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="container contact-box">
          <div className="contact-orb" />
          <p className="section-kicker">05 / CONTACT</p>
          <h2>Have an idea?<br /><span>Let&apos;s build it.</span></h2>
          <p className="contact-copy">I&apos;m open to internships, collaborations and interesting projects in Data Analytics, AI/ML and software.</p>
          <div className="contact-actions"><a className="button primary" href="mailto:gthdev8126@gmail.com">Email me <span>↗</span></a><a className="button ghost" href="https://www.linkedin.com/in/devv-chaudharii" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
          <div className="contact-links"><a href="mailto:gthdev8126@gmail.com">gthdev8126@gmail.com</a><span>•</span><a href="https://github.com/DEVV-CHAUDHARY" target="_blank" rel="noreferrer">github.com/DEVV-CHAUDHARY</a></div>
        </div>
      </section>

      <footer className="footer"><div className="container footer-inner"><div><span className="brand-mini">D.</span> Devesh Singh</div><span>Designed & built with Next.js</span><div className="footer-social"><a href="https://www.linkedin.com/in/devv-chaudharii" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/DEVV-CHAUDHARY" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></footer>
    </main>
  );
}
