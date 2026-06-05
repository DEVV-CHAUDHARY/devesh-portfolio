export default function Home() {
return (
<main
style={{
minHeight: "100vh",
background: "#020617",
color: "white",
}}
>
<section
style={{
maxWidth: "1200px",
margin: "0 auto",
padding: "80px 30px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
gap: "60px",
flexWrap: "wrap",
}}
>
<div style={{ flex: 1, minWidth: "320px" }}>
<p
style={{
color: "#38bdf8",
letterSpacing: "3px",
fontWeight: "bold",
}}
>
AI / ML ENGINEER </p>
      <h1
        style={{
          fontSize: "72px",
          lineHeight: "1.1",
          marginTop: "15px",
        }}
      >
        Devesh Singh
      </h1>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "20px",
          maxWidth: "600px",
          marginTop: "20px",
          lineHeight: "1.8",
        }}
      >
        Building intelligent solutions using Python, Machine Learning,
        Generative AI, SQL and Data Analytics.
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://github.com/DEVV-CHAUDHARY"
          target="_blank"
        >
          <button
            style={{
              padding: "14px 28px",
              borderRadius: "12px",
              border: "none",
              background: "#38bdf8",
              color: "#020617",
              fontWeight: "bold",
            }}
          >
            GitHub
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/devv-chaudharii"
          target="_blank"
        >
          <button
            style={{
              padding: "14px 28px",
              borderRadius: "12px",
              border: "1px solid #38bdf8",
              background: "transparent",
              color: "white",
            }}
          >
            LinkedIn
          </button>
        </a>
      </div>
    </div>

    <div style={{ flex: 1, textAlign: "center" }}>
      <img
        src="/profile.jpg"
        alt="Devesh Singh"
        style={{
          width: "380px",
          maxWidth: "100%",
          borderRadius: "30px",
          border: "3px solid #38bdf8",
          boxShadow: "0 0 40px rgba(56,189,248,0.4)",
        }}
      />
    </div>
  </section>
  <section
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 30px",
  }}
>
  <h2
    style={{
      fontSize: "40px",
      marginBottom: "40px",
      color: "#38bdf8",
    }}
  >
    Skills
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "20px",
    }}
  >
    {[
      "Python",
      "Java",
      "SQL",
      "Power BI",
      "Machine Learning",
      "Generative AI",
      "Git & GitHub",
      "Web Development",
    ].map((skill) => (
      <div
        key={skill}
        style={{
          padding: "20px",
          background: "#111827",
          border: "1px solid #1e293b",
          borderRadius: "15px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {skill}
      </div>
    ))}
  </div>
</section>
<section
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 30px",
  }}
>
  <h2
    style={{
      fontSize: "40px",
      marginBottom: "40px",
      color: "#38bdf8",
    }}
  >
    Projects
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "25px",
    }}
  >
    {[
      {
        title: "AI Resume Analyzer",
        desc: "AI-powered resume analysis with ATS score and recommendations.",
      },
      {
        title: "Scientific Calculator",
        desc: "Advanced Java calculator with history and scientific functions.",
      },
      {
        title: "Predictive Delinquency Analysis",
        desc: "Data analytics project for identifying high-risk customer segments.",
      },
      {
        title: "Portfolio Website",
        desc: "Modern AI/ML portfolio built using Next.js.",
      },
    ].map((project) => (
      <div
        key={project.title}
        style={{
          background: "#111827",
          border: "1px solid #1e293b",
          borderRadius: "20px",
          padding: "25px",
        }}
      >
        <h3
          style={{
            marginBottom: "15px",
            color: "#38bdf8",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: "1.7",
          }}
        >
          {project.desc}
        </p>
      </div>
    ))}
  </div>
</section>
<section
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 30px",
  }}
>
  <h2
    style={{
      fontSize: "40px",
      marginBottom: "40px",
      color: "#38bdf8",
    }}
  >
    Experience
  </h2>

  <div
    style={{
      background: "#111827",
      padding: "30px",
      borderRadius: "20px",
      border: "1px solid #1e293b",
      marginBottom: "20px",
    }}
  >
    <h3>Campus Ambassador - Internshala</h3>
    <p style={{ color: "#94a3b8" }}>
      Promoted internship opportunities and student engagement initiatives.
    </p>
  </div>

  <div
    style={{
      background: "#111827",
      padding: "30px",
      borderRadius: "20px",
      border: "1px solid #1e293b",
    }}
  >
    <h3>Campus Ambassador - ConnektX</h3>
    <p style={{ color: "#94a3b8" }}>
      Assisted with outreach, communication and student networking activities.
    </p>
  </div>
</section>
<section
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 30px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "50px",
      color: "#38bdf8",
      marginBottom: "20px",
    }}
  >
    Let's Build Something Amazing Together
  </h2>

  <p
    style={{
      color: "#94a3b8",
      fontSize: "20px",
      maxWidth: "700px",
      margin: "0 auto 40px",
      lineHeight: "1.8",
    }}
  >
    Have an internship opportunity, project idea, or collaboration in mind?
    Feel free to reach out. I'm always excited to learn, build and grow.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    }}
  >
    <a href="mailto:gthdev8126@gmail.com">
      <button
        style={{
          padding: "15px 30px",
          borderRadius: "12px",
          border: "none",
          background: "#38bdf8",
          color: "#020617",
          fontWeight: "bold",
        }}
      >
        Email Me
      </button>
    </a>

    <a
      href="https://www.linkedin.com/in/devv-chaudharii"
      target="_blank"
    >
      <button
        style={{
          padding: "15px 30px",
          borderRadius: "12px",
          border: "1px solid #38bdf8",
          background: "transparent",
          color: "white",
        }}
      >
        Connect on LinkedIn
      </button>
    </a>
  </div>

  <p
    style={{
      marginTop: "40px",
      color: "#64748b",
    }}
  >
    📧 gthdev8126@gmail.com | 📱 +91 8394045393
  </p>
</section>
<footer
  style={{
    textAlign: "center",
    padding: "30px",
    color: "#64748b",
    borderTop: "1px solid #1e293b",
  }}
>
  © 2026 Devesh Singh | Built with Next.js
</footer>
</main>

);
}
