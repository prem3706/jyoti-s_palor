// src/components/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import services from "../data/services";
import { useLang } from "../contexts/LanguageContext";
import t from "../lang";

// optional small fallback images from public/assets if you want
const fallbackMap = {
  hair: "/assets/hairSpa.jpg",
  "hair-styles": "/assets/outturn.jpg",
  wax: "/assets/facial.png",
  makeup: "/assets/makeup.png",
  mehendi: "/assets/mehndi.jpg",
};

export default function Services() {
  const { lang, setLang } = useLang();

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-2">

  {/* LEFT SIDE TEXTS */}
  <div>
    <h2 className="text-2xl font-bold text-strong">{t[lang].services}</h2>
    <h4 className="text-sm font-bold text-gray-600 mt-1">
      {t[lang].homePickup}
    </h4>
  </div>

  {/* LANGUAGE SELECTOR */}
  <div className="flex items-center gap-3">
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className="border px-3 py-1 rounded-md text-sm"
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
      <option value="gu">ગુજરાતી</option>
    </select>
  </div>

</div>

      <div className="grid gap-6">
        {services.map((service) => {
          // safe key for URL: we'll encode when linking
          return (
            <div
              key={service.id}
              className="bg-white border rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-5">
                <img
                  src={fallbackMap[service.id] || "/assets/hairSpa.jpg"}
                  className="w-20 h-20 rounded-lg object-cover"
                  alt={service[`title_${lang}`] || service.title}
                />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-strong">
                    {service[`title_${lang}`] || service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service[`subtitle_${lang}`] || service.subtitle}</p>
                </div>

                <Link
                  to={`/service/${encodeURIComponent(service.id)}`}
                  className="px-4 py-2 bg-accent text-white rounded-lg hover:opacity-90"
                >
                  {t[lang].viewDetails}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
