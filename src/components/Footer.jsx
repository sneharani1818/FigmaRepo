import React from "react";

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-slate-800 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-400 flex justify-between items-center">
        <div>&copy; {new Date().getFullYear()} Your Name — All rights reserved.</div>
        <div>Made with ♥</div>
      </div>
    </footer>
  )
}
