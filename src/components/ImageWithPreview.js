// src/components/ImageWithPreview.jsx
import React, { useState } from "react";

/*
Props:
 - src: string (final image url)
 - alt: string
 - className: additional Tailwind classes for the img element
 - wrapperClass: additional classes for wrapper
Usage: <ImageWithPreview src="/assets/hairSpa.jpg" alt="Hair Spa" className="..." wrapperClass="..." />
*/
export default function ImageWithPreview({ src, alt = "", className = "", wrapperClass = "" }) {
  const [loaded, setLoaded] = useState(false);

  // handle missing src gracefully
  if (!src) {
    return null;
  }

  return (
    <div
      className={`relative overflow-hidden rounded-md ${wrapperClass} group`}
      style={{ willChange: "transform" }}
    >
      {/* blurred / tinted background to make loading look premium */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-br from-green-50 to-white transition-opacity duration-700 ease-out ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* the actual image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={
          "w-full h-full object-cover transition-all duration-700 ease-out transform " +
          (loaded ? "scale-100 blur-0 opacity-100" : "scale-105 blur-2xl opacity-90") +
          " " +
          className
        }
        onError={(e) => {
          // hide image if it fails (parent can show text fallback)
          e.currentTarget.style.display = "none";
        }}
        // zoom on hover via wrapper group
      />

      {/* subtle overlay and hover-zoom effect (works because img uses transform) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-400 group-hover:opacity-0"
        style={{ mixBlendMode: "normal" }}
      />
      <style>{`
        /* group hover zoom: we scale wrapper on hover slightly for a premium feel */
        .group:hover img { transform: translateZ(0) scale(1.06) !important; }
      `}</style>
    </div>
  );
}
