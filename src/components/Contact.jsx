import React from "react";

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Let's work together</h2>
        <p className="text-slate-400 text-sm">Tell me about your project. I'll reply within 1–2 business days.</p>
      </header>
      <form name="contact" className="grid gap-4 max-w-2xl">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="block"><span className="text-sm text-slate-300">Full name</span>
            <input className="mt-1 block w-full rounded-lg bg-slate-800 border border-slate-700 p-3" placeholder="Alex Designer" required/>
          </label>
          <label className="block"><span className="text-sm text-slate-300">Email</span>
            <input type="email" className="mt-1 block w-full rounded-lg bg-slate-800 border border-slate-700 p-3" placeholder="you@example.com" required/>
          </label>
        </div>
        <label className="block"><span className="text-sm text-slate-300">Project budget</span>
          <select className="mt-1 block w-full rounded-lg bg-slate-800 border border-slate-700 p-3">
            <option>$0–$500</option>
            <option>$500–$2,000</option>
            <option>$2,000–$5,000</option>
            <option>$5,000+</option>
          </select>
        </label>
        <label className="block"><span className="text-sm text-slate-300">Message</span>
          <textarea className="mt-1 block w-full rounded-lg bg-slate-800 border border-slate-700 p-3" rows="5" placeholder="What are you building?"></textarea>
        </label>
        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 rounded-xl bg-indigo-600">Send Message</button>
          <button type="reset" className="px-4 py-2 rounded-xl border border-slate-700">Reset</button>
        </div>
      </form>
    </section>
  )
}
