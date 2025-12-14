// src/pages/ServiceDetail.jsx
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import services from "../data/services";
import { useLang } from "../contexts/LanguageContext";
import t from "../lang";
import { WHATSAPP_NUMBER } from "../config";

function openWhatsApp(item) {
  const text = 
`*नमस्ते!* 🙏

*मैं बुकिंग करना चाहती हूँ।*

*सेवा:* ${item.name}
*कीमत:* ₹${item.price}
*अवधि:* ${item.time}

कृपया उपलब्ध समय स्लॉट बताएं।`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}


export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLang();
  const decodedId = decodeURIComponent(id || "");
  const section = services.find((s) => s.id === decodedId);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  if (!section) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold">{t[lang].services}</h2>
        <p className="mt-3 text-gray-500">Service not found</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => navigate(-1)} className="px-4 py-2 bg-accent text-white rounded-md">
            {t[lang].back}
          </button>
          <Link to="/" className="px-4 py-2 border rounded-md">
            {t[lang].allServices}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-strong">{section[`title_${lang}`] || section.title}</h1>
          {section[`subtitle_${lang}`] || section.subtitle ? (
            <p className="text-sm text-gray-500 mt-1">{section[`subtitle_${lang}`] || section.subtitle}</p>
          ) : null}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="px-3 py-2 border rounded-md">
            ← {t[lang].back}
          </button>
          <Link to="/" className="px-3 py-2 bg-accent text-white rounded-md">
            {t[lang].allServices}
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {section.items.map((it, idx) => {
          let imgSrc = it.img || "";
          if (typeof imgSrc === "string" && (imgSrc.startsWith("../img/") || imgSrc.startsWith("./img/"))) {
            const name = imgSrc.split("/").pop();
            imgSrc = `/assets/${name}`;
          }
          if (imgSrc && !imgSrc.startsWith("/") && imgSrc.includes("assets/")) imgSrc = `/${imgSrc}`;

          const hasImage = !!(imgSrc && imgSrc.trim());

          return (
            <article key={idx} className="bg-white rounded-xl border p-4 shadow-sm hover:shadow-strong transition">
              {hasImage && (
                <div className="h-72 md:h-80 lg:h-96 overflow-hidden rounded-md mb-3">
                  <img
                    src={imgSrc}
                    alt={it[`name_${lang}`] || it.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) parent.style.display = "none";
                    }}
                  />
                </div>
              )}

              <div className="mt-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{it[`name_${lang}`] || it.name}</h3>
                  <div className="text-accent font-semibold">₹{it.price}</div>
                </div>

                {it[`dis_${lang}`] || it.dis ? <p className="mt-2 text-sm text-gray-600">{it[`dis_${lang}`] || it.dis}</p> : null}

                <div className="mt-3 flex items-center justify-between">
                  <div className="text-sm text-gray-500">{t[lang].duration}: {it.time}</div>
                  <button onClick={() => openWhatsApp(it)} className="px-4 py-2 bg-strong text-white rounded-md">
                    {t[lang].whatsapp}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
