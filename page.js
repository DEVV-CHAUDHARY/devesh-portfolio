
const projects=[
{title:'Cinematic Edit',url:'https://drive.google.com/file/d/1xe4iAQhagaoLBnJ5eGxr1-Qs5xsWCgOQ/view'},
{title:'Short Form Content',url:'https://drive.google.com/file/d/13YDRZcD2udvF5x37ZUArfOmc2vZjijJy/view'},
{title:'Creative Edit',url:'https://drive.google.com/file/d/1-kUpQShkEOlwVcGZ997yRcp7M6C5oaPg/view'}
];

export default function Home(){
return (
<div style={{background:'#050816',color:'white',minHeight:'100vh',fontFamily:'Inter,Arial',padding:'40px'}}>
<section style={{maxWidth:'1100px',margin:'auto'}}>
<h1 style={{fontSize:'4rem'}}>Devesh Singh</h1>
<p style={{fontSize:'1.3rem',opacity:.8}}>Video Editor • BCA Student • Future AI/ML Engineer</p>

<div style={{marginTop:'40px',padding:'24px',border:'1px solid #333',borderRadius:'20px'}}>
<h2>About Me</h2>
<p>
I create engaging reels, short-form content and cinematic edits. Alongside content creation,
I am building expertise in AI, Machine Learning, Python, SQL and Data Analytics.
</p>
</div>

<h2 style={{marginTop:'50px'}}>Featured Projects</h2>
<div>
{projects.map(p=>(
<div key={p.title} style={{padding:'20px',margin:'15px 0',borderRadius:'16px',background:'#111827'}}>
<h3>{p.title}</h3>
<a href={p.url} target='_blank' style={{color:'#60a5fa'}}>Watch Video</a>
</div>
))}
</div>

<h2>Skills</h2>
<p>Video Editing • CapCut • Reels • Shorts • Color Correction • Captions • Python • SQL • Power BI • Generative AI</p>

<h2>Contact</h2>
<p>Email: gthdev8126@gmail.com</p>
<p>Phone: +91 8394045393</p>
<p>GitHub: https://github.com/DEVV-CHAUDHARY</p>
<p>LinkedIn: https://linkedin.com/in/devv-chaudharii</p>
</section>
</div>
)}
