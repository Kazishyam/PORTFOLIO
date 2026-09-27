import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const profile = {
  name: "Shyam Kumar",
  role: "B.Tech CSE Student · Aspiring Software Developer",
  email: "shyamkumart70500@gmail.com",
  github: "https://github.com/Kazishyam",
  linkedin: "https://www.linkedin.com/in/shyam-kumar-63548525a/",
};

const skills = ["C++", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "Tailwind CSS", "Git & GitHub", "Python", "SQL"];

const projects = [
  { title: "Full-Stack Task Management System", description: "A full-stack task management application with user-specific CRUD operations, status filtering and authentication.", tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT"], github: "https://github.com/Kazishyam/shyam_kumar_btech1080322" },
  { title: "Rest Check — LLM Enhanced", description: "An AI-enhanced project that provides feedback from user-provided information related to sleep health.", tech: ["HTML", "CSS", "JavaScript", "LLM"] },
  { title: "Synthetic Data for Plant Disease Detection", description: "Academic work exploring synthetic image-data generation for plant disease detection using conditional diffusion models.", tech: ["Python", "Diffusion Models", "Data Augmentation", "Computer Vision"] }
];

function App() {
  return <div className="site">
    <header className="nav"><div className="nav-inner"><a className="logo" href="#home">Shyam Kumar<span>.</span></a><nav>{["About","Skills","Projects","Contact"].map(x=><a key={x} href={'#'+x.toLowerCase()}>{x}</a>)}</nav><a className="nav-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></header>

    <main>
      <section id="home" className="hero section"><div className="glow"/><div className="container">
        <p className="eyebrow">B.Tech CSE · Developer</p>
        <h1>Hi, I'm <span>{profile.name}</span>.<br/>I build things for the web.</h1>
        <p className="hero-text">{profile.role}. I enjoy building practical applications, learning new technologies, and turning ideas into working software.</p>
        <div className="actions">
          <a className="primary" href="#projects">View my work <b>↗</b></a>
          <a className="secondary" href={`mailto:${profile.email}`}>Contact me</a>
          <a className="secondary" href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            
            >
              ↓ Resume
          </a>
        </div>
        <div className="social"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a></div>
      </div></section>

      <section id="about" className="section divider"><div className="container two-col"><div><p className="eyebrow">01 / About</p><h2>A developer who likes to learn by building.</h2></div><div className="copy"><p>I'm a Computer Science engineering student with an interest in software development and full-stack web applications.</p><p>My experience includes building frontend interfaces with React and Tailwind CSS, developing APIs with Node.js and Express, and working with MongoDB for data storage.</p><p>I'm looking for opportunities where I can contribute to real projects, strengthen my engineering skills, and grow as a developer.</p></div></div></section>

      <section id="skills" className="section divider"><div className="container"><p className="eyebrow">02 / Skills</p><h2>Technologies I work with.</h2><div className="skill-grid">{skills.map(s=><div className="skill" key={s}>{s}</div>)}</div></div></section>

      <section id="projects" className="section divider"><div className="container"><p className="eyebrow">03 / Projects</p><h2>Selected work.</h2><div className="project-grid">{projects.map((p,i)=><article className={'project '+(i===0?'featured':'')} key={p.title}><div className="project-top"><small>0{i+1}</small><span>↗</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div><a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a></article>)}</div></div></section>

      <section id="contact" className="section divider"><div className="container"><div className="contact-card"><p className="eyebrow">04 / Contact</p><h2>Have an opportunity or want to talk?</h2><p>I'm open to internships, fresher roles, and opportunities to work on interesting software projects.</p><div className="actions"><a className="primary" href={`mailto:${profile.email}`}>Email me</a><a className="secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></div></section>
    </main>
    <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top ↑</a></div></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<App />);
 <Download size={17} />