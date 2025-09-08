import React from "react";
import Logo from "../assets/logo.svg";

export default function Header(){
  return (
    <header className="sticky top-0 z-30 bg-slate-900/60 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 font-bold text-xl">
          <img src={Logo} alt="Logo" className="w-9 h-9 rounded-md" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">Designr</span>
        </a>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="px-3 py-2 rounded-lg bg-slate-700/40 border border-slate-600">Contact</a>
        </nav>
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md bg-slate-700/30">☰</button>
        </div>
      </div>
    </header>
  )
}
