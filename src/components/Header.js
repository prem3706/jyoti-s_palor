import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close menu on route/hash change or Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="w-full bg-white border-b shadow-sm">


      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3" aria-label="Goto home">
          <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg shadow">
            J
          </div>
          <div>
            <div className="text-lg sm:text-xl font-extrabold text-strong tracking-tight">
              Jyoti's Parlour
            </div>
            <div className="text-xs text-gray-600 -mt-0.5 tracking-wide">
              Beauty • Hair • Mehendi
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* ACTIONS: WhatsApp quick button (desktop) + Mobile menu button */}
        <div className="flex items-center gap-3">
          <a
            href={`https://api.whatsapp.com/send?phone=918780439762&text=${encodeURIComponent("नमस्ते, मुझे जानकारी चाहिए")}`}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-medium shadow hover:opacity-95"
          >
            WhatsApp
          </a>

          {/* mobile menu toggle */}
          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(v => !v)}
            className="md:hidden p-2 rounded-md text-2xl text-strong hover:bg-white/30 transition"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-[64px] z-40 transform-gpu transition-transform duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
      >
        <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            <a onClick={() => setOpen(false)} href="#services" className="nav-mobile">Services</a>
            <a onClick={() => setOpen(false)} href="#contact" className="nav-mobile">Contact</a>
            <a
              onClick={() => setOpen(false)}
              href={`https://api.whatsapp.com/send?phone=918780439762&text=${encodeURIComponent("नमस्ते, मुझे जानकारी चाहिए")}`}
              className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-accent text-white rounded-full"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
