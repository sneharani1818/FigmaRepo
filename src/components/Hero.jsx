import React from "react";
import HeroIllustration from "../assets/hero.svg";

export default function Hero(){
  return (
    <section className="py-16 grid md:grid-cols-12 gap-8 items-center">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="md:col-span-7">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">Your Name</span>.</h1>
        <p className="mt-4 text-slate-300 max-w-xl">A beginner-friendly designer crafting clean interfaces, thoughtful branding, and delightful experiences. Building small, sellable design assets and templates as passive income.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#work" className="px-4 py-2 rounded-xl bg-slate-700/60 border border-slate-600">View Work</a>
          <a href="#contact" className="px-4 py-2 rounded-xl border border-slate-600">Hire Me</a>
        </div>
        <ul className="mt-4 flex gap-4 text-sm text-slate-400">
          <li>Remote-friendly</li>
          <li>Freelance</li>
          <li>Launch-ready</li>
        </ul>
      </div>
      <div className="md:col-span-5 flex justify-center">
        <img src={HeroIllustration} alt="Hero" className="w-full max-w-md rounded-xl shadow-2xl" />
      </div>
    </section>
  )
}
