
export default function Home(){
const projects=[
'AI Resume Analyzer','AI Study Assistant','Student Management System',
'Advanced Calculator','Portfolio Website','Interview Prep AI'
];
return (
<div style={{background:'linear-gradient(135deg,#020617,#0f172a)',color:'white',minHeight:'100vh',padding:'40px',fontFamily:'Arial'}}>
<div style={{maxWidth:'1100px',margin:'auto'}}>
<h1 style={{fontSize:'4rem'}}>Devesh Singh</h1>
<p style={{fontSize:'1.4rem'}}>BCA Student | Aspiring AI/ML Engineer | Open to Internships</p>

<div style={{border:'1px solid #334155',padding:'24px',borderRadius:'20px',marginTop:'20px'}}>
<h2>About</h2>
<p>Passionate developer focused on AI, Machine Learning, Python, SQL and Software Development. Building impactful projects and preparing for top internships.</p>
</div>

<h2 style={{marginTop:'40px'}}>Skills</h2>
<p>Python • Java • C • SQL • DBMS • HTML • CSS • JavaScript • Git • GitHub • Power BI • Machine Learning • Generative AI</p>

<h2 style={{marginTop:'40px'}}>Projects</h2>
{projects.map(p=><div key={p} style={{background:'#1e293b',padding:'16px',margin:'12px 0',borderRadius:'14px'}}>{p}</div>)}

<h2 style={{marginTop:'40px'}}>Experience</h2>
<p><b>Campus Ambassador - Internshala</b><br/>Promoted internships, student outreach and career awareness programs.</p>

<h2 style={{marginTop:'40px'}}>Contact</h2>
<p>GitHub | LinkedIn | Email</p>
</div>
</div>
)}