// src/components/ServiceItem.jsx
import { WHATSAPP_NUMBER } from "../config";
import ImageWithPreview from "./ImageWithPreview";

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



export default function ServiceItem({ item }) {
    let imgSrc = item.img;

    // Normalize common relative paths to /assets/<name>
    if (typeof imgSrc === "string" && (imgSrc.startsWith("../img/") || imgSrc.startsWith("./img/"))) {
        const name = imgSrc.split("/").pop();
        imgSrc = `/assets/${name}`;
    }

    // treat empty string, null, undefined as no image
    const hasImage = !!(imgSrc && imgSrc.trim());

    return (
        <article className="bg-white rounded-xl border p-4 shadow-sm hover:shadow-lg transition flex flex-col">
            {/* show image block ONLY if hasImage */}
            {hasImage ? (
                <div className="mb-3">
                    <ImageWithPreview
                        src={imgSrc}
                        alt={item.name}
                        wrapperClass="h-72 md:h-80 lg:h-96"
                        className="" // img classes already in component; you can add e.g. "rounded-md"
                    />
                </div>
            ) : null}


            {/* TITLE + PRICE */}
            <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <span className="text-accent font-semibold">₹{item.price}</span>
            </div>

            {/* DESCRIPTION */}
            {item.dis && <p className="text-sm text-gray-600 mt-1">{item.dis}</p>}

            {/* TIME */}
            <div className="mt-2 text-sm text-gray-500">⏳ {item.time}</div>

            {/* BOOK BUTTON */}
            <button
                onClick={() => openWhatsApp(item)}
                className="mt-3 w-full bg-strong text-white py-2 rounded-md hover:opacity-90"
            >
                Book on WhatsApp
            </button>
        </article>
    );
}
