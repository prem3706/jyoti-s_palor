import { useEffect, useState, useRef } from 'react';
import img1 from "../img/img-1.jpg";
import img2 from "../img/img-2.jpg";
import img3 from "../img/img-3.jpg";

const slides = [img1, img2, img3];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const tRef = useRef(null);

  useEffect(() => {
    tRef.current = setInterval(() => setIdx(i => (i + 1) % slides.length), 4500);
    return () => clearInterval(tRef.current);
  }, []);

  return (
    <section className="relative h-[65vh] sm:h-[72vh] md:h-[80vh] overflow-hidden">

      {/* SLIDES */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-center bg-cover hero-slide transition-all duration-[1200ms]
            ${i === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
          style={{ backgroundImage: `url(${s})` }}
        />
      ))}

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TEXT CONTENT */}
      {/* TEXT CONTENT */}
<div className="absolute inset-0 flex items-start sm:items-center justify-center text-center px-5 pt-8 sm:pt-0 z-20">
  <div className="w-full max-w-3xl">

    {/* Main Heading — both lines white */}
    <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
      <span className="block">Khubsurati ka</span>
      <span className="block text-white">Naya Andaaz</span>
    </h1>

    {/* Subtext — white with soft shadow */}
    <p className="text-white mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]">
      Professional haircuts, premium makeup & beautiful mehendi designs —
      jo aapko banaye aur bhi khubsurat ✨
    </p>

    {/* BUTTONS */}
    <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">

      {/* Solid button */}
      <a
        href="#services"
        className="px-6 py-3 bg-accent text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition"
        style={{ minWidth: 170 }}
      >
        Explore Services
      </a>

      {/* White-outline button (white text now) */}
      <a
        href={`https://api.whatsapp.com/send?phone=918780439762&text=${encodeURIComponent(
          'नमस्ते 🙏\n\nमैं उपलब्ध स्लॉट जानना चाहता/चाहती हूँ।'
        )}`}
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition shadow-lg"
        style={{ minWidth: 170 }}
      >
        Book on WhatsApp
      </a>

    </div>

  </div>
</div>


      {/* BOTTOM DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${i === idx ? 'bg-white scale-110' : 'bg-white/50'}`}
          />
        ))}
      </div>

    </section>
  );
}
