import React from "react";
import P1 from "../assets/project-1.svg";
import P2 from "../assets/project-2.svg";
import P3 from "../assets/project-3.svg";

function Card({img, title, desc, tags}){
  return (
    <article className="card">
      <img src={img} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-slate-400 text-sm mt-1">{desc}</p>
        <div className="mt-3 flex gap-2 flex-wrap text-xs text-slate-300">
          {tags.map(t=> <span key={t} className="px-2 py-1 rounded-full bg-slate-700/30 border border-slate-600">{t}</span>)}
        </div>
      </div>
    </article>
  )
}

export default function Work(){
  const projects = [
    {img:P1, title:"Brand Starter Kit", desc:"Logo, palette, and brand system for a SaaS.", tags:["Branding","Identity"]},
    {img:P2, title:"Mobile UI Pack", desc:"Accessible components for a fitness app.", tags:["UI","Accessibility"]},
    {img:P3, title:"Landing Page", desc:"Conversion-focused page for a course.", tags:["Web","Marketing"]}
  ];
  return (
    <section id="work" className="py-12">
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Selected Work</h2>
        <p className="text-slate-400 text-sm">Recent projects that balance aesthetics and usability.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p=> <Card key={p.title} {...p} />)}
      </div>
    </section>
  )
}
