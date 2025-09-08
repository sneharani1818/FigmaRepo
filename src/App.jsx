import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 antialiased">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
