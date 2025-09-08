import React from "react";

export default function About(){
  return (
    <section id="about" className="py-12">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div>
          <h2 className="text-2xl font-bold">About</h2>
          <p className="text-slate-400 mt-3">I’m a designer focused on clarity, accessibility, and results. I love turning vague ideas into tangible visuals that work for users and business.</p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-300">
            <li>Accessible-first design</li>
            <li>Design systems thinker</li>
            <li>Iterative & collaborative</li>
          </ul>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="#" className="underline">Dribbble</a>
            <a href="#" className="underline">Behance</a>
            <a href="#" className="underline">LinkedIn</a>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2"><span>Figma</span><span>90%</span></div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden"><div className="h-full w-9/10 bg-gradient-to-r from-indigo-500 to-cyan-400"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2"><span>Illustrator</span><span>75%</span></div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-cyan-400"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2"><span>Webflow</span><span>60%</span></div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden"><div className="h-full w-3/5 bg-gradient-to-r from-indigo-500 to-cyan-400"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
