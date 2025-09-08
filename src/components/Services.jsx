import React from "react";

export default function Services(){
  const items = [
    {title:"Logo & Identity", desc:"Memorable marks and simple brand guides."},
    {title:"UI/UX Starter", desc:"Wireframes to polished screens and components."},
    {title:"Landing Pages", desc:"SEO-friendly, responsive pages with clear CTAs."}
  ]
  return (
    <section id="services" className="py-12">
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Services</h2>
        <p className="text-slate-400 text-sm">Start small, grow smart, ship faster.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(i=> (
          <div key={i.title} className="card p-5">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-slate-400 mt-2 text-sm">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
